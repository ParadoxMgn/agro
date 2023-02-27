import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

export const sliderHero = () => {

  const catalogSlider = new Swiper('.hero', {
    speed: 500,
    spaceBetween: 0,
    loop: true,
    modules: [Pagination],
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
};

export const sliderHistory = () => {

  const catalogSlider = new Swiper('.history__slider', {
    speed: 500,
    spaceBetween: 0,
    loop: true,
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    pagination: {
      el: '.history__dots',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.history__arrow-right',
      prevEl: '.history__arrow-left',
    },
  });
};

export const sliderPartners = () => {
  let catalogSlider = null;
  let mediaQuerySize = 621;

  const catalogSliderInit = () => {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.partners__cards', {
        speed: 500,
        spaceBetween: 0,
        loop: true,
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        pagination: {
          el: '.partners__dots',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.partners__arrow-right',
          prevEl: '.partners__arrow-left',
        },
      });
    }
  }

  function catalogSliderDestroy() {
    if (catalogSlider) {
      catalogSlider.destroy();
      catalogSlider = null;
    }
  }

  if (!catalogSlider && document.documentElement.clientWidth <= mediaQuerySize) {
    catalogSliderInit();
  }

  window.addEventListener('resize', () => {
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth <= mediaQuerySize) {
      catalogSliderInit();
    } else {
      catalogSliderDestroy();
    }
  });
};
