import Header from '../../Layout/Header/Header';
import { WEBAPP_URL } from '../../config/apiConfig';
import { useLanguage } from '../../i18n';

const copy: Record<string, string> = {
  'Saltar al contenido': 'Skip to content', 'Beta abierta para artistas y productores': 'Open beta for artists and producers',
  'El beat que convierte una idea en canción.': 'The beat that turns an idea into a song.',
  'Descubre y guarda beats como artista. Publica y gestiona tu catálogo como productor. Todo en un espacio creado para que la música avance.': 'Discover and save beats as an artist. Publish and manage your catalogue as a producer. Everything in one place, built to keep music moving.',
  'Crear mi cuenta': 'Create account', 'Ver el producto': 'Explore the product', 'Registro gratuito · Acceso beta': 'Free sign-up · Beta access',
  'Vista previa de BeatNow': 'BeatNow preview', 'Mi catálogo': 'My catalogue', '+ Subir beat': '+ Upload beat', 'BUENOS DÍAS': 'GOOD MORNING', 'Tu música, en orden.': 'Your music, organized.', '12 publicados': '12 published', 'Reproducciones': 'Plays', 'últimos 30 días': 'last 30 days', 'Guardados': 'Saves', 'Beats recientes': 'Recent beats', 'Ver catálogo': 'View catalogue', 'Oscuro': 'Dark', 'Melódico': 'Melodic',
  'Qué ofrece BeatNow': 'What BeatNow offers', 'DESCUBRE': 'DISCOVER', 'ESCUCHA': 'LISTEN', 'GUARDA': 'SAVE', 'PUBLICA': 'PUBLISH', 'CONECTA': 'CONNECT',
  'PARA ARTISTAS': 'FOR ARTISTS', 'Menos tiempo buscando.': 'Less time searching.', 'Más tiempo creando.': 'More time creating.', 'BeatNow pone cada beat en contexto para que puedas decidir rápido y conservar lo que inspira una canción.': 'BeatNow puts every beat in context so you can decide quickly and save what inspires a song.',
  'Descubre sin perder el foco': 'Discover without losing focus', 'Explora beats por sonido, género y energía en un feed pensado para escuchar.': 'Explore beats by sound, genre and energy in a feed made for listening.', 'Guarda tus mejores ideas': 'Save your best ideas', 'Reúne favoritos y vuelve a ellos cuando estés listo para escribir.': 'Collect favourites and return when you are ready to write.', 'Encuentra a quien está detrás': 'Meet the producer behind the beat', 'Conoce al productor de cada beat y descubre más de su catálogo.': 'Meet each beat’s producer and explore more of their catalogue.',
  'PARA PRODUCTORES': 'FOR PRODUCERS', 'Tu catálogo merece algo mejor que una carpeta.': 'Your catalogue deserves more than a folder.', 'Presenta cada beat con claridad y gestiona todo desde un dashboard sencillo, sin ruido ni herramientas que sobran.': 'Present every beat clearly and manage everything from a simple dashboard, without clutter or unnecessary tools.', 'Publicar mis beats': 'Publish my beats', 'Publica con contexto': 'Publish with context', 'Añade BPM, género, mood e instrumentos para que tu beat llegue a quien lo busca.': 'Add BPM, genre, mood and instruments so your beat reaches the right people.', 'Cuida tu catálogo': 'Take care of your catalogue', 'Edita y organiza tus beats desde un espacio diseñado para productores.': 'Edit and organize your beats in a space designed for producers.', 'Entiende qué conecta': 'See what resonates', 'Consulta la actividad de tu catálogo y detecta qué despierta interés.': 'Track catalogue activity and see what sparks interest.',
  'CÓMO FUNCIONA': 'HOW IT WORKS', 'Del beat a la conexión.': 'From beat to connection.', 'Publica': 'Publish', 'El productor prepara el beat y completa su información.': 'The producer prepares the beat and adds its details.', 'Descubre': 'Discover', 'El artista escucha, compara y guarda lo que encaja con su idea.': 'The artist listens, compares and saves what fits their idea.', 'Conecta': 'Connect', 'Cada beat abre una puerta para descubrir al productor y su sonido.': 'Every beat opens a door to discover its producer and sound.',
  'Tu próximo tema puede empezar aquí.': 'Your next track can start here.', 'Crea tu cuenta, elige tu perfil y empieza a explorar BeatNow.': 'Create an account, choose your profile and start exploring BeatNow.', 'El punto de encuentro entre beats, artistas y productores.': 'Where beats, artists and producers meet.', 'Enlaces del pie': 'Footer links', 'Contacto': 'Contact', 'Beta en evolución': 'Beta in progress',
};
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
  const { language } = useLanguage();
  const t = (value: string) => language === 'en' ? (copy[value] ?? value) : value;
  return (
    <div className="landing-page" id="inicio">
      <a className="skip-link" href="#contenido">{t('Saltar al contenido')}</a>
      <Header />

      <main id="contenido">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker"><span aria-hidden="true" /> {t('Beta abierta para artistas y productores')}</p>
            <h1 id="hero-title">{t('El beat que convierte una idea en canción.')}</h1>
            <p className="hero-lead">
              {t('Descubre y guarda beats como artista. Publica y gestiona tu catálogo como productor. Todo en un espacio creado para que la música avance.')}
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={WEBAPP_URL}>
                {t('Crear mi cuenta')} <ArrowIcon />
              </a>
              <a className="button button-secondary" href="#producto">{t('Ver el producto')}</a>
            </div>
            <p className="hero-detail">{t('Registro gratuito · Acceso beta')}</p>
          </div>

          <div className="product-composition" aria-label={t('Vista previa de BeatNow')}>
            <div className="composition-glow" aria-hidden="true" />
            <div className="dashboard-preview" aria-hidden="true">
              <div className="preview-topbar">
                <span className="preview-logo">B</span>
                <span>{t('Mi catálogo')}</span>
                <span className="preview-action">{t('+ Subir beat')}</span>
              </div>
              <div className="preview-heading">
                <div><small>{t('BUENOS DÍAS')}</small><strong>{t('Tu música, en orden.')}</strong></div>
                <span className="status-pill">{t('12 publicados')}</span>
              </div>
              <div className="stat-row">
                <div><small>{t('Reproducciones')}</small><strong>1.284</strong><span>{t('últimos 30 días')}</span></div>
                <div><small>{t('Guardados')}</small><strong>96</strong><span>{t('últimos 30 días')}</span></div>
              </div>
              <div className="catalog-list">
                <div className="catalog-title"><strong>{t('Beats recientes')}</strong><span>{t('Ver catálogo')}</span></div>
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
              <div className="phone-tags"><span>Trap</span><span>{t('Oscuro')}</span><span>{t('Melódico')}</span></div>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label={t('Qué ofrece BeatNow')}>
          <span>{t('DESCUBRE')}</span><i aria-hidden="true" />
          <span>{t('ESCUCHA')}</span><i aria-hidden="true" />
          <span>{t('GUARDA')}</span><i aria-hidden="true" />
          <span>{t('PUBLICA')}</span><i aria-hidden="true" />
          <span>{t('CONECTA')}</span>
        </section>

        <section id="producto" className="content-section section-shell" aria-labelledby="artists-title">
          <div className="section-intro">
            <p className="section-label">{t('PARA ARTISTAS')}</p>
            <h2 id="artists-title">{t('Menos tiempo buscando.')}<br />{t('Más tiempo creando.')}</h2>
            <p>{t('BeatNow pone cada beat en contexto para que puedas decidir rápido y conservar lo que inspira una canción.')}</p>
          </div>
          <div className="feature-list">
            {artistBenefits.map(([number, title, copy]) => (
              <article className="feature-row" key={number}>
                <span className="feature-number">{number}</span>
                <div><h3>{t(title)}</h3><p>{t(copy)}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="productores" className="producer-section">
          <div className="section-shell producer-grid">
            <div className="producer-copy">
              <p className="section-label">{t('PARA PRODUCTORES')}</p>
              <h2>{t('Tu catálogo merece algo mejor que una carpeta.')}</h2>
              <p>{t('Presenta cada beat con claridad y gestiona todo desde un dashboard sencillo, sin ruido ni herramientas que sobran.')}</p>
              <a className="text-link" href={WEBAPP_URL}>{t('Publicar mis beats')} <ArrowIcon /></a>
            </div>
            <div className="producer-list">
              {producerBenefits.map(([title, copy], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <div><h3>{t(title)}</h3><p>{t(copy)}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="flow-section section-shell" aria-labelledby="flow-title">
          <div className="section-intro compact">
            <p className="section-label">{t('CÓMO FUNCIONA')}</p>
            <h2 id="flow-title">{t('Del beat a la conexión.')}</h2>
          </div>
          <ol className="flow-list">
            {flow.map(([title, copy], index) => (
              <li key={title}><span>{index + 1}</span><h3>{t(title)}</h3><p>{t(copy)}</p></li>
            ))}
          </ol>
        </section>

        <section className="final-cta section-shell" aria-labelledby="cta-title">
          <p className="section-label">BEATNOW BETA</p>
          <h2 id="cta-title">{t('Tu próximo tema puede empezar aquí.')}</h2>
          <p>{t('Crea tu cuenta, elige tu perfil y empieza a explorar BeatNow.')}</p>
          <a className="button button-light" href={WEBAPP_URL}>{t('Crear mi cuenta')} <ArrowIcon /></a>
        </section>
      </main>

      <footer className="footer section-shell">
        <div className="footer-main">
          <a className="footer-brand" href="#inicio" aria-label="BeatNow, volver al inicio">
            <span aria-hidden="true">B</span><strong>BeatNow</strong>
          </a>
          <p>{t('El punto de encuentro entre beats, artistas y productores.')}</p>
          <nav aria-label={t('Enlaces del pie')}>
            <a href="#producto">{t('PARA ARTISTAS')}</a>
            <a href="#productores">{t('PARA PRODUCTORES')}</a>
            <a href="#como-funciona">{t('CÓMO FUNCIONA')}</a>
            <a href="mailto:hola@beatnow.app">{t('Contacto')}</a>
          </nav>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} BeatNow</span>
          <span>{t('Beta en evolución')}</span>
        </div>
      </footer>
    </div>
  );
}
