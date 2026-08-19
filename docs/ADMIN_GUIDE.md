# Guide d'Administration de la Plateforme — UJMAH V2

Ce guide est destiné à l'équipe interne de l'association UJMAH pour la gestion quotidienne des contenus du portail.

---

## 1. Rôles et Droits d'Accès

L'accès à l'espace d'administration (`/admin`) requiert un compte configuré par le Super Administrateur avec l'un des rôles suivants :

*   **SUPER_ADMIN :** Accès complet à l'ensemble du système (comprenant la configuration système, la modification des rôles et les logs d'activité).
*   **ADMIN :** Gestion générale des actualités, événements, projets et documents.
*   **COMMUNICATION :** Rédaction d'articles d'actualité, gestion de la galerie de photos et modération des témoignages.
*   **EVENTS_MANAGER :** Création d'événements et gestion de la liste des inscrits.
*   **PROJECT_MANAGER :** Suivi des projets humanitaires (modification des descriptions, mise à jour des budgets et rapports).
*   **FINANCE :** Consultation de l'historique des dons reçus et génération de reçus de dons.

---

## 2. Actions Administratives Fréquentes

### Publier un nouvel article (Rôles : COMMUNICATION, ADMIN, SUPER_ADMIN)
1.  Rendez-vous dans la section **Actualités > Rédiger un article**.
2.  Renseignez le titre, le résumé, choisissez la catégorie et importez une image principale (optimisée en WebP de préférence).
3.  Utilisez l'éditeur simplifié pour mettre en forme le texte.
4.  Optionnel : Configurez les balises **Méta SEO** pour optimiser le partage sur les réseaux sociaux.
5.  Cliquez sur **Enregistrer en brouillon** ou **Publier**.

### Créer un projet humanitaire (Rôles : PROJECT_MANAGER, ADMIN, SUPER_ADMIN)
1.  Allez dans **Projets > Nouveau projet**.
2.  Définissez le nom, la description détaillée, la catégorie et l'objectif de budget nécessaire.
3.  Sélectionnez le statut (Planifié, En cours).
4.  L'affichage des dons reçus associés se mettra à jour automatiquement à mesure que les donateurs choisissent ce projet dans le formulaire de don.

---

## 3. Modération des Témoignages et Confidentialité

*   **Règle d'or :** Aucun témoignage d'enfant orphelin ou de personne vulnérable ne doit exposer de données personnelles sensibles (nom complet, lieu de résidence précis, coordonnées) sans accord préalable explicite et écrit de la direction.
*   **Modération :** Tout témoignage soumis via le site public ou saisi en administration est placé sous le statut `Brouillon` (invisible au public) tant qu'un administrateur avec le rôle `COMMUNICATION` ou `ADMIN` ne l'a pas validé.
