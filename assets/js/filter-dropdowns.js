(() => {
  const brands = [
    ['Azzaro', 17], ['Birkholz', 965], ['Burberry', 24], ['Bvlgari', 25],
    ['Calvin Klein', 27], ['Carolina Herrera', 28], ['Chloe', 533], ['Coach', 899],
    ['Creed', 35], ['Dolce & Gabbana', 41], ['Franck Muller', 959],
    ['Giorgio Armani', 48], ['Gucci', 51], ['Hugo Boss', 55], ['Issey Miyake', 167],
    ['Jean Paul Gaultier', 59], ['Jimmy Choo', 866], ['Kilian', 894], ['Lancôme', 68],
    ['Lolita Lempicka', 71], ['Marc Jacobs', 75], ['MCM', 964], ['Michael Kors', 921],
    ['Minus 417', 935], ['Monotheme', 973], ['Mont Blanc', 78], ['Moschino', 79],
    ['Narciso Rodriguez', 575], ['Paco Rabanne', 82], ['Parfums De Marly', 942],
    ['Parour', 951], ["Penhaligon's", 968], ['Pinesoo', 969], ['Prada', 88],
    ['Ralph Lauren', 89], ['Rochas', 972], ['Salvatore Ferragamo', 861],
    ['Thierry Mugler', 96], ['Valentino', 98], ['Versace', 100],
    ['Viktor & Rolf', 886], ['Yves Saint Laurent', 213]
  ].map(([label, id]) => ({ label, id }));

  const filters = [
    { label: 'Thương Hiệu', items: brands },
    { label: 'Danh mục', items: ['Nước hoa', 'Nước hoa nam', 'Nước hoa nữ', 'Nước hoa unisex', 'Nước hoa niche', 'Mỹ phẩm', 'Gift set'] },
    { label: 'Giới Tính', items: ['Nam', 'Nữ', 'Unisex'] },
    { label: 'Giá KM', items: ['Dưới 1.000.000đ', '1.000.000đ – 2.000.000đ', '2.000.000đ – 3.000.000đ', 'Trên 3.000.000đ'] },
    { label: 'Sắp xếp', items: ['Mới nhất', 'Bán chạy nhất', 'Giá tăng dần', 'Giá giảm dần'] }
  ];

  const closeOtherMenus = (current) => {
    document.querySelectorAll('.filter-dropdown[open]').forEach((dropdown) => {
      if (dropdown !== current) dropdown.removeAttribute('open');
    });
  };

  document.querySelectorAll('.exclusive > .content-container, .elegance > .content-container').forEach((container) => {
    if (container.querySelector('.filter-bar--overlay')) return;

    const bar = document.createElement('nav');
    bar.className = 'filter-bar filter-bar--overlay';
    bar.setAttribute('aria-label', 'Bộ lọc sản phẩm');

    filters.forEach(({ label, items }) => {
      const dropdown = document.createElement('details');
      dropdown.className = 'filter-dropdown';

      const summary = document.createElement('summary');
      summary.textContent = label;

      if (label === 'Sắp xếp') {
        dropdown.classList.add('filter-dropdown--sort');
        const icon = document.createElement('span');
        icon.className = 'filter-sort-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.innerHTML = '<svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2V19M2 16L5 19L8 16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3H17M12 3L17 9M17 9H12M12 13H17L12 20H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        summary.append(icon);
      }

      dropdown.append(summary);

      const panel = document.createElement('ul');
      panel.className = 'dropdown-menu p-2 custom-select-dropdown border border-2 border-pink rounded-bottom-3 show filter-dropdown__panel';
      panel.setAttribute('role', 'menu');

      items.forEach((item) => {
        const data = typeof item === 'string' ? { label: item } : item;
        const listItem = document.createElement('li');
        const option = document.createElement('button');
        option.type = 'button';
        option.className = 'ajax btn btn-sm w-100 text-start text-break custom-option filter-dropdown__option';
        option.setAttribute('role', 'menuitem');
        option.textContent = data.label;

        if (data.id) {
          option.dataset.href = '/api/ajax-selling-item?objId=322';
          option.dataset.param = JSON.stringify({ f: `i33-o322-c${data.id}` });
          option.dataset.method = 'post';
          option.dataset.ajaxBound = '1';
        }

        option.addEventListener('click', () => dropdown.removeAttribute('open'));
        listItem.append(option);
        panel.append(listItem);
      });

      dropdown.append(panel);
      dropdown.addEventListener('toggle', () => {
        if (dropdown.open) closeOtherMenus(dropdown);
      });
      bar.append(dropdown);
    });

    const viewAll = document.createElement('a');
    viewAll.className = 'filter-all';
    viewAll.href = '/danh-muc/nuoc-hoa/';
    viewAll.innerHTML = 'Xem tất cả<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12S6 6.5 12 6.5S21.5 12 21.5 12S18 17.5 12 17.5S2.5 12 2.5 12Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.8" stroke="currentColor" stroke-width="1.8"/></svg>';
    bar.append(viewAll);
    container.prepend(bar);
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.filter-dropdown')) closeOtherMenus(null);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeOtherMenus(null);
  });
})();
