import '../../styles/AboutMe.css'
import WireframeSlider from '../../componentes/WireframeSlider'

export default function ComoTrabajo() {
    return (
        <>

            {/*==================== ABOUT ME======================== */}

            <section id='aboutMe'>
                <div className='cont-aboutMe'>
                    <h2>Cómo trabajo</h2>

                    <div className='contenido-aboutMe'>
                        
                        <div className="card-content">
                            <div className='card-aboutMe'>
                                <h4>Diseño y estructura</h4>
                                <p>Trabajo a partir de la identidad y el contenido de cada negocio, pensando en la  experiencia de usuario como base.
                                    Analizo la marca, simplifico el mensaje y construyo interfaces claras, rápidas y adaptadas a cada negocio.</p>
                            </div>

                            <div className='card-aboutMe'>
                                <h4>Claridad web</h4>
                                <p>Soluciones web pensadas para negocios reales. Cada proyecto tiene un objetivo claro: comunicar mejor,
                                    facilitar acciones del usuario y convertir visitas en clientes, desde una estructura clara y fácil de usar.</p>
                            </div>
                        </div>

                        <div className="wire-cont">
                            <WireframeSlider />
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}