import { ChevronRight } from 'lucide-react';

export default function Solution({ children }) {
  return (
    <details className="solution">
      <summary>
        <ChevronRight size={16} aria-hidden="true" />
        Solution
      </summary>
      <div className="solution-content">{children}</div>
    </details>
  );
}
