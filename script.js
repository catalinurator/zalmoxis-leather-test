document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Închide meniul când apeși pe un link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    // Verificăm dacă documentul are clasa 'dark-mode'
    document.body.classList.toggle('dark-mode');
    
    // Schimbăm iconița
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️';
    } else {
        toggleBtn.textContent = '🌙';
    }
});
