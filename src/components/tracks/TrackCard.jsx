import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge.jsx';
import { MODULES } from '../../data/modules.js';

export default function TrackCard({ track }) {
  const trackModules = MODULES.filter((m) => m.track === track.slug);
  const totalDuration = trackModules.reduce((acc, m) => {
    const match = m.duration.match(/(\d+)/);
    return acc + (match ? parseInt(match[1], 10) : 0);
  }, 0);

  return (
    <article className="track-card">
      <div className="track-card-meta">
        <span className="track-number">{String(track.order).padStart(2, '0')}</span>
        <Badge>{track.status === 'available' ? 'Disponible' : 'À venir'}</Badge>
      </div>
      <h3>{track.title}</h3>
      <p className="track-card-description">{track.description}</p>
      <div className="track-card-details">
        {track.status === 'available' ? (
          <>
            <span>{trackModules.length} modules</span>
            {totalDuration > 0 && <span>{totalDuration} semaines indicatives</span>}
          </>
        ) : (
          <span>Parcours en préparation</span>
        )}
        <span>{track.level}</span>
      </div>
      {track.status === 'available' ? (
        <Link className="track-card-link" to={`/parcours/${track.slug}`}>
          Voir le parcours <ArrowRight size={16} aria-hidden="true" />
        </Link>
      ) : (
        <span className="track-card-link" style={{ color: 'var(--text-muted)', cursor: 'not-allowed' }}>
          En préparation
        </span>
      )}
    </article>
  );
}
