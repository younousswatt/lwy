import { Info, AlertTriangle, Lightbulb } from 'lucide-react';

const icons = {
  info: Info,
  warn: AlertTriangle,
  tip: Lightbulb,
};

const labels = {
  info: 'Information',
  warn: 'Attention',
  tip: 'Conseil',
};

export default function Callout({ type = 'info', children }) {
  const Icon = icons[type] || Info;
  const label = labels[type] || 'Information';

  return (
    <div className={`callout callout-${type}`}>
      <div className="callout-label">
        <Icon size={16} aria-hidden="true" />
        <span>{label}</span>
      </div>
      <div className="callout-content">{children}</div>
    </div>
  );
}
