function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    const burgerIcon = document.querySelector('.burger-icon');
    burgerIcon.classList.toggle('active');
}