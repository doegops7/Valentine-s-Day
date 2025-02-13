document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("yesBtn").addEventListener("click", function() {
        let numero = "51961995526"; // Reemplaza con el número de WhatsApp
        let mensaje = encodeURIComponent("¡Sí, acepto! 💖");
        window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
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
