import { MessageCircle, PenTool, Code2, Rocket, CircleCheck } from 'lucide-react'
import useInView from '../useInView'

const PASOS = [
  {
    icon: MessageCircle,
    numero: '01',
    titulo: 'Hablamos',
    subtitulo: 'Entendemos tu negocio',
    texto: 'A partir de tu negocio, definimos qué necesitas y qué tiene que conseguir tu web.',
    entregable: 'Propuesta y presupuesto',
  },
  {
    icon: PenTool,
    numero: '02',
    titulo: 'Diseño',
    subtitulo: 'La base de tu web',
    texto: 'Defino la estructura y el diseño para que tu web sea clara, coherente y efectiva.',
    entregable: 'Diseño aprobado por ti',
  },
  {
    icon: Code2,
    numero: '03',
    titulo: 'Desarrollo',
    subtitulo: 'Lo construimos',
    texto: 'Doy forma a una web sólida que funciona correctamente y esté lista para salir online.',
    entregable: 'Web funcional y revisada',
  },
  {
    icon: Rocket,
    numero: '04',
    titulo: 'Entrega',
    subtitulo: 'Tu web, online',
    texto: 'Tu web publicada y funcionando. Preparada para usarse desde el primer momento.',
    entregable: 'Web online y tuya',
  },
]

export default function ComoTrabajo() {
  const [headRef, headInView] = useInView()
  const [timelineRef, timelineInView] = useInView(0.05)

  return (
    <section id="aboutMe" className="bg-[#0d1015] py-20 lg:py-32">
      <div className="mx-auto w-[90%] max-w-6xl ">

        {/* Cabecera */}
        <div
          ref={headRef}
          className="flex flex-col items-center text-center mb-10 lg:items-start lg:text-left lg:mb-16"
          style={{
            opacity: headInView ? 1 : 0,
            transform: headInView ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.55s ease, transform 0.55s ease',
          }}
        >
          <p className="text-[#049db2] text-xs font-semibold tracking-widest uppercase mb-3">
            Mi proceso
          </p>
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-3 lg:text-5xl xl:text-6xl">
            ¿Cómo trabajo?
          </h2>
          <div className="h-0.5 w-10 bg-[#049db2] mb-4" />
          <p className="text-white/75 leading-relaxed max-w-xs">
            Diseño, desarrollo y lanzamiento con un proceso claro desde el primer día.
          </p>
        </div>

        {/* Timeline — columna en mobile, fila en desktop */}
        <div ref={timelineRef} className="flex flex-col lg:flex-row">
          {PASOS.map((paso, i) => (
            // Cada paso entra con un delay escalonado según su índice
            <div
              key={i}
              className="flex gap-5 lg:flex-col lg:flex-1 lg:gap-0"
              style={{
                opacity: timelineInView ? 1 : 0,
                transform: timelineInView ? 'none' : 'translateY(24px)',
                transition: `opacity 0.55s ease ${i * 120}ms, transform 0.55s ease ${i * 120}ms`,
              }}
            >

              {/* MOBILE: número + punto + línea vertical que conecta pasos */}
              <div className="flex flex-col items-center w-8 shrink-0 lg:hidden">
                <span className="text-white/30 text-sm font-bold leading-none mb-2">{paso.numero}</span>
                <div className="h-2 w-2 rounded-full bg-[#049db2] shrink-0" />
                {i < PASOS.length - 1 && (
                  <div className="flex-1 w-px bg-[rgba(0,188,212,0.2)] mt-1" />
                )}
              </div>

              {/* DESKTOP: número + icono + línea horizontal que conecta pasos */}
              <div className="hidden lg:flex lg:items-center lg:mb-12">
                <div className="flex flex-col items-start shrink-0">
                  <span className="text-[#049db2] text-xs font-bold tracking-widest mb-3">{paso.numero}</span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[rgba(0,188,212,0.4)] bg-[rgba(0,188,212,0.06)] text-[#049db2] shadow-[0_0_20px_rgba(0,188,212,0.08)]">
                    <paso.icon size={22} />
                  </div>
                </div>
                {/* La línea no se renderiza en el último paso */}
                {i < PASOS.length - 1 && (
                  <div className="flex-1 flex items-center ml-4" style={{ marginTop: '20px' }}>
                    <div className="flex-1 h-px bg-[rgba(0,188,212,0.25)]" />
                    <div className="w-2 h-2 rounded-full border border-[rgba(0,188,212,0.45)] shrink-0" />
                  </div>
                )}
              </div>

              {/* Contenido del paso */}
              <div className={`flex-1 ${i < PASOS.length - 1 ? 'pb-12 lg:pb-0' : ''} lg:pr-16 `}>

                {/* Icono + título — solo en mobile */}
                <div className="flex items-start gap-4 mb-4 lg:hidden">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[rgba(0,188,212,0.4)] bg-[rgba(0,188,212,0.06)] text-[#049db2]">
                    <paso.icon size={22} />
                  </div>
                  <div className="pt-1">
                    <p className="font-bold text-white text-lg leading-tight">{paso.titulo}</p>
                    <p className="text-[#049db2] text-sm">{paso.subtitulo}</p>
                  </div>
                </div>

                {/* Título — solo en desktop */}
                <div className="hidden lg:block mb-4">
                  <p className="font-bold text-white text-xl lg:text-2xl leading-tight">{paso.titulo}</p>
                  <p className="text-[#049db2] text-sm mt-1">{paso.subtitulo}</p>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-8">{paso.texto}</p>


                {/* Entregable del paso */}
                <div className="flex items-start gap-2.5">
                  <CircleCheck size={15} className="text-[#049db2] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#049db2] text-[10px] font-semibold tracking-widest uppercase mb-1">
                      Resultado
                    </p>
                    <p className="text-white/55 text-sm">{paso.entregable}.</p>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
