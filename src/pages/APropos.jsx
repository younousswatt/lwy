import { Globe, Mail, Phone } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn.jsx';

const contact = {
  email: 'wattyounouss6@gmail.com',
  website: 'https://younousswatt.netlify.app',
  phone: '+221777323219',
};

export default function APropos() {
  return (
    <div className="page container about-page">
      <FadeIn className="page-heading">
        <p className="eyebrow">À propos</p>
        <h1 className="page-title">Yunus</h1>
        <p className="page-description">
          Enseignant en algorithmique, programmation et développement, et créateur de LWY : apprendre à raisonner, coder et construire.
        </p>
      </FadeIn>
      <div className="about-layout">
        <div className="about-prose">
          <section>
            <h2>La démarche LWY</h2>
            <p>
              J’ai créé LWY pour proposer des parcours progressifs, avec des objectifs clairs, des explications,
              des exercices corrigés et des projets à réaliser. L’apprentissage commence par la logique et la
              résolution de problèmes, se poursuit avec les langages de programmation, puis mène à la création
              d’applications et de projets concrets.
            </p>
          </section>
          <section>
            <h2>Parcours proposés</h2>
            <p>
              LWY ne se limite pas au développement web : les parcours abordent aussi les bases de l’algorithmique,
              les structures de données et la programmation avec Python, C et C++, ainsi que le développement
              d’applications web avec HTML, JavaScript, Angular et PHP/MySQL. Chaque parcours indique son ordre,
              ses prérequis et ses projets. Java est annoncé comme parcours à venir.
            </p>
          </section>
          <section>
            <h2>Une approche axée sur la pratique</h2>
            <ul className="skill-list">
              <li>De la logique algorithmique et des structures de données pour apprendre à décomposer les problèmes.</li>
              <li>Des notions de programmation et de développement introduites progressivement et reliées à leurs usages.</li>
              <li>Des exercices accompagnés de solutions pour comparer et comprendre les choix.</li>
              <li>Des projets concrets pour mettre en œuvre les acquis.</li>
              <li>Une attention portée à la qualité, à l’accessibilité et à la sécurité du code.</li>
            </ul>
          </section>
        </div>
        <aside className="contact-panel">
          <p className="eyebrow">Contact</p>
          <h2>Me contacter</h2>
          <p>Je suis disponible pour répondre à vos questions sur les cours ou pour des opportunités de collaboration.</p>
          <ul>
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Globe size={16} aria-hidden="true" />
              <a href={contact.website} target="_blank" rel="noopener noreferrer">Portfolio</a>
            </li>
            <li>
              <Phone size={16} aria-hidden="true" />
              <a href={`tel:${contact.phone}`}>+221 77 732 32 19</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
