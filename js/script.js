/* ============== Tooggle icon navbar ============== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    // Ajouter une classe 'active' à la balise <body> lorsque le menu est ouvert
    document.body.classList.toggle('menu-open');
};



/* ============== Scroll reveal ============== */

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .about-content h2, .portfolio h2, .contact h2, .portfolio .text-content p', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .portfolio-box2, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content h1, .about-img, .personal-info.padd-15', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* ============== typed js ============== */

const typed = new Typed('.multiple-text', {
    strings: ['Développeur Frontend Junior'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
