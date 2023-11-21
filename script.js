document.addEventListener("DOMContentLoaded", function () {
    // Simular una carga de 5 segundos
    setTimeout(function () {
        // Ocultar el loader
        document.getElementById("loaderContainer").style.display = "none";
        // Mostrar el contenido principal
        document.getElementById("content").style.display = "block";
    }, 5000);

    // Actualizar el porcentaje de carga cada segundo
    let progress = 0;
    const interval = setInterval(function () {
        progress += 20;
        document.getElementById("loader").style.borderBottomColor = "#3498db";
        document.getElementById("loaderText").innerText = `Cargando... ${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 1000);
});

/*----------Duende--------------*/
document.addEventListener("DOMContentLoaded", function () {
    const duende = document.querySelector(".duende");
    
    window.addEventListener("scroll", function () {
        const scrollValue = window.scrollY;
        const speed = 0.3;

        // Se detiene el movimiento a los 900px de scroll
        if (scrollValue <= 800) {
            duende.style.transform = `translateY(${scrollValue * speed}px)`;
        }
    });
});