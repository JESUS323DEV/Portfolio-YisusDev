import { useState } from 'react'
import { Link } from "react-router-dom";

//IMG
import logo from "../../assets/logo-footer.png"

//COMPONENTS
import ScrollSections from "../../componentes/ScrollSections"
import useActiveSection from "../../componentes/useActiveSection"

//LUCIDE
import { List } from 'lucide-react'

//CSS
import '../../styles/Header.css'


export default function Header() {
    const [open, setOpen] = useState(false);
    const activeSection = useActiveSection()

    // logo grande solo en hero
    const logoGrande = activeSection === 'hero'

    return (
        <>
            <header>
                <nav>
                    <div className='cont-header'>
                        <div className='contenido-header'>
                            <Link
                                to="/"
                                onClick={() => {
                                    setOpen(false);
                                    ScrollSections("hero");
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="logo"
                                    className={`logo ${logoGrande ? 'logo-grande' : 'logo-pequeno'}`}
                                />
                            </Link>

                            <button onClick={() => {
                                setOpen(prev => !prev)
                            }}>
                                <List />
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
                                            to="/servicios"
                                            className={activeSection === 'servicios' ? 'active' : ''}
                                            onClick={() => { setOpen(false); ScrollSections("servicios"); }}
                                        >
                                            Mis servicios
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
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
