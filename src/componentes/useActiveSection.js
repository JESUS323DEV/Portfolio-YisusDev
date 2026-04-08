import { useEffect, useState, useRef } from 'react'

const sections = ['hero', 'aboutMe', 'servicios', 'proyectos', 'demos' , 'contacto']

export default function useActiveSection() {
    const [activeSection, setActiveSection] = useState('hero')
    const lastScroll = useRef(0)

    useEffect(() => {
        const observers = []

        sections.forEach(id => {
            const el = document.getElementById(id)
            if (!el) return

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id)
                    }
                },
                {
                    rootMargin: '-10% 0px -80% 0px',
                    threshold: 0
                }
            )

            observer.observe(el)
            observers.push(observer)
        })

        return () => observers.forEach(o => o.disconnect())
    }, [])

    return activeSection
}