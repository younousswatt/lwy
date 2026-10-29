import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import ModuleHeader from '../components/modules/ModuleHeader.jsx';
import ModuleToc from '../components/modules/ModuleToc.jsx';
import FadeIn from '../components/ui/FadeIn.jsx';
import { getModuleBySlug, getModulesByTrack } from '../data/modules.js';
import { mdxComponents } from '../lib/mdxComponents.jsx';

const moduleFiles = import.meta.glob('../content/*/*/index.mdx');

export default function ModulePage() {
  const { track, slug } = useParams();
  const module = getModuleBySlug(slug);
  const proseRef = useRef(null);
  const [Content, setContent] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [sections, setSections] = useState([]);
  const trackModules = getModulesByTrack(track);
  const moduleIndex = trackModules.findIndex((item) => item.slug === slug);

  useEffect(() => {
    let active = true;
    setContent(null);
    setLoadError(false);
    const load = moduleFiles[`../content/${track}/${slug}/index.mdx`];
    if (!load) {
      setLoadError(true);
      return () => { active = false; };
    }
    load()
      .then((loaded) => {
        if (active) setContent(() => loaded.default);
      })
      .catch(() => {
        if (active) setLoadError(true);
      });
    return () => { active = false; };
  }, [track, slug]);

  useEffect(() => {
    if (!Content || !proseRef.current) return;
    const headings = [...proseRef.current.querySelectorAll('h2')];
    setSections(headings.map((heading) => ({ id: heading.id, label: heading.textContent })));
  }, [Content]);

  const previous = moduleIndex > 0 ? trackModules[moduleIndex - 1] : null;
  const next = moduleIndex >= 0 ? trackModules[moduleIndex + 1] : null;

  if (!module) {
    return (
      <div className="page container">
        <FadeIn>
          <h1 className="page-title">Module introuvable</h1>
          <p className="page-description">Ce module n’existe pas ou a été déplacé.</p>
          <Link className="text-link" to="/parcours">
            Retour aux parcours <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="page container">
      <FadeIn><ModuleHeader module={module} /></FadeIn>
      <div className="module-layout">
        <ModuleToc sections={sections} />
        <article className="prose" ref={proseRef}>
          <MDXProvider components={mdxComponents}>
            {Content ? <Content /> : loadError
              ? <p role="alert">Le contenu de ce module ne peut pas être chargé. Réessayez ultérieurement.</p>
              : <p aria-live="polite">Chargement du contenu…</p>}
          </MDXProvider>
        </article>
      </div>
      <nav className="module-pagination" aria-label="Navigation entre les modules">
        {previous
          ? <Link to={`/parcours/${track}/${previous.slug}`}><ArrowLeft size={16} aria-hidden="true" /><span><small>Précédent</small>{previous.title}</span></Link>
          : <span />}
        {next
          ? <Link className="next-module" to={`/parcours/${track}/${next.slug}`}><span><small>Suivant</small>{next.title}</span><ArrowRight size={16} aria-hidden="true" /></Link>
          : <Link className="next-module" to={`/parcours/${track}`}><span><small>Terminer</small>Retour au parcours</span><ArrowRight size={16} aria-hidden="true" /></Link>}
      </nav>
    </div>
  );
}
