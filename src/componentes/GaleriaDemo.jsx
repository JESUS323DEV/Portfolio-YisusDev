import { useState, useRef } from 'react'

import { TabletSmartphone, LaptopMinimal } from "lucide-react"
import '../styles/GaleriaDemo.css'

export default function GaleriaDemo({ imagenesDesktop, imagenesMobile }) {

    const [activeView, setActiveView] = useState('desktop')
    const [indice, setIndice] = useState(0)

    const touchStartX = useRef(null)

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
                <button className='galeria-nav galeria-prev' onClick={anterior}>‹</button>

                <div
                    className={`galeria-container ${activeView === 'mobile' ? 'galeria-container-mobile' : ''}`}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <img
                        src={imagenes[indice]}
                        alt={`Captura ${indice + 1}`}
                        loading='lazy'
                        className='galeria-img'
                    />
                    {/* BOTONES VISTA */}
                    <div className='galeria-btns-vista'>
                        <button
                            className={`galeria-btn-vista ${activeView === 'desktop' ? 'galeria-btn-vista-active' : ''}`}
                            onClick={() => { setActiveView('desktop'); setIndice(0) }}
                        >
                            <LaptopMinimal />
                        </button>
                        <button
                            className={`galeria-btn-vista ${activeView === 'mobile' ? 'galeria-btn-vista-active' : ''}`}
                            onClick={() => { setActiveView('mobile'); setIndice(0) }}
                        >
                            <TabletSmartphone />
                        </button>
                    </div>
                </div>

                <button className='galeria-nav galeria-next' onClick={siguiente}>›</button>
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
