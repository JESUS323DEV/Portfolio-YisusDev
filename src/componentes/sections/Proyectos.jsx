import { useRef, useState } from 'react'

import { Code, Hash, } from "lucide-react"


//IMG PROYECTOS

// TODO GALERIA ATENCIA desktop
import atenciaHeroDesktop from "../../assets/galeria-projects/atencia/desktop/atencia-hero-desktop.png"
import atenciaDesktop1 from "../../assets/galeria-projects/atencia/desktop/atencia-section1-desktop.png"
import atenciaDesktop2 from "../../assets/galeria-projects/atencia/desktop/atencia-section2-desktop.png"
import atenciaDesktop3 from "../../assets/galeria-projects/atencia/desktop/atencia-section3-desktop.png"
import atenciaDesktop4 from "../../assets/galeria-projects/atencia/desktop/atencia-section4-desktop.png"
import atenciaDesktop5 from "../../assets/galeria-projects/atencia/desktop/atencia-section5-desktop.png"

// TODO GALERIA ATENCIA MOBILES
import atenciaHeroMobile from "../../assets/galeria-projects/atencia/mobile/atencia-hero-mobile.png"
import atenciaMobile2 from "../../assets/galeria-projects/atencia/mobile/atencia-section2-mobile.png"
import atenciaMobile3 from "../../assets/galeria-projects/atencia/mobile/atencia-section3-mobile.png"

//TODO GALERIA VANESSA DESKTOP
import vanessaHeroDesktop from "../../assets/galeria-projects/vanessa/desktop/vanessa-hero-desktop.png"
import vanessaDesktop1 from "../../assets/galeria-projects/vanessa/desktop/vanessa-section1-desktop.png"
import vanessaDesktop2 from "../../assets/galeria-projects/vanessa/desktop/vanessa-section2-desktop.png"
import vanessaDesktop3 from "../../assets/galeria-projects/vanessa/desktop/vanessa-section3-desktop.png"

//TODO GALERIA VANESSA MOBILE
import vanessaHeroMobile from "../../assets/galeria-projects/vanessa/mobile/vanessa-hero-mobile.png"
import vanessaMobile1 from "../../assets/galeria-projects/vanessa/mobile/vanessa-section1-mobile.png"
import vanessaMobile2 from "../../assets/galeria-projects/vanessa/mobile/vanessa-section2-mobile.png"
import vanessaMobile3 from "../../assets/galeria-projects/vanessa/mobile/vanessa-section3-mobile.png"
import vanessaMobile4 from "../../assets/galeria-projects/vanessa/mobile/vanessa-section4-mobile.png"
import vanessaMobile5 from "../../assets/galeria-projects/vanessa/mobile/vanessa-section5-mobile.png"

// TODO GALERIA ESTRELLA DESKTOP
import estrellaHeroDesktop from "../../assets/galeria-projects/estrella/desktop/estrella-hero-desktop.png"
import estrellaDesktop1 from "../../assets/galeria-projects/estrella/desktop/estrella-section1-desktop.png"
import estrellaDesktop2 from "../../assets/galeria-projects/estrella/desktop/estrella-section2-desktop.png"
import estrellaDesktop3 from "../../assets/galeria-projects/estrella/desktop/estrella-section3-desktop.png"
import estrellaDesktop4 from "../../assets/galeria-projects/estrella/desktop/estrella-section4-desktop.png"

// TODO GALERIA ESTRELLA MOBILES
import estrellaHeroMobile from "../../assets/galeria-projects/estrella/mobile/estrella-hero-mobile.png"
import estrellaMobile1 from "../../assets/galeria-projects/estrella/mobile/estrella-section1-mobile.png"
import estrellaMobile2 from "../../assets/galeria-projects/estrella/mobile/estrella-section2-mobile.png"
import estrellaMobile3 from "../../assets/galeria-projects/estrella/mobile/estrella-section3-mobile.png"
import estrellaMobile4 from "../../assets/galeria-projects/estrella/mobile/estrella-section4-mobile.png"

// GALERIA IDLE MINER
import idleCaptura1 from "../../assets/galeria-projects/idleMiner/captura-1.png"
import idleCaptura2 from "../../assets/galeria-projects/idleMiner/captura-2.png"
import idleCaptura3 from "../../assets/galeria-projects/idleMiner/captura-3.png"
import idleCaptura4 from "../../assets/galeria-projects/idleMiner/captura-4.png"
import idleCaptura5 from "../../assets/galeria-projects/idleMiner/captura-5.png"
import idleCaptura6 from "../../assets/galeria-projects/idleMiner/captura-6.png"

//CSS
import '../../styles/Proyectos.css'

//IMPORT COMPONENTES
import ScrollDetails from "../../componentes/ScrollDetails";
import GaleriaDemo from "../../componentes/GaleriaDemo";

export default function Proyectos() {

    const detailsRefs = useRef([]);
    ScrollDetails(detailsRefs)

    const [flipped, setFlipped] = useState([false, false, false, false])
    const toggleFlip = (i) => setFlipped(prev => prev.map((v, idx) => idx === i ? !v : v))

    return (
        <>
            {/*==================== MIS PROYECTOS======================== */}
            <section id='proyectos'>
                <div className='cont-proyectos'>
                    <h2>Proyectos</h2>
                    <p className='subtitulo-proyectos'>Proyectos reales, resultados reales.</p>

                    <div className='contenido-proyectos'>

                        {/* ===== CARD 1: VANESSA ===== */}
                        <div className='cont-card'>
                            <div className={`card-project ${flipped[0] ? 'card-flipped' : ''}`}>

                                <div className='card-front'>
                                    <div className='galeria-projects'>
                                        <GaleriaDemo
                                            imagenesDesktop={[vanessaHeroDesktop, vanessaDesktop1, vanessaDesktop2, vanessaDesktop3]}
                                            imagenesMobile={[vanessaHeroMobile, vanessaMobile1, vanessaMobile2, vanessaMobile3, vanessaMobile4, vanessaMobile5]}
                                        />
                                    </div>
                                    <h3 className='title-card1'>Vanessa</h3>
                                    <div className='body-project'>
                                        <p>Web clara y estructurada para explicar servicios y facilitar el contacto directo por WhatsApp.</p>
                                    </div>
                                    <div className='cont-foot-card'>
                                        <button className='btn-leer-mas' onClick={() => toggleFlip(0)}>Leer más</button>
                                        <div className='ver-online'>
                                            <a target='_blank' href="https://vanessa-psicopedagoga.netlify.app/">Ver online</a>
                                        </div>
                                    </div>
                                </div>

                                {/* ===== CARD 1: VANESSA - BACK ===== */}
                                <div className='card-back'>
                                    <h3>Vanessa</h3>
                                    <p>Web profesional para psicopedagoga autónoma. El objetivo era mostrar sus servicios de forma clara y facilitar el contacto de nuevos clientes.</p>
                                    <ul className='back-features'>
                                        <li>Secciones de servicios con diseño limpio</li>
                                        <li>Contacto directo por WhatsApp integrado</li>
                                        <li>Diseño responsive mobile-first</li>
                                        <li>Animaciones de entrada al hacer scroll</li>
                                    </ul>
                                    <div className='skills-cont back-skills'>
                                        <span className='skills'>Html</span>
                                        <span className='skills'>CSS</span>
                                        <span className='skills'>JS</span>
                                        <span className='skills'>React</span>
                                    </div>
                                    <div className='cont-foot-card'>
                                        <button className='btn-volver' onClick={() => toggleFlip(0)}>← Volver</button>
                                        <div className='ver-online'>
                                            <a target='_blank' href="https://vanessa-psicopedagoga.netlify.app/">Ver online</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* ===== CARD 2: ESTRELLA ===== */}
                        <div className='cont-card'>
                            <div className={`card-project ${flipped[1] ? 'card-flipped' : ''}`}>

                                <div className='card-front'>
                                    <div className='galeria-projects'>
                                        <GaleriaDemo
                                            imagenesDesktop={[estrellaHeroDesktop, estrellaDesktop1, estrellaDesktop2, estrellaDesktop3, estrellaDesktop4]}
                                            imagenesMobile={[estrellaHeroMobile, estrellaMobile1, estrellaMobile2, estrellaMobile3, estrellaMobile4]}
                                        />
                                    </div>
                                    <h3 className='title-card2'>Estrella sin filtro</h3>
                                    <div className='body-project'>
                                        <p>Web pensada para mostrar su marca personal y convertir visitas en oportunidades de trabajo.</p>
                                    </div>
                                    <div className='cont-foot-card'>
                                        <button className='btn-leer-mas' onClick={() => toggleFlip(1)}>Leer más</button>
                                        <div className='ver-online'>
                                            <a target='_blank' href="https://estrellasinfiltro.netlify.app/">Ver online</a>
                                        </div>
                                    </div>
                                </div>

                                {/* ===== CARD 2: ESTRELLA-BACK ===== */}
                                <div className='card-back'>
                                    <h3>Estrella sin filtro</h3>
                                    <p>Web profesional para Social Media Manager. Diseñada para captar clientes mostrando sus servicios y portfolio de forma atractiva.</p>
                                    <ul className='back-features'>
                                        <li>Presentación de servicios de redes sociales</li>
                                        <li>Portfolio con trabajos realizados</li>
                                        <li>Diseño minimalista y profesional</li>
                                        <li>Identidad visual propia y coherente</li>
                                    </ul>
                                    <div className='skills-cont back-skills'>
                                        <span className='skills'>Html</span>
                                        <span className='skills'>CSS</span>
                                        <span className='skills'>JS</span>
                                        <span className='skills'>React</span>
                                    </div>
                                    <div className='cont-foot-card'>
                                        <button className='btn-volver' onClick={() => toggleFlip(1)}>← Volver</button>
                                        <div className='ver-online'>
                                            <a target='_blank' href="https://estrellasinfiltro.netlify.app/">Ver online</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* ===== CARD 3: ATENCIA ===== */}
                        <div className='cont-card'>
                            <div className={`card-project ${flipped[2] ? 'card-flipped' : ''}`}>

                                <div className='card-front'>
                                    <div className='galeria-projects'>
                                        <GaleriaDemo
                                            imagenesDesktop={[atenciaHeroDesktop, atenciaDesktop1, atenciaDesktop2, atenciaDesktop3, atenciaDesktop4, atenciaDesktop5]}
                                            imagenesMobile={[atenciaHeroMobile, atenciaMobile2, atenciaMobile3]}
                                        />
                                    </div>
                                    <h3 className='title-card3'>Atencia homes</h3>
                                    <div className='body-project'>
                                        <p>Web inmobiliaria enfocada en mostrar propiedades y generar contactos de forma directa.</p>
                                    </div>
                                    <div className='cont-foot-card'>
                                        <button className='btn-leer-mas' onClick={() => toggleFlip(2)}>Leer más</button>
                                        <div className='ver-online'>
                                            <a target='_blank' href="https://www.atenciahomes.es/">Ver online</a>
                                        </div>
                                    </div>
                                </div>

                                {/* ===== CARD 3: ATENCIA - BACK===== */}
                                <div className='card-back'>
                                    <h3>Atencia homes</h3>
                                    <p>Web inmobiliaria para agencia local. El objetivo era mostrar propiedades disponibles y generar contactos de forma rápida y directa.</p>
                                    <ul className='back-features'>
                                        <li>Catálogo de propiedades con galería</li>
                                        <li>Formulario de contacto directo</li>
                                        <li>Diseño adaptado al sector inmobiliario</li>
                                        <li>Optimizada para SEO local</li>
                                    </ul>
                                    <div className='skills-cont back-skills'>
                                        <span className='skills'>Html</span>
                                        <span className='skills'>CSS</span>
                                        <span className='skills'>JS</span>
                                    </div>
                                    <div className='cont-foot-card'>
                                        <button className='btn-volver' onClick={() => toggleFlip(2)}>← Volver</button>
                                        <div className='ver-online'>
                                            <a target='_blank' href="https://www.atenciahomes.es/">Ver online</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* ===== CARD 4: IDLE MINER ===== */}
                        <div className='cont-card'>
                            <div className={`card-project ${flipped[3] ? 'card-flipped' : ''}`}>

                                <div className='card-front'>
                                    <div className='galeria-projects'>
                                        <GaleriaDemo
                                            imagenesDesktop={[idleCaptura1, idleCaptura2, idleCaptura3]}
                                            imagenesMobile={[idleCaptura1, idleCaptura2, idleCaptura3, idleCaptura4, idleCaptura5, idleCaptura6]}
                                        />
                                    </div>
                                    <h3 className='title-card4'>Lady Hungry</h3>
                                    <span className='badge-proyecto-propio'>Proyecto personal</span>
                                    <div className='body-project'>
                                        <p>Juego idle con perros mineros. Mina oro, gestiona recursos y desbloquea sistemas progresivamente.</p>
                                    </div>
                                    <div className='cont-foot-card'>
                                        <button className='btn-leer-mas' onClick={() => toggleFlip(3)}>Leer más</button>
                                        <div className='ver-online'>
                                            <a target='_blank' href="https://idleminero.netlify.app/">Ver online</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='card-back'>
                                    <h3>Lady Hungry</h3>
                                    <p>Idle clicker con temática de perros mineros. Desarrollado en React con arquitectura modular por sistemas.</p>
                                    <ul className='back-features'>
                                        <li>Sistema de minas, forja y taberna</li>
                                        <li>Perros ayudantes con rareza y estrellas</li>
                                        <li>Raids pasivas con loot escalable</li>
                                        <li>14 temas visuales + tema personalizado</li>
                                    </ul>
                                    <div className='skills-cont back-skills'>
                                        <span className='skills'>React</span>
                                        <span className='skills'>Vite</span>
                                        <span className='skills'>Context API</span>
                                        <span className='skills'>CSS</span>
                                    </div>
                                    <div className='cont-foot-card'>
                                        <button className='btn-volver' onClick={() => toggleFlip(3)}>← Volver</button>
                                        <div className='ver-online'>
                                            <a target='_blank' href="https://idleminero.netlify.app/">Ver online</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
