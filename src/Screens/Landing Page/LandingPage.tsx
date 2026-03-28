import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';
import Header from '../../Layout/Header/Header';
import logo from '../../assets/Logo.png';
import config from '../../config/apiConfig.json';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
};

const benefits = [
  {
    title: 'Descubre beats con rapidez',
    copy: 'Un feed móvil pensado para escuchar, comparar y encontrar el beat correcto sin perder tiempo.',
  },
  {
    title: 'Guarda lo que encaja contigo',
    copy: 'Crea una biblioteca de favoritos y vuelve a la idea correcta cuando llegue el momento de escribir.',
  },
  {
    title: 'Escribe dentro del flujo',
    copy: 'BeatNow une reproducción y escritura para que la canción empiece donde nace la inspiración.',
  },
];

const producerPoints = [
  'Sube beats con metadata útil',
  'Edita catálogo y presentación',
  'Revisa rendimiento de forma clara',
];

const flowSteps = [
  {
    step: '01',
    title: 'El productor publica',
    copy: 'Sube el beat con contexto: género, BPM, mood e instrumentos.',
  },
  {
    step: '02',
    title: 'El artista descubre',
    copy: 'Escucha, compara y guarda el beat que realmente dispara una idea.',
  },
  {
    step: '03',
    title: 'La canción empieza',
    copy: 'El proceso sigue en la app, sin fricción y sin cambiar de herramienta.',
  },
];

const Landing: React.FC = () => {
  const [selectedRole, setSelectedRole] = React.useState<'artista' | 'productor'>('artista');
  const [email, setEmail] = React.useState('');

  const betaUrl = React.useMemo(() => {
    const url = new URL(config.WEBAPP);
    if (email) {
      url.searchParams.set('email', email);
    }
    url.searchParams.set('role', selectedRole);
    return url.toString();
  }, [email, selectedRole]);

  const handleBetaSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(betaUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="landing-page" id="inicio">
      <Header />

      <div className="landing-background" aria-hidden="true">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <div className="ambient ambient-three" />
      </div>

      <main className="landing-main">
        <motion.section className="hero-section" {...reveal}>
          <div className="hero-copy">
            <span className="eyebrow">Beat discovery for artists. Dashboard for producers.</span>
            <div className="hero-brand">
              <img src={logo} alt="BeatNow" />
              <span>BeatNow</span>
            </div>
            <h1>Una forma más limpia de encontrar beats y empezar canciones.</h1>
            <p className="hero-text">
              BeatNow convierte el descubrimiento de beats en una experiencia móvil elegante, rápida y enfocada. Los artistas encuentran antes la idea correcta. Los productores presentan mejor su catálogo.
            </p>

            <div className="hero-actions">
              <a className="cta primary" href={config.WEBAPP} target="_blank" rel="noreferrer">
                Ir a app-web y registrarme
              </a>
              <a className="cta secondary" href="#beta">
                Entrar en la beta
              </a>
            </div>

            <div className="hero-note">
              Una app pensada para artistas. Una consola web pensada para productores.
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-stage">
              <div className="hero-stage-card hero-stage-card-top">
                <strong>Descubre</strong>
                <span>Encuentra el beat correcto en segundos.</span>
              </div>

              <div className="phone-mockup hero-phone">
                <div className="phone-screen">
                  <div className="phone-status">
                    <span>9:41</span>
                    <span>BeatNow</span>
                  </div>
                  <div className="phone-art" />
                  <div className="phone-track">
                    <strong>Midnight Bounce</strong>
                    <span>Prod. Nova</span>
                  </div>
                  <div className="phone-wave" />
                  <div className="phone-tags">
                    <span>140 BPM</span>
                    <span>Dark Trap</span>
                  </div>
                  <div className="phone-note">
                    <small>Lyrics mode</small>
                    <p>Tus barras empiezan aquí.</p>
                  </div>
                </div>
              </div>

              <div className="hero-stage-card hero-stage-card-bottom">
                <strong>Escribe</strong>
                <span>Guarda favoritos, repite el beat y entra en modo creativo sin fricción.</span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="product" className="intro-section" {...reveal}>
          <div className="product-overview">
            <div className="section-copy">
              <span className="section-label">Producto</span>
              <h2>Primero una experiencia clara. Después, contexto sobre la app.</h2>
              <p>
                BeatNow está dividido en dos piezas que trabajan juntas: una app móvil para descubrir beats y escribir sobre ellos, y una consola web para que los productores suban, editen y cuiden su catálogo.
              </p>
            </div>

            <div className="product-overview-card">
              <div className="desktop-mockup">
                <div className="desktop-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="desktop-content">
                  <div className="desktop-head">
                    <div>
                      <strong>Producer dashboard</strong>
                      <span>Catalog overview</span>
                    </div>
                    <div className="desktop-chip">Upload</div>
                  </div>

                  <div className="desktop-stats">
                    <div>
                      <span>Beats</span>
                      <strong>48</strong>
                    </div>
                    <div>
                      <span>Saves</span>
                      <strong>2.3k</strong>
                    </div>
                    <div>
                      <span>Plays</span>
                      <strong>14.8k</strong>
                    </div>
                  </div>

                  <div className="desktop-list">
                    <div className="desktop-row">
                      <span>Neon Pulse</span>
                      <span>Trap</span>
                      <span>132 BPM</span>
                    </div>
                    <div className="desktop-row">
                      <span>Velvet Run</span>
                      <span>R&B</span>
                      <span>96 BPM</span>
                    </div>
                    <div className="desktop-row">
                      <span>Night Circuit</span>
                      <span>Drill</span>
                      <span>145 BPM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="para-artistas" className="benefits-section" {...reveal}>
          <div className="section-copy">
            <span className="section-label">Para artistas</span>
            <h2>Una app pensada para escuchar con intención.</h2>
          </div>

          <div className="benefit-grid">
            {benefits.map((item) => (
              <article className="benefit-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="para-productores" className="producer-section" {...reveal}>
          <div className="section-copy">
            <span className="section-label">Para productores</span>
            <h2>La web acompaña a la app, no compite con ella.</h2>
            <p>
              El dashboard existe para que tu catálogo se vea bien, se mantenga ordenado y puedas tomar decisiones con más contexto.
            </p>
          </div>

          <div className="producer-panel">
            {producerPoints.map((point) => (
              <div className="producer-point" key={point}>
                <span className="producer-dot" aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="como-funciona" className="flow-section" {...reveal}>
          <div className="section-copy center">
            <span className="section-label">Cómo funciona</span>
            <h2>Un flujo simple para pasar del beat a la canción.</h2>
          </div>

          <div className="flow-grid">
            {flowSteps.map((item) => (
              <article className="flow-card" key={item.step}>
                <span className="flow-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="beta" className="beta-section" {...reveal}>
          <div className="beta-copy">
            <span className="section-label">Beta privada</span>
            <h2>Entra pronto y ayúdanos a pulir la mejor versión de BeatNow.</h2>
            <p>
              Estamos activando acceso progresivo para artistas y productores que realmente trabajan con beats y pueden validar el producto con contexto real.
            </p>
          </div>

          <form className="beta-form" onSubmit={handleBetaSubmit}>
            <label className="form-field">
              Correo
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <fieldset className="form-field role-fieldset">
              <legend>Quiero entrar como</legend>
              <div className="role-switch">
                <label className={`role-option ${selectedRole === 'artista' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="role"
                    value="artista"
                    checked={selectedRole === 'artista'}
                    onChange={() => setSelectedRole('artista')}
                  />
                  <span>Artista</span>
                </label>

                <label className={`role-option ${selectedRole === 'productor' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="role"
                    value="productor"
                    checked={selectedRole === 'productor'}
                    onChange={() => setSelectedRole('productor')}
                  />
                  <span>Productor</span>
                </label>
              </div>
            </fieldset>

            <button type="submit" className="cta primary full">
              Continuar al registro
            </button>
            <p className="form-footnote">Al continuar aceptas nuestra política de privacidad y términos de uso resumidos.</p>
          </form>
        </motion.section>

        <section className="legal-section">
          <article id="privacidad" className="legal-card">
            <span className="section-label">Privacidad</span>
            <h2>Cómo tratamos tus datos</h2>
            <p>Solo recogemos la información necesaria para gestionar el acceso a la beta y mejorar el producto.</p>
          </article>

          <article id="terminos" className="legal-card">
            <span className="section-label">Términos</span>
            <h2>Uso básico de la plataforma</h2>
            <p>El acceso beta está sujeto a disponibilidad y evolución del producto. Cada usuario mantiene la responsabilidad sobre su contenido.</p>
          </article>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="BeatNow" />
            <p>BeatNow conecta beats, artistas y productores en una experiencia moderna centrada en la creación.</p>
          </div>
          <div className="footer-links">
            <h4>Producto</h4>
            <a href="#product">Producto</a>
            <a href="#beta">Beta</a>
          </div>
          <div className="footer-links">
            <h4>Contacto</h4>
            <a href="mailto:hola@beatnow.app">hola@beatnow.app</a>
            <a href="tel:+34692903572">+34 692903572</a>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <a href="#privacidad">Política de privacidad</a>
            <a href="#terminos">Términos de uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
