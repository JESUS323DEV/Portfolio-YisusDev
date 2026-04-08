//img
import whatsaap from "../../assets/icon-whatsapp.png"

//CSS
import '../../styles/Contacto.css'


export default function Contacto() {
    return (
        <>
            {/*====================CONTACTOS======================== */}
            <section id='contacto'>
                <div className='cont-contacto'>
                    <h2>Contacto</h2>
                    <div className='contenido-contacto'>

                        <h4>¿Tienes una idea? Escríbeme.</h4>
                        <a href="https://wa.me/+34695078648"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-whatsapp">
                            <img loading='lazy' src={whatsaap} alt="whatsaap" />
                        </a>
                        <p>Me gusta crear webs limpias, visuales y bien pensadas.
                            Cuéntame qué necesitas y yo me encargo del diseño, la estructura y de que todo tenga sentido.</p>


                    </div>
                </div>
            </section>

        </>
    );

}