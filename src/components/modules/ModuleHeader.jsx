import Badge from '../ui/Badge.jsx';

export default function ModuleHeader({ module }) {
  return (
    <div className="module-heading">
      <div className="module-heading-meta">
        <span className="module-number">{String(module.order).padStart(2, '0')}</span>
        <Badge>{module.section === 'pro' ? 'Projet' : module.section.charAt(0).toUpperCase() + module.section.slice(1)}</Badge>
      </div>
      <h1 className="page-title">{module.title}</h1>
      <p className="page-description">{module.description}</p>
      <dl className="module-facts">
        <div>
          <dt>Durée</dt>
          <dd>{module.duration}</dd>
        </div>
        <div>
          <dt>Niveau</dt>
          <dd>{module.level}</dd>
        </div>
        {module.prerequisites.length > 0 && (
          <div>
            <dt>Prérequis</dt>
            <dd>{module.prerequisites.join(', ')}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
