import { ExternalLink } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn.jsx';

const resources = {
  documentation: [
    {
      title: 'MDN Web Docs',
      description: 'Documentation de référence pour HTML, CSS et JavaScript.',
      url: 'https://developer.mozilla.org',
    },
    {
      title: 'JS.info',
      description: 'Cours moderne de JavaScript, du débutant à l\'avancé.',
      url: 'https://javascript.info',
    },
    {
      title: 'Can I Use',
      description: 'Tableau de compatibilité des fonctionnalités web.',
      url: 'https://caniuse.com',
    },
  ],
  apprentissage: [
    {
      title: 'freeCodeCamp',
      description: 'Parcours interactifs gratuits pour apprendre à coder.',
      url: 'https://freecodecamp.org',
    },
    {
      title: 'Frontend Mentor',
      description: 'Projets pour s\'exercer au développement frontend.',
      url: 'https://frontendmentor.io',
    },
    {
      title: 'Roadmap.sh',
      description: 'Guides de roadmap pour différents parcours techniques.',
      url: 'https://roadmap.sh',
    },
  ],
  outils: [
    {
      title: 'CSS-Tricks',
      description: 'Articles et astuces sur CSS et le développement web.',
      url: 'https://css-tricks.com',
    },
    {
      title: 'DevTools',
      description: 'Outils de développement intégrés aux navigateurs.',
      url: 'https://developer.chrome.com/docs/devtools',
    },
  ],
};

export default function Ressources() {
  return (
    <div className="page container">
      <FadeIn className="page-heading">
        <p className="eyebrow">Pour aller plus loin</p>
        <h1 className="page-title">Ressources</h1>
        <p className="page-description">
          Une sélection de références de qualité pour approfondir vos connaissances et résoudre vos problèmes.
        </p>
      </FadeIn>
      <div className="resource-groups">
        <div className="resource-group">
          <h2>Documentation</h2>
          <ul>
            {resources.documentation.map((resource) => (
              <li key={resource.url}>
                <div className="resource-item">
                  <div>
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                  </div>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir ${resource.title} dans un nouvel onglet`}>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="resource-group">
          <h2>Apprentissage</h2>
          <ul>
            {resources.apprentissage.map((resource) => (
              <li key={resource.url}>
                <div className="resource-item">
                  <div>
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                  </div>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir ${resource.title} dans un nouvel onglet`}>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="resource-group">
          <h2>Outils</h2>
          <ul>
            {resources.outils.map((resource) => (
              <li key={resource.url}>
                <div className="resource-item">
                  <div>
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                  </div>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir ${resource.title} dans un nouvel onglet`}>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
