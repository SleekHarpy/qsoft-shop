'use strict'

const menuSwitcher = document.querySelector('.header__menu-switcher');
const mainNav = document.querySelector('.main-nav');
const htmlElement = document.querySelector('.page-html');
const navItems = document.querySelectorAll('.main-nav__item');

const breakpoint = window.matchMedia('(min-width:768px)');

Array.from(navItems).forEach((item) => {
    const subMenu = item.querySelector(`.main-nav__submenu`);

    item.addEventListener(`click`, () => {
        item.classList.toggle('main-nav__item--opened');
    });

    if (subMenu !== null) {
        subMenu.addEventListener('click', function (e) {
            e.stopPropagation();
          });
    }
});

menuSwitcher.addEventListener('click', function () {
    menuSwitcher.classList.toggle('header__menu-switcher--opened');
    mainNav.classList.toggle('main-nav--opened');
    htmlElement.classList.toggle('page-html--menu-opened');
});
