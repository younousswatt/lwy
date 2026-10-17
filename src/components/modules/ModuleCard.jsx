import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge.jsx';

export default function ModuleCard({ module, trackSlug, showLivrable = false }) {
  return (
    <article className="module-card">
      <div className="module-card-meta">
        <span className="module-number">{String(module.order).padStart(2, '0')}</span>
        <Badge>{module.section === 'pro' ? 'Projet' : module.section.charAt(0).toUpperCase() + module.section.slice(1)}</Badge>
      </div>
      <h3>{module.title}</h3>
      <p className="module-card-description">{module.description}</p>
      <div className="module-card-details">
        <span>{module.duration}</span>
        <span>{module.level}</span>
      </div>
      {showLivrable && (
        <p className="module-deliverable"><span>Livrable</span>{module.livrable}</p>
      )}
      <Link className="module-card-link" to={`/parcours/${trackSlug}/${module.slug}`}>
        Voir le module <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
