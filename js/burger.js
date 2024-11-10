// burger.js
function toggleMenu() {
    var navMenu = document.getElementById("navMenu");
    var burgerIcon = document.querySelector(".burger-icon");

    // Alterna la clase 'active' en ambos elementos
    navMenu.classList.toggle("active");
    burgerIcon.classList.toggle("active");
}
