import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CLARITY_ID = 'x18lw4gm13'
const STORAGE_KEY = 'cookies_consent'

function loadClarity() {
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)
  })(window,document,"clarity","script",CLARITY_ID)
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (consent === 'accepted') {
      loadClarity()
    } else if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    loadClarity()
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-[#0d1015] border-t border-[rgba(4,157,178,0.4)] shadow-[0_-4px_30px_rgba(4,157,178,0.12)] p-5">
      <div className="mx-auto max-w-6xl flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-white/60 text-sm leading-relaxed">
          Usamos cookies de analítica para entender cómo se usa la web y mejorarla.{' '}
          <Link to="/privacidad" className="text-[#049db2] hover:underline">Política de privacidad</Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-xs text-white/50 border border-white/15 rounded hover:border-white/30 transition-colors duration-200"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-xs font-semibold bg-[#049db2] text-[#0d1015] rounded shadow-[0_0_14px_rgba(4,157,178,0.35)] hover:bg-[#00b4cc] transition-colors duration-200"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
