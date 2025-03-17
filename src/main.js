// Función para observar y aplicar animaciones cuando el elemento entra en la pantalla
const observerOptions = {
    threshold: 0.1 // 10% del elemento visible
};

// Crear el Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Dependiendo del id o clase del elemento, se le aplica la animación correspondiente
            if (entry.target.classList.contains('offer-title')) {
                entry.target.classList.add('animate__bounceInLeft');
            }
            if (entry.target.classList.contains('bottom-right')) {
                entry.target.classList.add('animate__fadeInRight');
            }
            if (entry.target.classList.contains('bottom-left')) {
                entry.target.classList.add('animate__fadeInLeft');
            }
            if (entry.target.classList.contains('fade-down')) {
                entry.target.classList.add('animate__fadeInDown');
            }

            // Deja de observar una vez se ha activado la animación
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Seleccionar todos los elementos con las clases correspondientes y observarlos
document.querySelectorAll('.offer-title').forEach(element => observer.observe(element));
document.querySelectorAll('.bottom-right').forEach(element => observer.observe(element));
document.querySelectorAll('.bottom-left').forEach(element => observer.observe(element));
document.querySelectorAll('.fade-down').forEach(element => observer.observe(element));
