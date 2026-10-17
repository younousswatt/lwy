import Badge from '../ui/Badge.jsx';

export default function Exercise({ n, title, level = 'Échauffement', children }) {
  return (
    <div className="exercise">
      <h3>
        <span>{n}</span>
        <Badge>{level}</Badge>
      </h3>
      <p style={{ marginTop: '8px', fontWeight: 500 }}>{title}</p>
      <div className="exercise-content">{children}</div>
    </div>
  );
}
