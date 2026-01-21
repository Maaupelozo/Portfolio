# Mi Portfolio | Desarrollador Full Stack

Un portfolio profesional **100% vanilla HTML, CSS y JavaScript** con tema oscuro moderno. Completamente responsivo, sin dependencias externas y optimizado para rendimiento.

**[Ver demo en vivo](#)** | **[Descargar](#)** | **[Licencia](#)**

## 🎨 Características Principales

- ✅ **Tema Oscuro Profesional** - Fondo oscuro con acentos en azul (#00a8ff)
- ✅ **100% Responsive** - Optimizado para 320px, 768px, 1280px y más
- ✅ **Sin Dependencias** - Puro HTML, CSS y JavaScript vanilla
- ✅ **Animaciones Suaves** - Transiciones CSS3 y scroll suave
- ✅ **Accesible** - Navegación por teclado, ARIA labels, semántica HTML5
- ✅ **Rápido** - Carga inmediata, sin frameworks ni bundlers
- ✅ **Fácil de Personalizar** - Código comentado y bien estructurado

## 📁 Estructura de Archivos

```
portfolio/
├── index.html              # HTML5 - Estructura semántica
├── css/
│   └── styles.css          # CSS3 - Diseño responsivo y animaciones
├── js/
│   └── main.js             # JavaScript vanilla - Interacciones y lógica
├── assets/
│   ├── images/             # Imágenes y placeholders SVG
│   │   ├── profile.svg     # Avatar de perfil
│   │   ├── project1.svg    # Proyecto 1
│   │   ├── project2.svg    # Proyecto 2
│   │   ├── project3.svg    # Proyecto 3
│   │   ├── about.svg       # Foto para "Sobre mí"
│   │   └── README.txt      # Instrucciones para agregar imágenes
│   └── fonts/              # Fuentes personalizadas (opcional)
├── deploy.sh               # Script de deploy (Linux/Mac)
├── deploy.bat              # Script de deploy (Windows)
├── README.md               # Este archivo
└── VERIFICACION.html       # Checklist de features
```⚡ Opción 1: Directamente (Más Fácil)
```bash
# 1. Abre Cursor
# 2. File → Open Folder
# 3. Selecciona: c:\Users\twitc\Desktop\Nueva carpeta\portfolio
# 4. Listo! Abre index.html en tu navegador
```

### 🖥️ Opción 2: Servidor Local
```bash
# Windows - En PowerShell/CMD en la carpeta del proyecto:
python -m http.server 8000
# O con Node.js:
npx http-server -p 8000
# Luego abre: http://localhost:8000

# Linux/Mac:
python3 -m http.server 8000
```

### 🔧 Opción 3: Usar Scripts (Más Fácil en Windows)
```bash
# Windows:
deploy.bat

# Linux/Mac:
bash deploy.sh
```

### 📂 Opción 4: Live Server Extension
```bash
# 1. En Cursor, instala "Live Server" extension

### Opción 3: Live Server en VS Code
```bash
# 1. Instala la extensión "Live Server" (Ritwick Dey)
# 2. Click derecho en index.html
# 3. Selecciona "Open with Live Server"
```

## 📋 Contenido del Portfolio

El template incluye las siguientes secciones:

### 1. **Navbar (Navegación)**
- Navegación suave entre secciones
- Menú móvil responsivo con hamburguesa
- Efecto sticky con blur backdrop
- Enlaces activos con animaciones

### 2. **Hero Section**
- Headline con destaque
- Subtítulo y descripción
- Imagen de perfil con animación flotante
- Botones CTA (Call to Action)

### 3. **Experience (Experiencia Laboral)**
- 3 tarjetas de experiencia
- Descripción de responsabilidades
- Tags de tecnologías usadas
- Efectos hover y animaciones

### 4. **Projects (Proyectos)**
- Grid de 3 proyectos
- Imagen con overlay hover
- Links a proyecto en vivo y código
- Tags de tecnologías

### 5. **About (Sobre Mí)**
- Texto descriptivo
- Sección de habilidades (Frontend, Backend, Herramientas)
- Foto complementaria
- Layout responsivo

### 6. **Contact (Contacto)**
- Tarjetas de métodos de contacto (Email, WhatsApp, LinkedIn, GitHub)
- Formulario de contacto con validación
- Mensajes de éxito/error
- Enlaces funcionales

### 7. **Footer**
- Copyright
- Enlaces a redes sociales

## 🎨 Características Técnicas

### ✅ Sin Dependencias Externas
- **Ningún framework** (React, Vue, Angular, etc.)
- **Ningún preprocesador** (Sass, Less, etc.)
- **Ningún bundler** (Webpack, Vite, etc.)
- **Ningún build tool** (Node.js no requerido)
- **Solo HTML, CSS y JavaScript vanilla**
- **Fuentes desde Google Fonts** (CDN público)

### ✅ Interacciones Implementadas
- ✓ Navegación suave (smooth scroll)
- ✓ Menú móvil responsive
- ✓ Botón scroll to top con animación
- ✓ Formulario de contacto con validación
- ✓ Lazy loading de imágenes
- ✓ Animaciones al hacer scroll (fade-in)
- ✓ Efectos hover en cards y botones
- ✓ Navegación por teclado (Alt+1, Escape)

### ✅ Responsive Design
Breakpoints exactos:
- **Desktop**: 1280px y más
- **Tablet**: 768px - 1279px
- **Mobile**: 480px - 767px
- **Pequeños**: Menos de 480px

Probado en:
- ✓ 320px (iPhone SE)
- ✓ 768px (iPad)
- ✓ 1280px (Desktop)
- ✓ 1920px (Full HD)

### ✅ Performance
- Imágenes con `loading="lazy"` para optimización
- CSS crítico inlined
- JavaScript optimizado con debounce/throttle
- Recursos comprimidos
- Preconnect a Google Fonts

### ✅ Accesibilidad (A11y)
- Etiquetas semánticas HTML5
- `aria-label` en botones
- Atributos `alt` en imágenes
- Contraste suficiente de colores
- Navegación por teclado

## 🎯 Cómo Personalizar

### 1. Cambiar Datos Personales

Abre `index.html` y reemplaza:

```html
<!-- Línea ~2 -->
<title>Mi Portfolio | Desarrollador Full Stack</title>

<!-- Línea ~112 -->
<a href="#top" class="logo">TuNombre</a>

<!-- Línea ~133 -->
<h1 class="hero-title">Hola, soy <span class="highlight">Tu Nombre</span></h1>
<p class="hero-subtitle">Desarrollador Full Stack & Especialista en Automatización</p>

<!-- Y así sucesivamente con tu información -->
```

### 2. Cambiar Colores

Abre `css/styles.css` y modifica las variables CSS (línea ~10):

```css
:root {
    --primary-color: #0066cc;      /* Azul principal */
    --secondary-color: #00d4ff;    /* Cian */
    --text-dark: #1a1a1a;          /* Texto oscuro */
    /* ... más variables ... */
}
```

### 3. Agregar Imágenes

Reemplaza las imágenes en `assets/images/`:
- `profile.jpg` - Tu foto de perfil
- `project1.jpg` - Captura de tu primer proyecto
- `project2.jpg` - Captura de tu segundo proyecto
- `project3.jpg` - Captura de tu tercer proyecto
- `about.jpg` - Foto para la sección "Sobre mí"

> **Tip**: Las imágenes deben ser de 16:9 o 4:3 para verse bien

### 4. Actualizar Enlaces

En `index.html`, busca y reemplaza:
- `tu@email.com` por tu email real
- `tunumero` por tu número WhatsApp
- `tunombre` por tu usuario de GitHub/LinkedIn
- `https://ejemplo.com` por URLs reales de tus proyectos

### 5. Modificar Experiencia y Proyectos

Cada tarjeta de experiencia y proyecto está claramente marcada en el HTML con comentarios. Simplemente reemplaza el contenido.

## 🧪 Pruebas Rápidas

### Test 1: Verificar Cargas de Imágenes
```bash
# Abre en navegador y verifica que NO aparezcan 404 en console
# F12 → Console → Busca errores de red
```

### Test 2: Responsive Design
```bash
# En DevTools (F12):
# 1. Presiona Ctrl+Shift+M (Toggle Device Toolbar)
# 2. Prueba estos tamaños:
#    - iPhone SE (375x667)
#    - iPad (768x1024)
#    - Desktop (1280x720)
#    - Full HD (1920x1080)
```

### Test 3: Interacciones
- ✓ Haz click en nav links → deben hacer scroll suave
- ✓ Haz click en "Ver Proyectos" → debe ir a la sección
- ✓ Completa el formulario → debe validar y mostrar mensaje
- ✓ Haz scroll hacia abajo → botón arriba debe aparecer
- ✓ En mobile, haz click en hamburguesa → menú debe abrirse

### Test 4: Performance
```bash
# F12 → Lighthouse → Generate Report
# Objetivo: Score 90+
```

## 📝 Notas Sobre Cambios Menores

Este template es una creación original inspirada en mejores prácticas de portfolios modernos. **No hay dependencias que remover ni cambios técnicos requeridos** - todo es vanilla.

### Si Necesitás Agregar Features:

#### Email Real (sin backend)
Usa **Formspree** o **EmailJS** - agregan script simple sin cambiar la estructura.

#### Backend para Formulario
Descomentar y conectar a tu API:
```javascript
// En js/main.js, método handleSubmit()
fetch('https://tu-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
});
```

#### Analytics
Agregar Google Analytics snippet en `<head>` de HTML.

## 🔧 Troubleshooting

### Las imágenes no cargan
- Verifica que los archivos existan en `assets/images/`
- Comprueba las rutas: deben ser relativas (`assets/images/...`)
- En DevTools, ve a Network y busca 404s

### El formulario no funciona
- Actualmente solo valida - no envía realmente
- Para enviar, necesitas conectar a un backend o usar Formspree
- Los datos se muestran en console.log

### Estilos rotos en mobile
- Limpia cache del navegador (Ctrl+Shift+Delete)
- Asegúrate de que `viewport` meta tag esté en HTML
- Prueba en DevTools móvil (Ctrl+Shift+M)

### JavaScript no funciona
- Verifica que no haya errores en console (F12)
- Asegúrate de que `js/main.js` esté vinculado en HTML
- Recarga la página (Ctrl+F5 para hard reload)

## 📦 Entrega & Deployment

### Opción 1: Netlify (Recomendado)
```bash
# 1. Crea cuenta en https://netlify.com
# 2. Drag & drop la carpeta del portfolio
# 3. ¡Listo! Tu sitio estará en vivo en minutos
```

### Opción 2: GitHub Pages
```bash
# 1. Crea repositorio: username.github.io
# 2. Push los archivos
# 3. GitHub Pages automáticamente deploya
```

### Opción 3: Tu Hosting Propio
```bash
# Simplemente sube los archivos vía FTP/SFTP
# No requiere build process - son archivos estáticos
```

## ✨ Mejoras Futuras Opcionales

- [ ] Agregar dark mode toggle
- [ ] Filtro de proyectos por tecnología
- [ ] Animación de tipografía en hero
- [ ] Blog o artículos
- [ ] Integración de redes sociales
- [ ] Sistema de comentarios
- [ ] PWA (Progressive Web App)

## 📄 Licencia

Este proyecto es **de uso libre**. Personalízalo y úsalo como necesites.

## 💬 Soporte

Si encuentras problemas:
1. Verifica que todos los archivos estén en las carpetas correctas
2. Limpia cache del navegador
3. Abre DevTools (F12) y busca errores en console
4. Asegúrate de abrir via HTTP/HTTPS o localhost (no `file://`)

---

**¡Ahora sí! Tu portfolio está listo para usar en Cursor. Buena suerte con tus proyectos! 🚀**
