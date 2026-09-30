import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/Logo.png';
import { WEBAPP_URL } from '../../config/apiConfig';
import './Header.css';

const links = [
  { href: '#producto', label: 'Para artistas' },
  { href: '#productores', label: 'Para productores' },
  { href: '#como-funciona', label: 'Cómo funciona' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="BeatNow, inicio">
        <img src={logo} alt="" width="40" height="43" />
        <span>BeatNow</span>
      </a>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>

      <div className="header-actions">
        <a className="header-cta" href={WEBAPP_URL}>Crear mi cuenta</a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span /><span />
        </button>
      </div>

      {isOpen && (
        <nav className="mobile-menu" id="mobile-menu" aria-label="Navegación móvil">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>)}
          <a className="mobile-cta" href={WEBAPP_URL}>Crear mi cuenta</a>
        </nav>
      )}
    </header>
  );
}
