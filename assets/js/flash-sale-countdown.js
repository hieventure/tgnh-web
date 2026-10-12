(() => {
  const timer = document.querySelector("[data-countdown-to]");
  if (!timer) return;

  const deadline = Date.parse(timer.dataset.countdownTo);
  if (Number.isNaN(deadline)) return;

  const daysLabel = timer.querySelector("[data-countdown-days]");
  const hoursLabel = timer.querySelector("[data-countdown-hours]");
  const minutesLabel = timer.querySelector("[data-countdown-minutes]");
  const secondsLabel = timer.querySelector("[data-countdown-seconds]");
  const pad = (value) => String(value).padStart(2, "0");

  function updateCountdown() {
    const totalSeconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    daysLabel.textContent = totalSeconds ? `Chỉ còn ${days} ngày` : "Đang diễn ra";
    hoursLabel.textContent = pad(hours);
    minutesLabel.textContent = pad(minutes);
    secondsLabel.textContent = pad(seconds);
    timer.setAttribute(
      "aria-label",
      totalSeconds
        ? `Chỉ còn ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`
        : "Flash sale đang diễn ra",
    );

    if (!totalSeconds) clearInterval(intervalId);
  }

  const intervalId = setInterval(updateCountdown, 1000);
  updateCountdown();
})();
