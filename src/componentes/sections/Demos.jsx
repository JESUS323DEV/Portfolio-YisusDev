import { useState } from "react"


import "../../styles/Demos.css"
import cap1Desktop from "../../assets/ollaPeru-demo/img-desktop/hero-desktop.png"
import cap2Desktop from "../../assets/ollaPeru-demo/img-desktop/sugerencias-desktop.png"
import cap3Desktop from "../../assets/ollaPeru-demo/img-desktop/carta-desktop.png"
import cap4Desktop from "../../assets/ollaPeru-demo/img-desktop/reserva-desktop.png"
import cap5Desktop from "../../assets/ollaPeru-demo/img-desktop/chef-desktop.png"

import cap1Mobile from "../../assets/ollaPeru-demo/img-mobile/hero-mobile.png"
import cap2Mobile from "../../assets/ollaPeru-demo/img-mobile/sugerencias-mobile.png"
import cap3Mobile from "../../assets/ollaPeru-demo/img-mobile/carta-mobile.png"
import cap4Mobile from "../../assets/ollaPeru-demo/img-mobile/ubi-mobile.png"
import cap5Mobile from "../../assets/ollaPeru-demo/img-mobile/reserva-mobile.png"
import cap6Mobile from "../../assets/ollaPeru-demo/img-mobile/chef-mobile.png"


import GaleriaDemo from "../../componentes/GaleriaDemo"

export default function Demos() {

    const [openReadMore, setOpenReadMore] = useState(false);
    const [vistaGlobal, setVistaGlobal] = useState('desktop');

    return (
        <>

            <section id="demos">
                <div className="cont-demos">
                    <h2>Webs listas para tu negocio</h2>
                    <h3>Diseños terminados que adapto a tu marca. Solo queda poner tu nombre.</h3>

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

                    <div className="container-demos">

                        <div className="cont-olla">
                            {/*DEMO OLLA PERÚ*/}

                            <div className="galeria-demos">
                                <GaleriaDemo
                                    imagenesDesktop={[cap1Desktop, cap2Desktop, cap3Desktop, cap4Desktop, cap5Desktop]}
                                    imagenesMobile={[cap1Mobile, cap2Mobile, cap3Mobile, cap4Mobile, cap5Mobile, cap6Mobile]}
                                    vistaGlobal={vistaGlobal}
                                />
                            </div>


                            <div className="content-ollaPeru">
                                <div className="link-demo">
                                    <a href="https://jesus323dev.github.io/demo-restaurante/" target="_blank">Ver demo online</a>
                                </div>



                                <p>Tu restaurante online y listo para recibir clientes. Todo lo que necesitas para que tu negocio se vea bien online.</p>

                                <div className={`accordion-content ${openReadMore ? "open" : ""}`}>
                                    <div className="text-accordion">
                                        <p>Web completa y funcional con todo lo que un restaurante necesita: especialidades de la casa con foto y descripción, carta completa con filtros por categoría, historia del chef, ubicación con mapa, horarios y formulario de reservas inteligente respeta días cerrados y franjas fuera de servicio, con confirmación automática por WhatsApp. Redes sociales siempre visibles y botones de contacto bien ubicados en cada sección.</p>
                                    </div>
                                </div>


                                <div className="cont-leer">
                                    <button className="leer-mas-menos" onClick={() => {
                                        setOpenReadMore(!openReadMore)
                                    }}>{openReadMore ? "Leer menos" : "Leer más"}</button>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>


            </section>


        </>
    )
}