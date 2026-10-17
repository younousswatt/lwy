import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TRACKS } from '../data/tracks.js';
import { MODULES } from '../data/modules.js';
import Button from '../components/ui/Button.jsx';
import FadeIn from '../components/ui/FadeIn.jsx';
import TrackGrid from '../components/tracks/TrackGrid.jsx';
import Section from '../components/ui/Section.jsx';

const steps = [
  ['01', 'Objectifs', 'Chaque module commence par des compétences concrètes à acquérir.'],
  ['02', 'Exercices', 'Des activités graduées permettent de vérifier chaque notion.'],
  ['03', 'Livrable', 'Un mini-projet donne une forme visible aux apprentissages.'],
  ['04', 'Publication', 'Le travail est documenté et publié dans un dépôt Git.'],
];

export default function Home() {
  const devwebModules = MODULES.filter((m) => m.track === 'devweb');
  const totalExercises = devwebModules.length * 7;
  const totalWeeks = devwebModules.reduce((acc, m) => {
    const match = m.duration.match(/(\d+)/);
    return acc + (match ? parseInt(match[1], 10) : 0);
  }, 0);

  return (
    <>
      <section className="hero container">
        <FadeIn>
          <p className="eyebrow">LWY — Learn With Yunus</p>
          <h1>Apprendre à programmer, sérieusement.</h1>
          <p className="hero-copy">
            Un parcours progressif pour comprendre les fondamentaux du développement web et construire des projets dont vous pouvez expliquer chaque choix.
          </p>
          <div className="hero-actions">
            <Button to="/parcours" icon={ArrowRight} iconPosition="right">Voir les parcours</Button>
            <Button to="/a-propos" variant="ghost">À propos</Button>
          </div>
        </FadeIn>
      </section>

      <Section>
        <div className="container">
          <div className="section-heading">
            <h2>Les parcours</h2>
          </div>
          <TrackGrid tracks={TRACKS} />
        </div>
      </Section>

      <Section className="method-section">
        <div className="container">
          <div className="section-heading">
            <h2>Comment ça marche</h2>
            <p>Un rythme de travail qui relie les notions, la pratique et la publication.</p>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, copy], index) => (
              <FadeIn key={number} delay={index * 15}>
                <article className="step-item">
                  <span className="step-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
