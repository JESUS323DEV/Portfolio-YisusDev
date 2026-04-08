//IMG
import diseño from "../../assets/diseño-web.png"
import visual from "../../assets/visual.png"
import front from "../../assets/front-end.png"

//CSS   
import '../../styles/Servicios.css'


export default function Servicios() {

    return (
        <>


            {/*==================== MIS SERVICIOS======================== */}
            <section id='servicios'>
                <div className='cont-servicios'>
                    <h2>Mis Servicios</h2>
                    <div className='contenido-servicios'>


                        <div className='card-servicios'>
                            <img loading='lazy' src={diseño} alt="Diseño web" />
                            <h4>Diseño web</h4>
                            <p>Interfaces claras y funcionales, pensadas para que el usuario entienda el producto sin dudar.
                                Contenido claro, fácil de leer y adaptado a móvil.</p>
                        </div>


                        <div className='card-servicios'>
                            <img loading='lazy' src={front} alt="Front End" />
                            <h4>Desarrollo</h4>
                            <p>
                                Webs preparadas para publicarse y empezar a funcionar cuando todo está listo.
                                Todo queda preparado para que el negocio pueda mostrarse online.</p>
                        </div>

                        <div loading='lazy' className='card-servicios'>
                            <img src={visual} alt="Visual" />
                            <h4>Visual</h4>
                            <p>Cuido el aspecto visual para que la web transmita una imagen clara y profesional.
                                Todo se construye de forma ordenada y entendible, también para buscadores.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}