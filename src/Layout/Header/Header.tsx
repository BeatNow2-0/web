import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/Logo.png';
import { WEBAPP_URL } from '../../config/apiConfig';
import './Header.css';
import { useLanguage } from '../../i18n';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const es = language === 'es';
  const links = [
    { href: '#producto', label: es ? 'Para artistas' : 'For artists' },
    { href: '#productores', label: es ? 'Para productores' : 'For producers' },
    { href: '#como-funciona', label: es ? 'Cómo funciona' : 'How it works' },
  ];
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

      <nav className="desktop-nav" aria-label={es ? 'Navegación principal' : 'Main navigation'}>
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>

      <div className="header-actions">
        <label className="language-picker">
          <span className="visually-hidden">{es ? 'Idioma' : 'Language'}</span>
          <select aria-label={es ? 'Idioma' : 'Language'} value={language} onChange={(event) => setLanguage(event.target.value as 'en' | 'es')}>
            <option value="en">EN</option><option value="es">ES</option>
          </select>
        </label>
        <a className="header-cta" href={WEBAPP_URL}>{es ? 'Crear mi cuenta' : 'Create account'}</a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? (es ? 'Cerrar menú' : 'Close menu') : (es ? 'Abrir menú' : 'Open menu')}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span /><span />
        </button>
      </div>

      {isOpen && (
        <nav className="mobile-menu" id="mobile-menu" aria-label={es ? 'Navegación móvil' : 'Mobile navigation'}>
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>)}
          <a className="mobile-cta" href={WEBAPP_URL}>{es ? 'Crear mi cuenta' : 'Create account'}</a>
        </nav>
      )}
    </header>
  );
}
