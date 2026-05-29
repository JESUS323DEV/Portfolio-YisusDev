import { useEffect } from 'react'
import useInView from '../useInView'
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/icon-whatsapp.png'
import { Mail } from 'lucide-react'

const RESERVAQ_CONFIG = '{"nombre":"Jesús Dev","tema":"bgd1","colorFondo":"#ffffff","colorAcento":"#aa3bff","colorBorde":"#e5e4e7","tituloFormulario":"Escríbeme ","textoBtnReservar":"Enviar","textoTelefono":"También puedes reservar por teléfono","mostrarTelefono":false,"temasGuardados":[],"temasFavoritos":[],"descripcion":"","links":["",""],"logoUrl":"","mostrarNombre":false,"mostrarPanelAyuda":false,"colorNegocio":"#e5fbff","nombreSize":"md","whatsapp":"34695078648","telefono":"+34695078648","minPersonas":1,"maxPersonas":20,"slotInterval":30,"antelacionMinHoras":2,"antelacionMaxDias":30,"aforoPorSlot":0,"cierreTemporalFecha":"","servicios":[],"preguntasExtra":[{"id":"p1777302440488","tipo":"texto","label":"Cuéntame tú idea ","guardado":true,"opciones":[],"campoTipo":"textarea","requerida":true}],"tituloPreguntasExtra":"","textoPoliticaPrivacidad":"Política de Privacidad\n\nResponsable del tratamiento: [Nombre o razón social], con NIF [NIF], y dirección en [Dirección].\n\nFinalidad: Los datos personales recogidos a través de este formulario (nombre, teléfono, email) se utilizan exclusivamente para gestionar su reserva y contactar con usted al respecto.\n\nLegitimación: Ejecución de un contrato o solicitud precontractual (art. 6.1.b RGPD).\n\nConservación: Los datos se conservarán durante el tiempo necesario para gestionar la reserva y el período legal exigible.\n\nDestinatarios: No se cederán datos a terceros salvo obligación legal.\n\nDerechos: Puede ejercer sus derechos de acceso, rectificación, supresión, limitación y portabilidad enviando un correo a [email de contacto].","textoAvisoLegal":"Aviso Legal\n\nTitular del sitio web: [Nombre o razón social]\nNIF: [NIF]\nDomicilio: [Dirección completa]\nEmail de contacto: [email]\n\nEl acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El titular se reserva el derecho de modificar los contenidos sin previo aviso.\n\nEste sitio web ha sido desarrollado con la plataforma Reservaq (www.reservaq.com).","horarios":{"0":[],"1":[{"end":"14:00","start":"10:00"}],"2":[{"end":"14:00","start":"10:00"},{"end":"21:00","start":"16:00"}],"3":[{"end":"14:00","start":"10:00"},{"end":"21:00","start":"16:00"}],"4":[{"end":"14:00","start":"10:00"},{"end":"21:00","start":"16:00"}],"5":[{"end":"16:00","start":"10:00"}],"6":[]},"fechasBloqueadas":[],"perfil":"personalizado","googleCalendarLink":false,"minutosParaHistorial":120,"modoEnvio":"email","perfilEmail":"consulta","emailNegocio":"jesus.9019@gmail.com","emailConfirmacion":false,"encabezadoMensaje":"💬 *Nueva Consulta*","textoPie":"✅ ¡Gracias! ","camposActivos":{"hora":false,"email":true,"fecha":false,"nombre":true,"mensaje":false,"personas":false,"telefono":true,"apellidos":false},"mensajeTemplate":"{encabezado}\n\n👤 Nombre: {nombre}\n📞 Teléfono: {telefono}\n👥 Personas: {personas}\n🕐 Hora: {hora}\n📅 Día: {dia}\n{mensajeExtra}\n{pie}","slug":"jesusdev"}'

export default function Contacto() {
  const [headRef, headInView] = useInView()
  const [bodyRef, bodyInView] = useInView(0.05)

  useEffect(() => {
    if (!document.getElementById('reservaq-css')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://turnoya-demo.netlify.app/reservaq.css'
      link.id = 'reservaq-css'
      document.head.appendChild(link)
    }

    const old = document.getElementById('reservaq-js')
    if (old) old.remove()
    const script = document.createElement('script')
    script.src = 'https://turnoya-demo.netlify.app/reservaq.js'
    script.id = 'reservaq-js'
    document.body.appendChild(script)
  }, [])

  return (
    <section id="contacto" className="bg-[#0d1015] py-20">
      <div className="mx-auto w-[90%] max-w-6xl">

        {/* Cabecera */}
        <div
          ref={headRef}
          className="flex flex-col items-center text-center mb-10"
          style={{
            opacity: headInView ? 1 : 0,
            transform: headInView ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.55s ease, transform 0.55s ease',
          }}
        >
          <p className="text-[#049db2] text-xs font-semibold tracking-widest uppercase mb-3">
            Contacto
          </p>
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-3">
            Hablemos<span className="text-[#049db2]">.</span>
          </h2>
          <div className="h-0.5 w-10 bg-[#049db2] mb-5" />
          <p className="text-white/75 text-base leading-relaxed max-w-xs">
            Cuéntame tu proyecto y te respondo en menos de 24h.
          </p>
        </div>

        {/* Widget Reservaq + contacto directo */}
        <div
          ref={bodyRef}
          style={{
            opacity: bodyInView ? 1 : 0,
            transform: bodyInView ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s',
          }}
        >
          <div id="reservaq" data-config={RESERVAQ_CONFIG.replace(/\n/g, '\\n')} />

          {/* Contacto directo */}
          <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-white/40 text-xs uppercase tracking-widest">O contáctame directamente</p>
          <div className="flex flex-col gap-3 w-full">
            <a
              href="mailto:jtipian90@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] text-white/60 text-sm"
            >
              <Mail size={16} className="text-[#049db2] shrink-0" />
              jtipian90@gmail.com
            </a>
            <a
              href="https://www.instagram.com/jesussdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] text-white/60 text-sm"
            >
              <img src={instagram} alt="instagram" className="w-4 h-4 shrink-0" />
              @jesussdev
            </a>
            <a
              href="https://wa.me/+34695078648"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.07] bg-[rgba(255,255,255,0.02)] text-white/60 text-sm"
            >
              <img src={whatsapp} alt="whatsapp" className="w-4 h-4 shrink-0" />
              +34 695 078 648
            </a>
          </div>
        </div>
        </div>

      </div>
    </section>
  )
}
