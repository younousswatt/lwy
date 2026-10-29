import { ExternalLink } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn.jsx';

const resources = {
  documentation: [
    {
      title: 'MDN Web Docs',
      description: 'Référence détaillée pour HTML, CSS, JavaScript et les API du navigateur.',
      url: 'https://developer.mozilla.org',
    },
    {
      title: 'Documentation Angular',
      description: 'Guides officiels pour apprendre Angular et consulter les API.',
      url: 'https://angular.dev',
    },
    {
      title: 'Documentation Python',
      description: 'Tutoriel, bibliothèque standard et référence officielle du langage.',
      url: 'https://docs.python.org/fr/3/',
    },
    {
      title: 'Manuel PHP',
      description: 'Documentation officielle de PHP, avec référence du langage et extensions.',
      url: 'https://www.php.net/manual/fr/',
    },
    {
      title: 'MySQL Reference Manual',
      description: 'Guide officiel pour SQL, les bases MySQL et leur administration.',
      url: 'https://dev.mysql.com/doc/',
    },
    {
      title: 'cppreference',
      description: 'Référence des bibliothèques et fonctionnalités de C et C++.',
      url: 'https://en.cppreference.com/',
    },
  ],
  pratique: [
    {
      title: 'freeCodeCamp',
      description: 'Leçons interactives et certifications autour du développement web.',
      url: 'https://www.freecodecamp.org/',
    },
    {
      title: 'Exercism',
      description: 'Exercices de programmation avec pratique guidée dans plusieurs langages.',
      url: 'https://exercism.org/',
    },
    {
      title: 'VisuAlgo',
      description: 'Visualisations interactives d’algorithmes et de structures de données.',
      url: 'https://visualgo.net/',
    },
    {
      title: 'CS50x',
      description: 'Cours d’introduction à l’informatique : résolution de problèmes, algorithmes et programmation.',
      url: 'https://cs50.harvard.edu/x/',
    },
    {
      title: 'SQLBolt',
      description: 'Exercices interactifs pour découvrir SQL pas à pas.',
      url: 'https://sqlbolt.com/',
    },
    {
      title: 'Roadmap.sh',
      description: 'Feuilles de route visuelles pour explorer les métiers et technologies.',
      url: 'https://roadmap.sh/',
    },
  ],
  outils: [
    {
      title: 'Visual Studio Code',
      description: 'Éditeur de code et documentation des fonctions de développement.',
      url: 'https://code.visualstudio.com/docs',
    },
    {
      title: 'Chrome DevTools',
      description: 'Inspecter, déboguer et mesurer une application web dans Chrome.',
      url: 'https://developer.chrome.com/docs/devtools/',
    },
    {
      title: 'GitHub Skills',
      description: 'Ateliers guidés pour apprendre GitHub en manipulant de vrais projets.',
      url: 'https://skills.github.com/',
    },
    {
      title: 'XAMPP',
      description: 'Environnement local Apache, PHP et MariaDB pour suivre le parcours PHP.',
      url: 'https://www.apachefriends.org/',
    },
    {
      title: 'Can I Use',
      description: 'Vérifier la compatibilité des fonctionnalités web entre navigateurs.',
      url: 'https://caniuse.com/',
    },
  ],
};

const groupTitles = {
  documentation: 'Documentation',
  pratique: 'Apprendre et pratiquer',
  outils: 'Outils de développement',
};

export default function Ressources() {
  return (
    <div className="page container">
      <FadeIn className="page-heading">
        <p className="eyebrow">Pour aller plus loin</p>
        <h1 className="page-title">Ressources</h1>
        <p className="page-description">
          Des références, visualisations et exercices pour travailler l’algorithmique, la programmation et le développement web ou logiciel.
        </p>
      </FadeIn>
      <div className="resource-groups">
        {Object.entries(resources).map(([group, items]) => (
          <section className="resource-group" key={group}>
            <h2>{groupTitles[group]}</h2>
            <ul>
              {items.map((resource) => (
                <li key={resource.url}>
                  <div className="resource-item">
                    <div>
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>
                    </div>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir ${resource.title} dans un nouvel onglet`}>
                      <ExternalLink size={18} aria-hidden="true" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
