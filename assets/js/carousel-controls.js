(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  window.addEventListener('load', () => {
    document.querySelectorAll('[data-carousel-toggle]').forEach((button) => {
      const element = button.closest('.carousel');
      const carousel = bootstrap.Carousel.getOrCreateInstance(element);
      let paused = reducedMotion.matches;

      const render = () => {
        button.setAttribute('aria-label', paused ? 'Tiếp tục tự động chuyển' : 'Tạm dừng tự động chuyển');
        button.querySelector('[data-pause-icon]').classList.toggle('d-none', paused);
        button.querySelector('[data-play-icon]').classList.toggle('d-none', !paused);
      };

      if (paused) carousel.pause();
      render();

      button.addEventListener('click', () => {
        paused = !paused;
        paused ? carousel.pause() : carousel.cycle();
        render();
      });
    });
  });
})();
