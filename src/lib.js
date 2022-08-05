// Scroll
export const scroll = (e) => {
  e.preventDefault();
  e.target.getAttribute("href") === "#" &&
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
};

// revealing sections
export const reveal = (ref, margin) => {
  const show = ([entry], observer) => {
    entry.isIntersecting && ref.current.classList.remove("hidden");
    entry.isIntersecting && observer.unobserve(entry.target);
  };

  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: margin,
  };

  const observer = new IntersectionObserver(show, options);
  observer.observe(ref.current);
};

// the slider
export const slide = (dots, slides) => {
  slides.forEach((r, i) => (r.style.transform = `translateX(${i * 100}%)`));

  dots.forEach((d, i) => {
    d.addEventListener("click", (e) => {
      document
        .querySelectorAll(".dot")
        .forEach((d) => d.classList.remove("active-dot"));

      const { nav } = e.target.dataset;

      document
        .querySelector(`.dot[data-nav='${nav}']`)
        .classList.add("active-dot");

      document
        .querySelectorAll(".slide")
        .forEach(
          (r, i) => (r.style.transform = `translateX(${100 * (i - nav)}%)`)
        );
    });
  });
};
