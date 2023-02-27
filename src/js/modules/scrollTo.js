import { animate } from './helpers.js';

export const scrollTo = () => {
  document.addEventListener('click', e => {
    let scrollTop = document.documentElement.scrollTop;

    if (e.target.closest('.nav__link-main')) {
      e.preventDefault();

      const id = e.target.href.slice(e.target.href.lastIndexOf('#') + 1);
      const scrollSection = document.getElementById(id);
      const duration = scrollSection.offsetTop < 1000 ? scrollSection.offsetTop / 1.5 : scrollSection.offsetTop < 2000 ? scrollSection.offsetTop / 2 : scrollSection.offsetTop < 3000 ? scrollSection.offsetTop / 3 : scrollSection.offsetTop / 4;

      setTimeout(() => {
        animate({
          duration: duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            document.documentElement.scrollTop = scrollTop + (progress * (scrollSection.offsetTop - scrollTop));
          }
        });
      }, 400)
    }
    if (e.target.closest('.footer__image')) {
      e.preventDefault();

      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          document.documentElement.scrollTop = (1 - progress) * scrollTop;
        }
      });
    }
  });
};