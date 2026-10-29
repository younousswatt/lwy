import ModuleCard from './ModuleCard.jsx';
import { sectionsFromModules, sectionLabel } from '../../data/modules.js';

export default function ModuleList({ modules, trackSlug }) {
  const groupedModules = sectionsFromModules(modules).map((section) => ({
    section,
    items: modules.filter((module) => module.section === section),
  }));

  return (
    <>
      {groupedModules.map(({ section, items }) => (
        <div key={section} className="module-group">
          <h3>{sectionLabel(section)}</h3>
          <div className="module-list">
            {items.map((module) => (
              <ModuleCard key={module.slug} module={module} trackSlug={trackSlug} showLivrable={false} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
