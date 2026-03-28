import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';
import Header from '../../Layout/Header/Header';
import logo from '../../assets/Logo.png';
import mobilePreviewVideo from '../../assets/video movil.mp4';
import dashboardPreviewVideo from '../../assets/video dashboard.mp4';
import config from '../../config/apiConfig.json';

const fadeInUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
};

const artistBenefits = [
  {
    title: 'Descubre beats deslizando',
    description: 'Un feed vertical adictivo para escuchar ideas nuevas en segundos y encontrar el mood correcto antes de que se te vaya la inspiración.',
  },
  {
    title: 'Guarda los que encajan contigo',
    description: 'Crea una librería personal de favoritos para volver a los beats correctos cuando entres a grabar o escribir.',
  },
  {
    title: 'Escribe mientras escuchas',
    description: 'BeatNow une playback y escritura para que el proceso creativo ocurra en una sola experiencia continua.',
  },
];

const producerBenefits = [
  {
    title: 'Sube tu catálogo con contexto',
    description: 'Cada beat se publica con género, BPM, mood e instrumentos para mejorar descubrimiento y conversión.',
  },
  {
    title: 'Haz visible tu firma sonora',
    description: 'Tu perfil funciona como escaparate: catálogo, identidad y rendimiento reunidos en un mismo sitio.',
  },
  {
    title: 'Entiende qué conecta',
    description: 'Visualiza guardados, escuchas y engagement para detectar qué sonido está moviendo a los artistas.',
  },
];

const featureColumns = [
  {
    eyebrow: 'Para artistas',
    title: 'Menos búsqueda. Más canciones.',
    description: 'La experiencia móvil está pensada para entrar rápido en estado creativo: escuchar, seleccionar, guardar y escribir sin perder foco.',
    points: ['Feed vertical inspirado en hábitos reales', 'Guardados rápidos para volver a la idea correcta', 'Editor de letras integrado en el flujo'],
  },
  {
    eyebrow: 'Para productores',
    title: 'Tu catálogo presentado como producto.',
    description: 'El panel web hace que subir y gestionar beats se sienta profesional, ordenado y preparado para escalar con tu carrera.',
    points: ['Subida limpia con metadata útil', 'Panel de catálogo y edición continua', 'Estadísticas para tomar decisiones'],
  },
];

const showcaseCards = [
  {
    label: 'Mobile Experience',
    title: 'Una interfaz hecha para escuchar con intención',
    description: 'Pantallas inmersivas, gesto natural y foco absoluto en el beat. Todo en móvil respira velocidad y claridad.',
  },
  {
    label: 'Producer Console',
    title: 'Un panel web listo para operar tu catálogo',
    description: 'Desde el dashboard puedes presentar tus beats como una colección seria, no como una carpeta perdida entre archivos.',
  },
];

const flowSteps = [
  {
    step: '01',
    title: 'El productor publica',
    description: 'Sube el beat, define el contexto correcto y deja el catálogo listo para descubrimiento.',
  },
  {
    step: '02',
    title: 'El artista descubre',
    description: 'Escucha en el feed, compara vibes y guarda el beat que realmente dispara una idea.',
  },
  {
    step: '03',
    title: 'La canción empieza',
    description: 'La letra nace sobre el beat adecuado, sin fricción, sin cambiar de herramienta y sin romper el momentum.',
  },
];

const stats = [
  { value: '2 experiencias', label: 'Una para artistas y otra para productores' },
  { value: '1 flujo', label: 'Descubrir, guardar, escribir y volver' },
  { value: '0 fricción', label: 'Menos cambios de contexto en la creación' },
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
        <div className="grid-glow" />
      </div>

      <main className="landing-main">
        <motion.section className="hero hero-premium" {...fadeInUp}>
          <div className="hero-copy">
            <span className="eyebrow-chip">Beat discovery, writing and producer growth</span>
            <h1>La landing que tu producto merece empieza por una idea clara.</h1>
            <p className="hero-lead">
              BeatNow conecta a artistas y productores en una experiencia moderna donde descubrir beats, guardarlos y empezar una canción se siente inmediato, limpio y profesional.
            </p>

            <div className="hero-actions">
              <a className="cta primary" href="#beta">
                Entrar en la beta
              </a>
              <a className="cta secondary" href="#experience">
                Ver experiencia
              </a>
            </div>

            <div className="hero-proof">
              <div className="hero-proof-card">
                <span>Para artistas</span>
                <strong>Feed estilo TikTok para descubrir y escribir</strong>
              </div>
              <div className="hero-proof-card">
                <span>Para productores</span>
                <strong>Panel web para catálogo, edición y estadísticas</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual hero-stage">
            <div className="hero-stage-panel hero-stage-panel--summary">
              <div className="stage-topline">
                <span>BeatNow</span>
                <span>Creative infrastructure</span>
              </div>
              <div className="stage-stat-grid">
                {stats.map((item) => (
                  <article key={item.label} className="stage-stat-card">
                    <strong>{item.value}</strong>
                    <p>{item.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-device-cluster">
              <div className="device-shell device-shell--mobile">
                <div className="device-chrome">
                  <span />
                  <span />
                  <span />
                </div>
                <video
                  src={mobilePreviewVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="mockup-video"
                  aria-label="Vista previa móvil de BeatNow"
                />
              </div>

              <div className="device-shell device-shell--desktop">
                <div className="device-toolbar">
                  <span />
                  <span />
                  <span />
                </div>
                <video
                  src={dashboardPreviewVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="mockup-video"
                  aria-label="Vista previa del panel web para productores"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="experience" className="story-strip" {...fadeInUp}>
          <div className="story-strip-copy">
            <span className="section-badge">La promesa</span>
            <h2>Una plataforma para el momento exacto en el que nace una canción.</h2>
          </div>
          <div className="story-strip-text">
            <p>
              BeatNow no intenta ser una red social más. Quiere resolver una fricción muy concreta: ayudar a que artistas encuentren el beat correcto más rápido y que productores lo presenten con la claridad que su trabajo merece.
            </p>
          </div>
        </motion.section>

        <motion.section id="para-artistas" className="feature-columns" {...fadeInUp}>
          {featureColumns.map((column) => (
            <article className="feature-column-card" key={column.title}>
              <span className="feature-column-eyebrow">{column.eyebrow}</span>
              <h2>{column.title}</h2>
              <p>{column.description}</p>
              <div className="feature-list">
                {column.points.map((point) => (
                  <div className="feature-list-item" key={point}>
                    <span className="feature-bullet" aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </motion.section>

        <motion.section className="benefits-showcase" {...fadeInUp}>
          <div className="section-heading">
            <span className="section-badge alt">Qué aporta BeatNow</span>
            <h2>Dos experiencias distintas. Una sola dirección de producto.</h2>
            <p>
              El producto está diseñado con una lógica clara: en móvil se crea el impulso, en web se organiza y se opera el catálogo.
            </p>
          </div>

          <div className="showcase-grid">
            <div className="showcase-column">
              {artistBenefits.map((benefit) => (
                <article className="benefit-card premium" key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>

            <div className="showcase-center-card">
              <div className="showcase-center-top">
                <span className="showcase-mini-label">Product vision</span>
                <h3>Una experiencia que se siente enfocada, sobria y lista para escalar.</h3>
                <p>
                  Menos ruido visual, más jerarquía, más detalle y una presentación que transmite que BeatNow es un producto serio para gente que crea de verdad.
                </p>
              </div>
              <div className="showcase-center-metrics">
                <div>
                  <strong>Scroll</strong>
                  <span>para descubrir</span>
                </div>
                <div>
                  <strong>Save</strong>
                  <span>para volver</span>
                </div>
                <div>
                  <strong>Write</strong>
                  <span>para empezar</span>
                </div>
              </div>
            </div>

            <div className="showcase-column">
              {producerBenefits.map((benefit) => (
                <article className="benefit-card premium alt" key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="demo" className="demo-section premium-demo" {...fadeInUp}>
          <div className="section-heading center">
            <span className="section-badge">Preview</span>
            <h2>La experiencia se ve mejor cuando cada pantalla cuenta algo.</h2>
            <p>
              No se trata solo de enseñar pantallas: se trata de mostrar por qué el producto se siente coherente en cada punto del flujo.
            </p>
          </div>
          <div className="demo-grid premium-demo-grid">
            {showcaseCards.map((block, index) => (
              <article className="demo-card premium-demo-card" key={block.title}>
                <span className="demo-tag">{block.label}</span>
                <h3>{block.title}</h3>
                <p>{block.description}</p>
                <div className={`demo-visual demo-visual-${index + 1}`}>
                  <div className="demo-visual-line demo-visual-line-wide" />
                  <div className="demo-visual-line" />
                  <div className="demo-visual-chart" />
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="como-funciona" className="flow-section" {...fadeInUp}>
          <div className="section-heading center">
            <span className="section-badge alt">Cómo funciona</span>
            <h2>Un flujo compacto para pasar del descubrimiento a la canción.</h2>
          </div>
          <div className="flow-grid premium-flow-grid">
            {flowSteps.map((step) => (
              <article className="flow-card premium-flow-card" key={step.title}>
                <span className="flow-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="beta" className="beta-section premium-beta" {...fadeInUp}>
          <div className="beta-content premium-beta-content">
            <div className="beta-copy">
              <span className="section-badge">Beta privada</span>
              <h2>Entra pronto y ayúdanos a definir la mejor versión de BeatNow.</h2>
              <p>
                Estamos abriendo acceso con criterio, priorizando artistas y productores que realmente crean cada semana y necesitan una experiencia mejor para trabajar sobre beats.
              </p>
              <div className="beta-bullets">
                <div className="beta-bullet-card">
                  <strong>Acceso guiado</strong>
                  <span>Te llevamos al flujo que más encaja contigo.</span>
                </div>
                <div className="beta-bullet-card">
                  <strong>Contexto real</strong>
                  <span>Nos interesa aprender de quienes usan beats de verdad.</span>
                </div>
                <div className="beta-bullet-card">
                  <strong>Iteración rápida</strong>
                  <span>La beta está pensada para mejorar el producto con feedback útil.</span>
                </div>
              </div>
            </div>

            <form className="beta-form premium-beta-form" onSubmit={handleBetaSubmit}>
              <h3>Quiero entrar en la beta</h3>
              <p>Déjanos tu perfil y te llevamos al registro con el contexto preparado.</p>

              <label className="form-field">
                Correo profesional
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
                <div className="role-grid">
                  <label className={`role-card ${selectedRole === 'artista' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="role"
                      value="artista"
                      checked={selectedRole === 'artista'}
                      onChange={() => setSelectedRole('artista')}
                    />
                    <span>Artista</span>
                    <small>Descubrir beats y escribir más rápido</small>
                  </label>

                  <label className={`role-card ${selectedRole === 'productor' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="role"
                      value="productor"
                      checked={selectedRole === 'productor'}
                      onChange={() => setSelectedRole('productor')}
                    />
                    <span>Productor</span>
                    <small>Subir, presentar y medir tu catálogo</small>
                  </label>
                </div>
              </fieldset>

              <button type="submit" className="cta primary full">
                Continuar al registro
              </button>
              <p className="form-footnote">
                Al continuar aceptas nuestra política de privacidad y términos de uso resumidos.
              </p>
            </form>
          </div>
        </motion.section>

        <section id="privacidad" className="legal-section">
          <div className="legal-card">
            <span className="section-badge alt">Privacidad</span>
            <h2>Cómo tratamos tus datos</h2>
            <p>
              Recopilamos solo la información necesaria para gestionar tu acceso a la beta, comunicarnos contigo y mejorar el producto. No vendemos datos a terceros y puedes solicitar actualización o eliminación escribiendo a hola@beatnow.app.
            </p>
          </div>
          <div className="legal-card">
            <span className="section-badge alt">Términos</span>
            <h2>Uso básico de la plataforma</h2>
            <p>
              El acceso beta está sujeto a disponibilidad, evolución continua del producto y uso legítimo del contenido subido. Cada usuario mantiene la responsabilidad sobre los derechos del material que comparte dentro de BeatNow.
            </p>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="BeatNow" />
            <p>BeatNow impulsa la escena urbana conectando a quienes crean beats con quienes empiezan canciones sobre ellos.</p>
          </div>
          <div className="footer-links">
            <h4>Contacto</h4>
            <a href="mailto:hola@beatnow.app">hola@beatnow.app</a>
            <a href="tel:+34692903572">+34 692903572</a>
          </div>
          <div className="footer-links">
            <h4>Producto</h4>
            <a href="#para-artistas">Para artistas</a>
            <a href="#para-productores">Para productores</a>
            <a href="#beta">Beta privada</a>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <a href="#privacidad">Política de privacidad</a>
            <a href="#terminos">Términos de uso</a>
          </div>
        </div>
        <div className="footer-bottom">© 2026 BeatNow. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
};

export default Landing;
