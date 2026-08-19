# Conception de l'Architecture Technique — UJMAH V2

Ce document présente l'architecture cible du portail officiel UJMAH V2, configurée pour être performante, modulaire et hautement sécurisée.

---

## 1. Vue d'Ensemble de l'Écosystème

L'application est séparée en deux environnements distincts connectés par une API REST sécurisée.

```
+---------------------------------------+
|          Client Public (Vite)         |
+---------------------------------------+
                    |
                    | Request API REST
                    v
+---------------------------------------+
|          Backend API (Express)        |
+---------------------------------------+
                    |
                    | Prisma Client
                    v
+---------------------------------------+
|       Base Neon PostgreSQL (Cloud)    |
+---------------------------------------+
```

---

## 2. Stack Technique Cible

### Frontend (Dossier `frontend/`)
*   **Framework :** React 18+ (avec Vite pour un démarrage et des builds ultra-rapides).
*   **Langage :** TypeScript (typage strict pour éviter les erreurs d'exécution).
*   **Design & UI :** Tailwind CSS + Components **shadcn/ui** (basés sur Radix UI) pour des composants accessibles (WCAG) et un design épuré.
*   **Icônes :** Lucide React (légères et modernes).
*   **Routage :** React Router DOM.
*   **Gestion d'état :** Context API ou Zustand (léger et modulaire).

### Backend (Dossier `backend/`)
*   **Runtime :** Node.js.
*   **Framework :** Express (écrit en TypeScript).
*   **Sécurité API :** Helmet, Cors, Express-rate-limit.
*   **Validation des données :** Zod (validation des schémas d'entrée côté serveur).

### Base de données & Modélisation (Dossier `prisma/`)
*   **Infrastructure :** Neon PostgreSQL (base de données serverless robuste).
*   **ORM :** Prisma ORM (génération de schémas types, migrations contrôlées, requêtes sécurisées).

---

## 3. Schéma de la Base de Données (Prisma)

Voici les principaux modèles requis dans `prisma/schema.prisma` pour assurer l'ensemble des fonctionnalités de la V2 :

*   **User / Auth :** `User` (utilisateurs de la plateforme), `Role` (rôles d'administration : SUPER_ADMIN, ADMIN, FINANCE, COMMUNICATION, etc.), `Permission` (droits spécifiques vérifiés côté serveur).
*   **CMS & Événements :** `Article` & `ArticleCategory` (actualités), `Project` & `ProjectCategory` (gestion des campagnes humanitaires), `Event` & `EventRegistration` (gestion des événements et formulaires d'inscriptions).
*   **Ressources & Documents :** `GalleryAlbum` & `GalleryItem` (médiathèque centralisée), `Document` (documents officiels téléchargeables, classés par type).
*   **Solidarité & Témoignages :** `Testimonial` (témoignages modérés), `ImpactMetric` (statistiques clés d'impact administrables par année).
*   **Dons & Traçabilité :** `Donation` (historique des dons sécurisés) & `DonationReceipt` (reçus PDF générés avec référence unique).
*   **Audit Trail :** `ActivityLog` (journal d'activité pour enregistrer les actions critiques des administrateurs).

---

## 4. Authentification & Sécurité Personnalisée

UJMAH V2 n'utilisera pas de services tiers (Supabase Auth, Firebase Auth) afin de garder le contrôle total sur ses données utilisateurs.

*   **Chiffrement :** Les mots de passe seront hachés en utilisant l'algorithme robuste `argon2` ou `bcrypt`.
*   **Session :** Authentification par Tokens JWT (JSON Web Tokens) sécurisés stockés dans des cookies **HttpOnly**, `Secure`, et `SameSite=Strict` pour bloquer les failles XSS et CSRF.
*   **Rate Limiting :** Limitation du nombre de requêtes sur les endpoints d'authentification pour éviter les attaques par force brute.
*   **Multi-Facteur (2FA) :** L'architecture du backend prévoit des champs `twoFactorEnabled` et `twoFactorSecret` dans le modèle `User` pour intégrer ultérieurement l'authentification double facteur par TOTP (Google Authenticator).

---

## 5. Flux de Dons Sécurisé & Abstraction

Le traitement des paiements doit s'opérer exclusivement côté serveur pour garantir l'intégrité des fonds.

*   **Abstraction de paiement :** Un service `PaymentService` générique masquera le fonctionnement interne du partenaire de paiement. Remplacer Genius Pay par un autre agrégateur (Paytech, Stripe, etc.) ne demandera qu'à réécrire ce service isolé, sans impacter la logique de la base de données.

---

## 6. Architecture Multilingue (i18n)

L'architecture est structurée pour prendre en charge le français (`fr`), l'anglais (`en`) et l'arabe (`ar`).
*   **RTL Support :** Le frontend utilisera la direction dynamique `dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}` au niveau de la racine HTML.
*   **Design adaptatif :** Tailwind adaptera automatiquement les marges et alignements via les préfixes logiques (ex: `ms-4` au lieu de `ml-4`, `pe-2` au lieu de `pr-2`) pour garantir un affichage parfait en arabe.
