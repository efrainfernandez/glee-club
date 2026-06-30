# Guía de Despliegue — Glee Club Salamanca

Esta guía cubre cómo generar la build de producción y desplegarla en distintos entornos.

---

## 1. Generar la build de producción

```bash
# Instalar dependencias (si no se ha hecho antes)
npm install

# Generar la build optimizada
npm run build
```

Esto crea la carpeta `dist/` con todos los archivos estáticos listos para servir:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js     # JavaScript compilado y minificado
│   ├── index-[hash].css    # CSS compilado y minificado
│   └── ...                 # Imágenes, sprites, fuentes
```

Para verificar la build localmente antes de subir:

```bash
npm run preview
# Disponible en http://localhost:4173
```

---

## 2. Despliegue en Vercel (recomendado)

La forma más rápida para desplegar una aplicación Vite/React.

### Opción A — Desde la interfaz web

1. Accede a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub/GitLab.
2. Haz clic en **Add New Project** e importa el repositorio.
3. Vercel detecta automáticamente que es un proyecto Vite. Verifica:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Haz clic en **Deploy**.

### Opción B — Desde la CLI

```bash
# Instalar la CLI de Vercel (solo la primera vez)
npm install -g vercel

# Desplegar
vercel

# Desplegar directamente a producción
vercel --prod
```

---

## 3. Despliegue en Netlify

1. Accede a [netlify.com](https://www.netlify.com) e inicia sesión.
2. Haz clic en **Add new site → Import an existing project**.
3. Conecta el repositorio y configura:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Haz clic en **Deploy site**.

### Desde la CLI de Netlify

```bash
npm install -g netlify-cli

# Build y despliegue en un solo paso
netlify deploy --build --prod
```

### Archivo `netlify.toml` (opcional, para configuración persistente)

Crea un archivo `netlify.toml` en la raíz del proyecto:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

> El bloque `[[redirects]]` es necesario para que el enrutamiento del SPA funcione correctamente al recargar la página.

---

## 4. Despliegue en GitHub Pages

```bash
# Instalar el paquete gh-pages
npm install --save-dev gh-pages
```

Añade las siguientes entradas a `package.json`:

```json
{
  "homepage": "https://<tu-usuario>.github.io/glee-club",
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

Añade también la propiedad `base` en `vite.config.ts`:

```ts
export default defineConfig({
  base: '/glee-club/',
  plugins: [react()],
})
```

Ejecuta el despliegue:

```bash
npm run deploy
```

---

## 5. Despliegue en servidor propio (Nginx / Apache)

### Con Nginx

1. Copia el contenido de `dist/` al directorio raíz del servidor, por ejemplo `/var/www/glee-club/`.

```bash
scp -r dist/* usuario@tu-servidor:/var/www/glee-club/
```

2. Configura un bloque de servidor en Nginx:

```nginx
server {
    listen 80;
    server_name gleeclubsalamanca.es www.gleeclubsalamanca.es;
    root /var/www/glee-club;
    index index.html;

    # Redirigir todas las rutas al index.html (SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Caché para assets estáticos con hash
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

3. Recarga Nginx:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

### Con Apache

Crea un archivo `.htaccess` dentro de `dist/`:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

---

## 6. Variables de entorno

Actualmente el proyecto no requiere variables de entorno. Si en el futuro se añaden (por ejemplo, una URL de API o clave de servicio), se gestionan mediante archivos `.env`:

| Archivo | Uso |
|---|---|
| `.env` | Variables por defecto |
| `.env.local` | Variables locales (no subir al repositorio) |
| `.env.production` | Variables específicas de producción |

Las variables deben tener el prefijo `VITE_` para ser accesibles desde el código:

```bash
# Ejemplo
VITE_API_URL=https://api.gleeclubsalamanca.es
```

---

## 7. Comprobación post-despliegue

Una vez desplegado, verifica que todo funciona correctamente:

- [ ] La página carga correctamente en el navegador.
- [ ] El fondo animado (sprites) funciona al hacer scroll.
- [ ] El cambio de idioma ES/EN funciona.
- [ ] El formulario de inscripción muestra los campos correctamente.
- [ ] Las imágenes de la galería cargan.
- [ ] La web es responsive en móvil y escritorio.
- [ ] El botón flotante de "Inscríbete" aparece en la esquina inferior.

---

## Autor

**Efrain Fernández Sangrador** — © 2026  
Glee Club Salamanca · Universidad de Salamanca
