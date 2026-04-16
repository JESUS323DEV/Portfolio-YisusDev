import { MessageCircle, PenTool, Code2, Rocket } from 'lucide-react'
import '../../styles/ComoTrabajo.css'

const PASOS = [
    {
        icono: <MessageCircle size={22} />,
        paso: 'Paso 01',
        titulo: 'Hablamos',
        subtitulo: 'Entendemos tu negocio',
        texto: 'A partir de tu negocio, definimos qué necesitas y qué tiene que conseguir tu web.',
        actividades: ['Reunión inicial', 'Análisis de tu negocio', 'Definición de objetivos'],
        entregable: 'Propuesta y presupuesto claro',
    },
    {
        icono: <PenTool size={22} />,
        paso: 'Paso 02',
        titulo: 'Diseño',
        subtitulo: 'La base de tu web',
        texto: 'Defino la estructura y el diseño para que tu web sea clara, coherente y efectiva.',
        actividades: ['Estructura de secciones', 'Diseño visual adaptado', 'Revisión y ajustes'],
        entregable: 'Diseño aprobado por ti',
    },
    {
        icono: <Code2 size={22} />,
        paso: 'Paso 03',
        titulo: 'Desarrollo',
        subtitulo: 'Lo construimos',
        texto: 'Doy forma a una web sólida que funciona correctamente y esté lista para salir online.',
        actividades: ['Código limpio y rápido', 'Adaptación a móvil', 'SEO básico incluido',],
        entregable: 'Web funcional y revisada',
    },
    {
        icono: <Rocket size={22} />,
        paso: 'Paso 04',
        titulo: 'Entrega',
        subtitulo: 'Tu web, online',
        texto: 'Tu web publicada y funcionando. Preparada para usarse desde el primer momento.',
        actividades: ['Publicación online', 'Revisión final', 'Web lista para usar'],
        entregable: 'Web online y tuya',
    },
]

export default function ComoTrabajo() {
    return (
        <section id='aboutMe'>
            <div className='cont-aboutMe'>
                <h2>¿Cómo trabajo?</h2>
                <div className='contenido-aboutMe'>
                    {PASOS.map((paso, i) => (
                        <div key={i} className='card-aboutMe'>
                            <div className='card-aboutMe-header'>
                                <span className='card-aboutMe-badge'>{paso.icono}</span>
                                <h4>{paso.titulo}</h4>
                            </div>
                            <span className='card-aboutMe-sub'>{paso.subtitulo}</span>
                            <p>{paso.texto}</p>
                            <div className='card-aboutMe-lista'>
                                <span className='card-aboutMe-lista-titulo'>Detalles</span>
                                <ul>
                                    {paso.actividades.map((a, j) => (
                                        <li key={j}>{a}.</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='card-aboutMe-entregable'>
                                <span className='card-aboutMe-lista-titulo'>Resultado</span>
                                <p>{paso.entregable}.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
