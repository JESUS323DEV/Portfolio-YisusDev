import FooterLayout from '../layout/FooterLayout'
import Header from '../layout/Header'

export default function Privacidad() {
    return (
        <>
            <Header />
            <main className="[background:var(--bg-normal)] min-h-screen">
                <div className="max-w-[760px] mx-auto pt-16 px-6 pb-24 text-[rgb(200,200,200)]">

                    <h1 className="text-white text-[2.2rem] border-b border-[#049db2] pb-3 mb-10">Política de Privacidad</h1>

                    <section className="mb-8">
                        <h2 className="text-[#049db2] text-base mb-2.5">1. Responsable del tratamiento</h2>
                        <ul className="pl-5 flex flex-col gap-1.5">
                            <li className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]"><strong>Titular:</strong> Jesús (JesúsDev)</li>
                            <li className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]"><strong>Actividad:</strong> Diseño y desarrollo web freelance</li>
                            <li className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]"><strong>Contacto:</strong> <a href="https://wa.me/+34695078648" target="_blank" rel="noopener noreferrer" className="text-[#049db2] underline">WhatsApp</a> · <a href="https://www.instagram.com/jesussdev/" target="_blank" rel="noopener noreferrer" className="text-[#049db2] underline">Instagram @jesussdev</a></li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[#049db2] text-base mb-2.5">2. Datos que se recogen</h2>
                        <p className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]">Este sitio web no dispone de formularios de contacto ni recoge datos personales de forma automática. El contacto se realiza a través de WhatsApp e Instagram, plataformas con sus propias políticas de privacidad.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[#049db2] text-base mb-2.5">3. Finalidad del tratamiento</h2>
                        <p className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]">Los datos que el usuario facilite voluntariamente a través de los canales de contacto se utilizarán exclusivamente para responder a sus consultas y gestionar posibles contrataciones de servicios.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[#049db2] text-base mb-2.5">4. Legitimación</h2>
                        <p className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]">La base legal para el tratamiento de datos es el consentimiento del propio usuario al iniciar la comunicación (art. 6.1.a del RGPD).</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[#049db2] text-base mb-2.5">5. Conservación de datos</h2>
                        <p className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]">Los datos se conservarán durante el tiempo necesario para gestionar la relación con el usuario y, en su caso, durante los plazos legalmente exigibles.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[#049db2] text-base mb-2.5">6. Derechos del usuario</h2>
                        <p className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]">El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición y portabilidad contactando a través de los canales indicados. También tiene derecho a presentar una reclamación ante la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#049db2] underline">Agencia Española de Protección de Datos</a>.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[#049db2] text-base mb-2.5">7. Cookies</h2>
                        <p className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]">Este sitio web no utiliza cookies propias ni de terceros con fines de seguimiento o publicidad.</p>
                    </section>

                </div>
            </main>
            <FooterLayout />
        </>
    )
}
