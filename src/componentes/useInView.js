import { useEffect, useRef, useState } from 'react'

export default function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    // Dos RAF seguidos para que el navegador pinte el estado inicial (opacity 0)
    // antes de empezar a observar, así la transición CSS arranca bien
    let raf1, raf2
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (el) observer.observe(el)
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      observer.disconnect()
    }
  }, [])

  return [ref, inView]
}
