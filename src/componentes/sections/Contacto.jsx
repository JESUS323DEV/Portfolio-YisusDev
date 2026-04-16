import { useState } from 'react'
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/icon-whatsapp.png'
import '../../styles/Contacto.css'

export default function Contacto() {
    const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const texto = `Hola Jesús, soy ${form.nombre} (${form.email}).\n\n${form.mensaje}`
        const url = `https://wa.me/+34695078648?text=${encodeURIComponent(texto)}`
        window.open(url, '_blank')
    }

    return (
        <section id='contacto'>
            <div className='cont-contacto'>
                <h2>Contacto</h2>
                <div className='contenido-contacto'>

                    {/* IZQUIERDA — Formulario */}
                    <form className='contacto-form' onSubmit={handleSubmit}>
                        <h4>¿Tienes un proyecto en mente?</h4>
                        <p className='contacto-form-sub'>Cuéntame qué necesitas y te respondo en menos de 24h.</p>
                        <div className='contacto-field'>
                            <label htmlFor='nombre'>Nombre</label>
                            <input
                                id='nombre'
                                name='nombre'
                                type='text'
                                placeholder='Tu nombre'
                                value={form.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='contacto-field'>
                            <label htmlFor='email'>Email</label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                placeholder='tu@email.com'
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='contacto-field'>
                            <label htmlFor='mensaje'>Mensaje</label>
                            <textarea
                                id='mensaje'
                                name='mensaje'
                                rows={5}
                                placeholder='Cuéntame tu proyecto...'
                                value={form.mensaje}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type='submit' className='contacto-btn'>
                            <img src={whatsapp} alt='whatsapp' />
                            Enviar por WhatsApp
                        </button>
                    </form>

                    {/* DERECHA — Contacto directo */}
                    <div className='contacto-directo'>
                        <h4>Contáctame directamente</h4>
                        <p>Si prefieres escribirme, estoy en estas plataformas.</p>
                        <div className='contacto-directo-links'>
                            <a href='mailto:yisusdev@gmail.com' className='contacto-link-item'>
                                <span className='contacto-link-icon'>✉</span>
                                <span>jtipian90@gmail.com</span>
                            </a>
                            <a
                                href='https://www.instagram.com/jesussdev/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='contacto-link-item'
                            >
                                <img src={instagram} alt='instagram' className='contacto-link-img' />
                                <span>@jesussdev</span>
                            </a>
                            <a
                                href='https://wa.me/+34695078648'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='contacto-link-item'
                            >
                                <img src={whatsapp} alt='whatsapp' className='contacto-link-img' />
                                <span>+34 695 078 648</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
