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
      <a className="nav-link" href="#para-artistas">Artistas</a>
      <a className="nav-link" href="#para-productores">Productores</a>
      <a className="nav-link" href="#demo">Demo</a>
      <a className="nav-link" href="#como-funciona">Cómo funciona</a>
      <a className="nav-link" href="#beta">Beta</a>
    </nav>
    <a className="btn btn-primary header-cta" href="#beta-form">
      Únete a la beta
    </a>
  </header>
);

export default Header;
