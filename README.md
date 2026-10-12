## Repo gồm những gì?

```text
index.html              Trang chủ
san-pham/<slug>/        Trang chi tiết sản phẩm
components/             Các khối giao diện HTML và CSS
assets/css/             Stylesheet
assets/js/              Tương tác phía trình duyệt
assets/images/          Ảnh desktop và mobile
```

Ví dụ, trang chủ nạp CSS và JavaScript từ `assets/`:

```html
<link rel="stylesheet" href="assets/css/main.css">
<script src="assets/js/hero-carousel.js"></script>
```

Trang sản phẩm dùng thư mục theo slug `san-pham/michael-kors-gorgeous/index.html`.

## Cập nhật nội dung

- **Nội dung trang chủ:** sửa `index.html`.
- **Thông tin sản phẩm:** sửa trang tương ứng trong `san-pham/`. Thay tên, mô tả, ảnh và giá nhất quán trong nội dung trang và block `application/ld+json` (dữ liệu SEO).
- **Giao diện:** sửa CSS trong `assets/css/` hoặc CSS riêng trong `components/<tên-block>/`.
- **Hình ảnh:** đặt ảnh vào `assets/images/desktop/` hoặc `assets/images/mobile/`, rồi cập nhật đường dẫn trong HTML.
- **Tương tác:** JavaScript nằm trong `assets/js/`; ví dụ carousel ở `hero-carousel.js`, popup ở `promotion-popup.js`.

Ví dụ ảnh sản phẩm có bản WebP và PNG dự phòng:

```html
<picture>
  <source type="image/webp" srcset="/assets/images/desktop/v9bfz2nr_expires_30_days.webp">
  <img src="/assets/images/desktop/v9bfz2nr_expires_30_days.png" alt="Michael Kors Gorgeous">
</picture>
```

Khi đổi ảnh, nhớ cập nhật cả `srcset` lẫn `src`, đồng thời giữ `alt` mô tả đúng ảnh.
