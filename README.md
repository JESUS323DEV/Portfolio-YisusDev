# JesusDev — Sitio web de servicios freelance

Sitio web de presentación y venta de servicios de desarrollo web freelance, orientado a negocios locales y marcas personales. Diseño oscuro, moderno y responsive.

**Live:** [jesusdev.es](https://jesusdev.es)

---

## Stack

- **React 18** + **Vite**
- **React Router v6** — navegación SPA con scroll a sección
- **Tailwind CSS** — diseño responsive con breakpoints estándar
- **Lucide React** — iconos

## Secciones

| Ruta | Sección |
|---|---|
| `/` | Hero, Cómo trabajo, Servicios, Proyectos, Contacto |
| `/presupuesto` | Presupuesto (oculto, enlace directo) |
| `/aviso-legal` | Aviso legal |
| `/privacidad` | Política de privacidad |

El scroll a cada sección se gestiona mediante rutas virtuales (`/como-trabajo`, `/proyectos`, `/contacto`) sin páginas separadas.

## Proyectos incluidos

- Vanessa (psicopedagoga)
- Estrella sin filtro (Social media manager)
- Atencia Homes (Inmobiliaria)
- Reservaq (SaaS propio de gestión de reservas)

## Analítica

Microsoft Clarity con carga condicional tras consentimiento de cookies (GDPR). El script no se ejecuta hasta que el usuario acepta desde el banner.

## SEO

- `sitemap.xml` y `robots.txt` en `/public`
- Meta tag de verificación de Google Search Console en `index.html`
- Open Graph y meta description configurados

## Deploy

Desplegado en **Netlify** con dominio personalizado `jesusdev.es`. El build se genera con `npm run build` y Netlify lo sirve desde la carpeta `dist`.

## Arrancar en local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

---

*Desarrollado por [JesusDev](https://jesusdev.es)*
