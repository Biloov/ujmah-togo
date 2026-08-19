# Plan de Migration et Déploiement — UJMAH V2

Ce document définit les étapes indispensables pour migrer le site UJMAH de la version statique V1 vers la version dynamique V2 sans interruption de service ni perte de référencement (SEO).

---

## 1. Correspondance des URLs (SEO Preservation)

Afin de préserver le trafic historique et le référencement naturel du site public sur Google, toutes les anciennes URLs de la V1 doivent pointer vers les nouvelles structures de la V2.

| Ancienne URL (V1) | Nouvelle URL (V2) | Type de redirection | Rationale |
| :--- | :--- | :--- | :--- |
| `/index.html` | `/` | 301 Permanente | Page d'accueil principale. |
| `/nos-actions.html` | `/actions` | 301 Permanente | Section présentant les domaines. |
| `/orphelinat.html` | `/orphelinat` | 301 Permanente | Section de l'orphelinat MES ENFANTS. |
| `/galerie.html` | `/galerie` | 301 Permanente | Bibliothèque de médias. |
| `/valeurs.html` | `/valeurs` | 301 Permanente | Présentation institutionnelle. |
| `/contact.html` | `/contact` | 301 Permanente | Formulaire de contact. |
| `/don.html` | `/don` | 301 Permanente | Portail de don sécurisé. |

> [!TIP]
> **Configuration des redirections :** Les redirections 301 seront gérées au niveau du serveur de production (dans la configuration d'Express ou directement via le fournisseur d'hébergement du frontend comme Vercel/Netlify dans un fichier de redirection natif).

---

## 2. Stratégie de Migration des Données Statiques

Pour peupler la base de données PostgreSQL (Neon) lors du déploiement initial de la V2, un script de seeding (`prisma/seed.ts`) sera rédigé.

1.  **Chiffres Clés :** Extraction des statistiques de `valeurs.html` (12 projets, 2500 bénéficiaires, 150 bénévoles) pour les insérer dans le modèle `ImpactMetric`.
2.  **Missions et Historique :** Les textes descriptifs et piliers de l'association seront intégrés dans le modèle `SiteSetting` ou `Article` par défaut.
3.  **Médias :** Les photos existantes d'activités (SEFIMA, CRSC, orphelinat) seront insérées dans la table `GalleryItem` avec des légendes et textes d'accessibilité (`alt`) adéquats.
4.  **Comptes initiaux :** Création du premier compte `SUPER_ADMIN` pour l'administrateur principal de l'association (avec demande obligatoire de changement de mot de passe à la première connexion).

---

## 3. Configuration des Environnements et Neon

Le projet s'appuiera sur trois environnements Neon PostgreSQL isolés afin de sécuriser les données de production.

*   **Development :** Connecté à la branche de développement Neon (`dev`).
*   **Staging :** Connecté à la branche de test de Neon (`staging`).
*   **Production :** Connecté à la branche Neon principale (`main` ou `root`).

### Configuration des Variables d'Environnement (`.env`)
Le fichier `.env` contiendra les clés d'accès à la branche correspondante de votre base Neon. Un modèle `.env.example` sera partagé sur GitHub, mais les secrets réels ne devront jamais y être poussés.

```bash
# Exemple de configuration local (.env)
DATABASE_URL="postgresql://[user]:[password]@[neon-host]/dev_db?sslmode=require"
DIRECT_URL="postgresql://[user]:[password]@[neon-host]/dev_db?sslmode=require"
JWT_SECRET="un_secret_temporaire_tres_robuste"
APP_URL="http://localhost:5173"
```

---

## 4. Risques Identifiés et Contre-Mesures

*   **Risque de régression sur le sous-domaine de production :**  
    *Contre-mesure :* La V1 restera active en production tant que la V2 n'aura pas passé 100% des tests de validation sur l'environnement de Staging (`staging.ujmah.nexacom-gestion.com`).
*   **Perte de courriels de contact pendant la bascule :**  
    *Contre-mesure :* L'activation immédiate du nouvel endpoint de messagerie de la V2 se fera en parallèle. L'ancien formulaire pointera vers le nouveau service sans interruption.
*   **Propagation DNS pour la V2 :**  
    *Contre-mesure :* Planifier la bascule DNS pendant une heure de faible affluence (généralement la nuit) pour minimiser l'impact.
