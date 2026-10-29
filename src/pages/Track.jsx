import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getTrackBySlug, TRACKS } from '../data/tracks.js';
import { getModulesByTrack, sectionsFromModules, sectionLabel } from '../data/modules.js';
import TrackGrid from '../components/tracks/TrackGrid.jsx';
import ModuleList from '../components/modules/ModuleList.jsx';
import ModuleCard from '../components/modules/ModuleCard.jsx';
import Badge from '../components/ui/Badge.jsx';
import FadeIn from '../components/ui/FadeIn.jsx';

export default function Track() {
  const { track } = useParams();
  const isTrackIndex = !track;
  const trackData = getTrackBySlug(track);
  const [section, setSection] = useState('all');
  const modules = getModulesByTrack(track);
  const filteredModules = useMemo(
    () => modules.filter((module) => section === 'all' || module.section === section),
    [modules, section],
  );
  const filterItems = [
    { id: 'all', label: 'Tous' },
    ...sectionsFromModules(modules).map((id) => ({ id, label: sectionLabel(id) })),
  ];

  if (isTrackIndex) {
    const availableTracks = TRACKS.filter((item) => item.status === 'available');
    const availableModules = availableTracks.reduce(
      (total, item) => total + getModulesByTrack(item.slug).length,
      0,
    );

    return (
      <div className="page container">
        <FadeIn className="page-heading">
          <p className="eyebrow">Apprendre, étape par étape</p>
          <h1 className="page-title">Tous les parcours</h1>
          <p className="page-description">
            Explorez l’algorithmique, la programmation et le développement à travers plusieurs langages et spécialités.
            Chaque parcours présente ses modules dans l’ordre, avec leurs prérequis, objectifs et projets à réaliser.
          </p>
        </FadeIn>
        <div className="track-summary">
          <Badge>{availableTracks.length} parcours disponibles</Badge>
          <p>{availableModules} modules publiés · un parcours Java est en préparation.</p>
        </div>
        <TrackGrid tracks={TRACKS} />
      </div>
    );
  }

  if (!trackData) {
    return (
      <div className="page container">
        <div className="track-coming-soon">
          <h2>Parcours non trouvé</h2>
          <p>Ce parcours n'existe pas.</p>
          <Link className="text-link" to="/parcours" style={{ marginTop: '16px', display: 'inline-block' }}>
            Retour aux parcours <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  if (trackData.status === 'soon') {
    return (
      <div className="page container">
        <div className="track-coming-soon">
          <h2>{trackData.title}</h2>
          <p>Ce parcours est en préparation.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page container">
      <FadeIn className="page-heading">
        <p className="eyebrow">Parcours</p>
        <h1 className="page-title">{trackData.title}</h1>
        <p className="page-description">{trackData.description}</p>
      </FadeIn>
      <div className="filters" role="group" aria-label="Filtrer les modules par section">
        {filterItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`filter-button${section === item.id ? ' active' : ''}`}
            aria-pressed={section === item.id}
            onClick={() => setSection(item.id)}
          >
            {item.label}<span>{item.id === 'all' ? modules.length : modules.filter((module) => module.section === item.id).length}</span>
          </button>
        ))}
      </div>
      <div className="track-summary">
        <Badge>{filteredModules.length} {filteredModules.length === 1 ? 'module' : 'modules'}</Badge>
        <p>Chaque fiche précise les objectifs, les prérequis et le livrable attendu.</p>
      </div>
      {section === 'all' ? (
        <ModuleList modules={filteredModules} trackSlug={track} />
      ) : (
        <div className="module-group">
          <h3>{sectionLabel(section)}</h3>
          <div className="module-list">
            {filteredModules.map((module) => (
              <ModuleCard key={module.slug} module={module} trackSlug={track} showLivrable={false} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
