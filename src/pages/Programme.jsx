import { useMemo, useState } from 'react';
import { CATEGORIES, MODULES } from '../data/modules.js';
import ModuleGrid from '../components/modules/ModuleGrid.jsx';
import Badge from '../components/ui/Badge.jsx';
import FadeIn from '../components/ui/FadeIn.jsx';

export default function Programme() {
  const [category, setCategory] = useState('all');
  const modules = useMemo(
    () => MODULES.filter((module) => category === 'all' || module.category === category),
    [category],
  );

  return (
    <div className="page container">
      <FadeIn className="page-heading">
        <p className="eyebrow">Apprentissage, étape par étape</p>
        <h1 className="page-title">Le programme</h1>
        <p className="page-description">
          Sept modules pour passer de la structure d’une page web à une application complète, en construisant à chaque étape.
        </p>
      </FadeIn>
      <div className="filters" role="group" aria-label="Filtrer les modules par catégorie">
        {CATEGORIES.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`filter-button${category === item.id ? ' active' : ''}`}
            aria-pressed={category === item.id}
            onClick={() => setCategory(item.id)}
          >
            {item.label}<span>{item.id === 'all' ? MODULES.length : MODULES.filter((module) => module.category === item.id).length}</span>
          </button>
        ))}
      </div>
      <div className="programme-summary">
        <Badge>{modules.length} {modules.length === 1 ? 'module' : 'modules'}</Badge>
        <p>Chaque fiche précise les objectifs, les prérequis et le livrable attendu.</p>
      </div>
      <ModuleGrid modules={modules} />
    </div>
  );
}
