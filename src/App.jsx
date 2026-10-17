import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Track = lazy(() => import('./pages/Track.jsx'));
const ModulePage = lazy(() => import('./pages/ModulePage.jsx'));
const Ressources = lazy(() => import('./pages/Ressources.jsx'));
const APropos = lazy(() => import('./pages/APropos.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="page-loading" aria-label="Chargement" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parcours" element={<Track />} />
          <Route path="/parcours/:track" element={<Track />} />
          <Route path="/parcours/:track/:slug" element={<ModulePage />} />
          <Route path="/ressources" element={<Ressources />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
