// Función para desplazar hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar u ocultar el botón "Volver arriba" según el desplazamiento
window.onscroll = function() {
    const button = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};



// Inicializar EmailJS (reemplace 'YOUR_USER_ID' con su User ID)
emailjs.init('RO81h33TUhbyarOAS');

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto

    // Enviar el formulario utilizando EmailJS
    emailjs.sendForm('service_qphkm8d', 'plantillaContacto', '#contactForm')
        .then(() => {
            // Mostrar la notificación de éxito
            showNotification();
            document.getElementById('contactForm').reset();
        }, (error) => {
            alert('Error al enviar el mensaje. Inténtelo de nuevo.');
            console.error('Error:', error);
        });
});

// Mostrar la notificación
function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    notification.classList.remove('hidden');
    
    // Ocultar la notificación automáticamente después de 5 segundos
    setTimeout(() => {
        closeNotification();
    }, 5000);
}

// Cerrar la notificación manualmente
function closeNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('hidden');
    notification.classList.remove('show');
}
