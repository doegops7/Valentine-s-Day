document.getElementById("yesBtn").addEventListener("click", function () {
    let mensaje = encodeURIComponent("¡Sí acepto! 💖");
    window.location.href = `https://wa.me/?text=${mensaje}`;
});


document.getElementById("noBtn").addEventListener("click", function () {
    let noBtn = document.getElementById("noBtn");

    // Agrega una clase con la animación de desvanecimiento
    noBtn.classList.add("fade-out");

    // Después de la animación, lo oculta completamente
    setTimeout(() => {
        noBtn.style.display = "none";
    }, 1000);
});
