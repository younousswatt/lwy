import ModuleCard from './ModuleCard.jsx';

export default function ModuleList({ modules, trackSlug }) {
  const sections = ['fondations', 'html', 'css', 'js', 'pro'];
  const groupedModules = sections.reduce((acc, section) => {
    const sectionModules = modules.filter((m) => m.section === section);
    if (sectionModules.length > 0) {
      acc[section] = sectionModules;
    }
    return acc;
  }, {});

  return (
    <>
      {Object.entries(groupedModules).map(([section, sectionModules]) => (
        <div key={section} className="module-group">
          <h3>{section === 'pro' ? 'Projet' : section.charAt(0).toUpperCase() + section.slice(1)}</h3>
          <div className="module-list">
            {sectionModules.map((module) => (
              <ModuleCard key={module.slug} module={module} trackSlug={trackSlug} showLivrable={false} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
