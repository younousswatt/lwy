# LWY — Learn With Yunus

LWY est un espace pédagogique consacré à l'algorithmique, à la programmation et au développement logiciel et web. Le projet propose des parcours progressifs et rigoureux pour apprendre à raisonner, écrire des programmes et réaliser des applications, du niveau débutant à intermédiaire.

## Philosophie pédagogique

Chaque module associe des objectifs observables, des explications précises, des exemples concrets, des exercices gradués et un livrable. La progression développe la logique algorithmique et la résolution de problèmes, puis les bases de la programmation et leur mise en pratique dans des projets. Elle privilégie la compréhension des fondements avant d'aborder les abstractions, et chaque notion est définie avant d'être utilisée.

## Parcours disponibles

### Développement web (14 modules)
1. Fondamentaux du web
2. HTML — Structure
3. HTML — Formulaires
4. CSS — Bases
5. CSS — Mise en page
6. CSS — Avancé
7. JavaScript — Bases
8. JavaScript — Structures de données
9. JavaScript — DOM
10. JavaScript — Asynchrone et API
11. JavaScript — Moderne
12. Git et GitHub
13. Qualité web
14. Projet final — Bibliothèque de films

### Python (9 modules)
Fondamentaux, programmation orientée objet, packages et projet final CLI.

### Angular (8 modules)
TypeScript, composants, services, formulaires, routage, RxJS, tests et tableau de bord.

### PHP (8 modules)
Parcours complet avec Apache, PHP et MySQL dans XAMPP, depuis la première page jusqu'à une bibliothèque web :

1. Démarrage avec XAMPP et cycle d'une requête
2. Variables, types, contrôle et fonctions
3. Formulaires et validation serveur
4. MySQL et accès aux données avec PDO
5. CRUD et pagination
6. Sessions, authentification et protection CSRF
7. Architecture, Composer, tests et déploiement
8. Projet final : bibliothèque PHP/MySQL

Les exercices incluent des corrigés avec exemples PHP, SQL, HTML et configuration. Les exemples utilisent requêtes préparées, validation côté serveur, échappement HTML et protections de session ; adaptez toujours les identifiants et configurations à votre environnement, sans publier de secrets.

### C (8 modules)
Compilation, fonctions, tableaux, pointeurs, mémoire, fichiers et projet final.

### C++ (8 modules)
C++ moderne, classes, RAII, STL, templates, tests et projet final.

### Parcours à venir
- Java

## Lancer en local

Prérequis : Node.js 20 ou ultérieur et npm.

```sh
npm install
npm run dev
```

Pour vérifier le build de production :

```sh
npm run build
npm run preview
```

### Environnement du parcours PHP

Pour exécuter les exercices PHP, installez XAMPP avec Apache, PHP et MySQL/MariaDB, démarrez Apache et MySQL depuis le panneau XAMPP, puis placez les fichiers de cours dans un sous-dossier de `htdocs` (par exemple `C:\xampp\htdocs\bibliotheque`). Ouvrez les pages par `http://localhost/bibliotheque/` ; ne lancez pas les scripts PHP en ouvrant directement les fichiers dans le navigateur.

phpMyAdmin est normalement disponible à `http://localhost/phpmyadmin/` pendant le développement local. Créez le schéma indiqué dans les leçons avant les exercices PDO. Vérifiez que l'extension `pdo_mysql` est activée dans la version PHP utilisée par Apache. Le PHP en ligne de commande peut provenir d'une autre installation ; vérifiez séparément sa version avec `php -v`.

Les identifiants par défaut d'une installation locale ne sont pas une configuration de production. N'exposez pas phpMyAdmin sur Internet, n'enregistrez pas de secrets dans Git et utilisez en production HTTPS, des identifiants MySQL à privilèges minimaux et des erreurs non affichées au public.

## Ajouter un module

1. Ajoutez ses métadonnées dans `src/data/modules.js` avec les champs suivants :
   - `track`: identifiant du parcours (ex: 'devweb')
   - `slug`: identifiant unique du module
   - `order`: numéro d'ordre dans le parcours
   - `title`: titre du module
   - `section`: section du parcours ('fondations'|'html'|'css'|'js'|'pro')
   - `level`: niveau de difficulté
   - `duration`: durée indicative
   - `description`: description courte
   - `livrable`: livrable attendu
   - `prerequisites`: tableau des slugs des modules prérequis

2. Créez le fichier `src/content/<track>/<slug>/index.mdx` avec le contenu du cours.

3. Les titres de niveau 2 alimentent automatiquement le sommaire via le plugin rehype-slug.

## Ajouter un parcours

1. Ajoutez le parcours dans `src/data/tracks.js` avec les champs suivants :
   - `slug`: identifiant unique du parcours
   - `order`: numéro d'ordre global
   - `title`: titre du parcours
   - `description`: description du parcours
   - `status`: 'available' ou 'soon'
   - `level`: niveau global du parcours

2. Créez les modules correspondants dans `src/data/modules.js` en les associant au `track` approprié.

3. Créez le contenu MDX dans `src/content/<track>/<slug>/index.mdx` pour chaque module.

## Architecture

- Deux registres centraux : `src/data/tracks.js` et `src/data/modules.js`
- Contenu MDX chargé à la demande via `import.meta.glob`
- Routing basé sur React Router 6 avec support des parcours et modules
- Déploiement automatique sur GitHub Pages via GitHub Actions

## Déploiement

Le workflow GitHub Actions construit et publie le site sur GitHub Pages à chaque push sur `main`. Le dépôt Pages doit être configuré pour utiliser GitHub Actions comme source de déploiement. La base `/lwy/` est activée pour GitHub Pages ; les autres déploiements, dont Vercel, utilisent la racine du domaine.

## Note sur les contrastes

La palette de couleurs utilisée respecte les exigences WCAG AA pour la plupart des combinaisons. Le couple `--accent` (#6366f1) avec du texte blanc n'a pas été utilisé pour garantir le contraste minimum de 4.5:1. Tous les textes sur fond `--accent` utilisent la couleur `--text` (#ededf0) qui satisfait le critère AA.

## Licence

Ce projet est distribué sous licence MIT. Voir [LICENSE](./LICENSE).
