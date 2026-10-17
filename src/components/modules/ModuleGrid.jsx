import FadeIn from '../ui/FadeIn.jsx';
import ModuleCard from './ModuleCard.jsx';

export default function ModuleGrid({ modules, trackSlug }) {
  return (
    <div className="module-grid">
      {modules.map((module, index) => (
        <FadeIn key={module.slug} delay={index * 15}>
          <ModuleCard module={module} trackSlug={trackSlug} />
        </FadeIn>
      ))}
    </div>
  );
}
