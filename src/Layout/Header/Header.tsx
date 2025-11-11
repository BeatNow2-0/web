import React from 'react';
import logo from '../../assets/Logo.png';
import './Header.css';

const Header: React.FC = () => (
  <header className="header">
    <div className="logo">
      <a href="#inicio" aria-label="BeatNow">
        <img className="logoPng" src={logo} alt="BeatNow" />
      </a>
    </div>
    <nav className="nav-links" aria-label="Secciones principales">
      <a className="nav-link" href="#features">Funciones</a>
      <a className="nav-link" href="#workflow">Flujo</a>
      <a className="nav-link" href="#seguridad">Seguridad</a>
    </nav>
    <a className="btn btn-outline header-cta" href="#descargar">
      Descargar app
    </a>
  </header>
);

export default Header;
