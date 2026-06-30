# Glee Club Salamanca — Página Web Oficial

Landing page oficial del **Glee Club de la Universidad de Salamanca (USAL)**. Una web moderna, animada y bilingüe (ES/EN) construida con React, TypeScript y Vite.

---

## Contenido de la web

| Sección | Descripción |
|---|---|
| **Hero** | Portada principal con animación de fondo y llamadas a la acción |
| **Nuestro Sonido** | Historia del grupo, más de 10 años en la USAL, +60 voces |
| **Eventos** | Conciertos, ensayos abiertos, grabaciones y eventos de equipo |
| **Únete** | Formulario de inscripción (3 pasos) con selector de tipo de voz |
| **Galería** | Mosaico fotográfico de actuaciones |
| **FAQ** | Preguntas frecuentes sobre el coro |
| **Redes Sociales** | Links a YouTube, Instagram y TikTok |

---

## Tecnologías utilizadas

| Herramienta | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | ^18.3.1 | Framework de UI |
| [TypeScript](https://www.typescriptlang.org/) | ^5.5.4 | Tipado estático |
| [Vite](https://vitejs.dev/) | ^5.2.0 | Bundler y servidor de desarrollo |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.17 | Estilos utilitarios |
| [Framer Motion](https://www.framer.com/motion/) | ^11.5.4 | Animaciones |
| [@emotion/react](https://emotion.sh/) | ^11.13.3 | CSS-in-JS |
| [Lucide React](https://lucide.dev/) | 0.522.0 | Iconografía |

**Fuente tipográfica:** [Montserrat](https://fonts.google.com/specimen/Montserrat)

---

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior (incluido con Node.js)

---

## Instalación y arranque

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd glee-club

# 2. Instalar dependencias
npm install

# 3. Arrancar el servidor de desarrollo
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:5173`.

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con hot-reload |
| `npm run build` | Genera la build de producción en la carpeta `dist/` |
| `npm run preview` | Previsualiza la build de producción localmente |
| `npm run lint` | Ejecuta ESLint sobre todos los archivos `.ts` y `.tsx` |

---

## Estructura del proyecto

```
glee-club/
├── dist/                        # Build de producción (generado)
├── img/                         # Imágenes de la galería
│   ├── glee 1.png
│   ├── glee-2.png
│   └── ...
├── src/
│   ├── assets/
│   │   └── background-sprites/  # Fotogramas del fondo animado
│   ├── components/              # Componentes reutilizables
│   ├── i18n/                    # Textos de internacionalización
│   ├── App.tsx                  # Componente raíz con toda la lógica de la página
│   ├── index.css                # Estilos globales y animaciones
│   └── index.tsx                # Punto de entrada de la aplicación
├── index.html                   # HTML principal
├── tailwind.config.js           # Configuración de colores y tipografía
├── vite.config.ts               # Configuración de Vite
├── tsconfig.json                # Configuración de TypeScript
├── package.json
├── README.md
└── DEPLOYMENT.md
```

---

## Paleta de colores

El diseño sigue los colores corporativos de la USAL con el sistema Material Design 3:

| Token | Color | Hex |
|---|---|---|
| `primary` | Granate USAL | `#a50034` |
| `secondary-container` | Amarillo acento | `#fcd400` |
| `tertiary` | Verde oscuro | `#00423e` |
| `surface` | Blanco cálido | `#f8f9fa` |

---

## Internacionalización

La web soporta dos idiomas con alternancia en tiempo real mediante el botón **ES / EN** del header. La lógica de idioma está gestionada con un estado local `language` en `App.tsx` (tipo `'es' | 'en'`).

---

## Autor

**Efrain Fernández Sangrador** — © 2026  
Proyecto desarrollado para el Glee Club de la Universidad de Salamanca.
