document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Deschide/Închide meniul la click pe butonul hamburger
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Închide meniul automat când dai click pe un link (pentru a naviga pe pagină)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});
