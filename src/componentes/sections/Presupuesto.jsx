import logo from "../../assets/logo-jesus.webp"
import { Link } from 'react-router-dom'
import ScrollSections from '../../componentes/ScrollSections'
import { BadgeCheck } from 'lucide-react'

const NavBar = () => (
  <header className="sticky top-0 z-50 bg-[rgba(13,16,21,0.95)] backdrop-blur-[12px] border-b border-white/[0.07]">
    <div className="mx-auto w-[90%] max-w-6xl flex items-center justify-between py-4">
      <Link to="/" onClick={() => ScrollSections('hero')}>
        <img src={logo} alt="Jesús Dev" className="w-[110px]" />
      </Link>
      <div className="flex items-center gap-4">
        <Link
          to="/proyectos"
          onClick={() => ScrollSections('proyectos')}
          className="text-white/60 text-sm hover:text-white transition-colors duration-200"
        >
          Proyectos
        </Link>
        <Link
          to="/contacto"
          onClick={() => ScrollSections('contacto')}
          className="flex items-center gap-2 px-4 py-2 rounded bg-[#049db2] text-[#0d1015] text-sm font-semibold hover:bg-[#00b4cc] transition-colors duration-200"
        >
          Contacto
        </Link>
      </div>
    </div>
  </header>
)

const CARDS = [
  {
    titulo: 'Web Esencial',
    precio: 'Desde 250 €',
    features: [
      'Web de una sola página con hasta 5 secciones.',
      'Código propio, sin plantillas ni WordPress.',
      'Diseño adaptado al negocio y a su imagen actual.',
      'Textos claros a partir de la información proporcionada.',
      'Botón directo de WhatsApp, llamada o correo.',
      'Adaptada a móvil, tablet y escritorio.',
      'SEO básico: títulos, descripciones y etiquetas principales.',
      'Dominio, hosting y publicación incluidos.',
    ],
    recomendado: 'Para negocios que necesitan una presencia profesional en internet sin complicaciones.',
    recomendadoPara: null,
    destacado: false,
  },
  {
    titulo: 'Web Profesional',
    precio: 'Desde 500 €',
    features: [
      'Todo lo incluido en el plan Esencial.',
      'Web más completa, con hasta 3 páginas o varias secciones.',
      'Dirección visual personalizada: paleta, tipografías y estilo gráfico.',
      'Copy trabajado para presentar mejor el negocio y sus servicios.',
      'Formulario de contacto personalizado.',
      'Galería de imágenes, trabajos o proyectos.',
      'SEO optimizado para las principales páginas.',
      'Estructura pensada para convertir visitas en contactos.',
    ],
    recomendado: 'Para negocios que quieren diferenciarse, transmitir confianza y conseguir nuevos clientes.',
    recomendadoPara: null,
    destacado: true,
  },
  {
    titulo: 'Web Escalable',
    precio: 'Desde 850 €',
    features: [
      'Todo lo incluido en el plan Profesional.',
      'Web con hasta 6 páginas, ampliable según el proyecto.',
      'Creación o rediseño de logotipo e identidad visual básica.',
      'Integración completa con Reservaq: agenda, horarios y confirmaciones.',
      'Formularios avanzados adaptados al negocio.',
      'SEO optimizado: sitemap, Search Console y etiquetas trabajadas.',
      'Estructura preparada para crecer sin rehacer la web.',
    ],
    recomendado: null,
    recomendadoPara: [
      'Negocios que necesitan una imagen propia y una web sólida.',
      'Proyectos que quieren crecer sin rehacer la web desde cero.',
    ],
    destacado: false,
  },
]

function Presupuesto() {
  return (
    <div className="min-h-screen bg-[#0d1015]">
      <NavBar />

      <section className="py-16 lg:py-24">
        <div className="mx-auto w-[90%] max-w-6xl">

          {/* Cabecera */}
          <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
            <p className="text-[#049db2] text-xs font-semibold tracking-widest uppercase mb-3">Precios</p>
            <h2 className="text-4xl font-extrabold text-white leading-tight mb-3 lg:text-5xl">
              Servicios web<span className="text-[#049db2]">.</span>
            </h2>
            <div className="h-0.5 w-10 bg-[#049db2] mb-4" />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Webs claras y pensadas para negocios reales. Sin plantillas, sin cuotas de plataforma.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CARDS.map((card) => (
              <div
                key={card.titulo}
                className={`relative rounded-xl flex flex-col p-6 transition-colors duration-300 ${
                  card.destacado
                    ? 'border border-[rgba(4,157,178,0.4)] bg-[rgba(4,157,178,0.04)]'
                    : 'border border-white/[0.07] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(4,157,178,0.25)]'
                }`}
              >
                {card.destacado && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-widest uppercase bg-[#049db2] text-[#0d1015] px-3 py-1 rounded-full">
                    Recomendado
                  </span>
                )}

                {/* Título + precio */}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-lg mb-3">{card.titulo}</h3>
                  <p className="text-3xl font-extrabold text-[#049db2]">{card.precio}</p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2 flex-1">
                  {card.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-white/65 text-sm leading-relaxed">
                      <BadgeCheck className="w-4 h-4 min-w-4 text-[#049db2] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Recomendado para (plan escalable) */}
                {card.recomendadoPara && (
                  <div className="mt-4">
                    <p className="text-[#049db2] text-[10px] font-semibold tracking-widest uppercase mb-2">Ideal para</p>
                    <ul className="flex flex-col gap-2">
                      {card.recomendadoPara.map(r => (
                        <li key={r} className="flex items-start gap-2.5 text-white/65 text-sm leading-relaxed">
                          <BadgeCheck className="w-4 h-4 min-w-4 text-[#049db2] shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Perfil ideal */}
                {card.recomendado && (
                  <div className="mt-4 rounded-lg bg-[rgba(4,157,178,0.05)] border border-[rgba(4,157,178,0.15)] p-3">
                    <p className="text-white/55 text-xs leading-relaxed">{card.recomendado}</p>
                  </div>
                )}

                {/* Extras */}
                <div className="mt-auto pt-5 border-t border-white/[0.07] flex flex-col gap-2">
                  <p className="text-white/45 text-xs leading-relaxed">
                    Mantenimiento: <span className="text-[#049db2]">3 meses gratis</span> incluidos con cada proyecto, después <span className="text-[#049db2]">25 €/mes</span> o <span className="text-[#049db2]">300 €/año</span>
                  </p>
                  <p className="text-white/45 text-xs leading-relaxed">
                    Dominio y hosting a nombre del cliente. Configuración:{' '}
                    <span className="text-[#049db2]">Sin coste adicional</span>{' '}
                    <span className="text-[10px] border border-[#f59e0b60] text-[#f59e0b] px-1.5 py-0.5 rounded">Oferta</span>
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="border-t border-white/[0.06] py-6">
        <div className="mx-auto w-[90%] max-w-6xl flex items-center justify-between">
          <img src={logo} alt="Jesús Dev" className="w-[90px] opacity-60" />
          <p className="text-white/25 text-xs">© 2026 Jesús Dev</p>
        </div>
      </footer>

    </div>
  )
}

export default Presupuesto
