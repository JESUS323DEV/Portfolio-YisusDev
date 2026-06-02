import logo from "../../assets/logo-jesus.png"
import whatsapp from "../../assets/icon-whatsapp.png"
import { Link } from "react-router-dom"
import { Home, Briefcase, FolderOpen, Mail, Github } from "lucide-react"
import ScrollSections from "../../componentes/ScrollSections"
import useInView from "../../componentes/useInView"

const NAV_LINKS = [
  { icon: Home,       label: 'Inicio',       to: '/',             section: 'hero'      },
  { icon: Briefcase,  label: 'Cómo trabajo', to: '/como-trabajo', section: 'aboutMe'   },
  { icon: FolderOpen, label: 'Proyectos',    to: '/proyectos',    section: 'proyectos' },
  { icon: Mail,       label: 'Contacto',     to: '/contacto',     section: 'contacto'  },
]

export default function FooterLayout() {
  const [ref, inView] = useInView(0.1)

  return (
    <footer className="bg-[#0d1015] border-t border-white/[0.06] pt-10 pb-8">
      <div
        ref={ref}
        className="mx-auto w-[90%] max-w-6xl"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(24px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
        }}
      >

        {/* Fila principal */}
        <div className="flex flex-col items-center gap-8 pb-8 mb-6 border-b border-white/[0.06] md:flex-row md:items-start md:justify-between">

          {/* Logo + tagline + legal */}
          <div className="flex flex-col items-center  md:max-w-[220px] lg:max-w-[350px] ">
            <img src={logo} alt="Jesús Dev" className="w-14 mx-auto lg:w-12 mb-4" />
            <p className="text-white/60 text-sm leading-relaxed mb-4 text-center lg:text-left">
              Páginas web <span className="text-[#049db2]">claras, rápidas</span> y adaptadas a tu negocio
            </p>
            <div className="flex items-center justify-center gap-3 text-white/40 text-xs text-center">
              <Link to="/aviso-legal" className="hover:text-white/70 transition-colors">Aviso legal</Link>
              <span>·</span>
              <Link to="/privacidad" className="hover:text-white/70 transition-colors">Privacidad</Link>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-4 text-center lg:text-left">Navegación</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 md:flex md:flex-col md:gap-3">
              {NAV_LINKS.map(({ icon, label, to, section }) => {
                const NavIcon = icon
                return (
                  <li key={label}>
                    <Link to={to} onClick={() => ScrollSections(section)}
                      className="flex items-center gap-2.5 text-white/50 text-sm hover:text-white transition-colors duration-200">
                      <NavIcon size={14} className="text-[#049db2] shrink-0" />
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Conectemos */}
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-4">Conectemos</p>
            <div className="flex gap-5 mb-4">
              <a href="https://wa.me/+34695078648" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="WhatsApp" className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity" />
              </a>
              <a href="mailto:jtipian90@gmail.com" className="text-white/50 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com/JESUS323DEV" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
            <a href="mailto:jtipian90@gmail.com" className="text-white/35 text-xs hover:text-white/60 transition-colors">
              jtipian90@gmail.com
            </a>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="flex flex-col items-center gap-4 lg:justify-between">
          <p className="text-white/30 text-xs">© 2026 Jesús Dev. Todos los derechos reservados.</p>
          <div className="flex items-center">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#049db2]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#049db2]" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#049db2]" />
          </div>
        </div>

      </div>
    </footer>
  )
}
