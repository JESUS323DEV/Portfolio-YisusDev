import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronRight, Target, Zap, MessageSquare } from "lucide-react"
import ScrollSections from "../../componentes/ScrollSections"

import vanessaHero from "../../assets/galeria-projects/vanessa/desktop/vanessa-hero-desktop.webp"
import estrellaHero from "../../assets/galeria-projects/estrella/desktop/estrella-hero-desktop.webp"
import atenciaHero from "../../assets/galeria-projects/atencia/desktop/atencia-hero-desktop.webp"

const SLIDES = [vanessaHero, estrellaHero, atenciaHero]

const FEATURES = [
  {
    icon: Target,
    title: "Tuya para siempre",
    desc: "Sin cuotas de plataforma. El código es tuyo desde el primer día.",
  },
  {
    icon: Zap,
    title: "Sin plantillas",
    desc: "Diseño adaptado a tu negocio, no al revés.",
  },
  {
    icon: MessageSquare,
    title: "Trato directo",
    desc: "Hablas conmigo, no con un equipo de soporte.",
  },
]

export default function Hero() {
  const [indice, setIndice] = useState(0)
  const [loaded, setLoaded] = useState(false)

  // Autoplay del slider cada 3.5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndice(prev => (prev + 1) % SLIDES.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  // Dos RAF para que el navegador pinte el estado inicial antes de activar las transiciones de entrada
  useEffect(() => {
    let raf2
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setLoaded(true))
    })
    return () => { cancelAnimationFrame(raf1); cancelAnimationFrame(raf2) }
  }, [])

  const next = () => setIndice(prev => (prev + 1) % SLIDES.length)

  // anim se aplica a cada bloque para que entre con fade + slide desde abajo
  const anim = `transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`

  return (
    <section id="hero" className="relative overflow-hidden bg-[#0d1015] pt-10 ">

      {/* Fondo de puntos animados */}
      <div className="absolute inset-0 z-0 pointer-events-none [background-image:radial-gradient(circle,rgba(139,241,255,0.05)_1px,transparent_1px)] [background-size:28px_28px] animate-[dots-pulse_3s_ease-in-out_infinite]" />

      {/* Glow central que respira */}
      <div className="absolute inset-0 z-0 pointer-events-none [background:radial-gradient(ellipse_at_50%_40%,rgba(0,69,76,0.32)_0%,transparent_65%)] animate-[glow-pulse_7s_ease-in-out_infinite]" />

      <div className="relative z-10 mx-auto w-[90%] max-w-6xl pt-10 pb-20 lg:pt-20 lg:pb-28">

        {/* Layout: columna en mobile, grid 2 col en tablet, fila en desktop */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center md:grid md:grid-cols-2 lg:gap-16">

          {/* Bloque izquierdo: texto */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1">

            {/* Badge superior */}
            <div style={{ transitionDelay: "0ms" }} className={`${anim} flex items-center gap-2 mb-5`}>
              <span className="w-6 h-px bg-[#049db2]" />
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#049db2]">
                Desarrollo web
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{ transitionDelay: "80ms" }}
              className={`${anim} text-5xl pt-5 lg:pt-0 font-extrabold text-white leading-[1.1] mb-4 lg:text-6xl xl:text-7xl`}
            >
              Tu web como{" "}
              <span className="text-[#049db2]">herramienta</span>
              {" "}de trabajo.
            </h1>

            {/* Divisor solo visible en mobile */}
            <div className="h-0.5 w-10 bg-[#049db2] mb-5 lg:hidden" />

            {/* Subtítulo */}
            <p
              style={{ transitionDelay: "260ms" }}
              className={`${anim} text-white/75 text-base leading-relaxed mb-8 max-w-xs lg:max-w-md`}
            >
              Webs a medida para negocios locales y marcas personales. Sin plantillas ni suscripciones.
            </p>

            {/* CTAs principales */}
            <div
              style={{ transitionDelay: "420ms" }}
              className={`${anim} flex gap-3 w-full lg:w-auto`}
            >
              <Link
                to="/proyectos"
                className="flex flex-1 lg:flex-none items-center justify-center gap-2 px-5 py-3 rounded bg-[#049db2] text-[#0d1015] font-semibold whitespace-nowrap shadow-[0_0_18px_rgba(4,157,178,0.4)] hover:bg-[#00b4cc] hover:text-white hover:shadow-[0_0_28px_rgba(4,157,178,0.6)] transition-all duration-200"
                onClick={() => ScrollSections("proyectos")}
              >
                Ver proyectos <ArrowRight size={15} />
              </Link>
              <Link
                to="/contacto"
                className="flex flex-1 lg:flex-none items-center justify-center gap-2 px-5 py-3 rounded border border-[rgba(4,157,178,0.55)] text-[#049db2] font-medium whitespace-nowrap hover:bg-[rgba(4,157,178,0.08)] hover:border-[#049db2] transition-all duration-200"
                onClick={() => ScrollSections("contacto")}
              >
                Contactar <ArrowRight size={15} />
              </Link>
            </div>

          </div>

          {/* Bloque derecho: slider con perspectiva 3D */}
          <div style={{ transitionDelay: "150ms" }} className={`${anim} lg:flex-[2]`}>
            <div className="relative flex items-center px-5 mr-4 md:mr-0 group">

              {/* Wrapper con rotación 3D — se endereza al hacer hover en desktop */}
              <div className="flex-1 relative my-10 [transform:perspective(900px)_rotateY(-20deg)] transition-transform duration-1500 ease-out lg:group-hover:[transform:perspective(900px)_rotateY(0deg)]">

                {/* Capa de borde interior */}
                <div className="absolute pointer-events-none rounded-[22px] border-r border-r-[rgba(4,158,178,0.1)] border-t border-t-[rgba(0,133,150,0.1)] border-b border-b-[rgba(0,133,150,0.28)] border-l border-l-[rgba(4,158,178,0.10)]"
                  style={{ top: '-16.55px', bottom: '-16.55px', left: '-11.6px', right: '-8px', zIndex: 0 }} />

                {/* Capa de borde exterior */}
                <div className="absolute pointer-events-none rounded-[34px] border-r border-r-[rgba(4,158,178,0.20)] border-l-border-l[rgba(4,158,178,10)] border-t border-t-[rgba(0,132,150,0.16)] border-b border-b-[rgba(0,133,150,0.28)]"
                  style={{ inset: '-18px', zIndex: 0 }} />

                {/* Tarjeta con sombra de color */}
                <div className="relative rounded-xl lg:rounded-[20px] p-[8px]" style={{ zIndex: 1 }}>
                  <div className="relative overflow-hidden rounded-[14px] lg:rounded-[14px]"
                    style={{ boxShadow: '-10px 12px 20px rgba(4,157,178,0.6), -6px 8px 50px rgba(4,157,178,0.3), -3px 5px 90px rgba(4,157,178,0.15)' }}>
                    {/* paddingBottom en % mantiene el ratio sin fijar altura */}
                    <div className="relative w-full" style={{ paddingBottom: "65%" }}>
                      {SLIDES.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Proyecto ${i + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === indice ? "opacity-100" : "opacity-0"}`}
                        />
                      ))}
                      {/* Dots de navegación del slider */}
                      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {SLIDES.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setIndice(i)}
                            aria-label={`Proyecto ${i + 1}`}
                            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 p-2 box-content ${i === indice ? "bg-[#049db2]" : "bg-white/40"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón siguiente del slider */}
              <button
                onClick={next}
                aria-label="Proyecto siguiente"
                className="absolute right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(13,16,21,0.85)] border border-[rgba(0,188,212,0.3)] text-white hover:border-[#049db2] hover:text-[#049db2] transition-colors duration-200"
              >
                <ChevronRight size={18} />
              </button>

            </div>
          </div>

        </div>

        {/* Features — en tablet y desktop aparecen en fila con borde superior */}
        <div className="mt-16 grid grid-cols-1 gap-6 md-flex md:grid-cols-3 lg:gap-8 md:mt-20 md:pt-10 md:border-t md:border-white/[0.07]">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="relative shrink-0 mt-0.5">
                <feature.icon size={20} className="text-[#049db2]" />
                <span className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rounded-full bg-[#049db2]" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{feature.title}</p>
                <p className="text-white/55 text-sm mt-1 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Gradiente de transición hacia la sección siguiente */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-[#0d1015] z-10 pointer-events-none" />

    </section>
  )
}
