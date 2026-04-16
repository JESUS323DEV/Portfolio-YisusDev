import '../../styles/Legal.css'
import FooterLayout from '../layout/FooterLayout'
import Header from '../layout/Header'

export default function AvisoLegal() {
    return (
        <>
            <Header />
            <main>
                <div className='cont-legal-page'>
                <div className='cont-legal'>
                    <h1>Aviso Legal</h1>

                    <section>
                        <h2>1. Datos identificativos</h2>
                        <p>En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa:</p>
                        <ul>
                            <li><strong>Titular:</strong> Jesús (JesúsDev)</li>
                            <li><strong>Actividad:</strong> Diseño y desarrollo web freelance</li>
                            <li><strong>Contacto:</strong> <a href="https://wa.me/+34695078648" target="_blank" rel="noopener noreferrer">WhatsApp</a> · <a href="https://www.instagram.com/jesussdev/" target="_blank" rel="noopener noreferrer">Instagram @jesussdev</a></li>
                        </ul>
                    </section>

                    <section>
                        <h2>2. Objeto y ámbito de aplicación</h2>
                        <p>El presente aviso legal regula el uso del sitio web <strong>webyisusdev.netlify.app</strong>, cuya finalidad es presentar los servicios de diseño y desarrollo web ofrecidos por el titular.</p>
                    </section>

                    <section>
                        <h2>3. Propiedad intelectual</h2>
                        <p>Todos los contenidos de este sitio web (textos, imágenes, diseño, código) son propiedad del titular o cuentan con la correspondiente autorización. Queda prohibida su reproducción total o parcial sin consentimiento expreso.</p>
                    </section>

                    <section>
                        <h2>4. Responsabilidad</h2>
                        <p>El titular no se hace responsable de los daños derivados del uso de este sitio web ni de los contenidos de terceros a los que pudiera enlazar.</p>
                    </section>

                    <section>
                        <h2>5. Legislación aplicable</h2>
                        <p>Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del usuario.</p>
                    </section>
                </div>
                </div>
            </main>
            <FooterLayout />
        </>
    )
}
