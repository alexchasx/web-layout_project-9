const animateHeroLeft = (tl) => {
  tl.from('.hero__title', {
    opacity: 0,
    duration: 1,
    y: 50,
    delay: 0.3,
    ease: 'ease-in-out',
  }).from(
    '.hero__btn',
    { opacity: 0, y: 50, duration: 0.7, ease: 'ease-in-out' },
    '<'
  );

  tl.from(
    '.hero__descr',
    { opacity: 0, duration: 1, ease: 'ease-in-out' },
    '<0.7'
  );
};

const animatePhotos = (tl) => {
  const images = document.querySelectorAll('.photos-wrap img');
  images.forEach((image) => {
    tl.from(
      image,
      { opacity: 0, scale: 0.5, duration: 0.8, ease: 'ease-in-out' },
      '<0.5'
    );
  });
};

const animateAuthor = (tl) => {
  tl.from(
    '.photos__author',
    { opacity: 0, duration: 0.8, ease: 'ease-in-out' },
    '<0.2'
  );
};

const animateMenuTop = (tl, duration) => {
  tl.fromTo(
    '.menu__top',
    { opacity: 0, y: -138 },
    { duration: duration, y: 0, ease: 'ease-in-out' }
  );

  tl.to(
    '.menu__top',
    { opacity: 1, duration: duration * 2, ease: 'ease-in-out' },
    '<'
  );
};

const animateMenuContainer = (tl, startDelay) => {
  tl.fromTo(
    '.menu__container',
    { opacity: 0, y: 50 },
    { duration: 0.4, y: 0, ease: 'ease-in-out' },
    startDelay
  );

  tl.to(
    '.menu__container',
    { opacity: 1, duration: 0.4 * 2, ease: 'ease-in-out' },
    startDelay
  );
};

const animateMenuNav = (tl, startDelay) => {
  tl.fromTo(
    '.menu__nav',
    { opacity: 0, y: 30 },
    { opacity: 1, duration: 0.4, y: 0, ease: 'ease-in-out' },
    startDelay
  );
};

const animateMenuRight = (tl, startDelay) => {
  const menuRightDuration = 0.7;

  tl.fromTo(
    '.menu__right',
    { opacity: 0, y: 80 },
    { duration: menuRightDuration, y: 0, ease: 'ease-in-out' },
    startDelay
  );

  tl.to(
    '.menu__right',
    { opacity: 1, duration: menuRightDuration * 0.8, ease: 'ease-in-out' },
    startDelay
  );
};

const animateMenuSocial = (tl, startDelay) => {
  tl.fromTo(
    '.social',
    { opacity: 0, y: 50 },
    { opacity: 0.8, duration: 0.7, y: 0, ease: 'ease-in-out' },
    startDelay
  );
};

const animateMenuOpen = (tl) => {
  tl.to('.menu', {
    css: { className: 'menu menu--open' },
    duration: 0,
  });

  const menuTopDuration = 0.4;
  animateMenuTop(tl, menuTopDuration);
  animateMenuContainer(tl, menuTopDuration);
  animateMenuNav(tl, menuTopDuration + 0.5);
  animateMenuRight(tl, menuTopDuration + 0.7);
  animateMenuSocial(tl, menuTopDuration + 0.7);
};

const close = (tl) => {
  tl.reverse();

  tl.to('.menu', {
    css: { className: 'menu' },
    duration: 0,
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const heroTl = gsap.timeline();
  animateHeroLeft(heroTl);
  animatePhotos(heroTl);
  animateAuthor(heroTl);

  document.querySelector('.burger').onclick = () => {
    const menuTl = gsap.timeline();
    animateMenuOpen(menuTl);

    document.querySelector('.close').onclick = () => {
      close(menuTl);
    };
  };
});
