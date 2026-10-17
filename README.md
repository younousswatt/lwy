# LWY — Learn With Yunus

LWY est un portfolio pédagogique et un support de cours consacré aux fondamentaux du développement web et d'autres langages de programmation. Le projet propose des parcours progressifs et rigoureux pour apprendre à programmer, du niveau débutant à intermédiaire.

## Philosophie pédagogique

Chaque module associe des objectifs observables, des explications précises, des exemples concrets, des exercices gradués et un livrable. La progression privilégie la compréhension des fondements avant d'aborder les abstractions, et chaque notion est définie avant d'être utilisée.

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

### C (8 modules)
Compilation, fonctions, tableaux, pointeurs, mémoire, fichiers et projet final.

### C++ (8 modules)
C++ moderne, classes, RAII, STL, templates, tests et projet final.

### Parcours à venir
- PHP
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

Le workflow GitHub Actions construit et publie le site sur GitHub Pages à chaque push sur `main`. Le dépôt Pages doit être configuré pour utiliser GitHub Actions comme source de déploiement. L'application est construite avec la base `/lwy/`.

## Note sur les contrastes

La palette de couleurs utilisée respecte les exigences WCAG AA pour la plupart des combinaisons. Le couple `--accent` (#6366f1) avec du texte blanc n'a pas été utilisé pour garantir le contraste minimum de 4.5:1. Tous les textes sur fond `--accent` utilisent la couleur `--text` (#ededf0) qui satisfait le critère AA.

## Licence

Ce projet est distribué sous licence MIT. Voir [LICENSE](./LICENSE).
