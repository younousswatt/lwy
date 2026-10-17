# Checklist de démarrage

## Installation et configuration

- [ ] Installer Node.js 20 ou ultérieur
- [ ] Cloner le dépôt
- [ ] Exécuter `npm install`
- [ ] Vérifier que le serveur de développement fonctionne avec `npm run dev`
- [ ] Vérifier que le build de production fonctionne avec `npm run build`
- [ ] Vérifier que le preview fonctionne avec `npm run preview`

## Configuration GitHub Pages

- [ ] Activer GitHub Pages dans les paramètres du dépôt
- [ ] Configurer la source de déploiement sur "GitHub Actions"
- [ ] Vérifier que le workflow `.github/workflows/deploy.yml` est présent
- [ ] Pusher sur la branche `main` pour déclencher le déploiement
- [ ] Vérifier que le site est accessible à l'URL GitHub Pages

## Personnalisation

- [ ] Remplacer `[EMAIL]` dans `src/pages/APropos.jsx` par l'adresse e-mail réelle
- [ ] Remplacer `[LINKEDIN]` dans `src/pages/APropos.jsx` par le profil LinkedIn réel
- [ ] Remplacer `[GITHUB]` dans `src/pages/APropos.jsx` par le profil GitHub réel
- [ ] Remplacer `[GITHUB]` dans `src/components/layout/Footer.jsx` par l'URL du dépôt GitHub

## Vérification du contenu

- [ ] Créer les 14 fichiers MDX dans `src/content/devweb/` (un par module)
- [ ] Vérifier que chaque module suit le gabarit spécifié
- [ ] Vérifier que le contenu est rédigé intégralement (pas de placeholders)
- [ ] Tester la navigation entre les modules
- [ ] Tester les filtres de section sur la page de parcours
- [ ] Vérifier que le sommaire sticky fonctionne correctement
- [ ] Tester la copie du code dans les blocs de code
- [ ] Vérifier l'accessibilité clavier et lecteur d'écran

## Tests finaux

- [ ] Tester sur mobile (responsive)
- [ ] Tester le mode sombre (par défaut)
- [ ] Vérifier les animations avec `prefers-reduced-motion`
- [ ] Vérifier les contrastes de couleur
- [ ] Tester le chargement paresseux des modules MDX
- [ ] Vérifier le poids du bundle gzip (cible < 200 Ko hors contenu MDX)
