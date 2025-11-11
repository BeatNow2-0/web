// src/Screens/Landing Page/LandingPage.tsx

import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';
import Header from '../../Layout/Header/Header';
import logo from '../../assets/Logo.png';
import studio from '../../assets/Studio 2.jpeg';
import qr from '../../assets/qrbeatnow.png';
import { buildApiUrl } from '../../config/apiConfig';

const fadeInUp = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 },
};

const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
    viewport: { once: true, amount: 0.2 },
};

// === NUEVO CONTENIDO: copia alineada con el propósito real de BeatNow ===
const featureHighlights = [
    {
        title: 'Feed infinito tipo TikTok',
        description:
            'Desliza y descubre instrumentales rápidamente. Alterna entre “Para ti” y “Siguiendo” y guarda lo que te gusta.',
    },
    {
        title: 'Búsqueda y filtros avanzados',
        description:
            'Refina por género, precio, BPM, mood e instrumentos. Activa y elimina filtros al vuelo para afinar resultados.',
    },
    {
        title: 'Gestor de letras vinculado a beats',
        description:
            'Escribe y guarda letras asociándolas al beat. Recupera borradores y versiones sin perder el hilo creativo.',
    },
    {
        title: 'Reproductor integrado',
        description:
            'Compón sobre el beat con controles de play/pausa, seek y salto de patrones mientras escribes.',
    },
    {
        title: 'Modo Teleprompter',
        description:
            'Configura patrones al tempo del beat y canta sin tocar la pantalla. Ideal para ensayos y grabaciones.',
    },
    {
        title: 'Espacio equitativo para productores y artistas',
        description:
            'Los productores suben sus bases (web); los artistas descubren, practican y conectan desde el móvil.',
    },
];

const workflowSteps = [
    {
        step: '01',
        title: 'Explora y filtra',
        description: 'Desliza en el feed infinito o usa búsqueda con filtros (género, BPM, mood, precio, instrumentos).',
    },
    {
        step: '02',
        title: 'Escribe y practica',
        description: 'Abre el editor de letras con player integrado. Guarda borradores asociados al beat.',
    },
    {
        step: '03',
        title: 'Interpreta y comparte',
        description: 'Activa el Teleprompter a tempo y comparte progreso o colabora con productores.',
    },
];

const securityHighlights = [
    {
        title: 'Autenticación y cuentas',
        description: 'Inicio de sesión/registro seguro y gestión de sesiones. Opcional: acceso con Google.',
    },
    {
        title: 'Autoría y subidas',
        description: 'Propiedades del beat y metadatos básicos para reconocer al productor y sus licencias.',
    },
    {
        title: 'Privacidad de borradores',
        description: 'Letras, notas y versiones se guardan en privado hasta que decidas compartirlas.',
    },
];

const statHighlights = [
    { value: '∞', label: 'Scroll de beats' },
    { value: 'Android / iOS / Web', label: 'Plataformas' },
    { value: 'Filtros', label: 'Género · BPM · Mood · Precio · Instrumentos' },
];

function Landing() {
    const downloadUrl = React.useMemo(() => buildApiUrl('/v1/api/download/android-apk/'), []);
    const [isMobile, setIsMobile] = React.useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));

    const handleResize = React.useCallback(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 768);
        }
    }, []);

    React.useEffect(() => {
        if (typeof window === 'undefined') {
            return undefined;
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const handleDownload = () => {
        window.open(downloadUrl, '_blank', 'noopener,noreferrer');
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
                    <div className="hero-content">
                        <span className="hero-eyebrow">La app para la música urbana</span>
                        <h1>
                            Encuentra bases, escribe letras
                            <span className="gradient-text"> y lleva tus barras al siguiente nivel.</span>
                        </h1>
                        <p>
                            BeatNow nace para artistas y productores emergentes: un feed infinito de beats, un editor de letras con
                            reproductor integrado y un modo Teleprompter para interpretar sin perder el ritmo.
                        </p>
                        <div className="hero-actions">
                            <button type="button" className="primary-button" onClick={handleDownload}>
                                {isMobile ? 'Descargar app Android' : 'Probar BeatNow ahora'}
                            </button>
                            <a className="ghost-button" href="#features">
                                Ver funcionalidades
                            </a>
                        </div>
                        <div className="hero-meta">
                            <span>Gratis para empezar. Sin tarjetas.</span>
                            <span>Tu contenido, bajo tu control.</span>
                        </div>
                    </div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="hero-visual-card">
                            <img src={studio} alt="Artista componiendo con BeatNow" />
                            <div className="hero-visual-glow" />
                        </div>
                        <motion.div
                            className="hero-floating"
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <img src={logo} alt="Logotipo de BeatNow" />
                        </motion.div>
                    </motion.div>
                </motion.section>

                <motion.section
                    className="stats"
                    initial={fadeIn.initial}
                    whileInView={fadeIn.whileInView}
                    transition={fadeIn.transition}
                    viewport={fadeIn.viewport}
                >
                    {statHighlights.map((stat) => (
                        <div className="stat-card" key={stat.label}>
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </motion.section>

                <motion.section
                    id="features"
                    className="features"
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    transition={fadeInUp.transition}
                    viewport={fadeInUp.viewport}
                >
                    <div className="section-header">
                        <span className="section-eyebrow">Hecha para el proceso creativo</span>
                        <h2>Una plataforma social para artistas y productores</h2>
                        <p>
                            Encuentra bases, redacta y guarda letras, practica con teleprompter y conecta con productores. Todo en
                            un flujo simple y rápido.
                        </p>
                    </div>
                    <div className="features-grid">
                        {featureHighlights.map((feature) => (
                            <motion.article
                                className="feature-card"
                                key={feature.title}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.article>
                        ))}
                    </div>
                </motion.section>

                {/* Objetivos del proyecto */}
                <motion.section
                    id="objetivos"
                    className="objectives"
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    transition={fadeInUp.transition}
                    viewport={fadeInUp.viewport}
                >
                    <div className="section-header">
                        <span className="section-eyebrow">Objetivos</span>
                        <h2>Una herramienta centrada en artistas</h2>
                        <p>
                            Encontrar beats rápido, redactar y guardar letras de forma práctica, y componer con un reproductor
                            integrado y un modo Teleprompter que facilite la interpretación.
                        </p>
                    </div>
                </motion.section>

                <motion.section
                    id="workflow"
                    className="workflow"
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    transition={fadeInUp.transition}
                    viewport={fadeInUp.viewport}
                >
                    <div className="section-header">
                        <span className="section-eyebrow">Cómo funciona</span>
                        <h2>Del descubrimiento a la interpretación</h2>
                    </div>
                    <div className="workflow-grid">
                        {workflowSteps.map((step) => (
                            <motion.article
                                className="workflow-card"
                                key={step.title}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="workflow-step">{step.step}</span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </motion.article>
                        ))}
                    </div>
                </motion.section>

                {/* Diferenciación */}
                <motion.section
                    id="diferenciacion"
                    className="differentiators"
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    transition={fadeInUp.transition}
                    viewport={fadeInUp.viewport}
                >
                    <div className="section-header">
                        <span className="section-eyebrow">¿Por qué BeatNow?</span>
                        <h2>Velocidad, foco en artistas y orden</h2>
                        <p>
                            Interfaz de swipe para decidir en segundos, enfoque en las necesidades del artista (no solo del productor)
                            y gestión ordenada de letras vinculadas a cada beat.
                        </p>
                    </div>
                </motion.section>

                <motion.section
                    id="seguridad"
                    className="security"
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    transition={fadeInUp.transition}
                    viewport={fadeInUp.viewport}
                >
                    <div className="section-header">
                        <span className="section-eyebrow">Tu trabajo es tuyo</span>
                        <h2>Privado mientras creas. Compartido cuando quieras.</h2>
                        <p>
                            Diseñada para cuidar letras, borradores y subidas de productores con controles sencillos y claros.
                        </p>
                    </div>
                    <div className="security-grid">
                        {securityHighlights.map((item) => (
                            <motion.article
                                className="security-card"
                                key={item.title}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </motion.article>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="descargar"
                    className="download"
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.whileInView}
                    transition={fadeInUp.transition}
                    viewport={fadeInUp.viewport}
                >
                    <div className="download-card">
                        <div className="download-copy">
                            <span className="section-eyebrow">Empieza hoy mismo</span>
                            <h2>Encuentra tu próximo beat en minutos</h2>
                            <p>
                                Descarga la app para Android y guarda tus letras, favoritos y sesiones. Todo sincronizado con tu
                                cuenta.
                            </p>
                            <div className="download-actions">
                                <button type="button" className="primary-button" onClick={handleDownload}>
                                    Descargar BeatNow
                                </button>
                                <a className="ghost-button" href="#features">
                                    Conocer más
                                </a>
                            </div>
                        </div>
                        <div className="download-visual">
                            {isMobile ? (
                                <div className="download-placeholder">
                                    <img src={logo} alt="BeatNow" />
                                </div>
                            ) : (
                                <button type="button" className="qr-wrapper" onClick={handleDownload}>
                                    <img src={qr} alt="Código QR para descargar BeatNow" />
                                    <span>Escanea con tu cámara</span>
                                </button>
                            )}
                        </div>
                    </div>
                </motion.section>
            </main>

            <div className="mobile-download-bar">
                <button type="button" className="primary-button" onClick={handleDownload}>
                    Descargar BeatNow
                </button>
                <a className="ghost-button" href="#features">
                    Ver funcionalidades
                </a>
            </div>

            <footer className="landing-footer">
                <div className="landing-footer-content">
                    <div className="footer-brand">
                        <img src={logo} alt="BeatNow" />
                        <p>
                            Una app pensada para la comunidad urbana: productores y artistas creando juntos.
                        </p>
                    </div>
                    <div className="footer-links">
                        <a href="#features">Funciones</a>
                        <a href="#objetivos">Objetivos</a>
                        <a href="#diferenciacion">Diferenciación</a>
                        <a href="#seguridad">Privacidad</a>
                        <span className="footer-pill">Feed + Letras + Teleprompter</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Landing;
