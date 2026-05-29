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
        className="mx-auto w-[90%] max-w-6xl flex flex-col items-center"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(24px)',
          transition: 'opacity 0.55s ease, transform 0.55s ease',
        }}
      >

        {/* Logo */}
        <img src={logo} alt="Jesús Dev" className="w-16 mb-5" />

        {/* Tagline */}
        <p className="text-white/70 text-sm text-center leading-relaxed mb-4 max-w-xs">
          Páginas web <span className="text-[#049db2]">claras, rápidas</span> y adaptadas a tu negocio
        </p>

        {/* Legal */}
        <div className="flex items-center gap-2 mb-8 text-white/40 text-xs">
          <Link to="/aviso-legal" className="hover:text-white/70 transition-colors">Aviso legal</Link>
          <span>·</span>
          <Link to="/privacidad" className="hover:text-white/70 transition-colors">Privacidad</Link>
        </div>

        {/* Nav links */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 mb-8">
          {NAV_LINKS.map(({ icon: Icon, label, to, section }) => (
            <Link
              key={label}
              to={to}
              onClick={() => ScrollSections(section)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[rgba(0,188,212,0.08)] text-white/55 text-sm hover:text-white hover:border-[rgba(0,188,212,0.2)] transition-colors"
            >
              <Icon size={16} className="text-[#049db2] shrink-0" />
              {label}
            </Link>
          ))}
        </div>

        {/* Redes sociales */}
        <div className="flex gap-6 mb-8">
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

        {/* Copyright */}
        <p className="text-white/30 text-xs mb-6">
          © 2026 Jesús Dev. Todos los derechos reservados.
        </p>

        {/* Línea decorativa */}
        <div className="flex items-center">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#049db2]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#049db2]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#049db2]" />
        </div>

      </div>
    </footer>
  )
}
