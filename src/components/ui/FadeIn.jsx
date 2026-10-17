import { useEffect, useRef } from 'react';

export default function FadeIn({ children, className = '', delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      element.classList.add('is-visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.add('is-visible');
        observer.unobserve(element);
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`fade-in ${className}`.trim()}
      style={{ '--fade-delay': `${Math.min(delay, 60)}ms` }}
    >
      {children}
    </div>
  );
}
