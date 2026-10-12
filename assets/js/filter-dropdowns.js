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
    { key: 'brand', label: 'Thương Hiệu', items: brands },
    { key: 'category', label: 'Danh mục', items: ['Nước hoa', 'Nước hoa nam', 'Nước hoa nữ', 'Nước hoa unisex', 'Nước hoa niche', 'Mỹ phẩm', 'Gift set'] },
    { key: 'gender', label: 'Giới Tính', items: ['Nam', 'Nữ', 'Unisex'] },
    { key: 'price', label: 'Giá KM', items: ['Dưới 1.000.000đ', '1.000.000đ – 2.000.000đ', '2.000.000đ – 3.000.000đ', 'Trên 3.000.000đ'] },
    { key: 'sort', label: 'Sắp xếp', items: ['Mới nhất', 'Bán chạy nhất', 'Giá tăng dần', 'Giá giảm dần'] }
  ];

  document.querySelectorAll('.exclusive > .content-container, .elegance > .content-container').forEach((container) => {
    if (container.querySelector('.filter-bar--overlay')) return;

    const bar = document.createElement('nav');
    bar.className = 'filter-bar filter-bar--overlay';
    bar.setAttribute('aria-label', 'Bộ lọc sản phẩm');

    const title = document.createElement('h2');
    title.className = 'filter-bar__title';
    title.textContent = 'Bộ sản phẩm độc quyền';
    bar.append(title);

    const activeFilters = container.closest('.elegance')
      ? filters.filter(({ key }) => key !== 'category')
      : filters;

    activeFilters.forEach(({ key, label, items }) => {
      const dropdown = document.createElement('div');
      dropdown.className = `dropdown filter-dropdown filter-dropdown--${key}`;

      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'btn dropdown-toggle custom-select text-main filter-dropdown__toggle';
      toggle.setAttribute('data-bs-toggle', 'dropdown');
      toggle.setAttribute('data-bs-display', 'static');
      toggle.setAttribute('aria-expanded', 'false');

      const labelNode = document.createElement('span');
      labelNode.className = 'filter-dropdown__label';
      labelNode.textContent = label;
      toggle.append(labelNode);

      if (key === 'sort') {
        const icon = document.createElement('span');
        icon.className = 'filter-control__icon filter-sort-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.innerHTML = '<svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2V19M2 16L5 19L8 16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3H17M12 3L17 9M17 9H12M12 13H17L12 20H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        toggle.append(icon);
      } else {
        const icon = document.createElement('span');
        icon.className = 'filter-control__icon filter-chevron';
        icon.setAttribute('aria-hidden', 'true');
        icon.innerHTML = '<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 4.75L7 9.25L11.75 4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        toggle.append(icon);
      }

      dropdown.append(toggle);

      const panel = document.createElement('ul');
      panel.className = 'dropdown-menu custom-select-dropdown filter-dropdown__panel';
      panel.setAttribute('role', 'menu');

      items.forEach((item) => {
        const data = typeof item === 'string' ? { label: item } : item;
        const listItem = document.createElement('li');
        const option = document.createElement('button');
        option.type = 'button';
        option.className = 'dropdown-item ajax custom-option filter-dropdown__option';
        option.setAttribute('role', 'menuitem');
        option.textContent = data.label;

        if (data.id) {
          option.dataset.href = '/api/ajax-selling-item?objId=322';
          option.dataset.param = JSON.stringify({ f: `i33-o322-c${data.id}` });
          option.dataset.method = 'post';
        }

        listItem.append(option);
        panel.append(listItem);
      });

      dropdown.append(panel);
      bar.append(dropdown);
    });

    const viewAll = document.createElement('a');
    viewAll.className = 'btn custom-select text-main filter-all';
    viewAll.href = container.closest('.exclusive')
      ? 'https://www.thegioinuochoa.com.vn/ctkm-sale-up-to?f=i100-o322'
      : 'https://www.thegioinuochoa.com.vn/ctkm-combo-sale?f=i100-o332';
    viewAll.innerHTML = 'Xem tất cả<span class="filter-control__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12S6 6.5 12 6.5S21.5 12 21.5 12S18 17.5 12 17.5S2.5 12 2.5 12Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.8" stroke="currentColor" stroke-width="1.8"/></svg></span>';
    bar.append(viewAll);
    container.prepend(bar);
  });

})();
