export const debounce = (func, ms = 300) => {
  let id;

  return (...arg) => {
    clearTimeout(id);
    id = setTimeout(() => { func.apply(this, arg); }, ms);
  };
};

export const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

export const widthScroll = () => {
  let scrollWidth = window.innerWidth - document.body.clientWidth;
  if (window.innerWidth > 1023) {
    document.body.style.paddingRight = `${scrollWidth}px`;
    document.querySelector('.header').style.paddingRight = `${scrollWidth}px`;
    document.querySelector('.popup').style.paddingRight = `${scrollWidth}px`;
  }
}