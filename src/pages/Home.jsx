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
  const availableTracks = TRACKS.filter((track) => track.status === 'available').length;
  const totalModules = MODULES.length;
  const totalWeeks = MODULES.reduce((acc, m) => {
    const match = m.duration.match(/(\d+)/);
    return acc + (match ? parseInt(match[1], 10) : 0);
  }, 0);

  return (
    <>
      <section className="hero container">
        <FadeIn>
          <p className="eyebrow">LWY — Learn With Yunus</p>
          <h1>Apprendre à programmer, <span className="accent-word">sérieusement.</span></h1>
          <p className="hero-copy">
            Algorithmique, programmation et développement : apprenez à raisonner, maîtrisez plusieurs langages et construisez des projets dont vous pouvez expliquer chaque choix.
          </p>
          <ul className="hero-stats">
            <li><strong>{availableTracks}</strong><span>parcours disponibles</span></li>
            <li><strong>{totalModules}</strong><span>modules</span></li>
            <li><strong>{totalWeeks}</strong><span>semaines de contenu</span></li>
          </ul>
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
