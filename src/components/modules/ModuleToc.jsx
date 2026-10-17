import { useActiveSection } from '../../hooks/useActiveSection.js';

export default function ModuleToc({ sections }) {
  const sectionIds = sections.map((s) => s.id);
  const activeId = useActiveSection(sectionIds);

  if (!sections.length) return null;

  return (
    <aside className="module-toc">
      <h4 className="toc-title">Sommaire</h4>
      <ol>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={activeId === section.id ? 'active' : ''}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
