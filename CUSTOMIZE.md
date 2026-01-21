<!-- TEMPLATE DE PERSONALIZACIÓN RÁPIDA -->

<!-- ============================================
     PASO 1: INFORMACIÓN PERSONAL BÁSICA
     ============================================ -->

<!-- En index.html, busca y reemplaza: -->

<!-- Línea ~2: Cambiar título de página -->
<title>Mi Portfolio | Desarrollador Full Stack</title>
<!-- Por: -->
<title>Tu Nombre | Desarrollador Full Stack</title>

<!-- Línea ~112: Cambiar nombre en navbar -->
<a href="#top" class="logo">TuNombre</a>
<!-- Por: -->
<a href="#top" class="logo">Tu Nombre Real</a>

<!-- Línea ~133: Hero title -->
<h1 class="hero-title">Hola, soy <span class="highlight">Tu Nombre</span></h1>
<!-- Por tu nombre -->

<!-- ============================================
     PASO 2: CAMBIAR COLORES DEL TEMA
     ============================================ -->

<!-- En css/styles.css, línea ~10: -->
:root {
    /* Colors - Dark Theme */
    --primary-color: #00a8ff;      /* Azul principal */
    --primary-dark: #0088cc;       /* Azul oscuro */
    --primary-light: #1a3a52;      /* Azul claro */
    --secondary-color: #00d4ff;    /* Cian */
}

<!-- Ejemplos de otros colores: -->
/* Morado */
--primary-color: #a855f7;

/* Violeta */
--primary-color: #7c3aed;

/* Rosa */
--primary-color: #ec4899;

/* Verde */
--primary-color: #10b981;

/* Rojo */
--primary-color: #ef4444;

<!-- ============================================
     PASO 3: CAMBIAR EXPERIENCIA LABORAL
     ============================================ -->

<!-- En index.html, busca "Desarrollador Senior" (~línea 170) -->

<!-- Reemplaza COMPLETO este bloque: -->
<div class="experience-card">
    <div class="experience-header">
        <h3>Desarrollador Senior</h3>
        <p class="company">Empresa Actual</p>
    </div>
    <p class="date">Enero 2024 - Presente</p>
    <ul class="responsibilities">
        <li>Lideré el desarrollo de aplicaciones web escalables</li>
        <li>Implementé soluciones de automatización con n8n</li>
        <li>Mentoreé a desarrolladores junior en buenas prácticas</li>
        <li>Optimicé performance en aplicaciones React</li>
    </ul>
    <div class="tech-stack">
        <span class="tech-tag">React</span>
        <span class="tech-tag">Node.js</span>
        <span class="tech-tag">n8n</span>
        <span class="tech-tag">PostgreSQL</span>
    </div>
</div>

<!-- ============================================
     PASO 4: AGREGAR PROYECTOS REALES
     ============================================ -->

<!-- En index.html, busca "E-commerce Tienda Online" (~línea 288) -->

<!-- Reemplaza el bloque del proyecto: -->
<div class="project-card">
    <div class="project-image">
        <img src="assets/images/project1.svg" alt="Mi Proyecto Real" loading="lazy">
        <!-- Reemplaza con tu imagen JPG/PNG -->
        <!-- <img src="assets/images/project1.jpg" alt="Mi Proyecto Real" loading="lazy"> -->
        <div class="project-overlay">
            <a href="https://tu-proyecto.com" target="_blank" class="btn btn-small">Ver Proyecto</a>
        </div>
    </div>
    <div class="project-content">
        <h3>Nombre de tu Proyecto</h3>
        <p class="project-description">
            Descripción breve de qué hace el proyecto
        </p>
        <div class="project-tech">
            <span>Tech1</span>
            <span>Tech2</span>
            <span>Tech3</span>
        </div>
        <div class="project-links">
            <a href="https://proyecto.com" target="_blank" class="link-icon" title="Ver en vivo">🔗</a>
            <a href="https://github.com/tuusuario/proyecto" target="_blank" class="link-icon" title="Ver código">💻</a>
        </div>
    </div>
</div>

<!-- ============================================
     PASO 5: ACTUALIZAR LINKS DE CONTACTO
     ============================================ -->

<!-- En index.html, busca las secciones de contacto (~línea 380): -->

<!-- Email -->
<a href="mailto:tu.email@ejemplo.com" class="contact-card">
    <div class="contact-icon">✉️</div>
    <h3>Email</h3>
    <p>tu.email@ejemplo.com</p>
</a>

<!-- WhatsApp -->
<a href="https://wa.me/TU_NUMERO_AQUI" target="_blank" class="contact-card">
    <div class="contact-icon">💬</div>
    <h3>WhatsApp</h3>
    <p>+54 9 2494 xxxxxx</p>
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/TU_USUARIO" target="_blank" class="contact-card">
    <div class="contact-icon">💼</div>
    <h3>LinkedIn</h3>
    <p>Ver Perfil</p>
</a>

<!-- GitHub -->
<a href="https://github.com/TU_USUARIO" target="_blank" class="contact-card">
    <div class="contact-icon">⚙️</div>
    <h3>GitHub</h3>
    <p>Ver Proyectos</p>
</a>

<!-- ============================================
     PASO 6: AGREGAR IMÁGENES REALES
     ============================================ -->

<!-- 1. Descarga tus imágenes -->
<!-- 2. Guárdelas en assets/images/ -->
<!-- 3. Cambia las rutas de .svg a .jpg o .png -->

<!-- De: -->
<img src="assets/images/profile.svg" alt="Tu Nombre" class="profile-img" loading="lazy">

<!-- A: -->
<img src="assets/images/profile.jpg" alt="Tu Nombre" class="profile-img" loading="lazy">

<!-- ============================================
     PASO 7: EDITAR SECCIÓN SOBRE MÍ
     ============================================ -->

<!-- En index.html, busca "Sobre Mí" (~línea 360) -->

<!-- Reemplaza el texto con tu historia -->

<p>
    Soy un desarrollador Full Stack apasionado por crear experiencias web memorables. 
    Con más de 3 años de experiencia, he trabajado en proyectos desde startups hasta 
    empresas establecidas.
</p>

<!-- ============================================
     PASO 8: CAMBIAR TIPOGRAFÍA
     ============================================ -->

<!-- En css/styles.css, línea ~18: -->
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

<!-- Otras opciones: -->
/* Inter (Muy popular) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Montserrat */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

/* Playfair Display (Para títulos elegantes) */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

<!-- ============================================
     CHECKLIST DE PERSONALIZACIÓN
     ============================================ -->

☐ Actualizar nombre en navbar y hero
☐ Cambiar descripción profesional
☐ Actualizar experiencia laboral (3 elementos)
☐ Agregar/cambiar proyectos (3 elementos)
☐ Actualizar sección "Sobre mí"
☐ Cambiar habilidades (Frontend, Backend, Herramientas)
☐ Actualizar links de contacto
☐ Agregar imágenes reales (5 imágenes mínimo)
☐ Probar en móvil/tablet/desktop
☐ Verificar que no haya errores en console (F12)
☐ Verificar que todos los links funcionen
☐ Hacer commit final: git commit -m "Personalized portfolio"

¡Listo! Tu portfolio está personalizado y listo para desplegar 🎉
