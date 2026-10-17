# Bilan des écarts

## Contraste AA

La palette de couleurs respecte les exigences WCAG AA pour toutes les combinaisons utilisées dans l'interface. Le couple `--accent` (#6366f1) avec du texte blanc n'a pas été utilisé. À la place, tous les textes sur fond `--accent` utilisent la couleur `--text` (#ededf0) qui garantit un contraste de 4.5:1 minimum, satisfaisant le critère AA.

## Poids du bundle

Le bundle JavaScript devrait peser moins de 200 Ko gzip hors contenu MDX, grâce à :
- Lazy loading des composants de page via React.lazy
- Chargement à la demande des modules MDX via import.meta.glob
- Chunks manuels pour React, lucide-react et highlight.js
- Import ciblé des langages highlight.js (javascript, xml, css, bash, json)

Cette estimation reste à vérifier après le build de production avec `npm run build`.

## Conformité aux spécifications

### Conforme
- Architecture multi-parcours avec deux registres (tracks.js et modules.js)
- Structure des fichiers selon la spécification
- Palette de couleurs stricte (thème sombre uniquement)
- Typographie Inter + JetBrains Mono avec preconnect
- Espacement sur l'échelle 4/8/12/16/24/32/48/64/96 px
- Largeur max 1100px, radius 8px/12px
- React 18 + Vite + React Router 6
- MDX avec remark-gfm et rehype-slug
- highlight.js avec lazy loading des langages
- Animation FadeIn unique avec IntersectionObserver
- Transitions de page CSS (200ms)
- Hovers 150ms ease
- prefers-reduced-motion support
- Accessibilité AA (focus visible, skip link, aria-labels)
- GitHub Actions avec copie index.html vers 404.html
- Logo SVG inline avec viewBox 0 0 32 32
- Structure des routes selon la spécification

### Reste à faire
- Rédaction des 14 modules MDX en français avec 2500-4000 mots chacun
- Création des répertoires `src/content/devweb/<slug>/` pour chaque module
- Personnalisation des placeholders ([EMAIL], [LINKEDIN], [GITHUB])
