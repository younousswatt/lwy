import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn.jsx';

export default function NotFound() {
  return (
    <div className="page container">
      <FadeIn>
        <h1 className="page-title">Page non trouvée</h1>
        <p className="page-description">
          La page que vous recherchez n\'existe pas ou a été déplacée.
        </p>
        <Link className="text-link" to="/">
          Retour à l\'accueil <ArrowRight size={16} />
        </Link>
      </FadeIn>
    </div>
  );
}
