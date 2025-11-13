import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';
import Header from '../../Layout/Header/Header';
import logo from '../../assets/Logo.png';
import mobilePreviewVideo from '../../assets/video movil.mp4';
import dashboardPreviewVideo from '../../assets/video dashboard.mp4';


const fadeInUp = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: 'easeOut' },
    viewport: { once: true, amount: 0.2 },
};

const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.7, ease: 'easeOut' },
    viewport: { once: true, amount: 0.2 },
};

const artistBenefits = [
    {
        title: 'Descubre beats deslizando',
        description: 'Explora un feed vertical estilo TikTok con beats frescos cada día. Guarda los que vibren contigo al instante.',
    },
    {
        title: 'Guarda y ordena favoritos',
        description: 'Crea colecciones por proyecto o estado de ánimo para tener tus instrumentales listas cuando llegue la inspiración.',
    },
    {
        title: 'Reproduce sin fricción',
        description: 'Controles simples, loops rápidos y calidad nítida para componer sin interrupciones en el estudio o en la calle.',
    },
    {
        title: 'Escribe letras mientras escuchas',
        description: 'Editor en pantalla dividida para escribir barras sincronizadas con el beat y no perder el ritmo.',
    },
];

const producerBenefits = [
    {
        title: 'Sube beats desde la web',
        description: 'Carga instrumentales en segundos, añade género, BPM y mood para que los artistas te encuentren.',
    },
    {
        title: 'Construye tu perfil',
        description: 'Muestra tu catálogo, bio y enlaces externos para destacar tu marca como productor urbano.',
    },
    {
        title: 'Gana visibilidad real',
        description: 'Tus beats aparecen en el feed de artistas listos para escribir. Cada guardado es una oportunidad.',
    },
    {
        title: 'Estadísticas básicas',
        description: 'Revisa guardados, escuchas y rendimiento general para entender qué vibra con la comunidad.',
    },
];

const demoBlocks = [
    {
        title: 'App móvil BeatNow',
        description: 'Feed vertical, reproductor y editor de letras en una sola pantalla. Perfecta para componer desde el teléfono.',
    },
    {
        title: 'Panel web para productores',
        description: 'Gestiona tu catálogo, actualiza licencias y monitoriza estadísticas desde cualquier navegador.',
    }
];

const flowSteps = [
    {
        step: '01',
        title: 'El productor sube su beat',
        description: 'Carga el instrumental, añade detalles y lo deja listo en el feed.',
    },
    {
        step: '02',
        title: 'El artista lo descubre y lo guarda',
        description: 'Desliza, escucha y marca favoritos en segundos.',
    },
    {
        step: '03',
        title: 'El artista escribe su letra',
        description: 'Abre el editor, sincroniza ideas y comparte avances.',
    },
];

const Landing: React.FC = () => {
    const [selectedRole, setSelectedRole] = React.useState<'artista' | 'productor'>('artista');
    const [email, setEmail] = React.useState('');

    const handleHeroCTA = (role: 'artista' | 'productor') => {
        setSelectedRole(role);
        const section = document.getElementById('beta-form');
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí puedes conectar con tu backend o herramienta de newsletters.
        console.log('Registro beta', { email, role: selectedRole });
        setEmail('');
    };

    return (
        <div className="landing-page" id="inicio">
            <Header />
            <div className="landing-background" aria-hidden="true">
                <div className="orb orb-one" />
                <div className="orb orb-two" />
                <div className="orb orb-three" />
            </div>

            <main className="landing-main">
                <motion.section
                    id="hero"
                    className="hero"
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    transition={fadeInUp.transition}
                    viewport={fadeInUp.viewport}
                >
                    <div className="hero-copy">
                        <h1>
                            BeatNow
                        </h1>
                        <p>
                            Donde artistas urbanos y productores conectan para crear hits.<br></br>
                            Descubre instrumentales deslizando, guarda tus favoritas, escribe letras en segundos y colabora con
                            productores que buscan voces frescas.
                        </p>
                        <div className="hero-cta">
                            <button type="button" className="cta primary" onClick={() => handleHeroCTA('artista')}>
                                Soy artista – Unirme a la beta
                            </button>
                            <button type="button" className="cta secondary" onClick={() => handleHeroCTA('productor')}>
                                Soy productor – Subir beats
                            </button>
                        </div>
                        <ul className="hero-highlights">
                            <li>En menos de 5 segundos sabes qué es BeatNow y cómo te ayuda.</li>
                            <li>Una plataforma hecha para la escena urbana latina.</li>
                            <li>Regístrate hoy y sé parte de la primera generación.</li>
                        </ul>
                    </div>
                    <div className="hero-visual">
                        <span className="hero-visual-glow hero-visual-glow-one" aria-hidden="true" />
                        <span className="hero-visual-glow hero-visual-glow-two" aria-hidden="true" />
                        <div className="mockup-stack">
                            <div className="mockup-card mockup-card--mobile">
                                <span className="mockup-label">Vista previa móvil</span>
                                <div className="mockup-device mockup-device--mobile">
                                    <video
                                        src={mobilePreviewVideo}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="mockup-video"
                                    />
                                </div>
                                <div className="mockup-overlay" />
                            </div>
                            <div className="mockup-card mockup-card--desktop">
                                <span className="mockup-label">Vista previa productores</span>
                                <div className="mockup-device mockup-device--desktop">
                                    <video
                                        src={dashboardPreviewVideo}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="mockup-video"
                                    />
                                </div>
                                <div className="mockup-overlay" />
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    id="para-artistas"
                    className="benefits-section"
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    transition={fadeInUp.transition}
                    viewport={fadeInUp.viewport}
                >
                    <div className="section-heading">
                        <span className="section-badge">Para artistas</span>
                        <h2>Todo lo que necesitas para escribir más y mejor</h2>
                        <p>
                            BeatNow te entrega inspiración constante y herramientas diseñadas para que plasmes tus ideas sin
                            fricción.
                        </p>
                    </div>
                    <div className="grid">
                        {artistBenefits.map((benefit) => (
                            <article className="benefit-card" key={benefit.title}>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </article>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="para-productores"
                    className="benefits-section"
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    transition={fadeInUp.transition}
                    viewport={fadeInUp.viewport}
                >
                    <div className="section-heading">
                        <span className="section-badge alt">Para productores</span>
                        <h2>Haz que tus instrumentales encuentren su voz</h2>
                        <p>
                            BeatNow potencia a los beatmakers urbanos que quieren visibilidad, comunidad y datos reales sobre sus beats.
                        </p>
                    </div>
                    <div className="grid">
                        {producerBenefits.map((benefit) => (
                            <article className="benefit-card" key={benefit.title}>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </article>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="demo"
                    className="demo-section"
                    initial={fadeIn.initial}
                    whileInView={fadeIn.whileInView}
                    transition={fadeIn.transition}
                    viewport={fadeIn.viewport}
                >
                    <div className="section-heading center">
                        <span className="section-badge">Demo visual</span>
                        <h2>Un vistazo rápido a BeatNow</h2>
                        <p>
                            Diseñamos una experiencia moderna, oscura y con acentos neón para que tus ideas brillen. Estos son los puntos
                            clave del MVP.
                        </p>
                    </div>
                    <div className="demo-grid">
                        {demoBlocks.map((block) => (
                            <article className="demo-card" key={block.title}>
                                <h3>{block.title}</h3>
                                <p>{block.description}</p>
                                <span className="demo-tag">Preview</span>
                            </article>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="como-funciona"
                    className="flow-section"
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    transition={fadeInUp.transition}
                    viewport={fadeInUp.viewport}
                >
                    <div className="section-heading center">
                        <span className="section-badge alt">Cómo funciona</span>
                        <h2>Un flujo simple para crear colaboraciones reales</h2>
                    </div>
                    <div className="flow-grid">
                        {flowSteps.map((step) => (
                            <article className="flow-card" key={step.title}>
                                <span className="flow-step">{step.step}</span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </article>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="beta"
                    className="beta-section"
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    transition={fadeInUp.transition}
                    viewport={fadeInUp.viewport}
                >
                    <div className="beta-content">
                        <div className="beta-copy">
                            <span className="section-badge">MVP / Beta cerrada</span>
                            <h2>Estamos buscando a los primeros artistas y productores en probar BeatNow</h2>
                            <p>
                                Serás de los primeros en acceder al MVP, enviar feedback directo al equipo y asegurar tu espacio cuando
                                lancemos la versión pública.
                            </p>
                            <ul>
                                <li>Acceso anticipado a nuevas funciones.</li>
                                <li>Canal directo con el equipo para compartir ideas.</li>
                                <li>Visibilidad destacada cuando lancemos oficialmente.</li>
                            </ul>
                        </div>
                        <form id="beta-form" className="beta-form" onSubmit={handleSubmit}>
                            <h3>Únete a la beta</h3>
                            <p>Déjanos tu email y dinos si eres artista o productor. Te avisaremos cuando abramos cupo.</p>
                            <label className="form-field" htmlFor="beta-email">
                                Email
                                <input
                                    id="beta-email"
                                    type="email"
                                    name="email"
                                    placeholder="tucorreo@beatnow.com"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </label>
                            <fieldset className="form-field">
                                <legend>Soy</legend>
                                <label>
                                    <input
                                        type="radio"
                                        name="role"
                                        value="artista"
                                        checked={selectedRole === 'artista'}
                                        onChange={() => setSelectedRole('artista')}
                                    />
                                    Artista
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="role"
                                        value="productor"
                                        checked={selectedRole === 'productor'}
                                        onChange={() => setSelectedRole('productor')}
                                    />
                                    Productor
                                </label>
                            </fieldset>
                            <button type="submit" className="cta primary full">Unirme a la beta</button>
                            <span className="form-footnote">Prometemos cero spam. Solo noticias de BeatNow.</span>
                        </form>
                    </div>
                </motion.section>
            </main>

            <footer className="landing-footer">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img src={logo} alt="BeatNow" />
                        <p>
                            BeatNow impulsa la escena urbana conectando a quienes crean beats con quienes rompen el micrófono.
                        </p>
                    </div>
                    <div className="footer-links">
                        <h4>Contacto</h4>
                        <a href="mailto:hola@beatnow.app">hola@beatnow.app</a>
                        <a href="tel:+34999999999">+34 999 999 999</a>
                    </div>
                    <div className="footer-links">
                        <h4>Políticas</h4>
                        <a href="#">Política de privacidad</a>
                        <a href="#">Términos de uso</a>
                    </div>
                    <div className="footer-links">
                        <h4>Redes</h4>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            Instagram
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                            TikTok
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            X (Twitter)
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">© 2025 BeatNow. Todos los derechos reservados.</div>
            </footer>
        </div>
    );
};

export default Landing;
