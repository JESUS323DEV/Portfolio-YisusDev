import { Palette, Code2, Search, Wrench } from 'lucide-react'
import useInView from '../useInView'

const SERVICIOS = [
  {
    numero: '01',
    icon: Palette,
    titulo: 'Diseño web',
    descripcion: 'Diseño a medida que refleja tu negocio. Sin plantillas, sin genéricos.',
    puntos: ['Identidad visual coherente', 'Adaptado a móvil y desktop', 'Pensado para convertir visitas'],
  },
  {
    numero: '02',
    icon: Code2,
    titulo: 'Desarrollo web',
    descripcion: 'Código propio, sin plugins que ralenticen ni plataformas de las que depender.',
    puntos: ['React + Vite, rápido y limpio', 'Sin WordPress ni Wix', 'La web es tuya al 100%'],
  },
  {
    numero: '03',
    icon: Search,
    titulo: 'SEO',
    descripcion: 'Estructura y contenido pensados para que Google te encuentre desde el primer día.',
    puntos: ['SEO técnico incluido', 'Meta tags y Schema.org', 'Sitemap y robots.txt'],
  },
  {
    numero: '04',
    icon: Wrench,
    titulo: 'Mantenimiento',
    descripcion: 'Soporte y actualizaciones una vez entregada la web para que siempre esté al día.',
    puntos: ['Cambios de contenido', 'Actualizaciones técnicas', 'Soporte directo conmigo'],
  },
]

export default function Servicios() {
  const [headRef, headInView] = useInView()
  const [cardsRef, cardsInView] = useInView(0.05)

  return (
    <section id="servicios" className="bg-[#0d1015] py-10 lg:py-20">
      <div className="mx-auto w-[90%] max-w-6xl">

        {/* Cabecera */}
        <div
          ref={headRef}
          className="flex flex-col items-center text-center mb-10 lg:items-start lg:text-left lg:mb-16"
          style={{ opacity: headInView ? 1 : 0, transform: headInView ? 'none' : 'translateY(24px)', transition: 'opacity 0.55s ease, transform 0.55s ease' }}
        >
          <p className="text-[#049db2] text-xs font-semibold tracking-widest uppercase mb-3">Qué ofrezco</p>
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-3 lg:text-5xl">
            Servicios<span className="text-[#049db2]">.</span>
          </h2>
          <div className="h-0.5 w-10 bg-[#049db2] mb-4" />
          <p className="text-white/75 leading-relaxed max-w-xs">
            Todo lo que necesita tu web para funcionar de verdad.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICIOS.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.numero}
                className="group relative rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] p-6 flex flex-col gap-4 hover:border-[rgba(4,157,178,0.3)] hover:bg-[rgba(4,157,178,0.03)] transition-colors duration-300"
                style={{ opacity: cardsInView ? 1 : 0, transform: cardsInView ? 'none' : 'translateY(24px)', transition: `opacity 0.55s ease ${i * 100}ms, transform 0.55s ease ${i * 100}ms` }}
              >
                {/* Número */}
                <span className="absolute top-5 right-5 text-white/10 text-xs font-bold tracking-widest">{s.numero}</span>

                {/* Icono */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(4,157,178,0.3)] bg-[rgba(4,157,178,0.06)] text-[#049db2]">
                  <Icon size={22} />
                </div>

                {/* Título y descripción */}
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{s.titulo}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{s.descripcion}</p>
                </div>

                {/* Puntos */}
                <ul className="mt-auto flex flex-col gap-1.5">
                  {s.puntos.map(p => (
                    <li key={p} className="flex items-center gap-2 text-white/40 text-xs">
                      <span className="w-1 h-1 rounded-full bg-[#049db2] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
