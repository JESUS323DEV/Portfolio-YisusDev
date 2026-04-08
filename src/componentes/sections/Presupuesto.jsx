//IMPORT HEADER
//CSS
import '../../styles/Presupuesto.css'

import logo from "../../assets/logo-footer.png"

import { Link } from 'react-router-dom'
import ScrollSections from "../../componentes/ScrollSections"

import { BadgeCheck } from 'lucide-react'
function Presupuesto() {



    return (
        <>
            <header>
                <nav>
                    <div className='contMenu-presupuesto'>
                        <div className='nav-presupuesto'>
                            <img src={logo} alt="logo" />
                            <ul>
                                <li>
                                    <Link to="/proyectos">Mis proyectos</Link>
                                </li>


                                <li><a
                                    href="https://wa.me/+34695078648"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cta-whatsapp"
                                >Contacto</a></li>
                            </ul>


                        </div>

                    </div>
                </nav>
            </header>



            <section id="#presupuesto">
                <div className="cont-presupuesto">
                    <div className="contenido-presupuesto">

                        <div className="header-presupuesto">
                            <h2>Servicios web</h2>
                            <p>Webs claras y pensadas para negocios reales.</p>
                        </div>



                        <div className="card-presupuesto">
                            <div className="text-presupuesto" >

                                <div className="title-presupuesto">
                                    <h3>Web one page Esencial</h3>
                                    <h5>A partir de 250 €</h5>

                                </div>

                            </div>


                            <div className="soluciones">

                                <ul>

                                    <li> <BadgeCheck className="icon-list" /> Web one page profesional.</li>
                                    <li> <BadgeCheck className="icon-list" /> Diseño adaptado al negocio.</li>
                                    <li> <BadgeCheck className="icon-list" /> Web clara con la información esencial.</li>
                                    <li> <BadgeCheck className="icon-list" /> Enlaces  a redes sociales.</li>
                                    <li> <BadgeCheck className="icon-list" /> Botón de contacto(WhatsApp o llamada).</li>
                                    <li> <BadgeCheck className="icon-list" /> Adaptación completa a móvil.</li>
                                </ul>

                                <div className='recomendado'>
                                    <p>Pensadas para negocios que necesitan una web clara, mostrar qué hacen y cómo contactarlos.</p>
                                </div>

                                <div className='soluciones-small'>
                                    <div>
                                        <small>Mantenimiento Web opcional: <span>25/mes </span> o <span>300€/año</span></small>
                                    </div>

                                    <div>
                                        <small> Dominio y hosting siempre a nombre del cliente. Alta y configuración de dominio y hosting:
                                            <span> 100€ (pago único)</span> </small>
                                    </div>
                                </div>



                            </div>
                        </div>


                        <div className="card-presupuesto">
                            <div className="text-presupuesto">
                                <div className="title-presupuesto">
                                    <h3>Web One Page Profesional</h3>
                                    <h5>A partir de 450 €</h5>
                                </div>
                            </div>

                            <div className="soluciones">
                                <ul>

                                    <li> <BadgeCheck className="icon-list" /> Incluye todo lo anterior.</li>
                                    <li> <BadgeCheck className="icon-list" /> Diseño visual personalizado y adaptado a la marca.</li>
                                    <li> <BadgeCheck className="icon-list" /> Textos pensados para comunicar de forma clara y profesional.</li>
                                    <li> <BadgeCheck className="icon-list" /> Secciones pensadas para explicar bien qué haces y cómo contactarte.</li>
                                    <li> <BadgeCheck className="icon-list" /> Ubicación del negocio con mapa integrado.</li>
                                    <li> <BadgeCheck className="icon-list" /> Formulario de contacto o reservas (WhatsApp).</li>
                                    <li> <BadgeCheck className="icon-list" /> Formulario adaptado al tipo de negocio y sus horarios.</li>
                                    <li> <BadgeCheck className="icon-list" /> SEO base bien planteado (estructura, títulos y texto pensados para búsquedas).</li>
                                </ul>


                                <div className='recomendado'>
                                    <p>Pensada para negocios que quieren una web profesional y orientada a convertir visitas en contactos.</p>
                                </div>
                                <div className='soluciones-small'>
                                    <div>
                                        <small>Mantenimiento Web opcional: <span>25/mes </span> o <span>300€/año</span></small>
                                    </div>

                                    <div>
                                        <small> Dominio y hosting siempre a nombre del cliente. Alta y configuración de dominio y hosting:
                                            <span> 100€ (pago único)</span> </small>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className="card-presupuesto">
                            <div className="text-presupuesto">
                                <div className="title-presupuesto">
                                    <h3>Web Profesional Escalable</h3>
                                    <h5>A partir de 650 €</h5>
                                </div>


                            </div>


                            <div className="soluciones">
                                <ul>
                                    <li> <BadgeCheck className="icon-list" /> Incluye todo lo anterior.</li>
                                    <li> <BadgeCheck className="icon-list" /> Diseño web trabajado a nivel visual y estructural.</li>
                                    <li> <BadgeCheck className="icon-list" /> Varias secciones o páginas según necesidades del proyecto.</li>
                                    <li> <BadgeCheck className="icon-list" /> Contenido ajustado al negocio (copy claro y directo).</li>
                                    <li> <BadgeCheck className="icon-list" /> Contenido mejor organizado para explicar servicios, sedes o eventos.</li>
                                    <li> <BadgeCheck className="icon-list" /> Formularios más completos</li>
                                    <li> <BadgeCheck className="icon-list" /> SEO más trabajado (estructura y contenido pensados para búsquedas).</li>
                                    <li> <BadgeCheck className="icon-list" />  Web preparada para crecer junto al negocio.</li>

                                </ul>


                                <ul>
                                    <h4>Recomendado para:</h4>

                                    <li> <BadgeCheck className="icon-list" /> Marcas con varias sedes, servicios o cambios frecuentes.</li>
                                    <li> <BadgeCheck className="icon-list" /> Proyectos que necesitan una web sólida a medio y largo plazo.</li>
                                </ul>

                                <div className='soluciones-small'>
                                    <div>
                                        <small>Mantenimiento Web opcional: <span>25/mes </span> o <span>300€/año</span></small>
                                    </div>

                                    <div>
                                        <small> Dominio y hosting siempre a nombre del cliente. Alta y configuración de dominio y hosting:
                                            <span> 100€ (pago único)</span> </small>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <footer>
                <nav>
                    <div className='contMenu-presupuesto'>
                        <div className='nav-presupuesto'>
                            <img src={logo} alt="logo" />
                            <ul>
                                <li>
                                    <Link to="/proyectos">Mis proyectos</Link>
                                </li>


                                <li><a
                                    href="https://wa.me/+34695078648"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cta-whatsapp"
                                >Contacto</a></li>
                            </ul>

                        </div>

                    </div>
                </nav>
            </footer>





        </>

    )
}

export default Presupuesto