import logo from "../../assets/logo-jesus.png"
import { Link } from 'react-router-dom'
import ScrollSections from '../../componentes/ScrollSections'
import { BadgeCheck } from 'lucide-react'

// NavBar reutilizada en header y footer de esta página
const NavBar = () => (
    <div className="[background:var(--bg-normal)] py-8">
        <div className="flex justify-center items-center gap-8">
            <img src={logo} alt="logo" className="w-[70px]" />
            <ul className="flex justify-center items-center gap-4">
                <li>
                    <Link
                        to="/proyectos"
                        className="border border-[var(--color-border)] border-b-[rgb(49,57,85)] py-3 px-4 rounded text-white text-sm [background:var(--bg-transparente)] shadow-[1px_1px_10px_rgba(0,255,255,0.118)]"
                    >
                        Mis proyectos
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contacto"
                        onClick={() => ScrollSections('contacto')}
                        className="border border-[var(--color-border)] border-b-[rgb(49,57,85)] py-3 px-4 rounded text-white text-sm [background:var(--bg-transparente)] shadow-[1px_1px_10px_rgba(0,255,255,0.118)]"
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
        </div>
    </div>
)

const CARDS = [
    {
        titulo: 'Web one page Esencial',
        precio: 'A partir de 250 €',
        features: [
            'Web one page profesional.',
            'Diseño adaptado al negocio.',
            'Web clara con la información esencial.',
            'Enlaces a redes sociales.',
            'Botón de contacto (WhatsApp o llamada).',
            'Adaptación completa a móvil.',
        ],
        recomendado: 'Pensadas para negocios que necesitan una web clara, mostrar qué hacen y cómo contactarlos.',
        recomendadoPara: null,
    },
    {
        titulo: 'Web One Page Profesional',
        precio: 'A partir de 450 €',
        features: [
            'Incluye todo lo anterior.',
            'Diseño visual personalizado y adaptado a la marca.',
            'Textos pensados para comunicar de forma clara y profesional.',
            'Secciones pensadas para explicar bien qué haces y cómo contactarte.',
            'Ubicación del negocio con mapa integrado.',
            'Formulario de contacto o reservas (WhatsApp).',
            'Formulario adaptado al tipo de negocio y sus horarios.',
            'SEO base bien planteado (estructura, títulos y texto pensados para búsquedas).',
        ],
        recomendado: 'Pensada para negocios que quieren una web profesional y orientada a convertir visitas en contactos.',
        recomendadoPara: null,
    },
    {
        titulo: 'Web Profesional Escalable',
        precio: 'A partir de 650 €',
        features: [
            'Incluye todo lo anterior.',
            'Diseño web trabajado a nivel visual y estructural.',
            'Varias secciones o páginas según necesidades del proyecto.',
            'Contenido ajustado al negocio (copy claro y directo).',
            'Contenido mejor organizado para explicar servicios, sedes o eventos.',
            'Formularios más completos.',
            'SEO más trabajado (estructura y contenido pensados para búsquedas).',
            'Web preparada para crecer junto al negocio.',
        ],
        recomendado: null,
        recomendadoPara: [
            'Marcas con varias sedes, servicios o cambios frecuentes.',
            'Proyectos que necesitan una web sólida a medio y largo plazo.',
        ],
    },
]

function Presupuesto() {
    return (
        <>
            <header><NavBar /></header>

            <section id="presupuesto" className="[background:var(--bg-normal2)] py-12">
                <div className="flex flex-col justify-center items-center text-center gap-6">

                    {/* Cabecera */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[rgb(0,154,210)] text-[3rem] [text-shadow:var(--text-shadow)]">Servicios web</h2>
                        <p className="text-white">Webs claras y pensadas para negocios reales.</p>
                    </div>

                    {/* Cards de precios */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-[95%] mx-auto">
                    {CARDS.map((card) => (
                        <div key={card.titulo} className="border border-[var(--color-border)] flex flex-col gap-8 text-left p-8 px-4 rounded-lg">

                            {/* Título + precio */}
                            <div className="flex flex-col justify-center items-center text-center gap-4">
                                <div className="w-full">
                                    <h3 className="text-[1.8rem] text-[rgba(0,217,255,0.836)] [text-shadow:var(--text-shadow)]">{card.titulo}</h3>
                                    <h5 className="text-[1.5rem] text-white border-b border-[#049db2] my-4 mx-auto w-[70%]">{card.precio}</h5>
                                </div>
                            </div>

                            {/* Lista de lo que incluye */}
                            <div className="flex flex-col gap-4 w-[90%] mx-auto flex-1">
                                <ul className="flex flex-col justify-center items-start">
                                    {card.features.map(f => (
                                        <li key={f} className="text-white text-base flex gap-1.5 py-2">
                                            <BadgeCheck className="w-5 h-5 min-w-5 text-[rgba(255,191,0,0.641)] shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* Casos de uso específicos — solo en el plan más completo */}
                                {card.recomendadoPara && (
                                    <ul className="flex flex-col justify-center items-start">
                                        <h4 className="text-[1.2rem] text-[#049db2] [text-shadow:var(--text-shadow)] text-center py-4 w-[80%] mx-auto">Recomendado para:</h4>
                                        {card.recomendadoPara.map(r => (
                                            <li key={r} className="text-white text-base flex gap-1.5 py-2">
                                                <BadgeCheck className="w-5 h-5 min-w-5 text-[rgba(255,191,0,0.641)] shrink-0" />
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Descripción del perfil ideal — solo en planes con recomendado */}
                                {card.recomendado && (
                                    <div className="bg-[rgba(0,188,212,0.05)] border border-[rgba(0,188,212,0.2)] rounded p-3">
                                        <p className="text-white/70 text-sm w-[90%] mx-auto leading-relaxed">{card.recomendado}</p>
                                    </div>
                                )}

                                {/* Precios de extras comunes a todos los planes */}
                                <div className="flex flex-col gap-4 border-t border-white/[0.07] pt-4 mt-auto">
                                    <small className="text-white leading-relaxed text-sm">Mantenimiento Web opcional: <span className="text-[#049db2]">25€/mes</span> o <span className="text-[#049db2]">300€/año</span></small>
                                    <small className="text-white leading-relaxed text-sm">Dominio y hosting siempre a nombre del cliente. Alta y configuración de dominio y hosting: <span className="text-[#049db2]">Sin coste adicional</span> <span className="text-[10px] border border-[#f59e0b60] text-[#f59e0b] px-1.5 py-0.5 rounded">Oferta</span></small>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>

                </div>
            </section>

            <footer className="border-t border-[rgb(72,72,72)]"><NavBar /></footer>
        </>
    )
}

export default Presupuesto
