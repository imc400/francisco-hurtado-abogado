// JavaScript para la landing page de Francisco Hurtado

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.querySelector('.contact-form');
    const header = document.querySelector('.header');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Cerrar menú mobile al hacer click en un link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling para navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header background al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.service-card, .about-content, .contact-content');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Lógica para campos condicionales del formulario
    const subjectSelect = document.getElementById('subject');
    const trabajadorFields = document.getElementById('trabajador-fields');
    const empresaFields = document.getElementById('empresa-fields');
    const trabajadorTipo = document.getElementById('trabajador-tipo');
    const despidoFecha = document.getElementById('despido-fecha');

    // Verificar que los elementos existan antes de agregar listeners
    if (subjectSelect && trabajadorFields && empresaFields && trabajadorTipo && despidoFecha) {
        // Manejar cambios en el select principal
        subjectSelect.addEventListener('change', function() {
            console.log('Asunto seleccionado:', this.value); // Debug
            
            // Ocultar todos los campos condicionales
            hideAllConditionalFields();
            
            if (this.value === 'trabajador') {
                trabajadorFields.style.display = 'block';
                console.log('Mostrando campos de trabajador'); // Debug
            } else if (this.value === 'empresa') {
                empresaFields.style.display = 'block';
                console.log('Mostrando campos de empresa'); // Debug
            }
        });

        // Manejar cambios en tipo de consulta de trabajador
        trabajadorTipo.addEventListener('change', function() {
            console.log('Tipo trabajador seleccionado:', this.value); // Debug
            
            if (this.value === 'despido') {
                despidoFecha.style.display = 'block';
                console.log('Mostrando fecha de despido'); // Debug
            } else {
                despidoFecha.style.display = 'none';
            }
        });

        // Función para ocultar todos los campos condicionales
        function hideAllConditionalFields() {
            const conditionalFields = document.querySelectorAll('.conditional-field');
            conditionalFields.forEach(field => {
                field.style.display = 'none';
            });
            
            // Limpiar valores de campos ocultos
            if (document.getElementById('trabajador-tipo')) {
                document.getElementById('trabajador-tipo').value = '';
            }
            if (document.getElementById('fecha-despido')) {
                document.getElementById('fecha-despido').value = '';
            }
            if (document.getElementById('empresa-tipo')) {
                document.getElementById('empresa-tipo').value = '';
            }
        }
    } else {
        console.error('Algunos elementos del formulario no se encontraron');
    }

    // Manejo del formulario de contacto
    contactForm.addEventListener('submit', function(e) {
        // Obtener datos del formulario
        const formData = new FormData(contactForm);
        const formObject = {};
        
        for (let [key, value] of formData.entries()) {
            formObject[key] = value;
        }

        // Validar campos obligatorios
        if (!formObject.name || !formObject.email || !formObject.subject || !formObject.message) {
            e.preventDefault();
            showNotification('Por favor, completa todos los campos obligatorios.', 'error');
            return;
        }

        // Validar campos condicionales
        if (formObject.subject === 'trabajador' && !formObject.trabajador_tipo) {
            e.preventDefault();
            showNotification('Por favor, selecciona el tipo de consulta.', 'error');
            return;
        }

        if (formObject.trabajador_tipo === 'despido' && !formObject.fecha_despido) {
            e.preventDefault();
            showNotification('Por favor, ingresa la fecha del despido.', 'error');
            return;
        }

        if (formObject.subject === 'empresa' && !formObject.empresa_tipo) {
            e.preventDefault();
            showNotification('Por favor, selecciona el tipo de consulta.', 'error');
            return;
        }

        // Validar email
        if (!isValidEmail(formObject.email)) {
            e.preventDefault();
            showNotification('Por favor, ingresa un email válido.', 'error');
            return;
        }

        // Mostrar mensaje de envío
        showNotification('Enviando mensaje...', 'info');
        
        // El formulario se enviará automáticamente con FormSubmit
        // No prevenir el default para permitir el envío
    });

    // Funciones auxiliares
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showNotification(message, type) {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Estilos de la notificación
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        `;

        // Colores según el tipo
        switch (type) {
            case 'success':
                notification.style.backgroundColor = '#10b981';
                break;
            case 'error':
                notification.style.backgroundColor = '#ef4444';
                break;
            case 'info':
                notification.style.backgroundColor = '#3b82f6';
                break;
        }

        // Agregar al DOM
        document.body.appendChild(notification);

        // Mostrar notificación
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Ocultar notificación después de 4 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 4000);
    }

    // Efectos adicionales para mejorar la experiencia
    
    // Parallax suave para el hero (solo en desktop)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        // Solo aplicar parallax en pantallas grandes (desktop)
        if (hero && scrolled < window.innerHeight && window.innerWidth > 768) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        } else if (hero && window.innerWidth <= 768) {
            // Resetear transform en mobile
            hero.style.transform = 'translateY(0)';
        }
    });

    // Contador animado (si hubiera estadísticas)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start);
            
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    }

    // Lazy loading para imágenes (si las hubiera)
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Función para destacar la sección activa en la navegación
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Ejecutar al hacer scroll
    window.addEventListener('scroll', highlightActiveSection);

    // Ejecutar al cargar la página
    highlightActiveSection();
});

// Estilos adicionales para el menú mobile y animaciones
const additionalStyles = `
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        gap: 1rem;
    }
    
    .nav-toggle.active {
        transform: rotate(90deg);
    }
    
    .nav-link.active {
        color: var(--secondary-color);
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
    }
    
    .service-card.animate {
        animation: fadeInUp 0.6s ease-out;
    }
    
    .about-content.animate {
        animation: fadeInUp 0.8s ease-out;
    }
    
    .contact-content.animate {
        animation: fadeInUp 0.8s ease-out;
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`;

// Crear y agregar estilos adicionales
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet); 