# 🚀 DEPLOYMENT GUIDE

## Desplegar en Netlify (Recomendado - Gratis)

### Método 1: Drag & Drop (Más Fácil)
1. Ve a [https://netlify.com](https://netlify.com)
2. Crea una cuenta gratis
3. Arrastra la carpeta `portfolio` a la zona de drop
4. ¡Listo! Tu sitio estará en vivo en segundos

### Método 2: Con Git (Más Profesional)
1. Crea un repositorio público en GitHub
2. Push el código:
```bash
git remote add origin https://github.com/tuusuario/portfolio.git
git branch -M main
git push -u origin main
```
3. En Netlify: New Site → Import an existing project → GitHub
4. Selecciona el repo y deploy

### Resultado
- URL: `https://tuportfolio.netlify.app`
- HTTPS automático
- Actualizaciones automáticas con cada push

---

## Desplegar en Vercel

1. Ve a [https://vercel.com](https://vercel.com)
2. Conecta tu GitHub
3. Selecciona el repositorio
4. Deploy automático

---

## Desplegar en GitHub Pages (Gratis)

1. Crea repo: `username.github.io`
2. Push los archivos
3. URL: `https://username.github.io`

---

## Desplegar en tu Hosting Propio

1. Sube los archivos vía FTP/SFTP
2. No requiere build ni compilación
3. Archivos estáticos listos para servir

---

## Checklist Antes de Desplegar

- ✓ Todos los datos personales actualizados en `index.html`
- ✓ Imágenes reemplazadas en `assets/images/`
- ✓ Enlaces de redes sociales correctos
- ✓ Formulario de contacto conectado (si usas backend)
- ✓ Testeado en mobile/tablet/desktop
- ✓ Performance check (Lighthouse score 90+)
- ✓ Sin errores en console (F12)

---

## Comandos Útiles

```bash
# Ver cambios
git status

# Ver historial
git log --oneline

# Ver rama actual
git branch

# Cambiar rama
git checkout -b feature/nueva-funcionalidad

# Combinar cambios
git merge feature/nueva-funcionalidad
```

---

## Tips Finales

- 🔄 Backup local antes de cambios importantes
- 📱 Verifica en real devices, no solo DevTools
- 🎨 Mantén consistencia en colores y tipografía
- ⚡ Optimiza imágenes antes de subir
- 📝 Mantén README actualizado

¡Éxito con tu portfolio! 🎉
