import { useEffect } from 'react'
import useInView from '../useInView'
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/icon-whatsapp.png'
import { Mail } from 'lucide-react'


export default function Contacto() {
  const [headRef, headInView] = useInView()
  const [bodyRef, bodyInView] = useInView(0.05)

  useEffect(() => {
    if (!document.getElementById('reservaq-css')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://app.reservaq.com/reservaq.css'
      link.id = 'reservaq-css'
      document.head.appendChild(link)
    }

    const old = document.getElementById('reservaq-js')
    if (old) old.remove()
    const script = document.createElement('script')
    script.src = 'https://app.reservaq.com/reservaq.js'
    script.id = 'reservaq-js'
    document.body.appendChild(script)
  }, [])

  return (
    <section id="contacto" className="bg-[#0d1015] py-20">
      <div className="mx-auto w-[90%] max-w-6xl">


        {/* Cabecera */}
        <div
          ref={headRef}
          className="flex flex-col items-center text-center mb-10 lg:mb-0 lg:items-center lg:text-left "
          style={{
            opacity: headInView ? 1 : 0,
            transform: headInView ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.55s ease, transform 0.55s ease',
          }}
        >
          <p className="text-[#049db2] text-xs font-semibold tracking-widest uppercase mb-3 ">
            Contacto
          </p>
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-3 lg:text-5xl xl:text-6xl">
            Hablemos<span className="text-[#049db2]">.</span>
          </h2>
          <div className="h-0.5 w-10  bg-[#049db2] mb-5" />
          <p className="text-white/75  leading-relaxed w-xs lg:w-lg text-center">
            Cuéntame tu proyecto y te lo antes posible.
          </p>
        </div>


        {/* Widget + contacto directo */}
        <div
          ref={bodyRef}
          className=" lg:grid lg:grid-cols-[350px_1fr] lg:gap-12 lg:items-start md:grid md:grid-cols-[300px_1fr] md:gap-10 "
          style={{
            opacity: bodyInView ? 1 : 0,
            transform: bodyInView ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s',
          }}
        >
      
            {/* Contacto directo */}
            <div className="mt-0 md:mt-35 ">



              <div className="mb-6">
                <p className="text-[#049db2] text-xs font-semibold tracking-widest uppercase mb-2">
                  Contacto directo
                </p>
                
              </div>

              <div className="flex flex-col gap-3 ">
                <a
                  href="mailto:jtipian90@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] text-white/60 text-sm hover:border-[rgba(4,157,178,0.3)] hover:text-white transition-colors duration-200"
                >
                  <Mail size={16} className="text-[#049db2] shrink-0" />
                  jtipian90@gmail.com
                </a>
                <a
                  href="https://www.instagram.com/jesussdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] text-white/60 text-sm hover:border-[rgba(4,157,178,0.3)] hover:text-white transition-colors duration-200"
                >
                  <img src={instagram} alt="instagram" className="w-4 h-4 shrink-0" />
                  @jesussdev
                </a>
                <a
                  href="https://wa.me/+34695078648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] text-white/60 text-sm hover:border-[rgba(4,157,178,0.3)] hover:text-white transition-colors duration-200"
                >
                  <img src={whatsapp} alt="whatsapp" className="w-4 h-4 shrink-0" />
                  +34 695 078 648
                </a>
              </div>

              {/* Desktop: disponibilidad */}
              <div className="hidden lg:block mt-6 p-4 rounded-xl border border-[rgba(4,157,178,0.15)] bg-[rgba(4,157,178,0.04)]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#049db2] shrink-0" />
                  <p className="text-[#049db2] text-xs font-semibold">Disponible para nuevos proyectos</p>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">
                  Si tienes una idea en mente, cuéntamela. Te preparo una propuesta sin compromiso.
                </p>
              
            </div>
            
          </div>

            {/* Formulario */}
            <div>
              <div id="reservaq" data-slug="jesusdev"></div>
            </div>

        </div>

      </div>
    </section>
  )
}
