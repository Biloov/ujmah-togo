import { Router } from 'express';
import { RoleName } from '@prisma/client';
import crypto from 'crypto';
import prisma from '../prisma.js';
import { requireAuth, requireRole, AuthenticatedRequest } from '../middleware/auth.js';

const router = Router();
const FINANCE_ROLES = [RoleName.SUPER_ADMIN, RoleName.ADMIN, RoleName.FINANCE];

// 1. PUBLIC: Create checkout transaction
router.post('/checkout', async (req, res) => {
  const { amount, donorName, donorEmail, donorPhone, category, projectId } = req.body;

  if (!amount || !donorName || !donorEmail || !category) {
    return res.status(400).json({ error: 'Required donation details are missing' });
  }

  try {
    // Generate unique internal transaction reference
    const reference = `DON-${crypto.randomBytes(8).toString('hex').toUpperCase()}`;

    // Create a pending donation in the database
    const donation = await prisma.donation.create({
      data: {
        amount: parseFloat(amount),
        donorName,
        donorEmail,
        donorPhone,
        category,
        projectId: projectId || null,
        reference,
        status: 'En attente'
      }
    });

    // In a real Genius Pay integration, we would request a checkout url here.
    // We simulate returning the checkout URL.
    const checkoutUrl = `https://pay.genius.ci/checkout/${reference}`;

    res.status(201).json({
      message: 'Transaction initialized',
      reference,
      checkoutUrl,
      donationId: donation.id
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Checkout initialization server error' });
  }
});

// 2. PUBLIC/PARTNER: Webhook handler for Genius Pay (Signed callback)
router.post('/webhook', async (req, res) => {
  const signature = req.headers['x-geniuspay-signature'];
  const webhookSecret = process.env.GENIUSPAY_WEBHOOK_SECRET || 'secret';

  // Validate request signature (OWASP security compliance)
  if (!signature) {
    return res.status(401).json({ error: 'Signature header missing' });
  }

  const payload = JSON.stringify(req.body);
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(payload)
    .digest('hex');

  // For testing/mocking in dev, we allow bypassing if secret is default 'secret'
  if (signature !== expectedSignature && webhookSecret !== 'secret') {
    return res.status(400).json({ error: 'Invalid payload signature signature' });
  }

  const { reference, status, amount } = req.body;

  try {
    const donation = await prisma.donation.findUnique({ where: { reference } });
    if (!donation) {
      return res.status(404).json({ error: 'Donation transaction not found' });
    }

    if (donation.status === 'Reussi') {
      return res.json({ message: 'Donation already processed' });
    }

    if (status === 'success') {
      // 1. Update donation status
      await prisma.donation.update({
        where: { reference },
        data: { status: 'Reussi' }
      });

      // 2. Generate a unique receipt index
      const receiptNumber = `REC-${new Date().getFullYear()}-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
      const pdfUrl = `https://ujmah.nexacom-gestion.com/receipts/${receiptNumber}.pdf`;

      await prisma.donationReceipt.create({
        data: {
          receiptNumber,
          donationId: donation.id,
          pdfUrl
        }
      });

      // 3. Update project budget progress if it is tied to a project campaign
      if (donation.projectId) {
        await prisma.project.update({
          where: { id: donation.projectId },
          data: {
            collectedAmount: {
              increment: donation.amount
            }
          }
        });
      }

      console.log(`Donation ${reference} successfully validated and receipt generated.`);
    } else {
      await prisma.donation.update({
        where: { reference },
        data: { status: 'Echoue' }
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Webhook processing server error' });
  }
});

// 3. STAFF: Get complete donations history
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
    res.status(500).json({ error: 'Get donation history server error' });
  }
});

export default router;
