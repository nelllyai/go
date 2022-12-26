const btn = document.querySelector('.header__button');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', () => {
  overlay.classList.add('overlay_active');

  overlay.addEventListener('submit', event => {
    event.preventDefault();
    overlay.querySelector('form').reset();
    overlay.classList.remove('overlay_active');
  });

  overlay.addEventListener('click', ({target}) => {
    if (target.closest('.overlay__close') || target === overlay) {
      overlay.classList.remove('overlay_active');
    }
  });
});