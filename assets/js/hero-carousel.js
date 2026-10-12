(() => {
  const carousel = document.querySelector("#heroCarousel");
  const track = carousel?.querySelector(".carousel-inner");
  const slides = track ? [...track.querySelectorAll(".carousel-item")] : [];

  if (slides.length < 3) return;

  const previous = carousel.querySelector("[data-hero-carousel-prev]");
  const next = carousel.querySelector("[data-hero-carousel-next]");
  const interval = Number(carousel.dataset.carouselInterval) || 5000;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let moving = false;
  let timer;

  const activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains("active")));
  const orderedSlides = slides.map((_, index) => slides[(activeIndex + index) % slides.length]);
  const cloneSlide = (slide) => {
    const clone = slide.cloneNode(true);
    clone.classList.remove("active");
    clone.dataset.carouselClone = "";
    clone.setAttribute("aria-hidden", "true");
    clone.inert = true;
    return clone;
  };
  track.replaceChildren(cloneSlide(orderedSlides.at(-1)), ...orderedSlides, cloneSlide(orderedSlides[0]));
  let currentIndex = 1;

  function setPosition(index, animate = false) {
    track.classList.toggle("is-animating", animate);
    const slide = track.children[index];
    const offset = carousel.clientWidth / 2 - slide.offsetLeft - slide.offsetWidth / 2;
    track.style.transform = `translate3d(${offset}px, 0, 0)`;
  }

  function updateActiveSlide() {
    [...track.children].forEach((slide, index) => {
      const active = !slide.hasAttribute("data-carousel-clone") && index === currentIndex;
      slide.classList.toggle("active", active);
      slide.inert = !active;
    });
  }

  function startAutoplay() {
    clearInterval(timer);
    timer = setInterval(() => move(1), interval);
  }

  function move(direction) {
    if (moving) return;

    moving = true;
    clearInterval(timer);
    const targetIndex = currentIndex + direction;

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      track.classList.remove("is-animating");
      currentIndex = targetIndex === 0
        ? slides.length
        : targetIndex === slides.length + 1 ? 1 : targetIndex;
      if (currentIndex !== targetIndex) setPosition(currentIndex);
      updateActiveSlide();
      moving = false;
      startAutoplay();
    };

    setPosition(targetIndex, true);
    track.addEventListener("transitionend", finish, { once: true });
    if (reducedMotion.matches) finish();
    else setTimeout(finish, 650);
  }

  previous?.addEventListener("click", () => move(-1));
  next?.addEventListener("click", () => move(1));
  carousel.addEventListener("mouseenter", () => clearInterval(timer));
  carousel.addEventListener("mouseleave", startAutoplay);
  window.addEventListener("resize", () => !moving && setPosition(currentIndex));

  updateActiveSlide();
  setPosition(currentIndex);
  startAutoplay();
})();
