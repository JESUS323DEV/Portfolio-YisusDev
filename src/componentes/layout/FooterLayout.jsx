//IMG
import logo from "../../assets/logo-footer.png"
//CSS
import '../../styles/Footer.css'

import { Link } from "react-router-dom";

//COMPONENTS
import ScrollSections from "../../componentes/ScrollSections"

export default function FooterLayout() {



    return (
        <>


            {/*====================FOOTER======================== */}
            <footer>
                <div className='cont-footer'>
                    <div className='contenido-footer'>

                        <div className='foot'>
                            <img src={logo} alt="Logo Footer" />
                            <small>Páginas web claras, rápidas y adaptadas a tu negocio</small>
                            <div className='foot-legal'>
                                <Link to="/aviso-legal">Aviso legal</Link>
                                <span>·</span>
                                <Link to="/privacidad">Privacidad</Link>
                            </div>
                        </div>

                        <div className='links-footer'>
                            <Link to="/" onClick={() => {
                                ScrollSections("hero");
                            }} >Inicio</Link>
                            <Link to="/como-trabajo" onClick={() => {
                                ScrollSections("aboutMe");
                            }} >Cómo trabajo</Link>
                            <Link to="/servicios" onClick={() => {
                                ScrollSections("servicios");

                            }} >Mis servicios</Link>
                            <Link to="/proyectos" onClick={() => {
                                ScrollSections("proyectos");

                            }} >Proyectos</Link>
                        </div>

                        <div className='cont-small'>
                            <small>© 2026 Todos los derechos reservados.</small>
                        </div>
                    </div>
                </div>
            </footer>


        </>

    );
}