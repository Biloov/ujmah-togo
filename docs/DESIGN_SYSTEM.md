# Charte Graphique & Identité Visuelle Officielle — UJMAH Togo

> **Règle absolue :** Le logo officiel UJMAH est la référence visuelle suprême du projet. Il ne doit être ni remplacé, ni altéré, ni réinterprété. Tout élément d'interface découle directement de son harmonie chromatique et de ses symboles fondateurs.

---

## 1. Analyse Structurée du Logo Officiel UJMAH

### Les 4 Composantes Distinctives

| Composante | Analyse Visuelle | Signification Symbolique | Traduction dans l'Interface V2 |
| :--- | :--- | :--- | :--- |
| **Le Soleil Rayonnant** | Rayons géométriques vifs en dégradé jaune solaire (`#FED33F` vers `#FDB813`). | Lumière, renouveau, espoir, vitalité, action bienfaisante éclairant la communauté. | Halos lumineux discrets, accents de mise en valeur, indicateurs d'impact et de réussite. |
| **La Plume Élancée** | Plume stylisée organique traversant le logo en s'élevant du violet vers l'orange et l'or. | Savoir, éducation (CRSC / SEFIMA), écriture, élévation morale, délicatesse du geste humanitaire. | Formes douces et galbées (`rounded-2xl` / `rounded-3xl`), transitions fluides, micro-animations légères. |
| **La Typographie "UJMAH"** | Lettrage condensé, puissant et stable en violet/indigo profond (`#372C92` / `#2E1F80`). | Solidité institutionnelle, dignité, engagement indéfectible, union fraternelle. | Titres majeurs (`h1`, `h2`), éléments directeurs, barres d'en-tête et signatures textuelles. |
| **La Signature Institutionnelle** | "Union des Jeunes Musulmans pour l'Action Humanitaire" en noir/bleu nuit (`#0B132B`). | Crédibilité, rigueur administrative, sérieux associatif. | Textes de corps, typographies de contraste élevé pour conformité WCAG AAA. |

---

## 2. La Palette Chromatique Officielle

### Éviction formelle du stéréotype « tout-vert »
L'identité islamique de UJMAH s'exprime par ses **valeurs fondamentales, sa transparence et son éthique de l'action**, et **non par l'imposition artificielle d'une palette verte** générique. Le vert n'intervient qu'en accent tertiaire (par exemple pour l'état d'un reçu fiscal ou un statut validé).

### Table des Tokens Chromatiques

| Rôle Design | Nom de Token | Code Hex | Équivalent RVB | Utilisation Spécifique |
| :--- | :--- | :--- | :--- | :--- |
| **Accent Principal** | `ujmah-sun` | `#FDB813` | `rgb(253, 184, 19)` | Éléments de mise en lumière, badges, étoiles d'impact, icônes phares |
| **Lumière Solaire** | `ujmah-sun-light` | `#FED33F` | `rgb(254, 211, 63)` | Halos de fond, survols légers, dégradés d'espoir |
| **Action & Énergie** | `ujmah-orange` | `#E26D11` | `rgb(226, 109, 17)` | Bouton principal **"Faire un don"**, appels à contribution d'urgence |
| **Survol Action** | `ujmah-orange-hover`| `#C85A07` | `rgb(200, 90, 7)` | État actif et survol des boutons oranges |
| **Identité Noble** | `ujmah-indigo` | `#2E1F80` | `rgb(46, 31, 128)` | Titres de sections, bandeaux de prestige, signature typographique |
| **Indigo Profond** | `ujmah-indigo-dark` | `#1E1552` | `rgb(30, 21, 82)` | Pied de page institutionnel, menus administratifs sombres |
| **Fond Chaleureux** | `ujmah-ivory` | `#FAF8F5` | `rgb(250, 248, 245)`| Fond global de l'application (remplace le gris froid standard) |
| **Fond Cartes** | `ujmah-white` | `#FFFFFF` | `rgb(255, 255, 255)`| Blocs de contenu, formulaires, modales, surfaces élevées |
| **Texte Principal** | `ujmah-navy` | `#0B132B` | `rgb(11, 19, 43)` | Corps de texte lisible, contrastes forts, sous-titres |
| **Texte Secondaire**| `ujmah-dark-muted` | `#4B5563` | `rgb(75, 85, 99)` | Métadonnées, dates, descriptions secondaires |

---

## 3. Directives Graphiques d'Application

### A. Atmosphère Lumineuse & Organique
- **Fonds respirants :** Favoriser des surfaces claires ivoire (`#FAF8F5`) et blanc pur (`#FFFFFF`) pour offrir sérénité et pureté visuelle.
- **Formes douces :** Employer systématiquement des angles généreusement arrondis (`rounded-2xl` à `rounded-3xl`), reflétant la courbure et la douceur de la plume du logo.
- **Halos solaires subtils :** Intégrer en arrière-plan des dégradés radiaux diffus (`bg-radial from-ujmah-sun/10 via-transparent to-transparent`) qui évoquent le rayonnement solaire sans surcharger la vue.

### B. Hiérarchie Typographique
- **Titres (`Manrope`, 700-800) :** Portés par le **Violet / Indigo (`#2E1F80`)** et le **Bleu Marine (`#0B132B`)**, avec des mots-clés mis en valeur par l'**Or Solaire (`#FDB813`)** ou l'**Orange (`#E26D11`)**.
- **Textes Courants (`Inter`, 400-500) :** Bleu marine profond pour une lecture reposante et institutionnelle.

### C. Boutons d'Action (CTAs)
- **Bouton d'impact prioritaire ("Faire un don") :** Conçu en orange dynamique (`#E26D11`) ou dégradé chaleureux solaire-orange, procurant un appel visuel net et bienveillant.
- **Bouton d'exploration ("Découvrir nos actions", "En savoir plus") :** Fond blanc avec bordure subtile indigo (`#2E1F80/15`) et texte indigo, garantissant l'élégance sobre.

### D. Expression Sobre de l'Identité Islamique
- Les références religieuses (Hadiths, versets sur la bienfaisance, la fraternité et le don) sont mises en page avec solennité dans des encadrés épurés à filet or/indigo.
- Aucune surcharge ornementale ou géométrique complexe qui altèrerait la modernité du portail.
- Mise en valeur des réalisations concrètes : orphelinat de Yelivo, formations SEFIMA, concours coranique CRSC, forages d'eau potable.
