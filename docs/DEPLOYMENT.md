# Guide de Déploiement — UJMAH V2

Ce document explique les procédures de déploiement et la gestion des différents environnements connectés à Neon PostgreSQL.

---

## 1. Environnements Isolés

Nous utilisons trois environnements distincts connectés à des branches de base de données Neon séparées pour éviter toute altération accidentelle de la production pendant le développement.

| Environnement | Branche Git | Branche Neon DB | Usage |
| :--- | :--- | :--- | :--- |
| **Development** | `develop` | `dev` | Tests locaux et intégration de code. |
| **Staging** | `staging` | `staging` | Pré-production, tests de validation de l'équipe. |
| **Production** | `main` | `main` (ou `root`) | Site en direct accessible au public. |

---

## 2. Procédure d'installation et de développement local

### Prérequis
*   Node.js (v20+)
*   NPM (v10+)
*   Un compte Neon.tech configuré avec un projet et trois branches (`dev`, `staging`, `main`).

### Étape 1 : Cloner le dépôt et créer le `.env`
1.  Dans le dossier `backend/`, dupliquez `.env.example` en `.env` :
    ```bash
    cp .env.example .env
    ```
2.  Renseignez la variable `DATABASE_URL` et `DIRECT_URL` en pointant vers votre base de données Neon de développement (`dev`).

### Étape 2 : Lancer les migrations de base de données
Exécutez la commande suivante à la racine du projet pour créer les tables :
```bash
npx prisma migrate dev --name init
```
Cette commande génère le client Prisma et applique les schémas dans Neon.

### Étape 3 : Lancer les serveurs de développement
1.  **Backend (Port 5000) :**
    ```bash
    cd backend
    npm install
    npm run dev
    ```
2.  **Frontend (Port 5173) :**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

---

## 3. Déploiement sur Staging (Pré-production)

1.  Assurez-vous que toutes vos fonctionnalités sont validées et fusionnées sur la branche `develop`.
2.  Poussez vos modifications sur la branche `staging` de GitHub.
3.  La pipeline CI/CD déploie automatiquement :
    *   Le **Frontend** sur un sous-domaine temporaire (ex: `staging.ujmah.nexacom-gestion.com`).
    *   Le **Backend** connecté à la base de données Neon de staging.
4.  Exécutez les migrations de staging :
    ```bash
    npx prisma migrate deploy
    ```

---

## 4. Déploiement sur Production (Live)

Le déploiement en production ne doit être effectué qu'après signature finale et validation de l'environnement de staging.

1.  Fusionnez la branche `staging` (ou `develop` après validation) sur la branche `main`.
2.  La pipeline CI/CD déploie :
    *   Le **Frontend** sur le domaine principal `ujmah.nexacom-gestion.com`.
    *   Le **Backend** sur le serveur de production connecté à la base de données Neon principale (`main`).
3.  Appliquez les migrations sur la base de production Neon :
    ```bash
    npx prisma migrate deploy
    ```
