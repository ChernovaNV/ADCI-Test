const menuToggle = document.querySelector('.menu-toggle'),
  menu = document.querySelector('.menu');

/*Смена кнопки бургер-меню, Открытие/закрытие панели навигации */
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('menu-toggle--open');
  menu.classList.toggle('menu--open');
})