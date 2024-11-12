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
emailjs.init('aYItPsEdpLFK12-IL');

// Manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const statusMessage = document.getElementById('statusMessage');

    // Enviar el formulario utilizando EmailJS
    emailjs.sendForm('service_qphkm8d', 'plantillaContacto', '#contactForm')
        .then(() => {
            statusMessage.textContent = '¡Mensaje enviado exitosamente!';
            statusMessage.style.color = 'green';
            document.getElementById('contactForm').reset(); // Limpiar el formulario
        }, (error) => {
            statusMessage.textContent = 'Error al enviar el mensaje. Inténtelo de nuevo.';
            statusMessage.style.color = 'red';
            console.error('Error:', error);
        });
});
