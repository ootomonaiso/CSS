document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
});