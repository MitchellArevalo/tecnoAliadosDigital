# 🌐 Tecno Aliados Digital – Landing Page

Página web informativa para **Tecno Aliados Digital**, desarrollada con HTML, CSS y JavaScript.  
El objetivo es mostrar los servicios tecnológicos de la empresa con un diseño moderno, animaciones suaves y un footer profesional.

---

## 🧩 Estructura del Proyecto
📁 TecnoAliadosDigital/
│
├── index.html          # Página principal
├── styles.css          # Estilos generales del sitio
├── app.js              # Lógica de interacción (slider, menú, etc.)
└── README.md           # Documentación del proyecto

---

## 🚀 Descripción General

Este proyecto implementa una página web con los siguientes componentes:

### 🔹 Navbar
- Barra de navegación fija con enlaces internos.
- Menú desplegable con opciones adicionales.
- Compatible con móviles y tablets.

### 🔹 Slider Principal
- Carrusel de imágenes con mensajes promocionales.
- Botones de navegación prev/next.
- Ideal para destacar los servicios o campañas actuales.

### 🔹 Secciones Informativas
- **Bienvenida / Descripción:** Presentación de la empresa.
- **Servicios:** Contenedor donde se renderizan dinámicamente las tarjetas desde `app.js`.

### 🔹 Footer (Pie de Página)
Diseñado para mantener coherencia visual con el resto del sitio.  
Incluye:
- **Información de contacto:** teléfono, correo y dirección.  
- **Redes sociales:** íconos de Facebook, Instagram, TikTok y X (Twitter).  
- **Enlaces legales:** política de privacidad, términos y condiciones, etc.  
- **Botón flotante:** “💬 ¡Vamos a chatear!” fijo en la esquina inferior izquierda.  

El footer utiliza un **gradiente moderno** y se adapta a pantallas pequeñas mediante `flex-wrap`.

---

## 🎨 Estilos (CSS)

El diseño utiliza:
- **Fuente:** [Poppins](https://fonts.google.com/specimen/Poppins)
- **Colores principales:**
  - `#00C9A7` (turquesa)
  - `#8E2DE2` (púrpura)
- **Gradiente:** `linear-gradient(90deg, #00c9a7, #8e2de2)`

Los íconos provienen de **FontAwesome**, integrados mediante CDN:
```html
<script src="https://kit.fontawesome.com/6d6bfc0861.js" crossorigin="anonymous"></script>

⚙️ Cómo Ejecutar el Proyecto
	1.	Clona el repositorio o descarga los archivos.
         git clone https://github.com/MitchellArevalo/tecnoAliadosDigital.git
    2.	Abre la carpeta en tu editor (VS Code, Sublime, etc.).
	3.	Abre el archivo index.html en tu navegador.

💡 No requiere instalación de dependencias ni servidor: es 100% HTML/CSS/JS nativo.

📱 Responsividad

El sitio está diseñado con Flexbox, por lo que se adapta automáticamente a:
	•	Computadores de escritorio 💻
	•	Tablets 📱
	•	Dispositivos móviles 📲

✨ Personalización

Puedes editar los siguientes valores fácilmente:
| Elemento                 | Archivo       | Sección             | Descripción |
|---------------------------|----------------|----------------------|--------------|
| Logo / Nombre empresa     | `index.html`   | `<nav>` y `<footer>` | Cambia el texto de “Tecno Aliados Digital”. |
| Colores del gradiente     | `styles.css`   | `.footer`            | Modifica los valores `#00c9a7` y `#8e2de2`. |
| Redes sociales            | `index.html`   | `.social-icons`      | Reemplaza los enlaces de `href="#"` por tus redes reales. |
| Botón de chat             | `index.html`   | `.chat-btn`          | Agrega el enlace directo a WhatsApp, Messenger o tu chat preferido. |
| Íconos de redes sociales  | `index.html`   | `<script FontAwesome>| Puedes cambiar o agregar más íconos con [FontAwesome](https://fontawesome.com/icons). |
| Texto del footer          | `index.html`   | `<div class="footer-left">` | Actualiza dirección, correo o número de contacto. |
| Política de privacidad y demás enlaces | `index.html` | `<div class="footer-right">` | Actualiza los enlaces a tus páginas legales reales. |
| Tipografía general        | `styles.css`   | `body`               | Cambia la fuente en `font-family: 'Poppins', sans-serif;` si deseas otra. |
| Fondo del sitio           | `styles.css`   | `body` o `.slider`   | Modifica los fondos o imágenes principales del sitio. |
| Animación del slider      | `app.js`       | Funciones JS         | Ajusta los intervalos o transiciones del carrusel. 

🧠 Créditos
	•	Desarrollado por: Mitchell Andres Arevalo Henao, Ana Maria Betancur Herrera, Luz Ensueño Ospina Cardona, Erica Varela Quintero
	•	Diseño y estructura: Inspirado en interfaces tecnológicas modernas.
	•	Versión: 1.0 (2025)
