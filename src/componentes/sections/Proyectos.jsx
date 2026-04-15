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

// GALERIA APP RESERVAS
import reservaMobile1 from "../../assets/galeria-projects/appReservas/mobile/app-reservas-mobile1.png"
import reservaMobile2 from "../../assets/galeria-projects/appReservas/mobile/app-reservas-mobile2.png"
import reservaMobile3 from "../../assets/galeria-projects/appReservas/mobile/app-reservas-mobile3.png"
import reservaMobile4 from "../../assets/galeria-projects/appReservas/mobile/app-reservas-mobile4.png"
import reservaMobile5 from "../../assets/galeria-projects/appReservas/mobile/app-reservas-mobile5.png"
import reservaMobile6 from "../../assets/galeria-projects/appReservas/mobile/app-reservas-mobile6.png"

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

    const [flipped, setFlipped] = useState([false, false, false, false, false])
    const toggleFlip = (i) => setFlipped(prev => prev.map((v, idx) => idx === i ? !v : v))

    const [vistaGlobal, setVistaGlobal] = useState('desktop')

    return (
        <>
            {/*==================== MIS PROYECTOS======================== */}
            <section id='proyectos'>
                <div className='cont-proyectos'>
                    <div>
                        <h2 className='h2-proyectos'>Proyectos</h2>
                        <p className='subtitulo-proyectos'>Proyectos reales, resultados reales.</p>
                    </div>
                    <div className='toggle-vista-global'>
                        <button
                            className={`btn-vista-global ${vistaGlobal === 'desktop' ? 'btn-vista-active' : ''}`}
                            onClick={() => setVistaGlobal('desktop')}
                        >🖥 Desktop</button>
                        <button
                            className={`btn-vista-global ${vistaGlobal === 'mobile' ? 'btn-vista-active' : ''}`}
                            onClick={() => setVistaGlobal('mobile')}
                        >📱 Mobile</button>
                    </div>

                    <div className='contenido-proyectos'>

                        {/* ===== CARD 1: VANESSA ===== */}
                        <div className='cont-card'>
                            <div className={`card-project ${flipped[0] ? 'card-flipped' : ''}`}>

                                <div className='card-front'>
                                    <div className='galeria-projects'>
                                        <GaleriaDemo
                                            imagenesDesktop={[vanessaHeroDesktop, vanessaDesktop1, vanessaDesktop2, vanessaDesktop3]}
                                            imagenesMobile={[vanessaHeroMobile, vanessaMobile1, vanessaMobile2, vanessaMobile3, vanessaMobile4, vanessaMobile5]}
                                            vistaGlobal={vistaGlobal}
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
                                    <div className='title-back'>
                                        <h3 className='h3-vanessa'>Vanessa</h3>
                                        <p>Web profesional para psicopedagoga autónoma. El objetivo es mostrar sus servicios de forma clara y facilitar el contacto de nuevos clientes.</p>
                                    </div>

                                    <ul className='back-features back-features-cliente'>
                                        <li>Secciones de servicios con diseño limpio</li>
                                        <li>Contacto directo por WhatsApp integrado</li>
                                        <li>Diseño responsive mobile-first</li>
                                        <li>Diseño minimalista y profesional</li>
                                        <li>Optimizada para SEO local</li>
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
                                            vistaGlobal={vistaGlobal}
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
                                    <div className='title-back'>
                                        <h3 className='h3-estrella'>Estrella sin filtro</h3>
                                        <p>Web profesional para Social Media Manager. Diseñada para captar clientes mostrando sus servicios y portfolio de forma atractiva.</p>

                                    </div>
                                    <ul className='back-features back-features-cliente'>
                                        <li>Presentación de servicios de redes sociales</li>
                                        <li>Portfolio con trabajos realizados</li>
                                        <li>Animaciones de entrada.</li>
                                        <li>Identidad visual propia y coherente</li>
                                        <li>Optimizada para SEO local</li>

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
                                            vistaGlobal={vistaGlobal}
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

                                    <div className='title-back'>
                                        <h3 className='h3-atencia'>Atencia homes</h3>
                                        <p>Web inmobiliaria para agencia local. El objetivo era mostrar propiedades disponibles y generar contactos de forma rápida y directa.</p>

                                    </div>

                                    <ul className='back-features back-features-cliente'>
                                        <li>Catálogo de propiedades con galería</li>
                                        <li>Contacto directo</li>
                                        <li>Diseño adaptado al sector inmobiliario</li>
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

                    </div>

                    {/* ===== PROYECTOS PERSONALES ===== */}
                    <div className='title-personales'>
                        <h2 className='h2-personales'>Proyectos personales</h2>
                        <p className='subtitulo-proyectos'>Lo que construyo cuando nadie me lo pide.</p>
                    </div>
                    <div className='contenido-proyectos'>

                        {/* ===== CARD 4: IDLE MINER ===== */}
                        <div className='cont-card cont-card-personal'>
                            <div className={`card-project ${flipped[3] ? 'card-flipped' : ''}`}>

                                <div className='card-front'>
                                    <div className='galeria-projects'>
                                        <GaleriaDemo
                                            imagenesDesktop={[idleCaptura1, idleCaptura2, idleCaptura3, idleCaptura4, idleCaptura5, idleCaptura6]}
                                            imagenesMobile={[idleCaptura1, idleCaptura2, idleCaptura3, idleCaptura4, idleCaptura5, idleCaptura6]}
                                            vistaGlobal={vistaGlobal}
                                            ocultarVista={true}
                                            imagenCompleta={true}
                                        />
                                    </div>

                                    <div className='cont-card-body'>
                                        <div className='title-row'>
                                            <h3 className='title-card4'>Lady Hungry</h3>
                                            <div className='badge-row'>
                                                <span className='badge-proyecto-propio'>Proyecto personal</span>
                                                <span className='badge-solo-movil'>📱 Solo para móvil</span>
                                            </div>
                                        </div>
                                        <div className='body-project'>
                                            <p>Idle clicker con perros mineros. Mina oro, gestiona recursos, forja lingotes, envía expediciones, mejoras de pico y stamina. </p>
                                        </div>

                                        <div className='cont-foot-card'>
                                            <button className='btn-leer-mas' onClick={() => toggleFlip(3)}>Leer más</button>
                                            <div className='ver-online ver-online-solo-movil'>
                                                <a target='_blank' href="https://idleminero.netlify.app/" >Ver online</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ===== CARD 4: IDLE MINER - BACK ===== */}
                                <div className='card-back card-back-personal'>
                                    <div className='title-back'>
                                        <h3 className='title-card4'>Lady Hungry</h3>
                                        <p>Lady Hungry nació como proyecto de aprendizaje de React y creció hasta convertirse en un juego idle completo y jugable.
                                            Lo que puedes hacer:
                                        </p>
                                    </div>
                                    <ul className='back-features'>
                                        <li>Minar oro, gestionar tres minas y forjar lingotes</li>
                                        <li>Desbloquear perros con rareza rara, épica y legendaria.</li>
                                        <li>Forjar lingotes en tres hornos con perros asignados.</li>
                                        <li>Mejorar picos, gestionar stamina y administrar yacimientos pasivos.</li>
                                        <li>Enviar raids activas y pasivas.</li>
                                    </ul>

                                    <p>⚠️ Demo en constante desarrollo. El arte es provisional y pueden aparecer errores. </p>
                                    <div className='skills-cont back-skills'>
                                        <span className='skills'>React</span>
                                        <span className='skills'>Vite</span>
                                        <span className='skills'>Context API</span>
                                        <span className='skills'>CSS</span>
                                    </div>
                                    <div className='cont-foot-card'>
                                        <button className='btn-volver' onClick={() => toggleFlip(3)}>← Volver</button>
                                        <div className='ver-online ver-online-solo-movil'>
                                            <a target='_blank' href="https://idleminero.netlify.app/" >Ver online</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* ===== CARD 5: APP RESERVAS ===== */}
                        <div className='cont-card cont-card-personal'>
                            <div className={`card-project ${flipped[4] ? 'card-flipped' : ''}`}>

                                <div className='card-front'>
                                    <div className='galeria-projects'>
                                        <GaleriaDemo
                                            imagenesDesktop={[reservaMobile1, reservaMobile2, reservaMobile3, reservaMobile4, reservaMobile5, reservaMobile6]}
                                            imagenesMobile={[reservaMobile1, reservaMobile2, reservaMobile3, reservaMobile4, reservaMobile5, reservaMobile6]}
                                            vistaGlobal={vistaGlobal}
                                            ocultarVista={true}
                                            imagenCompleta={true}
                                        />
                                    </div>

                                    <div className='cont-card-body'>
                                        <div className='title-row'>
                                            <h3 className='title-card5'>App Reservas</h3>
                                            <span className='badge-proyecto-propio'>Proyecto personal</span>

                                        </div>
                                        <div className='body-project'>
                                            <p>Sistema de reservas vía WhatsApp para pequeños negocios. El usuario configura horarios, servicios y diseño desde su panel.
                                            </p>

                                        </div>
                                        <div className='cont-foot-card'>
                                            <button className='btn-leer-mas' onClick={() => toggleFlip(4)}>Leer más</button>
                                            <span className='badge-proximamente'>Próximamente</span>
                                        </div>
                                    </div>
                                </div>

                                {/* ===== CARD 5: APP RESERVAS BACK===== */}
                                <div className='card-back card-back-personal'>
                                    <div className='title-back'>
                                        <h3 className='title-card5'>App Reservas</h3>
                                        <p>Aplicación web que permite a negocios locales gestionar reservas sin llamadas. El cliente rellena un formulario y el negocio recibe un mensaje formateado en WhatsApp</p>
                                    </div>
                                    <ul className='back-features'>
                                        <li>Panel admin con 6 secciones configurables.</li>
                                        <li>14 temas visuales + personalización completa de colores.</li>
                                        <li>Logo, nombre, descripción y colores personalizables desde el panel</li>
                                        <li>Slots, horarios y servicios dinámicos.</li>
                                        <li>Panel admin con horarios, servicios y fechas bloqueadas.</li>
                                        <li>Preguntas personalizadas en el formulario (texto libre u opciones)</li>
                                        <li>QR descargable y exportación a calendario.</li>
                                    </ul>

                                    <div className='skills-cont back-skills'>
                                        <span className='skills'>React</span>
                                        <span className='skills'>Vite</span>
                                        <span className='skills'>localStorage</span>
                                        <span className='skills'>CSS</span>
                                    </div>

                                    <div className='cont-foot-card'>
                                        <button className='btn-volver' onClick={() => toggleFlip(4)}>← Volver</button>
                                        <span className='badge-proximamente'>Próximamente</span>
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
