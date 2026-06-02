import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Code2, Rocket, Clock,
  CircleCheck, ArrowRight, ExternalLink,
  MessageCircle, ChevronLeft
} from 'lucide-react'
import ScrollSections from '../../componentes/ScrollSections'
import useInView from '../useInView'

import reservaMobile1 from '../../assets/galeria-projects/appReservas/desktop/reservaq-desktop.png'
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
    numero: '04',
    titulo: 'Reservaq',
    descripcion: 'Plataforma de reservas para negocios locales. Tus clientes reservan desde una web personalizada o desde tu propia web, y tú gestionas horarios, servicios y solicitudes desde un único panel.',
    descripcionBack: [
      'Reservaq ayuda a los negocios a dejar atrás las reservas por mensajes, llamadas o papel. Los clientes reservan desde un formulario adaptado a cada negocio y todas las solicitudes quedan organizadas en un panel privado.',
      'Desde el panel puedes consultar, confirmar, cancelar y gestionar reservas en tiempo real. Cada negocio dispone de su propia configuración, horarios, servicios y formulario personalizado.',
    ],
    tags: [{ label: 'Proyecto personal', color: '#f59e0b' }],
    features: [
      'Panel de admin con actualización en vivo cada 30 segundos',
      'Modos de envío por WhatsApp o email con plantillas configurables',
      'Reservas y consultas diferenciadas, con historial automático',
      'Slots, horarios, servicios y preguntas extra personalizables',
      '14 temas visuales con personalización de colores y logo',
    ],
    featuresBack: [
      'Edge Functions para envío de emails y validación de PIN',
      'Soft delete, estados por reserva y filtros colapsables',
      'Soporte para consultas sin fecha además de reservas con slot',
      'Widget embebible en cualquier web externa',
    ],
    stackBack: ['React', 'Vite', 'Supabase', 'CSS', 'Edge Functions', "JavaScript"],
    url: 'https://reservaq.com/',
    imgDesktop: reservaMobile1,
    imgMobile: reservaMobile2,
    proximamente: false,
    overlay: false,
    tipo: 'featured',
  },
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
    tipo: 'web',
  },
  {
    numero: '02',
    titulo: 'Vanessa',
    descripcion: 'Web clara y estructurada para explicar servicios y facilitar el contacto directo por WhatsApp.',
    descripcionLarga: 'Web profesional para Psicopedagoga autónoma. El objetivo es mostrar sus servicios de forma clara y facilitar el contacto de nuevos clientes.',
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
    tipo: 'web',
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
    tipo: 'web',
  },
  {
    numero: '06',
    titulo: 'Demo Landing Pages',
    descripcion: 'Colección de landing pages listas para usar. Diseños modernos adaptados a distintos sectores y negocios.',
    descripcionLarga: 'Pack de landing pages profesionales para negocios que necesitan presencia web rápida. Cada demo está optimizada para conversión y adaptada a móvil.',
    tags: [{ label: 'Proyecto personal', color: '#f59e0b' }],
    features: [
      'Diseños adaptados a distintos sectores',
      'Optimizadas para conversión',
      'Responsive mobile-first',
      'Fácil personalización de copy e imágenes',
      'Listas para publicar en menos de 24h',
    ],
    stack: ['React', 'Vite', 'Tailwind'],
    url: null,
    imgDesktop: null,
    imgMobile: null,
    soloMovil: false,
    proximamente: true,
    tipo: 'personal',
  },
  {
    numero: '05',
    titulo: 'Lady Hungry',
    descripcion: 'Idle clicker con perros mineros. Mina oro, gestiona recursos, forja lingotes, envía expediciones y mejora tu aldea.',
    descripcionLarga: 'Lady Hungry nació como proyecto de aprendizaje de React y creció hasta convertirse en un juego idle completo y jugable.',
    tags: [
      { label: 'Proyecto personal', color: '#f59e0b' },
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
    tipo: 'personal',
  },
]

const FEATURED = PROJECTS.find(p => p.tipo === 'featured')
const WEBS = PROJECTS.filter(p => p.tipo === 'web')
const PERSONAL = PROJECTS.filter(p => p.tipo === 'personal')

function ImgOrPlaceholder({ src, alt, overlay = false }) {
  if (src) return (
    <div className="relative w-full h-full">
      <img src={src} alt={alt} className="w-full h-full object-cover lg:object-top" />
      {overlay && <div className="absolute inset-0 bg-[rgba(13,16,21,0.10)]" />}
    </div>
  )
  return (
    <div className="w-full h-full bg-gradient-to-br from-[rgba(4,157,178,0.08)] to-[rgba(4,157,178,0.02)] flex items-center justify-center">
      <span className="text-white/20 text-sm font-semibold tracking-widest uppercase">Próximamente</span>
    </div>
  )
}

function Tags({ tags }) {
  if (!tags?.length) return null
  return (
    <div className="flex flex-wrap gap-1 mb-3">
      {tags.map(t => (
        <span key={t.label} style={{ color: t.color, borderColor: t.color + '60' }}
          className="text-[9px] border-b-1 whitespace-nowrap">{t.label}</span>
      ))}
    </div>
  )
}

function CTAs({ p, onFlip }) {
  return (
    <div className="flex items-center justify-center lg:justify-start   gap-3 flex-wrap">
      <button onClick={onFlip}
        className="flex items-center gap-1.5 px-4 py-2 rounded bg-[#049db2] text-[#0d1015] text-xs font-semibold shadow-[0_0_14px_rgba(4,157,178,0.35)]">
        Leer más <ArrowRight size={12} />
      </button>
      {p.proximamente ? (
        <span className="text-white/40 text-xs">Próximamente</span>
      ) : p.soloMovil ? (
        <span className="text-white/40 text-xs">Solo móvil</span>
      ) : (
        <a href={p.url} target="_blank" rel="noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded border border-[rgba(4,157,178,0.55)] text-[#049db2] text-xs font-medium">
          Ver online <ExternalLink size={12} />
        </a>
      )}
    </div>
  )
}

export default function Proyectos() {
  const [flipped, setFlipped] = useState(PROJECTS.map(() => false))
  const [animPhase, setAnimPhase] = useState(PROJECTS.map(() => ''))
  const [headRef, headInView] = useInView()
  const [cardsRef, cardsInView] = useInView(0.05)

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

  const cardAnim = (i) =>
    animPhase[i] === 'out' ? 'card-flip-out' : animPhase[i] === 'in' ? 'card-flip-in' : ''

  const featuredIdx = PROJECTS.indexOf(FEATURED)

  return (
    <section id="proyectos" className="bg-[#0d1015] py-20">
      <div className="mx-auto w-[90%] max-w-6xl">

        {/* Cabecera */}
        <div ref={headRef}
          className="flex flex-col items-center text-center mb-10 lg:flex-row lg:items-end lg:justify-between lg:text-left lg:mb-14"
          style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateY(24px)', transition: 'opacity 0.55s ease, transform 0.55s ease' }}>
          <div>
            <p className="text-[#049db2] text-xs font-semibold tracking-widest uppercase mb-3">Mi trabajo</p>
            <h2 className="text-4xl font-extrabold text-white leading-tight mb-3 lg:text-5xl">
              Proyectos<span className="text-[#049db2]">.</span>
            </h2>
            <div className="h-0.5 w-10 mx-auto bg-[#049db2] mb-5" />
            <p className="text-white/75 text-base leading-relaxed max-w-xs">Soluciones reales para negocios reales.</p>
          </div>
          <div className="flex gap-6 mt-8 mb-2 lg:mt-0 lg:mb-0 lg:gap-10">
            {[
              { icon: Code2, label: 'Desarrollo propio', delay: 400 },
              { icon: Rocket, label: 'Soluciones reales', delay: 520 },
              { icon: Clock, label: 'Evolución', delay: 640 },
            ].map(({ icon, label, delay }) => {
              const StatIcon = icon
              return (
                <div key={label} className="flex flex-col items-center gap-2"
                  style={{ transform: headInView ? 'none' : 'translateX(-14px)', opacity: headInView ? 1 : 0, transition: `transform 0.4s ease ${delay}ms, opacity 0.4s ease ${delay}ms` }}>
                  <StatIcon size={22} className="text-[#049db2]" />
                  <span className="text-white/60 text-[0.7rem] lg:text-xs text-center">{label}</span>
                </div>
              )
            })}
          </div>
        </div>


        <div ref={cardsRef}>

          {/* Featured-RESVARQ */}
          {FEATURED && (
            <div className={`rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] overflow-hidden mb-6 ${cardAnim(featuredIdx)}`}
              onAnimationEnd={(e) => onAnimEnd(e, featuredIdx)}
              style={{ opacity: cardsInView ? 1 : 0, transition: 'opacity 0.55s ease' }}>
              <div className="grid">

                {/* Frente featured */}
                <div className="col-start-1 row-start-1 p-4 lg:p-8 flex flex-col-reverse  border-1 lg:flex-row gap-4 lg:gap-8"
                  style={{ visibility: flipped[featuredIdx] ? 'hidden' : 'visible' }}>
                  <div className="flex-1 flex flex-col  lg:justify-center">
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2">{FEATURED.titulo}</h3>
                    <Tags tags={FEATURED.tags} />
                    <p className="text-white/60 text-xs lg:text-sm leading-relaxed mb-4">{FEATURED.descripcion}</p>


                    {/* LISTA FEATURED */}
                    <ul className="space-y-2 mb-5">
                      {FEATURED.features.map(f => (
                        <li key={f} className="flex items-start lg:items-center  gap-2 text-white/60 text-xs lg:text-sm">
                          <CircleCheck size={13} className="text-[#049db2] mt-[2px] lg:mt-0  shrink-0" />{f}
                        </li>
                      ))}
                    </ul>

                  

                    {/* CTA */}
                    <div className='mt-13'>
                      <CTAs p={FEATURED} onFlip={() => startFlip(featuredIdx)} />
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden aspect-video lg:aspect-auto lg:flex-[1.2] lg:min-h-[300px] transition-transform duration-500 ease-out lg:hover:[transform:perspective(600px)_rotateY(-8deg)]">
                    <ImgOrPlaceholder src={FEATURED.imgDesktop} alt={FEATURED.titulo} overlay={FEATURED.overlay} />
                  </div>

                </div>

                {/* Vuelta featured */}
                <div className="col-start-1 row-start-1 md:justify-center  p-4 md:p-8 flex flex-col gap-5"
                  style={{ visibility: flipped[featuredIdx] ? 'visible' : 'hidden' }}>

                  <div className="flex flex-col   md:flex-row gap-5 md:gap-10">

                    <div className="flex-1">
                      <h3 className="font-bold text-white text-xl lg:text-2xl mb-4">{FEATURED.titulo}</h3>
                      {(FEATURED.descripcionBack || []).map((par, idx) => (
                        <p key={idx} className="text-white/60 text-sm leading-relaxed mb-3">{par}</p>
                      ))}
                    </div>

                    {/* Vuelta lista featured */}
                    <div className="flex-1">
                      <p className="text-[#049db2] text-[10px] font-semibold tracking-widest uppercase mb-3">Características técnicas</p>
                      <ul className="space-y-2.5 mb-5">
                        {(FEATURED.featuresBack || FEATURED.features).map(f => (
                          <li key={f} className="flex items-start gap-2.5 text-white/60 text-sm">
                            <CircleCheck size={14} className="text-[#049db2] shrink-0 mt-0.5" />{f}
                          </li>
                        ))}
                      </ul>

                      {/* Vuelta SKILLS */}
                      <div className="flex flex-wrap gap-2">
                        {(FEATURED.stackBack || FEATURED.stack).map(s => <span key={s} className="text-xs border border-white/15 text-white/40 px-2.5 py-1 rounded">{s}</span>)}
                      </div>
                    </div>

                  </div>

                  {/* Vuelta btn volver */}
                  <div className="flex items-center gap-3">
                    <button onClick={() => startFlip(featuredIdx)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded border border-white/20 text-white/50 text-xs font-medium">
                      <ChevronLeft size={12} /> Volver
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Otras webs */}
          <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-4">Otras webs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {WEBS.map((p) => {
              const i = PROJECTS.indexOf(p)
              return (
                <div key={p.numero}
                  className={`rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] overflow-hidden ${cardAnim(i)}`}
                  onAnimationEnd={(e) => onAnimEnd(e, i)}
                  style={{ opacity: cardsInView ? 1 : 0, transition: `opacity 0.55s ease ${i * 100}ms` }}>
                  <div className="grid h-full">

                    <div className="col-start-1 row-start-1 flex flex-col h-full"
                      style={{ visibility: flipped[i] ? 'hidden' : 'visible' }}>
                      <div className="overflow-hidden aspect-video relative group">
                        <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                          <ImgOrPlaceholder src={p.imgDesktop} alt={p.titulo} overlay={p.overlay} />
                        </div>
                        <div className="absolute   flex items-center justify-center pointer-events-none">
                         
                        </div>
                      </div>
                      <div className="p-4 lg:p-5 flex flex-col flex-1">
                        <p className="font-bold text-white text-base lg:text-2xl mt-0.5 mb-2">{p.titulo}</p>
                        <Tags tags={p.tags} />
                        <p className="text-white/50 text-xs leading-relaxed mb-4">{p.descripcion}</p>
                        <div className="mt-auto">
                          <CTAs p={p} onFlip={() => startFlip(i)} />
                        </div>
                      </div>
                    </div>

                    <div className="col-start-1  row-start-1 p-4 lg:p-5 flex flex-col justify-between"
                      style={{ visibility: flipped[i] ? 'visible' : 'hidden' }}>

                      <div>
                        <h3 className="font-bold text-white text-base mb-2">{p.titulo}</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-4">{p.descripcionLarga}</p>
                        <ul className="space-y-2 mb-4">
                          {p.features.map(f => (
                            <li key={f} className="flex items-start gap-2 text-white/60 text-xs">
                              <CircleCheck size={12} className="text-[#049db2] shrink-0 mt-0.5" />{f}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5">
                          {p.stack.map(s => <span key={s} className="text-[10px] border border-white/15 text-white/40 px-2 py-0.5 rounded">{s}</span>)}
                        </div>

                      </div>

                      <div className="flex items-center gap-2 mt-4">
                        <button onClick={() => startFlip(i)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/20 text-white/50 text-xs">
                          <ChevronLeft size={11} /> Volver
                        </button>
                        {!p.proximamente && !p.soloMovil && (
                          <a href={p.url} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[rgba(4,157,178,0.55)] text-[#049db2] text-xs">
                            Ver online <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

          {/* Proyectos personales */}
          <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-4">Proyectos personales</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PERSONAL.map((p) => {
              const i = PROJECTS.indexOf(p)
              return (
                <div key={p.numero}
                  className={`rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] overflow-hidden ${cardAnim(i)}`}
                  onAnimationEnd={(e) => onAnimEnd(e, i)}
                  style={{ opacity: cardsInView ? 1 : 0, transition: `opacity 0.55s ease ${i * 100}ms` }}>
                  <div className="grid h-full">

                    <div className="col-start-1 row-start-1 p-4 lg:p-5 flex flex-col lg:flex-row gap-4 lg:gap-5 h-full"
                      style={{ visibility: flipped[i] ? 'hidden' : 'visible' }}>
                      <div className="aspect-video lg:w-48 lg:aspect-auto lg:shrink-0 rounded-lg overflow-hidden relative group">
                        <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                          <ImgOrPlaceholder src={p.imgDesktop} alt={p.titulo} overlay={p.overlay} />
                        </div>
                        <div className="absolute  flex items-center justify-center pointer-events-none">
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <p className="font-bold text-white text-base lg:text-2xl mt-0.5 mb-2">{p.titulo}</p>
                        <Tags tags={p.tags} />
                        <p className="text-white/50 text-xs leading-relaxed mb-4">{p.descripcion}</p>
                        <div className="mt-auto">
                          <CTAs p={p} onFlip={() => startFlip(i)} />
                        </div>
                      </div>
                    </div>

                    <div className="col-start-1 row-start-1 p-4 lg:p-5 flex flex-col justify-between"
                      style={{ visibility: flipped[i] ? 'visible' : 'hidden' }}>
                      <div>
                        <h3 className="font-bold text-white text-base mb-2">{p.titulo}</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-4">{p.descripcionLarga}</p>
                        <ul className="space-y-2 mb-4">
                          {p.features.map(f => (
                            <li key={f} className="flex items-start gap-2 text-white/60 text-xs">
                              <CircleCheck size={12} className="text-[#049db2] shrink-0 mt-0.5" />{f}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {p.stack.map(s => <span key={s} className="text-[10px] border border-white/15 text-white/40 px-2 py-0.5 rounded">{s}</span>)}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <button onClick={() => startFlip(i)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/20 text-white/50 text-xs">
                          <ChevronLeft size={11} /> Volver
                        </button>
                        {!p.proximamente && !p.soloMovil && (
                          <a href={p.url} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[rgba(4,157,178,0.55)] text-[#049db2] text-xs">
                            Ver online <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* CTA Banner */}
        <div className="mt-6 rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] p-5 flex items-start gap-4 lg:items-center lg:p-8">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(0,188,212,0.3)] text-[#049db2]">
            <MessageCircle size={20} />
          </div>
          <div className="flex-1 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-[#049db2] text-[10px] font-semibold tracking-widest uppercase mb-1">¿Tienes un proyecto?</p>
              <p className="text-white font-bold text-lg leading-tight lg:text-2xl">Hablemos y hagamos que suceda.</p>
            </div>
            <p className="text-white/50 text-sm hidden lg:block max-w-xs">Cuéntame tu idea y te ayudaré a llevarla al siguiente nivel.</p>
            <Link to="/contacto" onClick={() => ScrollSections('contacto')}
              className="mt-3 lg:mt-0 inline-flex items-center gap-2 border border-[rgba(4,157,178,0.55)] text-[#049db2] text-sm px-5 py-2.5 rounded hover:bg-[rgba(4,157,178,0.08)] transition-colors duration-200 shrink-0">
              Contactar <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
