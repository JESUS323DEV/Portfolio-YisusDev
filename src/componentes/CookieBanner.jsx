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
    <div className="fixed bottom-6 left-6 z-[999] w-[calc(100vw-3rem)] max-w-[300px] rounded-2xl border border-white/[0.08] bg-[#131720] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">

      {/* Título */}
      <p className="text-white font-semibold text-sm mb-3">Cookies de analítica</p>

      {/* Descripción */}
      <p className="text-white/50 text-xs leading-relaxed mb-4">
        Usamos cookies de analítica para entender cómo se usa la web y mejorarla.{' '}
        <Link to="/privacidad" className="text-[#049db2] hover:underline">Política de privacidad</Link>
      </p>

      {/* Botones */}
      <div className="flex gap-2">
        <button
          onClick={reject}
          className="flex-1 py-2 text-xs text-white/50 border border-white/15 rounded-lg hover:border-white/30 transition-colors duration-200"
        >
          Rechazar
        </button>
        <button
          onClick={accept}
          className="flex-1 py-2 text-xs font-semibold bg-[#049db2] text-[#0d1015] rounded-lg shadow-[0_0_14px_rgba(4,157,178,0.3)] hover:bg-[#00b4cc] transition-colors duration-200"
        >
          Aceptar
        </button>
      </div>

    </div>
  )
}
