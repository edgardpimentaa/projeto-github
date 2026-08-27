const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('#main-menu');

menuToggle?.addEventListener('click', () => {
    const isOpen = mainMenu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        mainMenu.classList.remove('is-open');
        document.body.classList.remove('menu-open');
        menuToggle?.setAttribute('aria-expanded', 'false');
    });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();