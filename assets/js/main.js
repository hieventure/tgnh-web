// assets/js/promotion-popup.js
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


// assets/js/mock-data.js
window.TGNH_MOCK_DATA = {
  "products": [
    {
      "slug": "signorina-misteriosa",
      "name": "Signoria",
      "brand": "Salvatore Ferragamo",
      "description": "Hương thơm nữ tính nổi bật trong bộ sưu tập ưu đãi 20.10.",
      "price": 1190000,
      "image": "assets/images/desktop/hfxkscv7_expires_30_days.png",
      "original_price": 2500000,
      "discount_percent": 39
    },
    {
      "slug": "paco-rabanne",
      "name": "Paco Rabanne",
      "brand": "Paco Rabanne",
      "description": "Nước hoa chính hãng trong chương trình ưu đãi tháng 10.",
      "price": 1190000,
      "image": "assets/images/desktop/b7njyh23_expires_30_days.png",
      "original_price": 2500000,
      "discount_percent": 39
    },
    {
      "slug": "moschino-toy-2",
      "name": "Moschino",
      "brand": "Moschino",
      "description": "Thiết kế trẻ trung với hương thơm ngọt ngào nổi bật.",
      "price": 1190000,
      "image": "assets/images/desktop/3ofvctat_expires_30_days.png",
      "original_price": 2500000,
      "discount_percent": 39
    },
    {
      "slug": "michael-kors-gorgeous",
      "name": "Michael Kors Gorgeous",
      "brand": "Michael Kors",
      "description": "Hương hoa trắng hiện đại dành cho phong cách thanh lịch.",
      "price": 1190000,
      "image": "assets/images/desktop/v9bfz2nr_expires_30_days.png",
      "original_price": 2500000,
      "discount_percent": 39
    },
    {
      "slug": "ferragamo-uomo",
      "name": "Salvatore Ferragamo Uomo Signature",
      "brand": "Salvatore Ferragamo",
      "description": "Hương thơm nam tính với cà phê, da thuộc và gia vị.",
      "price": 1190000,
      "image": "assets/images/desktop/sz17nqrr_expires_30_days.png",
      "original_price": 2500000,
      "discount_percent": 39
    },
    {
      "slug": "miss-saigon-elegance",
      "name": "BST Miss Saigon Elegance 15ml",
      "brand": "Miss Saigon",
      "description": "Bộ sưu tập nước hoa mini lấy cảm hứng từ vẻ đẹp Sài Gòn.",
      "price": 1035000,
      "image": "assets/images/desktop/wfymoxwt_expires_30_days.png",
      "original_price": 1150000,
      "discount_percent": 10
    },
    {
      "slug": "lomani-blanca-fantasy",
      "name": "Lomani Private Collection Blanca Fantasy",
      "brand": "Parour",
      "description": "Hương thơm thanh lịch thuộc Private Collection.",
      "price": 1064000,
      "image": "assets/images/desktop/wb571nbe_expires_30_days.png",
      "original_price": 1329000,
      "discount_percent": 20
    },
    {
      "slug": "lomani-silver-bloom",
      "name": "Lomani Private Collection Silver Bloom EDP",
      "brand": "Parour",
      "description": "Phiên bản Silver Bloom mới thuộc Private Collection.",
      "price": 1064000,
      "image": "assets/images/desktop/il97068b_expires_30_days.png",
      "original_price": 1329000,
      "discount_percent": 20
    },
    {
      "slug": "miss-saigon-elegance-cam",
      "name": "Miss Saigon Elegance Cam 50ml Eau de Parfum",
      "brand": "Miss Saigon",
      "description": "Nước hoa 50ml với thiết kế thanh lịch và sắc cam nổi bật.",
      "price": 648000,
      "image": "assets/images/desktop/kd0gy827_expires_30_days.png",
      "original_price": 720000,
      "discount_percent": 10
    },
    {
      "slug": "parour-milas-secret",
      "name": "Parour Mila's Secret Find Your Way",
      "brand": "Parour",
      "description": "Mùi hương hiện đại giúp thể hiện dấu ấn cá nhân.",
      "price": 952000,
      "image": "assets/images/desktop/4608ryf9_expires_30_days.png",
      "original_price": 1190000,
      "discount_percent": 20
    }
  ],
  "collections": {
    "flash-sale": [
      {
        "slug": "signorina-misteriosa",
        "name": "Calvin Klein Eternity Amber Essence Intense Parfum 30ml Eau de parfum",
        "image": "assets/images/desktop/7igr3gmj_expires_30_days.png",
        "mobile_image": "assets/images/mobile/vv0ybm55_expires_30_days.png",
        "alt": "Signoria",
        "badge": "Chỉ còn 5 sp",
        "eyebrow": "Sale"
      },
      {
        "slug": "paco-rabanne",
        "name": "Nước hoa Ralph Lauren Romance EDP Intense 30ml Eau de parfum",
        "image": "assets/images/desktop/o9k05qka_expires_30_days.png",
        "mobile_image": "assets/images/mobile/c35m131y_expires_30_days.png",
        "alt": "Paco Rabanne",
        "eyebrow": "Sale"
      },
      {
        "slug": "moschino-toy-2",
        "name": "Nước hoa Parour Cigar Mystic Scent EDT For Men 75ml Eau de toilette",
        "image": "assets/images/desktop/q9lypfo0_expires_30_days.png",
        "mobile_image": "assets/images/mobile/mh8sonn3_expires_30_days.png",
        "alt": "Moschino",
        "badge": "Chỉ còn 1 ngày",
        "eyebrow": "Sale"
      },
      {
        "slug": "michael-kors-gorgeous",
        "image": "assets/images/desktop/j1pkks81_expires_30_days.png",
        "mobile_image": "assets/images/mobile/xnnp1fij_expires_30_days.png",
        "alt": "Michael Kors Gorgeous",
        "eyebrow": "Sale"
      },
      {
        "slug": "ferragamo-uomo",
        "image": "assets/images/desktop/sz17nqrr_expires_30_days.png",
        "alt": "Salvatore Ferragamo Uomo Signature",
        "eyebrow": "Sale"
      },
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/wfymoxwt_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance 15ml",
        "eyebrow": "Sale"
      }
    ],
    "favorites-mobile": [
      {
        "slug": "signorina-misteriosa",
        "name": "Calvin Klein Eternity Amber Essence Intense Parfum 30ml Eau de parfum",
        "image": "assets/images/mobile/vv0ybm55_expires_30_days.png",
        "alt": "Signoria",
        "badge": "Chỉ còn 5 sp",
        "eyebrow": "Sale"
      },
      {
        "slug": "paco-rabanne",
        "name": "Nước hoa Ralph Lauren Romance EDP Intense 30ml Eau de parfum",
        "image": "assets/images/mobile/c35m131y_expires_30_days.png",
        "alt": "Paco Rabanne",
        "eyebrow": "Sale"
      },
      {
        "slug": "moschino-toy-2",
        "name": "Nước hoa Parour Cigar Mystic Scent EDT For Men 75ml Eau de toilette",
        "image": "assets/images/mobile/mh8sonn3_expires_30_days.png",
        "alt": "Moschino",
        "badge": "Chỉ còn 1 ngày",
        "eyebrow": "Sale"
      },
      {
        "slug": "michael-kors-gorgeous",
        "image": "assets/images/mobile/xnnp1fij_expires_30_days.png",
        "alt": "Michael Kors Gorgeous",
        "eyebrow": "Sale"
      }
    ],
    "favorites-desktop": [
      {
        "slug": "miss-saigon-elegance",
        "name": "Calvin Klein Eternity Amber Essence Intense Parfum 30ml Eau de parfum",
        "image": "assets/images/desktop/1cck7m3x_expires_30_days.png",
        "mobile_image": "assets/images/mobile/vv0ybm55_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance 15ml"
      },
      {
        "slug": "lomani-blanca-fantasy",
        "name": "Nước hoa Ralph Lauren Romance EDP Intense 30ml Eau de parfum",
        "image": "assets/images/desktop/22pxjzb5_expires_30_days.png",
        "mobile_image": "assets/images/mobile/c35m131y_expires_30_days.png",
        "alt": "Lomani Private Collection Blanca Fantasy"
      },
      {
        "slug": "lomani-silver-bloom",
        "name": "Nước hoa Parour Cigar Mystic Scent EDT For Men 75ml Eau de toilette",
        "image": "assets/images/desktop/qvribiyc_expires_30_days.png",
        "mobile_image": "assets/images/mobile/mh8sonn3_expires_30_days.png",
        "alt": "Lomani Private Collection Silver Bloom",
        "badge": "New"
      },
      {
        "slug": "miss-saigon-elegance-cam",
        "image": "assets/images/desktop/t8zs4hvo_expires_30_days.png",
        "mobile_image": "assets/images/mobile/xnnp1fij_expires_30_days.png",
        "alt": "Miss Saigon Elegance Cam 50ml"
      },
      {
        "slug": "parour-milas-secret",
        "image": "assets/images/desktop/mapo76ih_expires_30_days.png",
        "alt": "Parour Mila's Secret Find Your Way"
      },
      {
        "slug": "miss-saigon-elegance-cam",
        "image": "assets/images/desktop/83pd7jo4_expires_30_days.png",
        "alt": "Miss Saigon Elegance"
      },
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/1cck7m3x_expires_30_days.png",
        "mobile_image": "assets/images/mobile/vv0ybm55_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance 15ml"
      },
      {
        "slug": "lomani-blanca-fantasy",
        "image": "assets/images/desktop/22pxjzb5_expires_30_days.png",
        "mobile_image": "assets/images/mobile/c35m131y_expires_30_days.png",
        "alt": "Lomani Private Collection Blanca Fantasy"
      },
      {
        "slug": "lomani-silver-bloom",
        "image": "assets/images/desktop/qvribiyc_expires_30_days.png",
        "mobile_image": "assets/images/mobile/mh8sonn3_expires_30_days.png",
        "alt": "Lomani Private Collection Silver Bloom",
        "badge": "New"
      },
      {
        "slug": "miss-saigon-elegance-cam",
        "image": "assets/images/desktop/t8zs4hvo_expires_30_days.png",
        "mobile_image": "assets/images/mobile/xnnp1fij_expires_30_days.png",
        "alt": "Miss Saigon Elegance Cam 50ml"
      },
      {
        "slug": "parour-milas-secret",
        "image": "assets/images/desktop/mapo76ih_expires_30_days.png",
        "alt": "Parour Mila's Secret Find Your Way"
      },
      {
        "slug": "miss-saigon-elegance-cam",
        "image": "assets/images/desktop/83pd7jo4_expires_30_days.png",
        "alt": "Miss Saigon Elegance"
      },
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/1cck7m3x_expires_30_days.png",
        "mobile_image": "assets/images/mobile/vv0ybm55_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance 15ml"
      },
      {
        "slug": "lomani-blanca-fantasy",
        "image": "assets/images/desktop/22pxjzb5_expires_30_days.png",
        "mobile_image": "assets/images/mobile/c35m131y_expires_30_days.png",
        "alt": "Lomani Private Collection Blanca Fantasy"
      },
      {
        "slug": "lomani-silver-bloom",
        "image": "assets/images/desktop/qvribiyc_expires_30_days.png",
        "mobile_image": "assets/images/mobile/mh8sonn3_expires_30_days.png",
        "alt": "Lomani Private Collection Silver Bloom",
        "badge": "New"
      },
      {
        "slug": "miss-saigon-elegance-cam",
        "image": "assets/images/desktop/t8zs4hvo_expires_30_days.png",
        "mobile_image": "assets/images/mobile/xnnp1fij_expires_30_days.png",
        "alt": "Miss Saigon Elegance Cam 50ml"
      },
      {
        "slug": "parour-milas-secret",
        "image": "assets/images/desktop/mapo76ih_expires_30_days.png",
        "alt": "Parour Mila's Secret Find Your Way"
      },
      {
        "slug": "miss-saigon-elegance-cam",
        "image": "assets/images/desktop/83pd7jo4_expires_30_days.png",
        "alt": "Miss Saigon Elegance"
      }
    ],
    "exclusive": [
      {
        "slug": "signorina-misteriosa",
        "image": "assets/images/desktop/4s9bf3fo_expires_30_days.png",
        "mobile_image": "assets/images/mobile/51z7b4g4_expires_30_days.png",
        "alt": "Signoria",
        "badge": "Chỉ còn 5 sp",
        "eyebrow": "Sale"
      },
      {
        "slug": "paco-rabanne",
        "image": "assets/images/desktop/muwy6icq_expires_30_days.png",
        "mobile_image": "assets/images/mobile/rkcmd5jt_expires_30_days.png",
        "alt": "Paco Rabanne",
        "eyebrow": "Sale"
      },
      {
        "slug": "moschino-toy-2",
        "image": "assets/images/desktop/6ohjl08z_expires_30_days.png",
        "mobile_image": "assets/images/mobile/e0cwaz0z_expires_30_days.png",
        "alt": "Moschino",
        "badge": "Chỉ còn 1 ngày",
        "eyebrow": "Sale"
      },
      {
        "slug": "michael-kors-gorgeous",
        "image": "assets/images/desktop/5etrz60b_expires_30_days.png",
        "mobile_image": "assets/images/mobile/equpryx1_expires_30_days.png",
        "alt": "Michael Kors Gorgeous",
        "eyebrow": "Sale"
      },
      {
        "slug": "ferragamo-uomo",
        "image": "assets/images/desktop/oawrwabo_expires_30_days.png",
        "mobile_image": "assets/images/mobile/297g19c1_expires_30_days.png",
        "alt": "Salvatore Ferragamo Uomo Signature",
        "eyebrow": "Sale"
      },
      {
        "slug": "signorina-misteriosa",
        "image": "assets/images/desktop/hkaem47o_expires_30_days.png",
        "mobile_image": "assets/images/mobile/4mes3ihj_expires_30_days.png",
        "alt": "Signoria phiên bản hoa hồng",
        "badge": "Chỉ còn 5 sp",
        "eyebrow": "Sale"
      },
      {
        "slug": "paco-rabanne",
        "image": "assets/images/desktop/pe621wlc_expires_30_days.png",
        "alt": "Paco Rabanne phiên bản hoa hồng",
        "eyebrow": "Sale"
      },
      {
        "slug": "moschino-toy-2",
        "image": "assets/images/desktop/ah6rky18_expires_30_days.png",
        "alt": "Moschino phiên bản hoa hồng",
        "badge": "Chỉ còn 1 ngày",
        "eyebrow": "Sale"
      },
      {
        "slug": "michael-kors-gorgeous",
        "image": "assets/images/desktop/kkd0sbb6_expires_30_days.png",
        "alt": "Michael Kors Gorgeous phiên bản hoa hồng",
        "eyebrow": "Sale"
      },
      {
        "slug": "ferragamo-uomo",
        "image": "assets/images/desktop/1gcn7mq4_expires_30_days.png",
        "alt": "Salvatore Ferragamo Uomo Signature phiên bản hoa hồng",
        "eyebrow": "Sale"
      }
    ],
    "elegance": [
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/vaaybvi3_expires_30_days.png",
        "mobile_image": "assets/images/mobile/anrji083_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance 15ml"
      },
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/m7m9lef0_expires_30_days.png",
        "mobile_image": "assets/images/mobile/4rptr4ok_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance 15ml màu hồng"
      },
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/6wzm1j3j_expires_30_days.png",
        "mobile_image": "assets/images/mobile/gxgyyquc_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance 15ml màu đỏ"
      },
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/976ubbef_expires_30_days.png",
        "mobile_image": "assets/images/mobile/fe4to0p7_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance 15ml màu vàng"
      },
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/ycdjisc8_expires_30_days.png",
        "mobile_image": "assets/images/mobile/t564g1ff_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance 15ml màu trắng"
      },
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/man80isk_expires_30_days.png",
        "mobile_image": "assets/images/mobile/580co9qp_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance phiên bản 6"
      },
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/bxjlipz5_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance phiên bản 7"
      },
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/9wirlgoa_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance phiên bản 8"
      },
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/70wcythb_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance phiên bản 9"
      },
      {
        "slug": "miss-saigon-elegance",
        "image": "assets/images/desktop/0b2n8eew_expires_30_days.png",
        "alt": "BST Miss Saigon Elegance phiên bản 10"
      }
    ]
  }
};


// assets/js/product-carousel.js
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

  const scrollDistance = () => {
    if (carousel.hasAttribute('data-carousel-page-step')) return track.clientWidth;

    const cards = track.querySelectorAll(':scope > .product-card');
    const isFlashSaleTablet = carousel.closest('.flash-sale')
      && window.matchMedia('(min-width: 750px) and (max-width: 1199.98px)').matches;

    return isFlashSaleTablet && cards.length > 3
      ? cards[3].offsetLeft - cards[0].offsetLeft
      : track.clientWidth * 0.8;
  };

  previous.addEventListener('click', () => {
    track.scrollBy({ left: -scrollDistance(), behavior: 'smooth' });
  });
  next.addEventListener('click', () => {
    track.scrollBy({ left: scrollDistance(), behavior: 'smooth' });
  });
  track.addEventListener('scroll', updateControls, { passive: true });
  window.addEventListener('resize', updateControls);
  updateControls();
});

document.querySelectorAll('.product-card').forEach((card) => {
  const media = card.querySelector(':scope > img, :scope > .product-picture');
  const productLink = card.querySelector('.product-link');
  if (!media || !productLink) return;

  const mediaFrame = document.createElement('div');
  mediaFrame.className = 'product-media';
  media.replaceWith(mediaFrame);
  mediaFrame.append(media);

  const quicklook = document.createElement('a');
  quicklook.className = 'product-quicklook';
  quicklook.href = productLink.getAttribute('href');
  quicklook.textContent = 'Xem chi tiết';
  quicklook.setAttribute('aria-label', `Xem chi tiết ${card.querySelector('p')?.textContent.trim() || 'sản phẩm'}`);
  mediaFrame.append(quicklook);
});


// assets/js/filter-dropdowns.js
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

  document.querySelectorAll('.exclusive__heading').forEach((heading) => {
    if (heading.querySelector('.filter-bar--overlay')) return;

    const bar = document.createElement('nav');
    bar.className = 'filter-bar filter-bar--overlay';
    bar.setAttribute('aria-label', 'Bộ lọc sản phẩm');

    filters.forEach(({ key, label, items }) => {
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
    viewAll.href = 'https://www.thegioinuochoa.com.vn/ctkm-sale-up-to?f=i100-o322';
    viewAll.innerHTML = 'Xem tất cả<span class="filter-control__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12S6 6.5 12 6.5S21.5 12 21.5 12S18 17.5 12 17.5S2.5 12 2.5 12Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.8" stroke="currentColor" stroke-width="1.8"/></svg></span>';
    bar.append(viewAll);
    heading.append(bar);
  });

})();


// assets/js/hero-carousel.js
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
  const leadingClones = orderedSlides.slice(-2).map(cloneSlide);
  const trailingClones = orderedSlides.slice(0, 2).map(cloneSlide);
  const firstOriginalIndex = leadingClones.length;
  const lastOriginalIndex = firstOriginalIndex + slides.length - 1;
  track.replaceChildren(...leadingClones, ...orderedSlides, ...trailingClones);
  let currentIndex = firstOriginalIndex;

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
      currentIndex = targetIndex < firstOriginalIndex
        ? targetIndex + slides.length
        : targetIndex > lastOriginalIndex ? targetIndex - slides.length : targetIndex;
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


// assets/js/flash-sale-countdown.js
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
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    daysLabel.textContent = totalSeconds
      ? days ? `Chỉ còn ${days} ngày` : "Sắp diễn ra"
      : "Đang diễn ra";
    hoursLabel.textContent = pad(hours);
    minutesLabel.textContent = pad(minutes);
    secondsLabel.textContent = pad(seconds);
    timer.setAttribute(
      "aria-label",
      totalSeconds
        ? `Còn ${hours} giờ ${minutes} phút ${seconds} giây đến khi Flash Sale bắt đầu`
        : "Flash sale đang diễn ra",
    );

    if (!totalSeconds) clearInterval(intervalId);
  }

  const intervalId = setInterval(updateCountdown, 1000);
  updateCountdown();
})();
