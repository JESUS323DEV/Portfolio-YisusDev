import '../../styles/Legal.css'
import FooterLayout from '../layout/FooterLayout'
import Header from '../layout/Header'

export default function Privacidad() {
    return (
        <>
            <Header />
            <main>
                <div className='cont-legal-page'>
                <div className='cont-legal'>
                    <h1>Política de Privacidad</h1>

                    <section>
                        <h2>1. Responsable del tratamiento</h2>
                        <ul>
                            <li><strong>Titular:</strong> Jesús (YisusDev)</li>
                            <li><strong>Actividad:</strong> Diseño y desarrollo web freelance</li>
                            <li><strong>Contacto:</strong> <a href="https://wa.me/+34695078648" target="_blank" rel="noopener noreferrer">WhatsApp</a> · <a href="https://www.instagram.com/yisusdev/" target="_blank" rel="noopener noreferrer">Instagram @yisusdev</a></li>
                        </ul>
                    </section>

                    <section>
                        <h2>2. Datos que se recogen</h2>
                        <p>Este sitio web no dispone de formularios de contacto ni recoge datos personales de forma automática. El contacto se realiza a través de WhatsApp e Instagram, plataformas con sus propias políticas de privacidad.</p>
                    </section>

                    <section>
                        <h2>3. Finalidad del tratamiento</h2>
                        <p>Los datos que el usuario facilite voluntariamente a través de los canales de contacto se utilizarán exclusivamente para responder a sus consultas y gestionar posibles contrataciones de servicios.</p>
                    </section>

                    <section>
                        <h2>4. Legitimación</h2>
                        <p>La base legal para el tratamiento de datos es el consentimiento del propio usuario al iniciar la comunicación (art. 6.1.a del RGPD).</p>
                    </section>

                    <section>
                        <h2>5. Conservación de datos</h2>
                        <p>Los datos se conservarán durante el tiempo necesario para gestionar la relación con el usuario y, en su caso, durante los plazos legalmente exigibles.</p>
                    </section>

                    <section>
                        <h2>6. Derechos del usuario</h2>
                        <p>El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición y portabilidad contactando a través de los canales indicados. También tiene derecho a presentar una reclamación ante la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos</a>.</p>
                    </section>

                    <section>
                        <h2>7. Cookies</h2>
                        <p>Este sitio web no utiliza cookies propias ni de terceros con fines de seguimiento o publicidad.</p>
                    </section>
                </div>
                </div>
            </main>
            <FooterLayout />
        </>
    )
}
