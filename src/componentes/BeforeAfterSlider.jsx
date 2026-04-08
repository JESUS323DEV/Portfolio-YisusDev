import { useRef, useEffect, useState } from 'react'
import '../styles/BeforeAfterSlider.css'

export default function BeforeAfterSlider({ beforeDesktop, afterDesktop, beforeMobile, afterMobile }) {

    const [activeView, setActiveView] = useState(
        window.innerWidth < 1024 ? 'mobile' : 'desktop'
    )

    const containerRef = useRef(null)
    const afterRef = useRef(null)
    const handleRef = useRef(null)
    const dragging = useRef(false)
    const activeViewRef = useRef(activeView)

    // Sincronizar ref con estado
    useEffect(() => {
        activeViewRef.current = activeView
        // Resetear al centro al cambiar vista
        if (afterRef.current) afterRef.current.style.clipPath = 'inset(0 50% 0 0)'
        if (handleRef.current) handleRef.current.style.left = '50%'
    }, [activeView])

    const updatePosition = (clientX) => {
        const rect = containerRef.current.getBoundingClientRect()
        let x = clientX - rect.left
        x = Math.max(0, Math.min(x, rect.width))
        const pct = (x / rect.width) * 100
        afterRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`
        handleRef.current.style.left = `${pct}%`
    }

    // Event listeners solo se montan UNA vez
    useEffect(() => {
        const container = containerRef.current

        const onMouseDown = () => { dragging.current = true }
        const onMouseUp = () => { dragging.current = false }
        const onMouseMove = (e) => { if (dragging.current) updatePosition(e.clientX) }

        const onTouchStart = () => { dragging.current = true }
        const onTouchEnd = () => { dragging.current = false }
        const onTouchMove = (e) => { if (dragging.current) updatePosition(e.touches[0].clientX) }

        container.addEventListener('mousedown', onMouseDown)
        window.addEventListener('mouseup', onMouseUp)
        window.addEventListener('mousemove', onMouseMove)
        container.addEventListener('touchstart', onTouchStart)
        window.addEventListener('touchend', onTouchEnd)
        window.addEventListener('touchmove', onTouchMove)

        return () => {
            container.removeEventListener('mousedown', onMouseDown)
            window.removeEventListener('mouseup', onMouseUp)
            window.removeEventListener('mousemove', onMouseMove)
            container.removeEventListener('touchstart', onTouchStart)
            window.removeEventListener('touchend', onTouchEnd)
            window.removeEventListener('touchmove', onTouchMove)
        }
    }, []) // <- array vacío, solo se monta una vez

    const before = activeView === 'mobile' ? beforeMobile : beforeDesktop
    const after = activeView === 'mobile' ? afterMobile : afterDesktop

    return (
        <div className='baf-wrapper'>

            {/* BOTONES */}
            <div className='baf-btns'>
                <button
                    className={`baf-btn ${activeView === 'desktop' ? 'baf-btn-active' : ''}`}
                    onClick={() => setActiveView('desktop')}
                >
                    Desktop
                </button>
                <button
                    className={`baf-btn ${activeView === 'mobile' ? 'baf-btn-active' : ''}`}
                    onClick={() => setActiveView('mobile')}
                >
                    Móvil
                </button>
            </div>

            {/* SLIDER */}
            <div className={`baf-container ${activeView === 'mobile' ? 'baf-container-mobile' : ''}`} ref={containerRef}>
                <img src={before} alt="Antes" className='baf-img baf-before' />
                <img src={after} alt="Después" className='baf-img baf-after' ref={afterRef} />

                <div className='baf-handle' ref={handleRef}>
                    <div className='baf-line' />
                    <div className='baf-button'>◀ ▶</div>
                </div>

                <span className='baf-label baf-label-before'>Antes</span>
                <span className='baf-label baf-label-after'>Después</span>
            </div>

        </div>
    )
}
