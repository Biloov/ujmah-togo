# Politique et Règles de Sécurité — UJMAH V2

Ce document définit les règles de sécurité appliquées sur la plateforme UJMAH V2 pour protéger les données personnelles, les dons et la configuration de l'association.

---

## 1. Sécurité de l'Authentification et Sessions

*   **Chiffrement des mots de passe :** Aucun mot de passe n'est stocké en clair. Le backend Express utilise l'algorithme robuste de hachage **bcrypt** (avec 12 passes) ou **Argon2id**.
*   **Gestion des Tokens JWT :** Les identifiants de session sont transmis via des JSON Web Tokens (JWT) stockés côté client dans des cookies sécurisés :
    *   `HttpOnly` : Empêche le vol de token via des scripts JavaScript malveillants (protection contre les failles XSS).
    *   `Secure` : Force la transmission exclusive via des connexions sécurisées HTTPS.
    *   `SameSite=Strict` : Protège contre les requêtes contrefaites (protection contre les failles CSRF).
*   **Authentification Multi-Facteurs (2FA) :** Le modèle utilisateur intègre d'ores et déjà les propriétés nécessaires (`twoFactorEnabled` et `twoFactorSecret`) pour la génération et validation de codes TOTP (type Google Authenticator / Authy).

---

## 2. Protection de l'API et du Serveur

*   **Entêtes de Sécurité HTTP (Helmet) :** Le backend s'appuie sur le middleware `helmet` pour configurer les entêtes HTTP sécurisés contre le clickjacking, l'injection MIME et le sniffing de protocole.
*   **Limiteur de débit (Rate Limiting) :** Configuration du middleware `express-rate-limit` pour limiter le nombre de requêtes à 100 requêtes par tranche de 15 minutes par adresse IP, et à 5 requêtes par minute sur l'endpoint d'authentification `/api/auth/login` afin de bloquer les attaques par dictionnaire.
*   **Validation stricte des entrées (Zod) :** Tous les objets reçus par les requêtes de l'API (Body, Params, Query) sont validés via des schémas de typage Zod. Tout paramètre non attendu est rejeté immédiatement avec un code d'erreur `400 Bad Request`.

---

## 3. Sécurité des Dons et Reçus

*   **Validation côté serveur obligatoire :** Le client (navigateur) n'a jamais le droit d'écrire ou de confirmer un statut de don. La validation d'une transaction s'opère uniquement via les **Webhooks signés** envoyés par Genius Pay directement au serveur backend UJMAH.
*   **Isolation des clés d'API :** Les clés privées et secrets d'API Genius Pay sont stockés exclusivement dans les variables d'environnement sur le serveur. Ils ne sont jamais partagés, transmis ou visibles côté frontend.
*   **Reçus PDF sécurisés :** Chaque reçu de don généré possède un numéro d'identifiant unique non-séquentiel et une clé de vérification cryptographique pour prévenir toute contrefaçon de reçu fiscal.
