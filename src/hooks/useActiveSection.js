import { useEffect, useState } from 'react';

export function useActiveSection(ids) {
  const idsKey = ids.join('\u0000');
  const [activeId, setActiveId] = useState(ids[0] ?? '');

  useEffect(() => {
    if (!ids.length) return undefined;
    const headings = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!headings.length || !('IntersectionObserver' in window)) {
      setActiveId(ids[0]);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-96px 0px -72% 0px', threshold: 0 },
    );
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [idsKey]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeId;
}
