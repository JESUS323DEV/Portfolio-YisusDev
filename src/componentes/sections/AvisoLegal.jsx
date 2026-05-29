import FooterLayout from '../layout/FooterLayout'
import Header from '../layout/Header'

export default function AvisoLegal() {
    return (
        <>
            <Header />
            <main className="[background:var(--bg-normal)] min-h-screen">
                <div className="max-w-[760px] mx-auto pt-16 px-6 pb-24 text-[rgb(200,200,200)]">

                    <h1 className="text-white text-[2.2rem] border-b border-[#049db2] pb-3 mb-10">Aviso Legal</h1>

                    <section className="mb-8">
                        <h2 className="text-[#049db2] text-base mb-2.5">1. Datos identificativos</h2>
                        <p className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]">En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa:</p>
                        <ul className="pl-5 flex flex-col gap-1.5 mt-2">
                            <li className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]"><strong>Titular:</strong> Jesús (JesúsDev)</li>
                            <li className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]"><strong>Actividad:</strong> Diseño y desarrollo web freelance</li>
                            <li className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]"><strong>Contacto:</strong> <a href="https://wa.me/+34695078648" target="_blank" rel="noopener noreferrer" className="text-[#049db2] underline">WhatsApp</a> · <a href="https://www.instagram.com/jesussdev/" target="_blank" rel="noopener noreferrer" className="text-[#049db2] underline">Instagram @jesussdev</a></li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[#049db2] text-base mb-2.5">2. Objeto y ámbito de aplicación</h2>
                        <p className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]">El presente aviso legal regula el uso del sitio web <strong>webyisusdev.netlify.app</strong>, cuya finalidad es presentar los servicios de diseño y desarrollo web ofrecidos por el titular.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[#049db2] text-base mb-2.5">3. Propiedad intelectual</h2>
                        <p className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]">Todos los contenidos de este sitio web (textos, imágenes, diseño, código) son propiedad del titular o cuentan con la correspondiente autorización. Queda prohibida su reproducción total o parcial sin consentimiento expreso.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[#049db2] text-base mb-2.5">4. Responsabilidad</h2>
                        <p className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]">El titular no se hace responsable de los daños derivados del uso de este sitio web ni de los contenidos de terceros a los que pudiera enlazar.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-[#049db2] text-base mb-2.5">5. Legislación aplicable</h2>
                        <p className="text-[0.88rem] leading-[1.7] text-[rgb(163,163,163)]">Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del usuario.</p>
                    </section>

                </div>
            </main>
            <FooterLayout />
        </>
    )
}
