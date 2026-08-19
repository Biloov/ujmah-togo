# UJMAH Togo — Portail Numérique Officiel (V2)

Ce dépôt contient la plateforme institutionnelle officielle de l'association humanitaire **UJMAH Togo** (« Servir l'humanité dans l'union »).

La version V2 est une refonte complète passant d'un site vitrine statique (V1) à une application web dynamique, rapide, sécurisée, administrable et indépendante.

---

## 1. Structure du projet

L'application est découpée de manière modulaire :
```
ujmah-togo/
├── frontend/          # Application cliente React (Vite, TypeScript, Tailwind, shadcn)
├── backend/           # API REST sécurisée Node.js (Express, TypeScript)
├── prisma/            # Configuration de la base de données (Schémas, Migrations et Seeds)
├── docs/              # Documentation technique (Audit, Architecture, Déploiement)
└── CNAME              # Configuration du domaine personnalisé de production
```

---

## 2. Documentation de Référence

Toutes les informations détaillées sur la conception et l'exploitation de la plateforme sont disponibles dans le dossier `docs/` :

*   📄 [Audit de la version V1](docs/AUDIT.md) — Analyse de l'existant, ressources à migrer et bugs identifiés.
*   📄 [Architecture Technique de la V2](docs/ARCHITECTURE.md) — Conception de la stack, base de données Prisma, authentification RBAC et flux de dons sécurisé.
*   📄 [Guide de Migration et Neon](docs/MIGRATION.md) — Redirections SEO 301, stratégie de bascule et gestion des branches Neon PostgreSQL.
*   📄 [Guide de Déploiement](docs/DEPLOYMENT.md) — Commandes d'installation locale et configuration des environnements (Dev, Staging, Prod).
*   📄 [Politique de Sécurité](docs/SECURITY.md) — Spécifications sur le hachage, la protection de l'API et les tokens cookies.
*   📄 [Guide d'Administration](docs/ADMIN_GUIDE.md) — Guide d'utilisation du panneau d'administration `/admin` pour l'équipe interne de l'association.

---

## 3. Lancement rapide en développement local

### 1. Cloner et configurer le backend
1.  Allez dans le dossier `backend/` :
    ```bash
    cd backend
    ```
2.  Copiez le fichier `.env.example` en `.env` et renseignez les variables d'accès à votre branche de développement Neon PostgreSQL.
3.  Installez les dépendances et lancez le serveur :
    ```bash
    npm install
    npm run dev
    ```

### 2. Configurer la base de données (Prisma)
À la racine du projet, appliquez le schéma et les migrations initiales :
```bash
npx prisma migrate dev --name init
```

### 3. Lancer le frontend
1.  Allez dans le dossier `frontend/` :
    ```bash
    cd frontend
    ```
2.  Installez les dépendances et démarrez le serveur de développement :
    ```bash
    npm install
    npm run dev
    ```
3.  L'application est accessible à l'adresse [http://localhost:5173](http://localhost:5173).
