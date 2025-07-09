# Landing Page - Francisco Hurtado | Abogado Laboral

Una landing page profesional y moderna para el abogado Francisco Hurtado, especializado en derecho laboral.

## 🚀 Características

- **Diseño Responsivo**: Adaptable a todos los dispositivos (desktop, tablet, mobile)
- **Interfaz Moderna**: Diseño limpio y profesional con excelente UX/UI
- **Navegación Suave**: Smooth scrolling y navegación intuitiva
- **Formulario de Contacto**: Sistema de contacto integrado con validación
- **Animaciones**: Efectos visuales sutiles para mejorar la experiencia
- **SEO Optimizado**: Estructura semántica y meta tags optimizados

## 📋 Secciones Incluidas

1. **Header/Navegación**: Menú fijo con navegación suave
2. **Hero Section**: Presentación principal con call-to-action
3. **Servicios**: Tres áreas principales de especialización
4. **Sobre Mí**: Información del abogado y credenciales
5. **Contacto**: Formulario de contacto e información de contacto
6. **Footer**: Enlaces adicionales y información de derechos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con CSS Grid, Flexbox y animaciones
- **JavaScript**: Funcionalidades interactivas
- **Font Awesome**: Iconos profesionales
- **Google Fonts**: Tipografía Inter para mejor legibilidad

## 📱 Características Responsivas

- **Desktop**: Experiencia completa con todas las funcionalidades
- **Tablet**: Adaptación del layout manteniendo la funcionalidad
- **Mobile**: Menú hamburguesa, layout vertical, botones táctiles

## 🎨 Paleta de Colores

- **Primario**: #1e3a8a (Azul marino profesional)
- **Secundario**: #3b82f6 (Azul moderno)
- **Acento**: #f59e0b (Dorado para destacar)
- **Texto**: #1f2937 (Gris oscuro)
- **Fondos**: #f8fafc (Gris claro), #ffffff (Blanco)

## 🚀 Cómo Usar

1. **Abrir el archivo**: Simplemente abre `index.html` en tu navegador
2. **Personalizar contenido**: Edita los textos, información de contacto y servicios
3. **Modificar estilos**: Ajusta colores y estilos en `styles.css`
4. **Configurar formulario**: Conecta el formulario con tu backend preferido

## 📝 Personalización

### Información de Contacto
Edita la sección de contacto en `index.html`:
```html
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <div>
        <h4>Teléfono</h4>
        <p>+57 (1) 234-5678</p> <!-- Cambia por tu número -->
    </div>
</div>
```

### Servicios
Modifica los servicios ofrecidos en la sección correspondiente:
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-building"></i>
    </div>
    <h3>Tu Servicio</h3>
    <p>Descripción del servicio...</p>
</div>
```

### Colores
Personaliza los colores en `:root` en `styles.css`:
```css
:root {
    --primary-color: #1e3a8a;
    --secondary-color: #3b82f6;
    /* ... más variables */
}
```

## 📧 Configuración del Formulario

El formulario actualmente muestra notificaciones de prueba. Para conectarlo con un backend:

1. Modifica la función de envío en `script.js`
2. Cambia la URL del endpoint en la petición
3. Ajusta los campos según tus necesidades

Ejemplo de integración:
```javascript
// En script.js, reemplaza la simulación con:
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formObject)
})
.then(response => response.json())
.then(data => {
    showNotification('¡Mensaje enviado exitosamente!', 'success');
});
```

## 🌟 Mejoras Futuras

- Integración con Google Analytics
- Sistema de blog/noticias
- Galería de casos de éxito
- Sistema de citas online
- Chat en vivo
- Testimonios de clientes

## 📞 Soporte

Para dudas o modificaciones adicionales, contacta al desarrollador.

---

**Desarrollado con 💼 para Francisco Hurtado - Abogado Laboral** 