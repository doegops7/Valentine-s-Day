document.addEventListener("DOMContentLoaded", function() {
    let yesButton = document.getElementById("yesBtn");

    if (yesButton) {  // Verifica si el botón existe antes de añadir el evento
        yesButton.addEventListener("click", function() {
            let numero = "51961995526"; // Reemplaza con el número real de WhatsApp
            let mensaje = encodeURIComponent("¡Sí, acepto! 💖");
            window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
        });
    } else {
        console.error("Error: No se encontró el botón con ID 'yesBtn'. Revisa el HTML.");
    }
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

