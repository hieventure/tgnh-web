document.querySelectorAll('[data-product-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('[data-product-carousel-track]');
  const previous = carousel.querySelector('[data-product-carousel-prev]');
  const next = carousel.querySelector('[data-product-carousel-next]');

  if (!track || !previous || !next) return;

  const updateControls = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const hasOverflow = maxScroll > 1;
    previous.hidden = !hasOverflow || track.scrollLeft <= 1;
    next.hidden = !hasOverflow || track.scrollLeft >= maxScroll - 1;
  };

  previous.addEventListener('click', () => {
    track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' });
  });
  next.addEventListener('click', () => {
    track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' });
  });
  track.addEventListener('scroll', updateControls, { passive: true });
  window.addEventListener('resize', updateControls);
  updateControls();
});
