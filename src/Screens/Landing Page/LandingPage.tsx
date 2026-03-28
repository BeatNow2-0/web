import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';
import Header from '../../Layout/Header/Header';
import logo from '../../assets/Logo.png';
import config from '../../config/apiConfig.json';

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
};

const appReasons = [
  {
    index: '01',
    title: 'Descubre beats como consumes música hoy',
    description: 'Un feed vertical rápido, claro y pensado para entrar en modo creativo desde el primer scroll.',
  },
  {
    index: '02',
    title: 'Guarda ideas antes de perder el momento',
    description: 'Favoritos, loops y una experiencia hecha para volver rápido al beat correcto.',
  },
  {
    index: '03',
    title: 'Escribe sobre el beat sin salir del flujo',
    description: 'BeatNow une escucha y escritura para que la canción empiece sin fricción.',
  },
  {
    index: '04',
    title: 'Sube y presenta tu catálogo como producto',
    description: 'Los productores tienen una consola web limpia para publicar, editar y entender rendimiento.',
  },
];

const featureRows = [
  {
    eyebrow: 'Mobile app',
    title: 'La app está en el centro del producto',
    description:
      'El valor principal de BeatNow no es una página informativa. Es una experiencia móvil inmersiva donde descubrir beats y empezar una canción se siente natural.',
    bullets: ['Feed vertical estilo short-form', 'Guardados y replay instantáneo', 'Editor de letras integrado'],
  },
  {
    eyebrow: 'Producer dashboard',
    title: 'La parte web existe para potenciar el catálogo',
    description:
      'El panel para productores acompaña a la app: sube beats, edita metadata, mejora presentación y entiende qué conecta con los artistas.',
    bullets: ['Subida con metadata útil', 'Edición continua de portada y detalles', 'Visión clara de catálogo y stats'],
  },
];

const flowSteps = [
  {
    step: '01',
    title: 'El productor sube su beat',
    description: 'Publica con género, mood, BPM e instrumentos para que el descubrimiento tenga contexto.',
  },
  {
    step: '02',
    title: 'El artista encuentra el beat',
    description: 'Explora el feed, escucha en segundos y guarda el instrumental que realmente dispara una idea.',
  },
  {
    step: '03',
    title: 'La canción empieza dentro de la app',
    description: 'El proceso sigue sin romperse: escuchar, repetir, escribir y volver al beat correcto.',
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
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />
        <div className="landing-grid" />
      </div>

      <main className="landing-main">
        <motion.section className="hero-section" {...reveal}>
          <div className="hero-copy">
            <span className="hero-chip">Beat discovery for artists. Catalog growth for producers.</span>
            <h1>La app para encontrar beats y empezar canciones más rápido.</h1>
            <p className="hero-description">
              BeatNow convierte el descubrimiento de beats en una experiencia moderna, visual y enfocada a móvil. Los artistas encuentran el beat correcto en segundos. Los productores lo presentan como un catálogo serio.
            </p>

            <div className="hero-actions">
              <a className="cta primary" href="#beta">
                Entrar en la beta
              </a>
              <a className="cta secondary" href="#app">
                Ver la experiencia
              </a>
            </div>

            <div className="hero-inline-stats">
              <div className="hero-inline-stat">
                <strong>Mobile first</strong>
                <span>Diseñado alrededor del gesto, el ritmo y el replay.</span>
              </div>
              <div className="hero-inline-stat">
                <strong>Producer ready</strong>
                <span>Catálogo, edición y métricas en una consola clara.</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-stage-shell">
              <div className="hero-stage-badge hero-stage-badge-top">
                <strong>Descubre</strong>
                <span>Feed vertical para encontrar el beat correcto en segundos.</span>
              </div>

              <div className="hero-stage-content">
                <div className="hero-device-stage">
                  <div className="hero-phone-shell">
                    <div className="phone-glow" />
                    <div className="hero-phone-ui" aria-label="Mockup móvil de BeatNow">
                      <div className="phone-status-bar">
                        <span>9:41</span>
                        <span>BeatNow</span>
                      </div>
                      <div className="phone-cover-card">
                        <div className="phone-cover-art" />
                        <div className="phone-cover-copy">
                          <strong>Midnight Bounce</strong>
                          <span>Prod. Nova</span>
                        </div>
                      </div>
                      <div className="phone-wave" />
                      <div className="phone-meta-pills">
                        <span>140 BPM</span>
                        <span>Dark Trap</span>
                        <span>Save</span>
                      </div>
                      <div className="phone-lyrics-card">
                        <span>Lyrics mode</span>
                        <p>Tus barras empiezan donde el beat se queda.</p>
                      </div>
                      <div className="phone-bottom-nav">
                        <span />
                        <span className="active" />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-dashboard-shell">
                  <div className="hero-dashboard-header">
                    <div>
                      <strong>Producer dashboard</strong>
                      <span>Catalog performance</span>
                    </div>
                    <div className="dashboard-pill">Upload beat</div>
                  </div>
                  <div className="hero-dashboard-kpis">
                    <div className="hero-dashboard-kpi">
                      <span>Beats</span>
                      <strong>48</strong>
                    </div>
                    <div className="hero-dashboard-kpi">
                      <span>Saves</span>
                      <strong>2.3k</strong>
                    </div>
                    <div className="hero-dashboard-kpi">
                      <span>Plays</span>
                      <strong>14.8k</strong>
                    </div>
                  </div>
                  <div className="hero-dashboard-list">
                    <div className="hero-dashboard-row">
                      <span>Neon Pulse</span>
                      <span>Trap</span>
                      <span>132 BPM</span>
                    </div>
                    <div className="hero-dashboard-row">
                      <span>Velvet Run</span>
                      <span>R&B</span>
                      <span>96 BPM</span>
                    </div>
                    <div className="hero-dashboard-row">
                      <span>Night Circuit</span>
                      <span>Drill</span>
                      <span>145 BPM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-stage-badge hero-stage-badge-bottom">
                <strong>Gestiona</strong>
                <span>Sube, edita y presenta tu catálogo con una consola más seria.</span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="app" className="product-strip" {...reveal}>
          <div className="product-strip-copy">
            <span className="section-kicker">Por qué BeatNow</span>
            <h2>Más cerca de la app. Menos marketing vacío.</h2>
            <p>
              La landing tiene que vender una sensación muy concreta: BeatNow se siente actual, enfocado y pensado para una generación que descubre ideas desde el móvil, no desde listados eternos.
            </p>
          </div>

          <div className="product-strip-grid">
            {appReasons.map((item) => (
              <article key={item.index} className="reason-card">
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="demo" className="showcase-section" {...reveal}>
          <div className="showcase-layout">
            <div className="showcase-copy">
              <span className="section-kicker">Experiencia visual</span>
              <h2>Una interfaz oscura, limpia y construida alrededor del producto.</h2>
              <p>
                Inspirada en referencias más premium y tecnológicas, pero enfocada a lo que BeatNow realmente es: una app para crear más rápido y una web para operar el catálogo con claridad.
              </p>
            </div>

            <div className="showcase-dashboard">
              <div className="showcase-dashboard-topbar">
                <span />
                <span />
                <span />
              </div>
              <div className="showcase-dashboard-ui" aria-label="Mockup del dashboard de productores">
                <div className="dashboard-sidebar-mock">
                  <span className="sidebar-dot active" />
                  <span className="sidebar-dot" />
                  <span className="sidebar-dot" />
                  <span className="sidebar-dot" />
                </div>
                <div className="dashboard-main-mock">
                  <div className="dashboard-top-row">
                    <div className="dashboard-title-block">
                      <strong>Producer Dashboard</strong>
                      <span>Catalog overview</span>
                    </div>
                    <div className="dashboard-pill">Upload beat</div>
                  </div>
                  <div className="dashboard-kpi-row">
                    <div className="dashboard-kpi-card">
                      <span>Beats</span>
                      <strong>48</strong>
                    </div>
                    <div className="dashboard-kpi-card">
                      <span>Saves</span>
                      <strong>2.3k</strong>
                    </div>
                    <div className="dashboard-kpi-card">
                      <span>Plays</span>
                      <strong>14.8k</strong>
                    </div>
                  </div>
                  <div className="dashboard-list-card">
                    <div className="dashboard-list-row">
                      <span>Neon Pulse</span>
                      <span>Trap</span>
                      <span>132 BPM</span>
                    </div>
                    <div className="dashboard-list-row">
                      <span>Velvet Run</span>
                      <span>R&B</span>
                      <span>96 BPM</span>
                    </div>
                    <div className="dashboard-list-row">
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

        <motion.section id="para-artistas" className="feature-section" {...reveal}>
          <div className="feature-stack">
            {featureRows.map((feature) => (
              <article key={feature.title} className="feature-panel">
                <div className="feature-copy">
                  <span className="feature-eyebrow">{feature.eyebrow}</span>
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </div>
                <div className="feature-bullets">
                  {feature.bullets.map((bullet) => (
                    <div className="feature-bullet" key={bullet}>
                      <span className="feature-bullet-dot" aria-hidden="true" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="como-funciona" className="flow-section" {...reveal}>
          <div className="section-heading center">
            <span className="section-kicker">Cómo funciona</span>
            <h2>Un flujo simple, rápido y centrado en la canción.</h2>
          </div>

          <div className="flow-grid">
            {flowSteps.map((item) => (
              <article key={item.step} className="flow-card">
                <span className="flow-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="beta" className="beta-section" {...reveal}>
          <div className="beta-copy">
            <span className="section-kicker">Beta privada</span>
            <h2>Entra antes y ayúdanos a pulir la mejor versión de BeatNow.</h2>
            <p>
              Estamos activando acceso progresivo para artistas y productores que realmente trabajan con beats cada semana y pueden validar el producto con contexto real.
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

            <fieldset className="form-field beta-role-field">
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
            <span className="section-kicker">Privacidad</span>
            <h2>Cómo tratamos tus datos</h2>
            <p>
              Solo recogemos la información necesaria para gestionar el acceso a la beta, comunicarnos contigo y mejorar el producto. No vendemos datos a terceros.
            </p>
          </article>

          <article id="terminos" className="legal-card">
            <span className="section-kicker">Términos</span>
            <h2>Uso básico de la plataforma</h2>
            <p>
              El acceso beta está sujeto a disponibilidad y evolución del producto. Cada usuario mantiene la responsabilidad sobre los derechos del contenido que comparte.
            </p>
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
            <a href="#app">App</a>
            <a href="#demo">Demo</a>
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
