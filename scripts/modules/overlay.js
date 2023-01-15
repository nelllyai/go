const btns = [document.querySelector('.header__button'),
  document.querySelector('.navigation__button')];
const overlay = document.querySelector('.overlay');

btns.forEach(btn => btn.addEventListener('click', () => {
    overlay.classList.add('overlay_active');

    overlay.addEventListener('submit', event => {
      event.preventDefault();
      overlay.querySelector('form').reset();
    });

    overlay.addEventListener('click', ({ target }) => {
      if (target.closest('.overlay__close') || target === overlay) {
        overlay.classList.remove('overlay_active');
      }
    });
  })
);