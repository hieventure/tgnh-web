(() => {
  const menu = document.querySelector('[data-navigation-menu]');
  if (!menu) return;

  const triggers = [...document.querySelectorAll('[data-menu-target]')];
  const panels = [...menu.querySelectorAll('[data-menu-panel]')];
  const backdrop = menu.querySelector('[data-menu-backdrop]');
  const navigationShell = menu.closest('.navigation-shell');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeName = null;
  let closeTimer = null;

  const panelFor = (name) => panels.find((panel) => panel.dataset.menuPanel === name);

  function closeMenu({ restoreFocus = false } = {}) {
    if (!activeName) return;
    const activeTrigger = triggers.find((trigger) => trigger.dataset.menuTarget === activeName);
    const activePanel = panelFor(activeName);

    window.clearTimeout(closeTimer);
    menu.classList.remove('is-open');
    activePanel?.classList.remove('is-active');
    triggers.forEach((trigger) => trigger.setAttribute('aria-expanded', 'false'));
    activeName = null;

    const finish = () => panels.forEach((panel) => { panel.hidden = true; });
    if (reducedMotion.matches) finish();
    else closeTimer = window.setTimeout(finish, 180);
    if (restoreFocus) activeTrigger?.focus();
  }

  function openMenu(name) {
    const targetPanel = panelFor(name);
    if (!targetPanel) return;
    if (activeName === name) return;

    window.clearTimeout(closeTimer);
    panels.forEach((panel) => {
      panel.hidden = panel !== targetPanel;
      panel.classList.remove('is-active');
    });
    void targetPanel.offsetHeight;
    targetPanel.classList.add('is-active');
    triggers.forEach((trigger) => {
      trigger.setAttribute('aria-expanded', String(trigger.dataset.menuTarget === name));
    });
    activeName = name;
    menu.classList.add('is-open');
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('mouseenter', () => openMenu(trigger.dataset.menuTarget));
    trigger.addEventListener('focus', () => openMenu(trigger.dataset.menuTarget));
    trigger.addEventListener('click', () => openMenu(trigger.dataset.menuTarget));
  });
  navigationShell.querySelectorAll('.category-nav a').forEach((link) => {
    link.addEventListener('mouseenter', () => closeMenu());
  });
  navigationShell.addEventListener('mouseleave', () => closeMenu());
  backdrop.addEventListener('mouseenter', () => closeMenu());
  backdrop.addEventListener('click', () => closeMenu());
  document.addEventListener('click', (event) => {
    if (!activeName || event.target.closest('[data-menu-target], [data-navigation-menu]')) return;
    closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu({ restoreFocus: true });
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth < 992) closeMenu();
  });
})();
