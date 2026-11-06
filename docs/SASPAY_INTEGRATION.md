# Guide d'Intégration SasPay — Association UJMAH Togo

Ce document résume l'implémentation de la passerelle **SasPay** (`https://api.saspay.me/api/v1`) sur le portail UJMAH Togo, conformément aux spécifications du `SKILL`.

---

## 1. Architecture Technique Implémentée

### A. Contrôleur de Checkout Serveur (`POST /api/donations/checkout`)
- **Route :** `/api/donations/checkout`
- **Format du montant :** Formaté en chaîne décimale stricte (`"20250.00"` ou `"5000.00"`), jamais de flottant.
- **Devise :** `XOF` (Franc CFA UEMOA).
- **Session SasPay :** Appel sécurisé de serveur à serveur vers `POST https://api.saspay.me/api/v1/checkout-sessions/` avec clé `Bearer sk_...`.
- **Redirection automatique :** Renvoie `checkout_url` vers laquelle le donateur est automatiquement dirigé pour régler en Mobile Money (Flooz, T-Money, Wave) ou Carte Bancaire.
- **Return URL :** `https://ujmah-togo.vercel.app/don?status=success&ref=DON-...`.

### B. Traitement Sécurisé des Webhooks (`POST /api/donations/webhook`)
- **Headers vérifiés :**
  - `X-Webhook-Signature`
  - `X-Webhook-Timestamp`
  - `X-Webhook-Event` (`transaction.success`)
- **Règles de sécurité :**
  1. Rejet si `timestamp` dépasse plus de 300 secondes (5 minutes).
  2. Vérification cryptographique HMAC SHA-256 sur le corps brut (`rawBody`) avec `crypto.timingSafeEqual`.
  3. Traitement strictement idempotent : si la transaction est déjà marquée `Reussi`, réponse 200 immédiate sans double comptabilisation.
  4. Génération automatique du récépissé `REC-...` et incrémentation des fonds collectés.

---

## 2. Configuration dans votre Espace Développeur SasPay

Sur le tableau de bord [app.saspay.me](https://app.saspay.me/) :

1. **Clés API** (Section Développeur) :
   - Mode Test : `sk_test_...`
   - Mode Live : `sk_live_...`
   - À ajouter dans les variables d'environnement sur Render (`ujmah-backend`) :
     ```env
     SASPAY_API_KEY=sk_live_...
     ```

2. **Configuration du Webhook** :
   - **URL du Webhook :** `https://ujmah-backend.onrender.com/api/donations/webhook`
   - **Événements à cocher :** `transaction.success` (et `transaction.failed`)
   - **Copier le Signing Secret :** Copiez la clé secrète affichée à la création et ajoutez-la sur Render :
     ```env
     SASPAY_WEBHOOK_SECRET=votre_secret_webhook
     ```

3. **Lien de Paiement Marchand Direct (Optionnel)** :
   - Votre lien direct : `https://link.saspay.me/ujmah-togo` (sert également de fallback transparent).
