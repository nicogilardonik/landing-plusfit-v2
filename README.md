# +FIT.PRO - Premium Gym Landing Page

Sitio web premium para gimnasio de alto rendimiento construido con Astro y Tailwind CSS.

## 🚀 Características

- ⚡️ Astro 4.0 - Framework web moderno
- 🎨 Tailwind CSS - Diseño responsive
- 🌙 Dark Mode - Con persistencia local
- 📱 Mobile First - Diseño adaptativo
- 🎭 Animaciones avanzadas
- 🧩 Componentes modulares

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes Astro
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Marquee.astro
│   │   ├── Stats.astro
│   │   ├── Concept.astro
│   │   ├── Nutrition.astro
│   │   ├── Mission.astro
│   │   ├── Values.astro
│   │   ├── Trainers.astro
│   │   ├── Pricing.astro
│   │   ├── FAQ.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── content.ts   # Datos del sitio
│   ├── layouts/
│   │   └── Layout.astro # Layout principal
│   └── pages/
│       └── index.astro  # Página principal
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Personalización

### Datos del Sitio
Edita `src/data/content.ts` para cambiar:
- Estadísticas
- Planes de precios
- Entrenadores
- FAQs
- Testimonios

### Estilos
- Colores y temas en `tailwind.config.mjs`
- Estilos globales en `src/layouts/Layout.astro`

### Imágenes
Reemplaza las URLs de Unsplash con tus propias imágenes en cada componente.

## 🌐 Deploy

```bash
npm run build
```

El sitio estático se genera en `/dist` listo para deploy en:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

## 📝 Licencia

MIT License - Libre para uso personal y comercial.
