# RigeOps - One Page de Presentación B2B
**Arquitectura de Inteligencia Artificial & Automatización de Operaciones**

Landing page One-Page de alto rendimiento, diseñada con estética **Dark Tech Luxury**, optimizada para conversiones B2B directas a **WhatsApp** y lista para cumplir con los requerimientos de verificación de negocio de **Meta** (Facebook/Instagram/WhatsApp Business API).

---

## 🚀 Características Principales

- **Diagrama de Nodos Interactivo (SVG + JS Ligero)**:
  - Trazado de conexiones fluidas con curvas Bézier.
  - Partículas y pulsos de energía viajando entre nodos en bucle de alto rendimiento (60 FPS, sin dependencias externas).
  - Panel de inspección dinámico con especificaciones técnicas, latencias y estado de cada nodo al interactuar con el cursor o hacer clic.
- **Conversión Directa a WhatsApp**:
  - Enlaces directos a WhatsApp (`+58 412-0275086`) con mensajes preconfigurados y codificados según el botón o servicio seleccionado.
  - Widget flotante con tooltip y animación de pulso.
- **Calculadora Interactiva de ROI**:
  - Estimación instantánea de horas operativas recuperadas y ahorro económico mensual estimado al mover los sliders.
  - Generación de mensaje dinámico para WhatsApp con los valores calculados por el cliente.
- **Validación Legal para Meta (Meta Business Verification)**:
  - Sección de contacto explícita con Email corporativo (`contacto@rigeops.business`), teléfono (`+58 412-0275086`) y dirección física en Maracaibo, Zulia.
  - Footer legal con razón jurídica: `EMPRENDIMIENTO ISRAEL GALICIA`.
- **Cero Dependencias Pesadas**:
  - Creado en HTML5 semántico, CSS3 puro y Vanilla JavaScript. Carga ultrarrápida en milisegundos y máxima puntuación en Google Lighthouse.

---

## 📁 Estructura del Proyecto

```
ONE PAGE PRESENTACION/
├── index.html          # Estructura semántica, metadatos SEO/OpenGraph y secciones
├── styles.css          # Sistema de diseño Dark Tech Luxury, variables CSS y responsive
├── nodes-diagram.js    # Motor SVG + JS de renderizado y animación de nodos
├── app.js              # Controlador de WhatsApp, calculadora ROI, contadores y navegación
└── README.md           # Documentación y guía de despliegue
```

---

## ⚙️ Configuración y Personalización

### 1. Modificar el Número de WhatsApp o Mensajes
En el archivo [`app.js`](file:///c:/Users/isdgl/OneDrive/Documentos/ONE%20PAGE%20PRESENTACION/app.js), localiza el objeto inicial:

```javascript
window.RIGEOPS_CONFIG = {
  phone: '584120275086', // Formato internacional sin signos ni espacios
  defaultMessage: 'Hola Israel / RigeOps, deseo agendar una asesoría gratuita para evaluar la automatización de mi empresa.'
};
```

### 2. Datos de Contacto y Validación Meta
En [`index.html`](file:///c:/Users/isdgl/OneDrive/Documentos/ONE%20PAGE%20PRESENTACION/index.html), los datos legales se encuentran en:
- Bloque `<section id="contacto" class="contact-section">`
- Bloque `<footer class="legal-footer">`

---

## 🌐 Cómo Previsualizar o Desplegar

### Previsualización Local
Puedes abrir directamente el archivo `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari) o utilizar una extensión como *Live Server* en VS Code.

### Despliegue en Producción
Dado que es un proyecto estático sin dependencias de backend:
1. **Vercel**: Conecta la carpeta o repositorio y se desplegará instantáneamente con SSL gratuito.
2. **Netlify**: Arrastra y suelta la carpeta en el panel de Netlify.
3. **Cloudflare Pages / GitHub Pages**: Sube los archivos a una rama de GitHub y activa Pages.
