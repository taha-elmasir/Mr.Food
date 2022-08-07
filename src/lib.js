// Scroll
export const scroll = (e) => {
  e.preventDefault();
  if (e.target.getAttribute('href') === '#') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return;
  }
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  document.querySelector('.navigation').classList.add('hidden-nav');
};

// Revealing Sections
export const reveal = (ref, margin) => {
  const show = ([entry], observer) => {
    entry.isIntersecting && ref.current.classList.remove('hidden');
    entry.isIntersecting && observer.unobserve(entry.target);
  };

  const options = {
    root: null,
    threshold: 0,
    rootMargin: margin,
  };

  const observer = new IntersectionObserver(show, options);
  observer.observe(ref.current);
};

// Slider
export const slide = (dots, slides) => {
  setInterval(() => {
    slides.forEach((s) => s.classList.add('hidden'));
    dots.forEach((d) => d.classList.toggle('active-dot'));
    const s = dots.find((d) => d.classList.contains('active-dot'));
    document.querySelector(`.${s.dataset.slide}`).classList.remove('hidden');
  }, 10000);

  dots.forEach((d) => {
    d.addEventListener('click', (e) => {
      dots.forEach((d) => d.classList.remove('active-dot'));
      slides.forEach((s) => s.classList.add('hidden'));
      const { nav, slide } = e.target.dataset;
      document
        .querySelector(`.dot[data-nav='${nav}']`)
        .classList.add('active-dot');
      document.querySelector(`.${slide}`).classList.remove('hidden');
    });
  });
};
