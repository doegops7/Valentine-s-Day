document.addEventListener("DOMContentLoaded", function () {
    // Funcionalidad para el botón "Sí"
    document.getElementById("yesBtn").addEventListener("click", function () {
        let mensaje = encodeURIComponent("¡Sí acepto! 💖");
        window.open(`https://wa.me/51961995526?text=¡Sí, acepto! 💖`, "_blank");
    });

    // Funcionalidad para el botón "No"
    document.getElementById("noBtn").addEventListener("click", function () {
        let noBtn = document.getElementById("noBtn");

        // Agrega la animación de desvanecimiento
        noBtn.classList.add("fade-out");

        // Después de la animación, oculta el botón
        setTimeout(() => {
            noBtn.style.display = "none";
        }, 1000);
    });
});
