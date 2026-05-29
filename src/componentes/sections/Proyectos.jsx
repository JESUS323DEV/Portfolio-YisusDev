import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Code2, Rocket, Clock, Monitor, Smartphone,
  CircleCheck, ArrowRight, ExternalLink,
  MessageCircle, ChevronLeft
} from 'lucide-react'

import ScrollSections from '../../componentes/ScrollSections'
import useInView from '../useInView'

import reservaMobile1 from '../../assets/galeria-projects/appReservas/mobile/app-reservas-mobile1.png'
import reservaMobile2 from '../../assets/galeria-projects/appReservas/mobile/app-reservas-mobile2.png'

import idleCaptura1 from '../../assets/galeria-projects/idleMiner/captura-1.png'
import idleCaptura2 from '../../assets/galeria-projects/idleMiner/captura-2.png'

import vanessaHeroDesktop from '../../assets/galeria-projects/vanessa/desktop/vanessa-hero-desktop.png'
import vanessaHeroMobile from '../../assets/galeria-projects/vanessa/mobile/vanessa-hero-mobile.png'

import estrellaHeroDesktop from '../../assets/galeria-projects/estrella/desktop/estrella-hero-desktop.png'
import estrellaHeroMobile from '../../assets/galeria-projects/estrella/mobile/estrella-hero-mobile.png'

import atenciaHeroDesktop from '../../assets/galeria-projects/atencia/desktop/atencia-hero-desktop.png'
import atenciaHeroMobile from '../../assets/galeria-projects/atencia/mobile/atencia-hero-mobile.png'

const PROJECTS = [
  {
    numero: '01',
    titulo: 'Estrella sin filtro',
    descripcion: 'Web pensada para mostrar su marca personal y convertir visitas en oportunidades de trabajo.',
    descripcionLarga: 'Web profesional para Social Media Manager. Diseñada para captar clientes mostrando sus servicios y portfolio de forma atractiva.',
    tags: [{ label: 'Marca personal', color: '#8b5cf6' }],
    features: [
      'Presentación de servicios de redes sociales',
      'Portfolio con trabajos realizados',
      'Animaciones de entrada',
      'Identidad visual propia y coherente',
      'Optimizada para SEO local',
    ],
    stack: ['Html', 'CSS', 'JS', 'React'],
    url: 'https://estrellasinfiltro.netlify.app/',
    imgDesktop: estrellaHeroDesktop,
    imgMobile: estrellaHeroMobile,
    soloMovil: false,
    proximamente: false,
  },
  {
    numero: '02',
    titulo: 'Vanessa',
    descripcion: 'Web clara y estructurada para explicar servicios y facilitar el contacto directo por WhatsApp.',
    descripcionLarga: 'Web profesional para psicopedagoga autónoma. El objetivo es mostrar sus servicios de forma clara y facilitar el contacto de nuevos clientes.',
    tags: [{ label: 'Marca personal', color: '#8b5cf6' }],
    features: [
      'Secciones de servicios con diseño limpio',
      'Contacto directo por WhatsApp integrado',
      'Diseño responsive mobile-first',
      'Diseño minimalista y profesional',
      'Optimizada para SEO local',
    ],
    stack: ['Html', 'CSS', 'JS', 'React'],
    url: 'https://vanessa-psicopedagoga.netlify.app/',
    imgDesktop: vanessaHeroDesktop,
    imgMobile: vanessaHeroMobile,
    soloMovil: false,
    proximamente: false,
  },
  {
    numero: '03',
    titulo: 'Atencia homes',
    descripcion: 'Web inmobiliaria enfocada en mostrar propiedades y generar contactos de forma directa.',
    descripcionLarga: 'Web inmobiliaria para agencia local. El objetivo era mostrar propiedades disponibles y generar contactos de forma rápida y directa.',
    tags: [{ label: 'Inmobiliaria', color: '#22d3ee' }],
    features: [
      'Catálogo de propiedades con galería',
      'Contacto directo',
      'Diseño adaptado al sector inmobiliario',
    ],
    stack: ['Html', 'CSS', 'JS'],
    url: 'https://www.atenciahomes.es/',
    imgDesktop: atenciaHeroDesktop,
    imgMobile: atenciaHeroMobile,
    soloMovil: false,
    proximamente: false,
  },
  {
    numero: '04',
    titulo: 'App Reservas',
    descripcion: 'Sistema de reservas vía WhatsApp para pequeños negocios. Gestiona horarios, servicios y clientes desde un panel propio.',
    descripcionLarga: 'Aplicación web que permite a negocios locales gestionar reservas sin llamadas. El cliente rellena un formulario y el negocio recibe un mensaje formateado en WhatsApp.',
    tags: [{ label: 'Proyecto personal', color: '#f59e0b' }],
    features: [
      'Panel admin con 6 secciones configurables',
      '14 temas visuales + personalización completa',
      'Logo, nombre y colores personalizables',
      'Slots, horarios y servicios dinámicos',
      'Fechas bloqueadas y recordatorios automáticos',
    ],
    stack: ['React', 'Vite', 'localStorage', 'CSS'],
    url: null,
    imgDesktop: reservaMobile1,
    imgMobile: reservaMobile2,
    soloMovil: false,
    proximamente: true,
  },
  {
    numero: '05',
    titulo: 'Lady Hungry',
    descripcion: 'Idle clicker con perros mineros. Mina oro, gestiona recursos, forja lingotes, envía expediciones y mejora tu aldea.',
    descripcionLarga: 'Lady Hungry nació como proyecto de aprendizaje de React y creció hasta convertirse en un juego idle completo y jugable.',
    tags: [
      { label: 'Proyecto personal', color: '#f59e0b' },
      { label: 'Solo para móvil', color: '#f59e0b' },
    ],
    features: [
      'Minar oro y gestionar tres minas',
      'Perros con rareza rara, épica y legendaria',
      'Forjar lingotes en hornos con perros asignados',
      'Mejorar picos y gestionar stamina',
      'Raids activas y pasivas',
    ],
    stack: ['React', 'Vite', 'Context API', 'CSS'],
    url: 'https://idleminero.netlify.app/',
    imgDesktop: idleCaptura1,
    imgMobile: idleCaptura2,
    soloMovil: true,
    proximamente: false,
  },
]

export default function Proyectos() {
  const [vista, setVista] = useState('desktop')
  const [flipped, setFlipped] = useState(PROJECTS.map(() => false))
  const [animPhase, setAnimPhase] = useState(PROJECTS.map(() => ''))
  const [headRef, headInView] = useInView()
  const [cardsRef, cardsInView] = useInView(0.05) // '' | 'out' | 'in'

  const startFlip = (i) => {
    if (animPhase[i]) return
    setAnimPhase(prev => prev.map((v, idx) => idx === i ? 'out' : v))
  }

  const onAnimEnd = (e, i) => {
    if (e.target !== e.currentTarget) return
    if (animPhase[i] === 'out') {
      setFlipped(prev => prev.map((v, idx) => idx === i ? !v : v))
      setAnimPhase(prev => prev.map((v, idx) => idx === i ? 'in' : v))
    } else {
      setAnimPhase(prev => prev.map((v, idx) => idx === i ? '' : v))
    }
  }

  return (
    <section id="proyectos" className="bg-[#0d1015] py-20">
      <div className="mx-auto w-[90%] max-w-6xl">

        {/* Cabecera */}
        <div
          ref={headRef}
          className="flex flex-col items-center text-center mb-10"
          style={{
            opacity: headInView ? 1 : 0,
            transform: headInView ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.55s ease, transform 0.55s ease',
          }}
        >
          <p className="text-[#049db2] text-xs font-semibold tracking-widest uppercase mb-3">
            Mi trabajo
          </p>
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-3">
            Proyectos<span className="text-[#049db2]">.</span>
          </h2>
          <div className="h-0.5 w-10 bg-[#049db2] mb-5" />
          <p className="text-white/75 text-base leading-relaxed max-w-xs">
            Proyectos reales, resultados reales.
          </p>

          {/* Iconos */}
          <div className="flex gap-6 mt-8 mb-2">
            <Code2 size={22} className="text-[#049db2]" />
            <Rocket size={22} className="text-[#049db2]" />
            <Clock size={22} className="text-[#049db2]" />
          </div>
        </div>

        {/* Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setVista('desktop')}
            className={`flex items-center gap-2 px-4 py-2 rounded border text-sm font-medium transition-colors duration-200 ${vista === 'desktop' ? 'border-[#049db2] text-[#049db2] bg-[rgba(0,188,212,0.08)]' : 'border-white/15 text-white/40'}`}
          >
            <Monitor size={14} /> Desktop
          </button>
          <button
            onClick={() => setVista('mobile')}
            className={`flex items-center gap-2 px-4 py-2 rounded border text-sm font-medium transition-colors duration-200 ${vista === 'mobile' ? 'border-[#049db2] text-[#049db2] bg-[rgba(0,188,212,0.08)]' : 'border-white/15 text-white/40'}`}
          >
            <Smartphone size={14} /> Mobile
          </button>
        </div>

        {/* Cards */}
        <div ref={cardsRef}>
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="mb-4"
            style={{
              opacity: cardsInView ? 1 : 0,
              transition: `opacity 0.55s ease ${i * 100}ms`,
            }}
          >
          <div
            className={`rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] overflow-hidden ${animPhase[i] === 'out' ? 'card-flip-out' : animPhase[i] === 'in' ? 'card-flip-in' : ''}`}
            onAnimationEnd={(e) => onAnimEnd(e, i)}
          >
            {/* Grid stacking: ambas caras siempre en DOM, misma celda */}
            <div className="grid">

              {/* FRENTE */}
              <div
                className="col-start-1 row-start-1 p-4 flex flex-col"
                style={{ visibility: flipped[i] ? 'hidden' : 'visible' }}
                inert={flipped[i]}
              >
                {/* Imagen */}
                <div className="rounded-lg overflow-hidden bg-white/5 mb-4">
                  <img
                    src={vista === 'desktop' ? p.imgDesktop : p.imgMobile}
                    alt={p.titulo}
                    className="w-full object-cover"
                  />
                </div>

                <span className="text-[#049db2]/40 text-xs font-bold">{p.numero}</span>
                <p className="font-bold text-white text-base mt-0.5 mb-1">{p.titulo}</p>

                {p.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {p.tags.map(t => (
                      <span
                        key={t.label}
                        style={{ color: t.color, borderColor: t.color + '60' }}
                        className="text-[9px] border px-1.5 py-0.5 rounded-full whitespace-nowrap"
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-white/50 text-xs leading-relaxed mb-4">{p.descripcion}</p>

                <div className="mt-auto flex items-center justify-center gap-3">
                  <button
                    onClick={() => startFlip(i)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded bg-[#049db2] text-[#0d1015] text-xs font-semibold shadow-[0_0_14px_rgba(4,157,178,0.35)]"
                  >
                    Leer más <ArrowRight size={12} />
                  </button>
                  {p.proximamente ? (
                    <span className="text-white/50 text-xs">Próximamente</span>
                  ) : p.soloMovil ? (
                    <span className="text-white/50 text-xs">Solo móvil</span>
                  ) : (
                    <a href={p.url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded border border-[rgba(4,157,178,0.55)] text-[#049db2] text-xs font-medium">
                      Ver online <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

              {/* VUELTA */}
              <div
                className="col-start-1 row-start-1 p-5 flex flex-col justify-between"
                style={{ visibility: flipped[i] ? 'visible' : 'hidden' }}
                inert={!flipped[i]}
              >
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{p.titulo}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{p.descripcionLarga}</p>

                  <ul className="space-y-2.5 mb-5">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-white/60 text-sm">
                        <CircleCheck size={14} className="text-[#049db2] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.stack.map(s => (
                      <span key={s} className="text-xs border border-white/15 text-white/40 px-2.5 py-1 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={() => startFlip(i)} className="flex items-center gap-1.5 px-4 py-2 rounded border border-white/20 text-white/50 text-xs font-medium">
                    <ChevronLeft size={12} /> Volver
                  </button>
                  {p.proximamente ? (
                    <span className="text-white/25 text-xs">Próximamente</span>
                  ) : p.soloMovil ? (
                    <span className="text-white/25 text-xs">Solo móvil</span>
                  ) : (
                    <a href={p.url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded border border-[rgba(4,157,178,0.55)] text-[#049db2] text-xs font-medium">
                      Ver online <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
          </div>
        ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-4 rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] p-5 flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(0,188,212,0.3)] text-[#049db2]">
            <MessageCircle size={20} />
          </div>
          <div className="flex-1">
            <p className="text-[#049db2] text-[10px] font-semibold tracking-widest uppercase mb-1">
              ¿Tienes un proyecto?
            </p>
            <p className="text-white font-bold text-lg leading-tight mb-3">
              Hablemos y hagamos que suceda.
            </p>
            <Link
              to="/contacto"
              onClick={() => ScrollSections('contacto')}
              className="inline-flex items-center gap-2 border border-[rgba(4,157,178,0.55)] text-[#049db2] text-sm px-4 py-2 rounded"
            >
              Contactar <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
