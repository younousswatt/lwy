import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Logo from '../brand/Logo.jsx';

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/parcours', label: 'Parcours' },
  { to: '/ressources', label: 'Ressources' },
  { to: '/a-propos', label: 'À propos' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink className="brand" to="/" aria-label="LWY — Accueil" onClick={() => setMenuOpen(false)}>
          <Logo className="brand-mark" />
          <span className="brand-name">LWY</span>
          <span className="brand-caption">Learn With Yunus</span>
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          aria-label="Navigation principale"
        >
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
