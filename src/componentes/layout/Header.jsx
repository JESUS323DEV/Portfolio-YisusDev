import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import logo from "../../assets/logo-jesus.webp"
import whatsapp from "../../assets/icon-whatsapp.png"
import ScrollSections from "../../componentes/ScrollSections"
import useActiveSection from "../../componentes/useActiveSection"
import { ArrowRight, Mail, Github } from 'lucide-react'

const navLinks = [
    { to: '/',             section: 'hero',      label: 'Inicio'         },
    { to: '/como-trabajo', section: 'aboutMe',   label: '¿Cómo trabajo?' },
    { to: '/servicios',    section: 'servicios', label: 'Servicios'      },
    { to: '/proyectos',    section: 'proyectos', label: 'Proyectos'      },
    { to: '/contacto',     section: 'contacto',  label: 'Contacto'       },
]

const socialLinks = [
    {
        href: 'https://wa.me/+34695078648',
        label: 'WhatsApp',
        sub: 'Hablemos',
        icon: <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />,
        external: true,
    },
    {
        href: 'mailto:jtipian90@gmail.com',
        label: 'Email',
        sub: 'Envíame un correo',
        icon: <Mail size={20} className="text-[#049db2]" />,
        external: false,
    },
    {
        href: 'https://github.com/JESUS323DEV',
        label: 'GitHub',
        sub: 'Mira mis proyectos',
        icon: <Github size={20} className="text-[#049db2]" />,
        external: true,
    },
]

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    const activeSection = useActiveSection()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const logoGrande = activeSection === 'hero'

    return (
        <>
            {/* TOP BAR */}
            <header className="fixed top-0 left-0 w-full z-[100]">
                <nav>
                    <div className={`relative flex justify-between  md:justify-around items-center px-6 py-5 border-b transition-all duration-[400ms] ${scrolled
                        ? 'bg-[rgba(13,16,21,0.92)] backdrop-blur-[12px] border-[rgba(0,83,94,0.218)]'
                        : 'bg-[rgba(13,16,21,0.75)] backdrop-blur-[8px] border-transparent'
                    }`}>
                        <Link to="/" onClick={() => { setOpen(false); ScrollSections("hero"); }}>
                            <img
                                src={logo}
                                alt="Jesús Dev logo"
                                className={`transition-all duration-300 lg:animate-[header-entrada_0.5s_ease_both] lg:[animation-delay:0.5s] ${logoGrande ? 'w-[130px]' : 'w-[110px]'}`}
                            />
                        </Link>

                        {/* Burger — oculto en desktop */}
                        <button
                            className="lg:hidden w-7 h-7 flex flex-col justify-center items-center gap-[5px]"
                            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                            onClick={() => setOpen(v => !v)}
                        >
                            <span style={{
                                display: 'block', height: '2px', width: '26px', background: 'white', borderRadius: '2px',
                                transformOrigin: 'center',
                                transition: 'transform 0.3s ease, opacity 0.3s ease',
                                transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
                            }} />
                            <span style={{
                                display: 'block', height: '2px', width: '26px', background: 'white', borderRadius: '2px',
                                transition: 'opacity 0.2s ease',
                                opacity: open ? 0 : 1,
                            }} />
                            <span style={{
                                display: 'block', height: '2px', width: '26px', background: 'white', borderRadius: '2px',
                                transformOrigin: 'center',
                                transition: 'transform 0.3s ease, opacity 0.3s ease',
                                transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
                            }} />
                        </button>

                        {/* Nav desktop */}
                        <ul className="hidden lg:flex lg:flex-row lg:gap-5">
                            {navLinks.map(({ to, section, label }) => {
                                const isActive = activeSection === section
                                return (
                                    <li key={section} className="nav-item text-[1.1rem] text-white">
                                        <Link
                                            to={to}
                                            className={[
                                                "relative flex items-center gap-[0.8rem] px-2 transition-colors duration-200 hover:text-[#049db2]",
                                                isActive
                                                    ? "text-[#049db2] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#049db2] after:rounded-sm"
                                                    : ''
                                            ].join(' ')}
                                            onClick={() => ScrollSections(section)}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                </nav>
            </header>

            {/* MENÚ MOBILE — overlay full screen */}
            {/* inert bloquea el foco en los elementos ocultos cuando el menú está cerrado */}
            <div className={`fixed inset-0 z-[200] flex flex-col [background:var(--bg-normal)] overflow-y-auto lg:hidden transition-transform duration-[320ms] ease-in-out ${open ? 'translate-x-0 nav-open' : 'translate-x-full'}`}
                inert={!open}
            >

                    {/* Logo + X */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07] shrink-0">
                        <Link to="/" onClick={() => { setOpen(false); ScrollSections("hero"); }}>
                            <img src={logo} alt="Jesús Dev" className="w-[130px]" />
                        </Link>
                        <button
                            aria-label="Cerrar menú"
                            onClick={() => setOpen(false)}
                            className="w-7 h-7 flex flex-col justify-center items-center gap-[5px]"
                        >
                            <span style={{ display:'block', height:'2px', width:'26px', background:'white', borderRadius:'2px', transform:'translateY(7px) rotate(45deg)' }} />
                            <span style={{ display:'block', height:'2px', width:'26px', background:'white', borderRadius:'2px', opacity:0 }} />
                            <span style={{ display:'block', height:'2px', width:'26px', background:'white', borderRadius:'2px', transform:'translateY(-7px) rotate(-45deg)' }} />
                        </button>
                    </div>

                    {/* Nav links */}
                    <ul className="flex flex-col px-6 pt-2">
                        {navLinks.map(({ to, section, label }) => {
                            const isActive = activeSection === section
                            return (
                                <li key={section} className="nav-item border-b border-white/[0.07]">
                                    <Link
                                        to={to}
                                        className="flex items-center justify-between py-5"
                                        onClick={() => { setOpen(false); ScrollSections(section); }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`w-2 h-2 rounded-full shrink-0 ${isActive ? 'bg-[#049db2]' : 'invisible'}`} />
                                            <span className={`text-[1.7rem] font-bold ${isActive ? 'text-white' : 'text-white/70'}`}>
                                                {label}
                                            </span>
                                        </div>
                                        <ArrowRight size={20} className="text-white/30 shrink-0" />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    {/* CONECTEMOS */}
                    <div className="px-6 pt-8 pb-4">
                        <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-5">Conectemos</p>
                        <div className="flex flex-col gap-4">
                            {socialLinks.map(({ href, label, sub, icon, external }) => (
                                <a
                                    key={label}
                                    href={href}
                                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className="social-item flex items-center gap-4"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(0,188,212,0.08)] border border-[rgba(0,188,212,0.25)]">
                                        {icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-semibold text-sm">{label}</p>
                                        <p className="text-white/40 text-xs">{sub}</p>
                                    </div>
                                    <ArrowRight size={16} className="text-white/30 shrink-0" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Bottom: línea + copyright */}
                    <div className="mt-auto px-6 py-8 flex flex-col items-center gap-4">
                        <div className="flex items-center">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#049db2]" />
                            <div className="h-1.5 w-1.5 rounded-full bg-[#049db2]" />
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#049db2]" />
                        </div>
                        <p className="text-white/45 text-xs">© 2026 Jesús Dev. Todos los derechos reservados.</p>
                    </div>

            </div>
        </>
    );
}
