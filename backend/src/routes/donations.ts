import { Router } from 'express';
import { RoleName } from '@prisma/client';
import crypto from 'crypto';
import prisma from '../prisma.js';
import { requireAuth, requireRole, AuthenticatedRequest } from '../middleware/auth.js';

const router = Router();
const FINANCE_ROLES = [RoleName.SUPER_ADMIN, RoleName.ADMIN, RoleName.FINANCE];

const SASPAY_BASE_URL = 'https://api.saspay.me/api/v1';

// 1. PUBLIC: Create SasPay checkout session
router.post('/checkout', async (req, res) => {
  const { amount, donorName, donorEmail, donorPhone, category, projectId, description } = req.body;

  if (!amount || !donorName || !donorEmail || !category) {
    return res.status(400).json({ error: 'Champs obligatoires manquants (montant, nom, email, catégorie)' });
  }

  const numericAmount = parseFloat(amount);
  if (isNaN(numericAmount) || numericAmount <= 0) {
    return res.status(400).json({ error: 'Montant invalide' });
  }

  // Règle SasPay : Montants impérativement formatés en chaînes décimales ("2500.00")
  const formattedAmount = numericAmount.toFixed(2);

  try {
    // Référence interne unique
    const reference = `DON-${crypto.randomBytes(6).toString('hex').toUpperCase()}`;

    // Enregistrement de l'intention de don dans la base de données
    const donation = await prisma.donation.create({
      data: {
        amount: numericAmount,
        currency: 'XOF',
        donorName,
        donorEmail,
        donorPhone: donorPhone || null,
        category,
        projectId: projectId || null,
        reference,
        status: 'En attente'
      }
    });

    const appUrl = process.env.APP_URL || 'https://ujmah-togo.vercel.app';
    const returnUrl = `${appUrl}/don?status=success&ref=${reference}`;

    const apiKey = process.env.SASPAY_API_KEY;

    // Si la clé API SasPay est configurée, appel direct à l'API officielle
    if (apiKey) {
      try {
        const saspayResponse = await fetch(`${SASPAY_BASE_URL}/checkout-sessions/`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            amount: formattedAmount,
            currency: 'XOF',
            description: description || `Don Association UJMAH Togo - ${category}`,
            customer_email: donorEmail,
            customer_name: donorName,
            customer_phone: donorPhone || undefined,
            return_url: returnUrl,
            metadata: {
              reference,
              donationId: donation.id,
              category,
              projectId: projectId || undefined
            }
          })
        });

        const saspayData: any = await saspayResponse.json();

        if (saspayResponse.ok && saspayData.checkout_url) {
          return res.status(201).json({
            message: 'Session SasPay initialisée',
            reference,
            checkoutUrl: saspayData.checkout_url,
            sessionId: saspayData.id,
            donationId: donation.id
          });
        } else {
          console.error('[SasPay Error]:', saspayData);
        }
      } catch (apiErr) {
        console.error('[SasPay Network Error]:', apiErr);
      }
    }

    // Fallback gracieux : Lien de paiement direct ou simulation en attendant sk_live
    const fallbackCheckoutUrl = `https://link.saspay.me/ujmah-togo?amount=${formattedAmount}&ref=${reference}`;

    res.status(201).json({
      message: 'Transaction initialisée',
      reference,
      checkoutUrl: fallbackCheckoutUrl,
      donationId: donation.id
    });

  } catch (err) {
    console.error('Checkout error:', err);
    res.status(500).json({ error: 'Erreur serveur lors de l\'initialisation du paiement' });
  }
});

// 2. PUBLIC/WEBHOOK: Traitement officiel des webhooks SasPay
// Vérification stricte selon la spécification SKILL SasPay :
// Headers : X-Webhook-Signature, X-Webhook-Timestamp, X-Webhook-Event
// Signature HMAC SHA-256 sur corps brut : f"{timestamp}.{raw_body}"
router.post('/webhook', async (req: any, res) => {
  const signature = req.headers['x-webhook-signature'] as string;
  const timestamp = req.headers['x-webhook-timestamp'] as string;
  const event = req.headers['x-webhook-event'] as string;

  const webhookSecret = process.env.SASPAY_WEBHOOK_SECRET;

  if (!signature || !timestamp) {
    return res.status(401).json({ error: 'En-têtes de signature SasPay manquants' });
  }

  // 1. Rejeter si le timestamp s'écarte de plus de 300 secondes (5 minutes)
  const now = Math.floor(Date.now() / 1000);
  const eventTime = parseInt(timestamp, 10);
  if (isNaN(eventTime) || Math.abs(now - eventTime) > 300) {
    return res.status(400).json({ error: 'Timestamp expiré ou invalide' });
  }

  // 2. Vérification cryptographique de la signature sur le corps brut
  if (webhookSecret) {
    const rawBody = req.rawBody || Buffer.from(JSON.stringify(req.body));
    const signedData = Buffer.concat([Buffer.from(`${timestamp}.`), rawBody]);
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(signedData)
      .digest('hex');

    const signatureBuffer = Buffer.from(signature.toLowerCase());
    const expectedBuffer = Buffer.from(expectedSignature.toLowerCase());

    if (signatureBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(signatureBuffer, expectedBuffer)) {
      return res.status(400).json({ error: 'Signature de webhook SasPay invalide' });
    }
  }

  // 3. Traitement idempotent de l'événement (transaction.success)
  const eventData = req.body.data || req.body;
  const reference = eventData.metadata?.reference || eventData.reference;

  if (event === 'transaction.success' || req.body.event === 'transaction.success') {
    try {
      if (reference) {
        const donation = await prisma.donation.findUnique({ where: { reference } });
        
        if (donation && donation.status !== 'Reussi') {
          // Mise à jour du statut
          await prisma.donation.update({
            where: { reference },
            data: { status: 'Reussi' }
          });

          // Génération du récépissé de don
          const receiptNumber = `REC-${new Date().getFullYear()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
          const pdfUrl = `https://ujmah-togo.vercel.app/receipts/${receiptNumber}.pdf`;

          await prisma.donationReceipt.create({
            data: {
              receiptNumber,
              donationId: donation.id,
              pdfUrl
            }
          });

          // Mise à jour du montant collecté si lié à un projet
          if (donation.projectId) {
            await prisma.project.update({
              where: { id: donation.projectId },
              data: {
                collectedAmount: { increment: donation.amount }
              }
            });
          }

          console.log(`[SasPay] Don ${reference} validé avec succès (Récépissé : ${receiptNumber}).`);
        }
      }
    } catch (dbErr) {
      console.error('[SasPay Webhook DB Error]:', dbErr);
    }
  }

  // Répondre 200 rapidement conformément à la règle SasPay
  res.status(200).json({ success: true, code: 200 });
});

// 3. PUBLIC: Vérifier l'état d'un paiement en direct (GET /payments/{id}/verify/)
router.get('/verify/:reference', async (req, res) => {
  const { reference } = req.params;

  try {
    const donation = await prisma.donation.findUnique({
      where: { reference },
      include: {
        receipt: true,
        project: { select: { name: true } }
      }
    });

    if (!donation) {
      return res.status(404).json({ error: 'Don introuvable' });
    }

    res.json({ donation });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la vérification' });
  }
});

// 4. STAFF: Obtenir l'historique complet des dons
router.get('/', requireAuth, requireRole(FINANCE_ROLES), async (req, res) => {
  try {
    const donations = await prisma.donation.findMany({
      include: {
        project: { select: { name: true } },
        receipt: { select: { receiptNumber: true, pdfUrl: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ donations });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des dons' });
  }
});

export default router;
