import Header from '../../Layout/Header/Header';
import { WEBAPP_URL } from '../../config/apiConfig';
import './LandingPage.css';

const artistBenefits = [
  ['01', 'Descubre sin perder el foco', 'Explora beats por sonido, género y energía en un feed pensado para escuchar.'],
  ['02', 'Guarda tus mejores ideas', 'Reúne favoritos y vuelve a ellos cuando estés listo para escribir.'],
  ['03', 'Encuentra a quien está detrás', 'Conoce al productor de cada beat y descubre más de su catálogo.'],
];

const producerBenefits = [
  ['Publica con contexto', 'Añade BPM, género, mood e instrumentos para que tu beat llegue a quien lo busca.'],
  ['Cuida tu catálogo', 'Edita y organiza tus beats desde un espacio diseñado para productores.'],
  ['Entiende qué conecta', 'Consulta la actividad de tu catálogo y detecta qué despierta interés.'],
];

const flow = [
  ['Publica', 'El productor prepara el beat y completa su información.'],
  ['Descubre', 'El artista escucha, compara y guarda lo que encaja con su idea.'],
  ['Conecta', 'Cada beat abre una puerta para descubrir al productor y su sonido.'],
];

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18">
    <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
  </svg>
);

const PlayIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
    <path d="m9 7 8 5-8 5V7Z" fill="currentColor" />
  </svg>
);

export default function LandingPage() {
  return (
    <div className="landing-page" id="inicio">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />

      <main id="contenido">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker"><span aria-hidden="true" /> Beta abierta para artistas y productores</p>
            <h1 id="hero-title">El beat que convierte una idea en canción.</h1>
            <p className="hero-lead">
              Descubre y guarda beats como artista. Publica y gestiona tu catálogo como productor.
              Todo en un espacio creado para que la música avance.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={WEBAPP_URL}>
                Crear mi cuenta <ArrowIcon />
              </a>
              <a className="button button-secondary" href="#producto">Ver el producto</a>
            </div>
            <p className="hero-detail">Registro gratuito · Acceso beta</p>
          </div>

          <div className="product-composition" aria-label="Vista previa de BeatNow">
            <div className="composition-glow" aria-hidden="true" />
            <div className="dashboard-preview" aria-hidden="true">
              <div className="preview-topbar">
                <span className="preview-logo">B</span>
                <span>Mi catálogo</span>
                <span className="preview-action">+ Subir beat</span>
              </div>
              <div className="preview-heading">
                <div><small>BUENOS DÍAS</small><strong>Tu música, en orden.</strong></div>
                <span className="status-pill">12 publicados</span>
              </div>
              <div className="stat-row">
                <div><small>Reproducciones</small><strong>1.284</strong><span>últimos 30 días</span></div>
                <div><small>Guardados</small><strong>96</strong><span>últimos 30 días</span></div>
              </div>
              <div className="catalog-list">
                <div className="catalog-title"><strong>Beats recientes</strong><span>Ver catálogo</span></div>
                <div className="track-row"><span className="cover cover-one" /><strong>Sin gravedad</strong><span>Trap · 142 BPM</span><i>•••</i></div>
                <div className="track-row"><span className="cover cover-two" /><strong>Otra noche</strong><span>R&B · 94 BPM</span><i>•••</i></div>
                <div className="track-row"><span className="cover cover-three" /><strong>Distrito</strong><span>Drill · 138 BPM</span><i>•••</i></div>
              </div>
            </div>

            <div className="phone-preview" aria-hidden="true">
              <div className="phone-header"><span>9:41</span><strong>beatnow</strong><span>•••</span></div>
              <div className="phone-cover">
                <span className="cover-label">DARK TRAP</span>
                <span className="cover-mark">BN</span>
              </div>
              <div className="phone-track-copy"><div><strong>Sin gravedad</strong><span>nvrth · 142 BPM</span></div><button tabIndex={-1}><PlayIcon /></button></div>
              <div className="waveform">{Array.from({ length: 22 }).map((_, index) => <i key={index} />)}</div>
              <div className="phone-tags"><span>Trap</span><span>Oscuro</span><span>Melódico</span></div>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Qué ofrece BeatNow">
          <span>DESCUBRE</span><i aria-hidden="true" />
          <span>ESCUCHA</span><i aria-hidden="true" />
          <span>GUARDA</span><i aria-hidden="true" />
          <span>PUBLICA</span><i aria-hidden="true" />
          <span>CONECTA</span>
        </section>

        <section id="producto" className="content-section section-shell" aria-labelledby="artists-title">
          <div className="section-intro">
            <p className="section-label">PARA ARTISTAS</p>
            <h2 id="artists-title">Menos tiempo buscando.<br />Más tiempo creando.</h2>
            <p>BeatNow pone cada beat en contexto para que puedas decidir rápido y conservar lo que inspira una canción.</p>
          </div>
          <div className="feature-list">
            {artistBenefits.map(([number, title, copy]) => (
              <article className="feature-row" key={number}>
                <span className="feature-number">{number}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="productores" className="producer-section">
          <div className="section-shell producer-grid">
            <div className="producer-copy">
              <p className="section-label">PARA PRODUCTORES</p>
              <h2>Tu catálogo merece algo mejor que una carpeta.</h2>
              <p>Presenta cada beat con claridad y gestiona todo desde un dashboard sencillo, sin ruido ni herramientas que sobran.</p>
              <a className="text-link" href={WEBAPP_URL}>Publicar mis beats <ArrowIcon /></a>
            </div>
            <div className="producer-list">
              {producerBenefits.map(([title, copy], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="flow-section section-shell" aria-labelledby="flow-title">
          <div className="section-intro compact">
            <p className="section-label">CÓMO FUNCIONA</p>
            <h2 id="flow-title">Del beat a la conexión.</h2>
          </div>
          <ol className="flow-list">
            {flow.map(([title, copy], index) => (
              <li key={title}><span>{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>
            ))}
          </ol>
        </section>

        <section className="final-cta section-shell" aria-labelledby="cta-title">
          <p className="section-label">BEATNOW BETA</p>
          <h2 id="cta-title">Tu próximo tema puede empezar aquí.</h2>
          <p>Crea tu cuenta, elige tu perfil y empieza a explorar BeatNow.</p>
          <a className="button button-light" href={WEBAPP_URL}>Crear mi cuenta <ArrowIcon /></a>
        </section>
      </main>

      <footer className="footer section-shell">
        <div className="footer-main">
          <a className="footer-brand" href="#inicio" aria-label="BeatNow, volver al inicio">
            <span aria-hidden="true">B</span><strong>BeatNow</strong>
          </a>
          <p>El punto de encuentro entre beats, artistas y productores.</p>
          <nav aria-label="Enlaces del pie">
            <a href="#producto">Para artistas</a>
            <a href="#productores">Para productores</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="mailto:hola@beatnow.app">Contacto</a>
          </nav>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} BeatNow</span>
          <span>Beta en evolución</span>
        </div>
      </footer>
    </div>
  );
}
