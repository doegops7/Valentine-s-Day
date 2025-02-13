document.addEventListener("DOMContentLoaded", function () {
    const verSorpresaBtn = document.getElementById("verSorpresa");
    const preguntaContainer = document.getElementById("pregunta-container");
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    // Mostrar la pregunta al hacer clic en "Ver Sorpresa"
    verSorpresaBtn.addEventListener("click", function () {
        preguntaContainer.style.display = "flex";
        verSorpresaBtn.style.display = "none"; // Ocultar el botón después de hacer clic
    });

    // Redirigir a mensaje.html si elige "Sí"
    yesBtn.addEventListener("click", function () {
        window.location.href = "mensaje.html";
    });

    // Mover el botón "No" de manera aleatoria cuando se presiona
    noBtn.addEventListener("click", function () {
        let maxX = window.innerWidth - noBtn.offsetWidth;
        let maxY = window.innerHeight - noBtn.offsetHeight;

        let randomX = Math.floor(Math.random() * maxX);
        let randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
});
