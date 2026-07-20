import { Link } from 'react-router-dom'
import {
  Code2, Rocket, Clock,
  CircleCheck, ArrowRight, ExternalLink,
  MessageCircle,
} from 'lucide-react'
import ScrollSections from '../../componentes/ScrollSections'
import useInView from '../useInView'

import reservaDesktop from '../../assets/galeria-projects/appReservas/desktop/reservaq-desktop.webp'
import vanessaHeroDesktop from '../../assets/galeria-projects/vanessa/desktop/vanessa-hero-desktop.webp'
import estrellaHeroDesktop from '../../assets/galeria-projects/estrella/desktop/estrella-hero-desktop.webp'
import atenciaHeroDesktop from '../../assets/galeria-projects/atencia/desktop/atencia-hero-desktop.webp'

const PROJECTS = [
  {
    numero: '04',
    titulo: 'Reservaq',
    descripcion: 'Plataforma de reservas para negocios locales. Tus clientes reservan desde una web personalizada o desde tu propia web, y tú gestionas horarios, servicios y solicitudes desde un único panel.',
    tags: [{ label: 'Proyecto personal', color: '#f59e0b' }],
    features: [
      'Panel de admin con actualización en vivo cada 30 segundos',
      'Modos de envío por WhatsApp o email con plantillas configurables',
      'Reservas y consultas diferenciadas, con historial automático',
      'Slots, horarios, servicios y preguntas extra personalizables',
      '14 temas visuales con personalización de colores y logo',
    ],
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'Supabase', 'Edge Functions'],
    url: 'https://reservaq.com/',
    imgDesktop: reservaDesktop,
    proximamente: false,
    overlay: false,
    tipo: 'featured',
  },
  {
    numero: '01',
    titulo: 'Estrella sin filtro',
    descripcion: 'Web pensada para mostrar su marca personal y convertir visitas en oportunidades de trabajo.',
    tags: [{ label: 'Marca personal', color: '#8b5cf6' }],
    stack: ['HTML', 'CSS', 'JS', 'React', 'Vite'],
    url: 'https://estrellasinfiltro.netlify.app/',
    imgDesktop: estrellaHeroDesktop,
    proximamente: false,
    tipo: 'web',
  },
  {
    numero: '02',
    titulo: 'Vanessa',
    descripcion: 'Web clara y estructurada para explicar servicios y facilitar el contacto directo por WhatsApp.',
    tags: [{ label: 'Marca personal', color: '#8b5cf6' }],
    stack: ['HTML', 'CSS', 'JS', 'React', 'Vite'],
    url: 'https://vanessa-psicopedagoga.netlify.app/',
    imgDesktop: vanessaHeroDesktop,
    proximamente: false,
    tipo: 'web',
  },
  {
    numero: '03',
    titulo: 'Atencia homes',
    descripcion: 'Web inmobiliaria enfocada en mostrar propiedades y generar contactos de forma directa.',
    tags: [{ label: 'Inmobiliaria', color: '#22d3ee' }],
    stack: ['HTML', 'CSS', 'JS'],
    url: 'https://www.atenciahomes.es/',
    imgDesktop: atenciaHeroDesktop,
    proximamente: false,
    tipo: 'web',
  },
]

const FEATURED = PROJECTS.find(p => p.tipo === 'featured')
const WEBS = PROJECTS.filter(p => p.tipo === 'web')

function ImgOrPlaceholder({ src, alt, overlay = false }) {
  if (src) return (
    <div className="relative w-full h-full">
      <img src={src} alt={alt} className="w-full h-full object-cover lg:object-[35%_center]" />
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

function VerOnline({ p }) {
  if (p.proximamente) return <span className="text-white/40 text-xs">Próximamente</span>
  return (
    <a href={p.url} target="_blank" rel="noreferrer"
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-[rgba(4,157,178,0.55)] text-[#049db2] text-xs font-medium hover:bg-[rgba(4,157,178,0.08)] transition-colors duration-200">
      Ver online <ExternalLink size={12} />
    </a>
  )
}

export default function Proyectos() {
  const [headRef, headInView] = useInView()
  const [cardsRef, cardsInView] = useInView(0.05)

  return (
    <section id="proyectos" className="bg-[#0d1015] py-10 lg:py-20">
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

          {/* Webs de clientes */}
          <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-4 ">Webs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-3 mb-8">
            {WEBS.map((p, idx) => (
              <div key={p.numero}
                className="rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] overflow-hidden"
                style={{ opacity: cardsInView ? 1 : 0, transition: `opacity 0.55s ease ${(idx + 1) * 100}ms` }}>
                <div className="flex flex-col h-full">

                  {/* Imagen con zoom al hover */}
                  <div className="overflow-hidden aspect-video group">
                    <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                      <ImgOrPlaceholder src={p.imgDesktop} alt={p.titulo} />
                    </div>
                  </div>

                  <div className="p-4 lg:p-5 flex flex-col flex-1">
                    <p className="font-bold text-white text-base lg:text-2xl mt-0.5 mb-2">{p.titulo}</p>
                    <Tags tags={p.tags} />
                    <p className="text-white/50 text-xs leading-relaxed mb-4">{p.descripcion}</p>
                    {p.stack && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.stack.map(s => (
                          <span key={s} className="text-[10px] border border-white/15 text-white/40 px-2 py-0.5 rounded">{s}</span>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto">
                      <VerOnline p={p} />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Reservaq */}
          <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-4 mt-2">SaaS</p>
          {FEATURED && (
            <div className="rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] overflow-hidden mb-6"
              style={{ opacity: cardsInView ? 1 : 0, transition: 'opacity 0.55s ease' }}>
              <div className="p-4 lg:p-8 flex flex-col-reverse lg:flex-row gap-4 lg:gap-8">

                {/* Texto y features */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2">{FEATURED.titulo}</h3>
                  <Tags tags={FEATURED.tags} />
                  <p className="text-white/60 text-xs lg:text-sm leading-relaxed mb-4">{FEATURED.descripcion}</p>
                  <ul className="space-y-2 mb-5">
                    {FEATURED.features.map(f => (
                      <li key={f} className="flex items-start lg:items-center gap-2 text-white/60 text-xs lg:text-sm">
                        <CircleCheck size={13} className="text-[#049db2] mt-[2px] lg:mt-0 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  {FEATURED.stack && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {FEATURED.stack.map(s => (
                        <span key={s} className="text-[10px] border border-white/15 text-white/40 px-2 py-0.5 rounded">{s}</span>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto pt-2">
                    <VerOnline p={FEATURED} />
                  </div>
                </div>

                {/* Imagen con efecto 3D al hover en desktop */}
                <div className="rounded-xl overflow-hidden aspect-video lg:aspect-auto lg:flex-[1.2] lg:min-h-[300px] transition-transform duration-500 ease-out lg:hover:[transform:perspective(600px)_rotateY(-8deg)]">
                  <ImgOrPlaceholder src={FEATURED.imgDesktop} alt={FEATURED.titulo} overlay={FEATURED.overlay} />
                </div>

              </div>
            </div>
          )}

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
