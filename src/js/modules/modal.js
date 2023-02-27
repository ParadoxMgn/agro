import { validateForm } from "./validateForm.js";
import { widthScroll } from "./helpers.js";

export const openModal = popup => {
  widthScroll();
  popup.classList.add('active');
  popup.querySelector('.content').classList.add('active');
  document.body.style.overflow = 'hidden';
}

export const closeModal = popup => {
  widthScroll();
  popup.classList.remove('active');
  popup.querySelector('.content').classList.remove('active');
  document.body.style.overflow = 'auto';
}

export const modal = () => {
  document.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.classList.contains('btn-popup')) {
      const popup = document.querySelector(`.${e.target.dataset.popup}`);
      openModal(popup);
    }

    if (e.target.classList.contains('close-popup') || e.target.classList.contains('block-popup')) {
      const popup = document.querySelector(`.${e.target.dataset.popup}`);
      closeModal(popup);
    }
  }, true);
}