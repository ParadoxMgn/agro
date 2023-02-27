export const isBurger = () => {
  const body = document.body;
  const hiddenMenu = document.querySelector('.hidden-menu');

  document.addEventListener('click', e => {

    if (e.target.classList.contains('close') || (!e.target.closest('.hidden-menu') && hiddenMenu.classList.contains('active'))) {
      hiddenMenu.classList.remove('active');
      body.style.overflow = 'auto';
    }

    if (e.target.classList.contains('burger') && !hiddenMenu.classList.contains('active')) {
      hiddenMenu.classList.add('active');
      body.style.overflow = 'hidden';
    }

    if (e.target.classList.contains('nav__link-main')) {
      hiddenMenu.classList.remove('active');
      body.style.overflow = 'auto';
    }

  })
}