//IMG FONDO
import bgHero from "../../assets/backgrounds/fondo5.png"
import pixel1 from "../../assets/foto-pixel1.png"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import ScrollSections from "../../componentes/ScrollSections"

//CSS
import '../../styles/Hero.css'

const TEXTO_INICIAL = "Webs para estar en internet."
const BORRAR_HASTA  = "Webs para "           // lo que queda tras borrar
const TEXTO_FINAL   = "vender."

// fases: 'escribiendo1' | 'pausa' | 'borrando' | 'escribiendo2' | 'fin'

export default function Hero() {

    const [fase, setFase]   = useState('escribiendo1')
    const [texto, setTexto] = useState("")

    useEffect(() => {
        let timer

        if (fase === 'escribiendo1') {
            if (texto.length < TEXTO_INICIAL.length) {
                timer = setTimeout(() => setTexto(TEXTO_INICIAL.slice(0, texto.length + 1)), 75)
            } else {
                timer = setTimeout(() => setFase('pausa'), 1200)
            }
        }

        if (fase === 'pausa') {
            timer = setTimeout(() => setFase('borrando'), 500)
        }

        if (fase === 'borrando') {
            if (texto.length > BORRAR_HASTA.length) {
                timer = setTimeout(() => setTexto(texto.slice(0, -1)), 45)
            } else {
                timer = setTimeout(() => setFase('escribiendo2'), 200)
            }
        }

        if (fase === 'escribiendo2') {
            const objetivo = BORRAR_HASTA + TEXTO_FINAL
            if (texto.length < objetivo.length) {
                timer = setTimeout(() => setTexto(objetivo.slice(0, texto.length + 1)), 75)
            } else {
                timer = setTimeout(() => setFase('fin'), 0)
            }
        }

        return () => clearTimeout(timer)
    }, [fase, texto])

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
