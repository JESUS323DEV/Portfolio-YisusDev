import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

//IMG
import logo from "../../assets/logo-jesus.png"

//COMPONENTS
import ScrollSections from "../../componentes/ScrollSections"
import useActiveSection from "../../componentes/useActiveSection"

//LUCIDE
import { List, X, Github } from 'lucide-react'

//CSS
import '../../styles/Header.css'


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
            <header>
                <nav>
                    <div className='cont-header'>
                        <div className={`contenido-header ${scrolled ? 'header-scrolled' : ''}`}>
                            <Link
                                to="/"
                                onClick={() => {
                                    setOpen(false);
                                    ScrollSections("hero");
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="Jesús Dev logo"
                                    className={`logo ${logoGrande ? 'logo-grande' : 'logo-pequeno'}`}
                                />
                            </Link>

                            <button className='menu-toggle' aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(prev => !prev)}>
                                {open ? <X /> : <List />}
                            </button>

                            <div className={`menu ${open ? "open" : "closed"}`}>
                                <ul>
                                    <li>
                                        <Link
                                            to="/como-trabajo"
                                            className={activeSection === 'aboutMe' ? 'active' : ''}
                                            onClick={() => { setOpen(false); ScrollSections("aboutMe"); }}
                                        >
                                            ¿Cómo trabajo?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/proyectos"
                                            className={activeSection === 'proyectos' ? 'active' : ''}
                                            onClick={() => { setOpen(false); ScrollSections("proyectos"); }}
                                        >
                                            Proyectos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/webs-listas"
                                            className={activeSection === 'demos' ? 'active' : ''}
                                            onClick={() => { setOpen(false); ScrollSections("demos"); }}
                                        >
                                            Webs listas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/contacto"
                                            className={activeSection === 'contacto' ? 'active' : ''}
                                            onClick={() => { setOpen(false); ScrollSections("contacto"); }}
                                        >
                                            Contacto
                                        </Link>
                                    </li>
                                </ul>

                                {/* Redes sociales - descomentar cuando estén listas
                                <div className='menu-social'>
                                    <a href="https://github.com/JESUS323DEV" target="_blank" rel="noopener noreferrer" className='menu-social-link'>
                                        <Github size={18} />
                                        GitHub
                                    </a>
                                    <a href="https://linkedin.com/in/..." target="_blank" rel="noopener noreferrer" className='menu-social-link'>
                                        <Linkedin size={18} />
                                        LinkedIn
                                    </a>
                                </div>
                                */}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
