const menuBtn = document.querySelector('.menu-button');
const overlay = document.querySelector('.navigation');
const menu = document.querySelector('.navigation__wrapper');

const duration = 400;
const distance = 400;

const startAnimation = (duration, callback) => {
  let start = NaN;

  requestAnimationFrame(function step(timestamp) {
    start ||= timestamp;

    const progress = (timestamp - start) / duration;

    callback(progress);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  })
};

const closeMenu = () => {
  menuBtn.innerHTML = `
    <svg width="54" height="29" viewBox="0 0 54 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect width="54" height="5" rx="2" />
      <rect y="12" width="54" height="5" rx="2" />
      <rect y="24" width="31" height="5" rx="2" />
    </svg>
  `;

  startAnimation(duration, progress => {
    const top = progress * distance;
    menu.style.transform = `translateY(${distance - top}px)`;
    if (distance - top <= 0) {
      overlay.classList.remove('navigation_active');
    }
  });
};

menuBtn.addEventListener('click', () => {
  if (!overlay.classList.contains('navigation_active')) {
    overlay.classList.add('navigation_active');
    menuBtn.innerHTML = `
      <svg width="42" height="42" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect y="38.1838" width="54" height="5" rx="2" transform="rotate(-45 0 38.1838)" />
        <rect x="3.53564" width="54" height="5" rx="2" transform="rotate(45 3.53564 0)" />
      </svg>
    `;

    startAnimation(duration, progress => {
      const top = progress * distance;
      menu.style.transform = `translateY(${top}px)`;
    });

    overlay.addEventListener('click', ({ target }) => {
      if (target === overlay) {
        closeMenu();
      }
    });

    menu.addEventListener('click', ({ target }) => {
      if (target.closest('a')) {
        closeMenu();
      }
    });
  } else closeMenu();
});