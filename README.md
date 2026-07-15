# Patry Ally - Travel & Wellness Experience Platform

Website de Patry Ally construida con tecnologías modernas de frontend.

**Sitio en vivo**: [patryally.com](https://patryally.com)

---

## 🚀 Tecnologías

- **Vite** - Build tool rápido y moderno
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library de alta calidad
- **Embla Carousel** - Carousel/slider component
- **Lucide Icons** - Icon library

---

## ⚙️ Setup Local

### Requisitos
- Node.js 18+ 
- npm o bun

### Instalación

```sh
# Clonar el repositorio
git clone <URL>
cd patryally

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Verificar tipado
npx tsc --noEmit

# Lint
npx eslint src/
```

El sitio estará disponible en `http://localhost:5173`

---

## 📁 Estructura de Carpetas

```
src/
├── components/          # Componentes React reutilizables
│   ├── home/           # Componentes de la página de inicio
│   ├── forms/          # Formularios
│   ├── layout/         # Layout principal (Navbar, Footer, etc)
│   └── ui/             # Componentes base de shadcn/ui
├── pages/              # Páginas principales
├── contexts/           # React Context (ej: LanguageContext)
├── hooks/              # Hooks personalizados
├── lib/                # Utilitarios
└── data/               # JSON estáticos (ej: googleReviews.json)
```

---

## 🔄 Sincronización de Reseñas de Google

Las reseñas de Google se sincronizan automáticamente **dos veces por semana** (lunes y jueves a las 8 a.m. hora Medellín) mediante un **GitHub Action**.

### Cómo funciona

1. **GitHub Action** (`.github/workflows/sync-google-reviews.yml`) se ejecuta en horarios programados
2. Ejecuta `scripts/fetch-google-reviews.mjs` que trae reseñas de la API de Google Places
3. Actualiza `src/data/googleReviews.json` con reseñas nuevas
4. El componente `TestimonialsSection.tsx` las muestra en un carrusel

### Configuración Requerida (Solo primera vez)

1. Crear un API key de Google Cloud con **Places API (New)** habilitada
2. Obtener el **Place ID** de Patry Ally usando la [herramienta oficial de Google](https://developers.google.com/maps/documentation/places/web-service/place-id)
3. Agregar secrets en GitHub (Settings → Secrets and variables → Actions):
   - `GOOGLE_PLACES_API_KEY` - tu API key
   - `GOOGLE_PLACE_ID` - Place ID de Patry Ally

### Ejecutar manualmente

```bash
# En local (requiere variables de entorno)
GOOGLE_PLACES_API_KEY=xxx GOOGLE_PLACE_ID=yyy node scripts/fetch-google-reviews.mjs

# O desde GitHub: Actions tab → Sincronizar reseñas de Google → Run workflow
```

**Costo**: ~$0/mes con 2 llamadas/semana (muy por debajo del límite gratuito de Google)

---

## 🌍 Multiidioma

El sitio soporta español e inglés via `LanguageContext`. Las traducciones están centralizadas en el contexto.

---

## 🎨 Temas (Light/Dark)

Tailwind CSS maneja automáticamente light/dark mode basado en preferencias del sistema del usuario.

---

## 📝 Editar contenido

- **Textos traducibles**: Modificar `src/contexts/LanguageContext.tsx`
- **Testimonios curados**: Editar arreglo en `src/components/home/TestimonialsSection.tsx`
- **Páginas**: Modificar componentes en `src/pages/`
- **Componentes**: Modificar/crear en `src/components/`

---

## 🚢 Despliegue

El sitio se despliega automáticamente en **Vercel** cuando hay cambios en la rama principal (push a `main`).

---

## 📊 Performance & Build

- **Bundle size**: ~162 kB gzipped (JavaScript)
- **Lighthouse score**: Mantener > 90 en Performance, Accessibility, SEO
- **Type safety**: 100% TypeScript (sin `any`)

---

## 📧 Contacto

Para preguntas sobre el proyecto, contactar al equipo de Patry Ally.
