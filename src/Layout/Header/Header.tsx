import React from 'react';
import logo from '../../assets/Logo.png';
import './Header.css';
import config from "../../config/apiConfig.json"

const navigationLinks = [
  { href: '#para-artistas', label: 'Artistas' },
  { href: '#para-productores', label: 'Productores' },
  { href: '#demo', label: 'Demo' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#beta', label: 'Beta' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavigate = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#inicio" aria-label="BeatNow">
          <img className="logoPng" src={logo} alt="BeatNow" />
        </a>
      </div>

      <nav className="nav-links" aria-label="Secciones principales">
        {navigationLinks.map((link) => (
          <a key={link.href} className="nav-link" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a
          className="btn btn-primary header-cta"
          href={config.WEBAPP}
          target="_blank"
          rel="noreferrer"
        >
          Únete a la beta
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-nav-panel ${isMenuOpen ? 'open' : ''}`} id="mobile-navigation">
        <nav className="mobile-nav-links" aria-label="Secciones principales móvil">
          {navigationLinks.map((link) => (
            <a key={link.href} className="mobile-nav-link" href={link.href} onClick={handleNavigate}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary mobile-nav-cta"
            href={config.WEBAPP}
            target="_blank"
            rel="noreferrer"
            onClick={handleNavigate}
          >
            Registrarme ahora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
