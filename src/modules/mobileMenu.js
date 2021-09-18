/* eslint-disable indent */
const mobileMenu = () => {
    const btnMenu = document.querySelector('.mob-menu-btn'),
        closeBtn = document.querySelector('.mobile-menu-close'),
        overlayMenu = document.getElementById('overlay-menu'),
        menu = document.querySelector('.mobile-menu'),
        menuLinks = menu.querySelectorAll('ul>li>a');

    const handlerMenu = () => {
        menu.classList.toggle('open');
    };

    btnMenu.addEventListener('click', handlerMenu);

    closeBtn.addEventListener('click', handlerMenu);

    overlayMenu.addEventListener('click', handlerMenu);

    menuLinks.forEach(item => item.addEventListener('click', handlerMenu));

};

export default mobileMenu;
