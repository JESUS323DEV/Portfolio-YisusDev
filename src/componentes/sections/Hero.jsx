//IMG FONDO
import bgHero from "../../assets/backgrounds/fondo5.png"
import pixel1 from "../../assets/foto-pixel1.png"

import { Link } from "react-router-dom";

import ScrollSections from "../../componentes/ScrollSections"

//CSS
import '../../styles/Hero.css'

export default function Hero() {

    return (
        <>
            {/*==================== HERO ======================== */}
            <section id='hero'>
                <div className='cont-hero'>
                    <div className='contenido-hero' style={{ backgroundImage: `url(${bgHero})` }}>

                        <div className='text-hero'>
                            <img src={pixel1} alt="Yisus" />
                            <h1>Diseño webs para negocios locales</h1>
                            <p>Tu web como herramienta de trabajo. No solo para "estar en internet".</p>
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
