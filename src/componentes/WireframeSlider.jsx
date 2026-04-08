import { useRef, useEffect } from 'react'
import '../styles/WireframeSlider.css'

// SVG WIREFRAME (estructura inicial)
const WireframeBefore = () => (
    <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className='wf-svg'>
        <rect width="200" height="280" rx="6" fill="#1a1a1a"/>
        {/* nav */}
        <rect x="10" y="10" width="180" height="18" rx="2" fill="#252525"/>
        <rect x="15" y="14" width="35" height="10" rx="2" fill="#a1a1a1"/>
        <rect x="120" y="14" width="18" height="10" rx="2" fill="#a1a1a1"/>
        <rect x="143" y="14" width="18" height="10" rx="2" fill="#a1a1a1"/>
        <rect x="166" y="14" width="18" height="10" rx="2" fill="#a1a1a1"/>
        {/* hero */}
        <rect x="10" y="35" width="180" height="75" rx="2" fill="#202020"/>
        <rect x="55" y="52" width="90" height="10" rx="2" fill="#a1a1a1"/>
        <rect x="65" y="67" width="70" height="7" rx="2" fill="#2a2a2a"/>
        <rect x="75" y="82" width="50" height="14" rx="2" fill="#a1a1a1"/>
        {/* cards */}
        <rect x="10" y="120" width="54" height="55" rx="2" fill="#1e1e1e"/>
        <rect x="73" y="120" width="54" height="55" rx="2" fill="#1e1e1e"/>
        <rect x="136" y="120" width="54" height="55" rx="2" fill="#1e1e1e"/>
        <rect x="18" y="132" width="38" height="6" rx="2" fill="#a1a1a1"/>
        <rect x="18" y="142" width="28" height="4" rx="2" fill="#282828"/>
        <rect x="18" y="150" width="33" height="4" rx="2" fill="#282828"/>
        <rect x="81" y="132" width="38" height="6" rx="2" fill="#a1a1a1"/>
        <rect x="81" y="142" width="28" height="4" rx="2" fill="#282828"/>
        <rect x="81" y="150" width="33" height="4" rx="2" fill="#282828"/>
        <rect x="144" y="132" width="38" height="6" rx="2" fill="#a1a1a1"/>
        <rect x="144" y="142" width="28" height="4" rx="2" fill="#282828"/>
        <rect x="144" y="150" width="33" height="4" rx="2" fill="#282828"/>
        {/* footer */}
        <rect x="10" y="185" width="180" height="28" rx="2" fill="#1a1a1a"/>
        <rect x="78" y="193" width="44" height="6" rx="2" fill="#2a2a2a"/>
        <rect x="68" y="203" width="64" height="4" rx="2" fill="#252525"/>
    </svg>
)

// SVG RESULTADO (versión pulida con paleta de la web)
const WireframeAfter = () => (
    <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className='wf-svg'>
        <rect width="200" height="280" rx="6" fill="#0d1117"/>
        {/* nav */}
        <rect x="10" y="10" width="180" height="18" rx="2" fill="#0d1f2d"/>
        <rect x="15" y="13" width="28" height="12" rx="2" fill="#00bcd4" opacity="0.9"/>
        <rect x="120" y="14" width="18" height="10" rx="2" fill="#00bcd4"/>
        <rect x="143" y="14" width="18" height="10" rx="2" fill="#00bcd4"/>
        <rect x="166" y="14" width="18" height="10" rx="2" fill="#00bcd4"/>
        {/* hero */}
        <rect x="10" y="35" width="180" height="75" rx="2" fill="#0a1628"/>
        <rect x="50" y="50" width="100" height="12" rx="2" fill="#00bcd4" opacity="0.85"/>
        <rect x="60" y="67" width="80" height="7" rx="2" fill="#aaa" opacity="0.5"/>
        <rect x="68" y="82" width="64" height="14" rx="2" fill="#0d1f2d" stroke="#00bcd4" stroke-width="0.8"/>
        {/* cards */}
        <rect x="10" y="120" width="54" height="55" rx="2" fill="#0d1f2d" stroke="#00bcd4" stroke-width="0.5"/>
        <rect x="73" y="120" width="54" height="55" rx="2" fill="#0d1f2d" stroke="#00bcd4" stroke-width="0.5"/>
        <rect x="136" y="120" width="54" height="55" rx="2" fill="#0d1f2d" stroke="#00bcd4" stroke-width="0.5"/>
        <rect x="18" y="132" width="38" height="6" rx="2" fill="#00bcd4" opacity="0.8"/>
        <rect x="18" y="142" width="28" height="4" rx="2" fill="#aaa" opacity="0.4"/>
        <rect x="18" y="150" width="33" height="4" rx="2" fill="#aaa" opacity="0.3"/>
        <rect x="81" y="132" width="38" height="6" rx="2" fill="#00bcd4" opacity="0.8"/>
        <rect x="81" y="142" width="28" height="4" rx="2" fill="#aaa" opacity="0.4"/>
        <rect x="81" y="150" width="33" height="4" rx="2" fill="#aaa" opacity="0.3"/>
        <rect x="144" y="132" width="38" height="6" rx="2" fill="#00bcd4" opacity="0.8"/>
        <rect x="144" y="142" width="28" height="4" rx="2" fill="#aaa" opacity="0.4"/>
        <rect x="144" y="150" width="33" height="4" rx="2" fill="#aaa" opacity="0.3"/>
        {/* footer */}
        <rect x="10" y="185" width="180" height="28" rx="2" fill="#090909"/>
        <rect x="78" y="192" width="44" height="8" rx="2" fill="#00bcd4" opacity="0.7"/>
        <rect x="68" y="204" width="64" height="4" rx="2" fill="#aaa" opacity="0.25"/>
    </svg>
)

export default function WireframeSlider() {

    const containerRef = useRef(null)
    const afterRef = useRef(null)
    const handleRef = useRef(null)
    const dragging = useRef(false)

    const updatePosition = (clientX) => {
        const rect = containerRef.current.getBoundingClientRect()
        let x = clientX - rect.left
        x = Math.max(0, Math.min(x, rect.width))
        const pct = (x / rect.width) * 100
        afterRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`
        handleRef.current.style.left = `${pct}%`
    }

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
    }, [])

    return (
        <div className='wf-container' ref={containerRef}>

            {/* BEFORE */}
            <div className='wf-layer wf-before'>
                <WireframeBefore />
            </div>

            {/* AFTER */}
            <div className='wf-layer wf-after' ref={afterRef}>
                <WireframeAfter />
            </div>

            {/* HANDLE */}
            <div className='wf-handle' ref={handleRef}>
                <div className='wf-line' />
                <div className='wf-btn'>◀▶</div>
            </div>

            {/* LABELS */}
            <span className='wf-label wf-label-before'>Estructura</span>
            <span className='wf-label wf-label-after'>Resultado</span>

        </div>
    )
}
