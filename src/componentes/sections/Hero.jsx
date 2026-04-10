
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import ScrollSections from "../../componentes/ScrollSections"

// Capturas hero de proyectos
import vanessaHero from "../../assets/galeria-projects/vanessa/desktop/vanessa-hero-desktop.png"
import estrellaHero from "../../assets/galeria-projects/estrella/desktop/estrella-hero-desktop.png"
import atenciaHero from "../../assets/galeria-projects/atencia/desktop/atencia-hero-desktop.png"

//CSS
import '../../styles/Hero.css'

const SLIDES = [vanessaHero, estrellaHero, atenciaHero]

export default function Hero() {

    const [indice, setIndice] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndice(prev => (prev + 1) % SLIDES.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            {/*==================== HERO ======================== */}
            <section id='hero'>
                <div className='cont-hero'>
                    <div className='contenido-hero'>

                        <div className='hero-inner'>

                            {/* TEXTO */}
                            <div className='text-hero'>
                                <span className="title-hero">
                                    <h1>Tu web como <span className="span-hero">herramienta</span> de trabajo.</h1>
                                </span>
                                <span className="body-hero">
                                    <p>Páginas web a medida para negocios locales. Diseño claro, funcional y sin complicaciones.</p>
                                </span>
                                <div className='hero-badges-marquee'>
                                    <div className='hero-badges-track'>
                                        <span className='hero-badge'>✓ Diseño moderno</span>
                                        <span className='hero-badge'>✓ SEO básico</span>
                                        <span className='hero-badge'>✓ Adaptación móvil </span>
                                        <span className='hero-badge'>✓ Sin complicaciones</span>
                                    </div>
                                </div>
                            </div>

                            {/* GALERÍA */}
                            <div className='hero-gallery-wrap'>
                                <div className='hero-gallery'>
                                    {SLIDES.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`Proyecto ${i + 1}`}
                                            className={`hero-slide ${i === indice ? 'hero-slide-active' : ''}`}
                                        />
                                    ))}
                                    <div className='hero-gallery-dots'>
                                        {SLIDES.map((_, i) => (
                                            <span
                                                key={i}
                                                className={`hero-gallery-dot ${i === indice ? 'hero-gallery-dot-active' : ''}`}
                                                onClick={() => setIndice(i)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className='hero-gallery-caption'>Proyectos reales · Clientes satisfechos</p>
                            </div>

                            <div className='cta-hero-cont'>
                                <Link to="/proyectos" className="cta-heroLink"
                                    onClick={() => ScrollSections("proyectos")}
                                >
                                   Proyectos
                                </Link>
                                <Link to="/contacto" className="cta-heroLink cta-hero-outline"
                                    onClick={() => ScrollSections("contacto")}
                                >
                                    Contactar
                                </Link>
                            </div>

                        </div>

                        <div className='hero-fade'></div>
                    </div>
                </div>
            </section>
        </>
    );
}
