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
