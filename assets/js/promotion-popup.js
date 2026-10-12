(() => {
  const popup = document.querySelector('#promotionPopup');
  const campaign = popup?.querySelector('.promotion-popup__campaign');
  if (!popup || !campaign) return;

  campaign.addEventListener('click', (event) => {
    event.preventDefault();
    popup.addEventListener('hidden.bs.modal', () => {
      window.location.hash = campaign.hash;
    }, { once: true });
    bootstrap.Modal.getOrCreateInstance(popup).hide();
  });
  bootstrap.Modal.getOrCreateInstance(popup).show();
})();
