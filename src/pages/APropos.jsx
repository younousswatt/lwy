import { Mail, Linkedin, Github } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn.jsx';

export default function APropos() {
  return (
    <div className="page container about-page">
      <FadeIn className="page-heading">
        <p className="eyebrow">À propos</p>
        <h1 className="page-title">Yunus</h1>
        <p className="page-description">
          Enseignant vacataire en développement web, passionné par la pédagogie et le code propre.
        </p>
      </FadeIn>
      <div className="about-layout">
        <div className="about-prose">
          <section>
            <h2>Parcours</h2>
            <p>
              Après des études en informatique et plusieurs années d\'expérience en développement,
              j\'ai choisi de partager mes connaissances à travers l\'enseignement. Je conçois des parcours
              qui privilégient la compréhension des fondamentaux plutôt que l\'accumulation de frameworks.
            </p>
          </section>
          <section>
            <h2>Motivation</h2>
            <p>
              Ce site a pour but de fournir un support de cours structuré et accessible à mes étudiants,
              tout en servant de portfolio technique. Chaque module est rédigé pour être compréhensible
              par un débutant complet, sans présupposer de connaissances préalables.
            </p>
          </section>
          <section>
            <h2>Stack maîtrisée</h2>
            <ul className="skill-list">
              <li>HTML5 sémantique et accessibilité</li>
              <li>CSS moderne (Flexbox, Grid, variables)</li>
              <li>JavaScript ES2023+ et DOM</li>
              <li>React et écosystème</li>
              <li>Git et GitHub</li>
              <li>Outils de développement (VS Code, DevTools)</li>
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
              <a href="mailto:[EMAIL]">[EMAIL]</a>
            </li>
            <li>
              <Linkedin size={16} aria-hidden="true" />
              <a href="[LINKEDIN]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <Github size={16} aria-hidden="true" />
              <a href="[GITHUB]" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
