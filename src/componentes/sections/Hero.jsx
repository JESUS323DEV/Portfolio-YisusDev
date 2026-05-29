import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ChevronLeft, ChevronRight, Target, Zap, MessageSquare } from "lucide-react"
import ScrollSections from "../../componentes/ScrollSections"

import vanessaHero from "../../assets/galeria-projects/vanessa/desktop/vanessa-hero-desktop.png"
import estrellaHero from "../../assets/galeria-projects/estrella/desktop/estrella-hero-desktop.png"
import atenciaHero from "../../assets/galeria-projects/atencia/desktop/atencia-hero-desktop.png"

const SLIDES = [vanessaHero, estrellaHero, atenciaHero]

const FEATURES = [
  {
    icon: Target,
    title: "Enfocado en objetivos",
    desc: "Diseño y desarrollo alineado con lo que tu negocio necesita.",
  },
  {
    icon: Zap,
    title: "Rendimiento primero",
    desc: "Webs rápidas, optimizadas y pensadas para convertir.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación clara",
    desc: "Te acompaño en todo el proceso con transparencia total.",
  },
]

export default function Hero() {
  const [indice, setIndice] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice(prev => (prev + 1) % SLIDES.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let raf2
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setLoaded(true))
    })
    return () => { cancelAnimationFrame(raf1); cancelAnimationFrame(raf2) }
  }, [])

  const prev = () => setIndice(prev => (prev - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIndice(prev => (prev + 1) % SLIDES.length)

  const anim = `transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`

  return (
    <section id="hero" className="relative overflow-hidden bg-[#0d1015] min-h-screen">

      {/* Dot grid */}
      <div className="absolute inset-0 z-0 pointer-events-none [background-image:radial-gradient(circle,rgba(139,241,255,0.05)_1px,transparent_1px)] [background-size:28px_28px] animate-[dots-pulse_3s_ease-in-out_infinite]" />

      {/* Glow central */}
      <div className="absolute inset-0 z-0 pointer-events-none [background:radial-gradient(ellipse_at_50%_40%,rgba(0,69,76,0.32)_0%,transparent_65%)] animate-[glow-pulse_7s_ease-in-out_infinite]" />

      <div className="relative z-10 mx-auto w-[90%] max-w-6xl pt-10 pb-20">

        {/* Layout principal: columna en mobile, fila en desktop */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* Bloque izquierdo: texto */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1">

            {/* Badge 
            <div
              style={{ transitionDelay: "0ms" }}
              className={`${anim} mb-5 flex items-center gap-2
                rounded-full border border-[rgba(0,188,212,0.4)] bg-[rgba(0,188,212,0.08)] px-4 py-1.5
                lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:border-b lg:border-[#049db2] lg:pb-1`}
            >
              <span className="h-2 w-2 rounded-full bg-[#049db2] lg:hidden" />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70 lg:text-[#049db2]">
                Desarrollo web
              </span>
            </div>
*/}

            {/* H1 */}
            <h1
              style={{ transitionDelay: "80ms" }}
              className={`${anim} text-5xl pt-5 font-extrabold text-white leading-[1.1] mb-4 lg:text-6xl xl:text-7xl`}
            >
              Tu web como{" "}
              <span className="text-[#049db2]">herramienta</span>
              {" "}de trabajo.
            </h1>

            {/* Divisor solo en mobile */}
            <div className="h-0.5 w-10 bg-[#049db2] mb-5 lg:hidden" />

            {/* Subtítulo */}
            <p
              style={{ transitionDelay: "260ms" }}
              className={`${anim} text-white/75 text-base leading-relaxed mb-8 max-w-xs lg:max-w-md`}
            >
              Páginas web a medida para negocios locales, portfolios y marcas personales.
            </p>

            {/* CTAs */}
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

          {/* Bloque derecho: slider */}
          <div
            style={{ transitionDelay: "150ms" }}
            className={`${anim} lg:flex-1 lg:max-w-xl`}
          >
            <div className="relative flex items-center px-5">

              {/* Prev */}
              <button
                onClick={prev}
                aria-label="Proyecto anterior"
                className="absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(13,16,21,0.85)] border border-[rgba(0,188,212,0.3)] text-white hover:border-[#049db2] hover:text-[#049db2] transition-colors duration-200"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Tarjeta del slider */}
              <div className="flex-1 relative rounded-xl overflow-hidden border border-[rgba(0,188,212,0.3)] shadow-[0_0_50px_rgba(0,188,212,0.2),0_0_100px_rgba(0,188,212,0.06)]">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  {SLIDES.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Proyecto ${i + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === indice ? "opacity-100" : "opacity-0"}`}
                    />
                  ))}

                  {/* Dots */}
                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndice(i)}
                        aria-label={`Proyecto ${i + 1}`}
                        className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${i === indice ? "bg-[#049db2]" : "bg-white/40"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Next */}
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

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
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

      {/* Fade hacia la siguiente sección */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-[#0d1015] z-10 pointer-events-none" />

    </section>
  )
}
