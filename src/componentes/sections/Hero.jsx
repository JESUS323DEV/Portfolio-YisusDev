//IMG FONDO
import bgHero from "../../assets/backgrounds/fondo5.png"
import pixel1 from "../../assets/foto-pixel1.png"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import ScrollSections from "../../componentes/ScrollSections"

//CSS
import '../../styles/Hero.css'

const TEXTO = "Tu web como herramienta de trabajo."

export default function Hero() {

    const [texto, setTexto] = useState("")
    const [fin, setFin] = useState(false)

    useEffect(() => {
        if (fin) return
        if (texto.length < TEXTO.length) {
            const timer = setTimeout(() => setTexto(TEXTO.slice(0, texto.length + 1)), 75)
            return () => clearTimeout(timer)
        } else {
            const timer = setTimeout(() => setFin(true), 0)
            return () => clearTimeout(timer)
        }
    }, [texto, fin])

    return (
        <>
            {/*==================== HERO ======================== */}
            <section id='hero'>
                <div className='cont-hero'>
                    <div className='contenido-hero' style={{ backgroundImage: `url(${bgHero})` }}>

                        <div className='text-hero'>
                            <img src={pixel1} alt="Yisus" />
                            <h1>Programación y Diseño Web</h1>
                            <p>
                                <span className='typewriter-text'>{texto}</span>
                                <span className='cursor'>|</span>
                            </p>
                        </div>

                        <div className='cta-hero-cont'>
                            <Link to="/proyectos" className="cta-heroLink"
                                onClick={() => ScrollSections("proyectos")}
                            >
                                Mis Proyectos
                            </Link>
                            <Link to="/contacto" className="cta-heroLink cta-hero-outline"
                                onClick={() => ScrollSections("contacto")}
                            >
                                Contactar
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
