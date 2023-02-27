// Скролл вверх документа
export function scrollUP () {
  const clickUps = document.querySelector('.scroll-up');
  window.addEventListener('scroll', scroll);
  clickUps.addEventListener('click', times);

  function scroll() {
    const scroll = document.querySelector('.scroll-up');
    setTimeout(10);
    if(window.pageYOffset >= 200 ){
      scroll.classList.add('active');
    } else {
      scroll.classList.remove('active');
    }
  }

  function clickUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
    )
  }

  function times() {
    setTimeout(clickUp, 150);
  }
}
