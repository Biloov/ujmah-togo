# Audit Technique & Fonctionnel — UJMAH V1

Ce document dresse l'état des lieux complet du dépôt actuel de l'association UJMAH Togo en vue de sa migration vers la version V2.

---

## 1. Architecture Actuelle & Technologies Détectées

Le site actuel (**UJMAH V1**) est un site vitrine entièrement statique hébergé sur GitHub Pages.

### Stack technique détectée :
*   **Frontend :** HTML5 standard, CSS3 natif (variables CSS, flexbox, grid), JavaScript ES6+ (Vanilla).
*   **Typographie :** Polices *Manrope* (titres) et *Inter* (texte principal) chargées via Google Fonts CDN.
*   **Iconographie :** Google Material Symbols (icônes d'action) et FontAwesome 6.5.1 via cdnjs (pour les réseaux sociaux).
*   **Animations :** Intersection Observer API natif pour le scroll reveal et l'animation des nombres.
*   **Intégration e-mails :** Endpoint tiers **FormSubmit.co** (via requêtes AJAX fetch) pour le formulaire de contact.
*   **Passerelle de paiement :** Redirections client vers des liens de don hébergés par le partenaire **Genius Pay**.

---

## 2. Inventaire des Pages et Fichiers

### Pages Publiques Actives (V1)
1.  [`index.html`](../index.html) : Accueil, slogan, mot de bienvenue, 4 piliers, bloc d'actions phares, CTA de dons.
2.  [`nos-actions.html`](../nos-actions.html) : Présentation des domaines d'intervention (CRSC, SEFIMA, Orphelinat).
3.  [`orphelinat.html`](../orphelinat.html) : Page dédiée à l'orphelinat « MES ENFANTS » à Yelivo (Sokodé).
4.  [`galerie.html`](../galerie.html) : Grille d'images statique (bento-grid) présentant des moments de solidarité.
5.  [`valeurs.html`](../valeurs.html) : Présentation des valeurs éthiques (Foi, Solidarité, Engagement, Fraternité) et compteur des chiffres clés.
6.  [`contact.html`](../contact.html) : Coordonnées de l'association et formulaire de contact.
7.  [`don.html`](../don.html) : Module interactif de dons Genius Pay par catégorie (Général, Orphelinat, Cotisation) et informations de virement bancaire CORIS BANK.

### Ressources Multimédias (`assets/`)
*   `logo-ujmahvf.png` : Logo officiel de l'association.
*   `hero-mosque.png` : Image d'accueil (architecture islamique).
*   `mixx_logo.png` & `tmoney_logo.png` & `flooz_logo.png` : Logos des opérateurs mobiles togolais.
*   `orphanage-yelivo.png`, `crsc-interior.png`, `formations-workspace.png`, `sefima-weaving.png`, `gallery-well.png` : Photos des activités réelles sur le terrain.

### Fichiers de configuration & Scripts
*   `CNAME` : Contient le domaine personnalisé de production `ujmah.nexacom-gestion.com`.
*   `css/styles.css` : Feuille de style unique regroupant le design system, la mise en page responsive et les animations.
*   `js/main.js` : Script regroupant la validation du formulaire, les compteurs animés et l'effet sticky de la barre de navigation.

### Fichiers Obsolets & Doublons détectés
Ces dossiers contiennent des versions de test et de vieux codes inutilisés qui polluent le dépôt Git :
*   `accueil_ujmah_v3/` (contenant `code.html` et `screen.png`) — **À supprimer**
*   `galerie_ujmah/` (contenant `code.html` et `screen.png`) — **À supprimer**
*   `nos_actions_ujmah/` (contenant `code.html` et `screen.png`) — **À supprimer**

---

## 3. Analyse des Problèmes et Limites de la V1

### Problèmes UX / UI
*   **Mises à jour manuelles :** Aucune interface d'administration n'existe. Pour modifier une simple actualité, un chiffre clé ou ajouter une photo à la galerie, un développeur doit éditer le code HTML manuellement et pousser sur Git.
*   **Manque de dynamisme :** La galerie est figée, aucun système d'albums ni de filtres n'est disponible.
*   **Parcours utilisateur incomplet :** Pas d'espace membres, pas de suivi des inscriptions aux événements (SEFIMA, concours de Coran).

### Problèmes SEO (Référencement)
*   Les métadonnées (balises Open Graph, Twitter cards) sont définies statiquement pour chaque fichier HTML.
*   Absence de fichier `sitemap.xml` dynamique.
*   Pas de microdonnées structurées (Schema.org) pour l'organisation humanitaire, les événements ou les articles.

### Problèmes de Performance
*   **Format d'images non optimisé :** Les images du site sont principalement au format PNG/JPG lourd. Elles doivent être converties en WebP/AVIF.
*   **Absence de Lazy Loading natif :** Les images de la galerie chargent toutes en même temps, ce qui ralentit la vitesse sur connexion mobile instable (4G/3G au Togo).

### Problèmes de Sécurité
*   **Absence de backend propre :** L'adresse e-mail de réception `ujmahofficiel@gmail.com` et l'endpoint FormSubmit.co sont visibles en clair dans le code JS client, ouvrant la voie à du spam ou du piratage.
*   **Validation des dons non sécurisée :** Actuellement, le don s'effectue par une redirection simple. Le site n'a aucun moyen de vérifier de manière sécurisée si la transaction a réellement abouti pour générer un reçu officiel infalsifiable.

---

## 4. Stratégie de Migration des Contenus

| Élément V1 | Statut | Action pour la V2 |
| :--- | :--- | :--- |
| **Identité Visuelle & Slogan** | A conserver | Intégrer au Design System public de la V2. |
| **Photos réelles de l'association** | A conserver | Migrer dans la nouvelle médiathèque dynamique. |
| **Contenus textuels (Orphelinat, actions)** | A conserver | Intégrer sous forme de contenu par défaut dans la base de données. |
| **Formulaire de contact** | A améliorer | Remplacer l'envoi FormSubmit par notre propre API backend. |
| **Dons Genius Pay** | A remplacer | Créer une API backend sécurisée avec webhooks de validation et reçus PDF automatiques. |
| **Compteurs et Statistiques** | A migrer | Rendre les compteurs administrables en base de données (Neon). |
| **Dossiers `v3` et templates obsolètes** | A supprimer | Nettoyer le dépôt Git. |
