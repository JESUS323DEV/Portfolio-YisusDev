import { useState, useRef, useEffect } from 'react'

import { TabletSmartphone, LaptopMinimal } from "lucide-react"
import '../styles/GaleriaDemo.css'

export default function GaleriaDemo({ imagenesDesktop, imagenesMobile, vistaGlobal, ocultarVista = false, imagenCompleta = false }) {

    const [localView, setLocalView] = useState('desktop')
    const [isMd, setIsMd] = useState(() => window.matchMedia('(min-width: 768px)').matches)
    const [indice, setIndice] = useState(0)

    const touchStartX = useRef(null)

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)')
        const handler = (e) => setIsMd(e.matches)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])

    // MD+: usa vistaGlobal si está disponible; mobile: usa estado local
    const activeView = (isMd && vistaGlobal) ? vistaGlobal : localView

    // Resetear índice cuando cambia la vista activa
    const prevActiveView = useRef(activeView)
    useEffect(() => {
        if (prevActiveView.current !== activeView) {
            setIndice(0)
            prevActiveView.current = activeView
        }
    }, [activeView])

    const imagenes = activeView === 'mobile' ? imagenesMobile : imagenesDesktop

    const siguiente = () => setIndice(prev => (prev + 1) % imagenes.length)
    const anterior = () => setIndice(prev => (prev - 1 + imagenes.length) % imagenes.length)

    // TOUCH
    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (diff > 50) siguiente()
        if (diff < -50) anterior()
        touchStartX.current = null
    }

    return (
        <div className='galeria-wrapper'>

            {/* FILA: prev + imagen + next */}
            <div className='galeria-fila'>
                <button className='galeria-nav galeria-prev' aria-label='Imagen anterior' onClick={anterior}>‹</button>

                <div
                    className={`galeria-container ${activeView === 'mobile' ? 'galeria-container-mobile' : ''} ${imagenCompleta ? 'galeria-container-completa' : ''}`}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <img
                        src={imagenes[indice]}
                        alt={`Captura ${indice + 1}`}
                        loading='lazy'
                        className='galeria-img'
                    />
                    {/* BOTONES VISTA (solo visibles en mobile) */}
                    {!ocultarVista && <div className='galeria-btns-vista galeria-btns-vista-local'>
                        <button
                            className={`galeria-btn-vista ${localView === 'desktop' ? 'galeria-btn-vista-active' : ''}`}
                            onClick={() => { setLocalView('desktop'); setIndice(0) }}
                        >
                            <LaptopMinimal />
                        </button>
                        <button
                            className={`galeria-btn-vista ${localView === 'mobile' ? 'galeria-btn-vista-active' : ''}`}
                            onClick={() => { setLocalView('mobile'); setIndice(0) }}
                        >
                            <TabletSmartphone />
                        </button>
                    </div>}
                </div>

                <button className='galeria-nav galeria-next' aria-label='Imagen siguiente' onClick={siguiente}>›</button>
            </div>
            {/* PUNTOS + CONTADOR */}
            <div className='galeria-footer'>
                <div className='galeria-puntos'>
                    {imagenes.map((_, i) => (
                        <span
                            key={i}
                            className={`galeria-punto ${i === indice ? 'galeria-punto-active' : ''}`}
                            onClick={() => setIndice(i)}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
