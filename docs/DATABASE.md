# Guide de Configuration de la Base de Données — UJMAH V2

Ce document détaille la configuration de base de données Neon PostgreSQL et de l'ORM Prisma pour le projet UJMAH V2.

---

## 1. Modèle Conceptuel et Choix de Conception

Nous utilisons **Prisma ORM** avec **Neon PostgreSQL** pour gérer nos relations. Les index et types ont été optimisés pour assurer un temps de réponse minimal (performances optimales).

*   **Identifiants uniques :** Tous les identifiants clés (`id`) utilisent des chaines UUIDv4 (`@default(uuid())`) afin d'éviter la prédictibilité des clés séquentielles entières (protection contre l'énumération d'IDs).
*   **Relations en Cascade (`onDelete`) :** 
    *   La suppression d'un événement (`Event`) supprime automatiquement les inscriptions liées (`EventRegistration`) via `onDelete: Cascade`.
    *   La suppression d'un album de galerie (`GalleryAlbum`) ne supprime pas les photos associées mais met à jour leur liaison à `null` via `onDelete: SetNull`.
*   **Gestion des types de champs :** Les champs de texte volumineux (comme le corps des articles, descriptions détaillées de projets) utilisent le type natif `@db.Text` pour contourner la limitation par défaut des chaines de caractères standards (255 caractères).

---

## 2. Configuration de l'infrastructure Neon

### Pool de connexions (PgBouncer)
Neon fournit deux URLs de connexion distinctes dans le tableau de bord :
1.  **DATABASE_URL (Pooling) :** Utilise le port `5432` ou la chaîne de connexion avec PgBouncer. À utiliser pour les serveurs applicatifs (le backend Express) car il gère de manière optimale l'ouverture/fermeture des connexions.
2.  **DIRECT_URL (Directe) :** Se connecte directement au port PostgreSQL natif. Obligatoire pour Prisma lors de l'exécution des commandes de migration (`prisma migrate dev` ou `prisma db push`) pour éviter que PgBouncer n'interfère avec les verrous de table requis pendant les modifications de structure.

---

## 3. Indexation recommandée pour les performances

Pour garantir des recherches instantanées, des index d'optimisation sont configurés par défaut ou créés via des migrations SQL personnalisées :
*   Index unique sur `User.email` (géré par Prisma avec `@unique`).
*   Index unique sur les Slugs : `Article.slug`, `Project.slug`, `ArticleCategory.slug`.
*   Index sur les dates de publication pour le tri des actualités et événements : `Article.createdAt`, `Event.startDate` (pour afficher les prochains événements rapidement).
