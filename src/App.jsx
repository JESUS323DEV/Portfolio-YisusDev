import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

// IMPORT LAYOUT
import Header from "./componentes/layout/Header";
import CookieBanner from "./componentes/CookieBanner";
import FooterLayout from "./componentes/layout/FooterLayout";

// IMPORT SECTIONS
import Hero from "./componentes/sections/Hero";
import ComoTrabajo from "./componentes/sections/ComoTrabajo";
import Proyectos from "./componentes/sections/Proyectos";
import Contacto from "./componentes/sections/Contacto";
import Presupuesto from "./componentes/sections/Presupuesto";
import AvisoLegal from "./componentes/sections/AvisoLegal";
import Privacidad from "./componentes/sections/Privacidad";

const HomeLayout = () => (
  <>
    <Header />

    <main>
      <Hero />
      <ComoTrabajo />
      <Proyectos />
      <Contacto />
    </main>

    <FooterLayout />
  </>
);

const ScrollHandler = () => {
  const { pathname } = useLocation();
  // hasScrolled evita que el scroll a #proyectos se dispare más de una vez por visita
  const hasScrolled = useRef(false);

  useEffect(() => {
    if (pathname === "/aviso-legal" || pathname === "/privacidad") {
      window.scrollTo(0, 0);
      return;
    }
    if (pathname === "/proyectos" && !hasScrolled.current) {
      // Pequeño delay para que el DOM esté pintado antes de hacer scroll
      setTimeout(() => {
        document.getElementById("proyectos")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        hasScrolled.current = true;
      }, 100);
    }
    if (pathname === "/contacto") {
      setTimeout(() => {
        document.getElementById("contacto")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>

      <ScrollHandler />
      <CookieBanner />

      <Routes>
        {/* HOME + SECCIONES */}
        <Route path="/" element={<HomeLayout />} />
        <Route path="/proyectos" element={<HomeLayout />} />
        <Route path="/como-trabajo" element={<HomeLayout />} />
        <Route path="/webs-listas" element={<HomeLayout />} />
        <Route path="/contacto" element={<HomeLayout />} />

        {/* PRESUPUESTO (OCULTO) */}
        <Route path="/presupuesto" element={<Presupuesto />} />

        {/* LEGAL */}
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
