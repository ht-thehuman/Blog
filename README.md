# H.T. Blog — Vite + JavaScript + Tailwind CSS

Demo blog cá nhân theo ý tưởng giao diện desktop: mở ứng dụng bằng icon, kéo cửa sổ, thu nhỏ/phóng to, tìm và lọc bài viết, đọc bài, đổi theme và lưu theme bằng `localStorage`.

## Chạy dự án

Yêu cầu Node.js 20.19+ hoặc 22.12+.

```bash
npm install
npm run dev
```

Build bản production:

```bash
npm run build
npm run preview
```

## Cấu trúc

```text
ht-blog/
├── public/
│   ├── favicon.svg
│   └── wallpaper.png
├── src/
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
└── vite.config.js
```

## Lộ trình phát triển từng bước

1. **Khung dự án:** tạo Vite vanilla, cài `tailwindcss` và `@tailwindcss/vite`.
2. **Màn hình desktop:** làm wallpaper, icon ứng dụng và taskbar responsive.
3. **Window manager:** mỗi app là một `.window`; JavaScript điều khiển mở, đóng, thu nhỏ, phóng to và z-index.
4. **Kéo cửa sổ:** dùng Pointer Events để hỗ trợ cả chuột và cảm ứng; tắt kéo trên mobile.
5. **Dữ liệu blog:** lưu bài viết trong mảng `posts`, render bằng `map()`.
6. **Tìm kiếm và lọc:** kết hợp từ khóa với danh mục, luôn có empty state.
7. **Đọc bài:** tái sử dụng một cửa sổ Reader, thay nội dung theo `id` bài viết.
8. **Theme:** thêm/xóa class `.light`, lưu lựa chọn vào `localStorage`.
9. **Hoàn thiện:** kiểm tra bàn phím, mobile, reduced motion, metadata và favicon.

## Chỗ cần thay bằng thông tin thật

- Mảng `posts` trong `src/main.js`.
- Nội dung Giới thiệu, Dự án và email.
- `public/wallpaper.png` nếu muốn đổi phong cách.
- Tiêu đề và mô tả trong `index.html`.

## Prompt tiếp tục phát triển

```text
Bạn là mentor frontend cho sinh viên. Hãy tiếp tục phát triển dự án H.T. Blog dùng Vite, JavaScript thuần và Tailwind CSS 4. Không dùng React/Vue và không có backend.

Hiện tại website mô phỏng desktop cá nhân: có icon ứng dụng, taskbar, cửa sổ kéo-thả, danh sách bài viết, tìm kiếm, lọc danh mục, trang đọc bài và theme lưu bằng localStorage.

Yêu cầu khi trả lời:
1. Chỉ thay đổi một tính năng trong mỗi bước.
2. Nêu rõ file cần sửa và vị trí cần sửa.
3. Đưa code hoàn chỉnh cho phần thay đổi, không viết dấu “...”.
4. Giải thích ngắn cách JavaScript hoạt động bằng ngôn ngữ dễ hiểu.
5. Sau mỗi bước, cho checklist kiểm thử trên desktop và mobile.
6. Giữ giao diện responsive, hỗ trợ bàn phím và prefers-reduced-motion.
7. Không sao chép nội dung, hình ảnh hoặc mã nguồn của sharyap.com; chỉ học ý tưởng giao diện desktop.

Tính năng tiếp theo cần làm: [ĐIỀN TÍNH NĂNG, ví dụ: lưu bài yêu thích bằng localStorage].
```

## Nâng cấp tiếp theo nên làm

- Tách `posts` sang `src/data/posts.js`.
- Tách window manager sang `src/modules/windowManager.js`.
- Thêm bài yêu thích bằng `localStorage`.
- Dùng Markdown cục bộ cho nội dung bài viết.
- Thêm routing bằng History API khi số bài tăng.
- Kết nối CMS/backend chỉ khi cần đăng bài thật trên nhiều thiết bị.
# Blog
