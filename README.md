# Web Profile (guns.lol style) ✨

Một trang hồ sơ cá nhân (profile) đơn giản dùng Vite + Vanilla JS. Bạn có thể cấu hình ảnh nền, avatar, tên, mô tả và các liên kết TikTok/YouTube/Gmail thông qua file `.env`.

- Nếu không đặt `VITE_AVATAR` hay `VITE_LOGO`, trang sẽ dùng logo mặc định kèm animation nhẹ. ✨
- Tiêu đề tab và favicon lấy từ `VITE_NAME` và `VITE_LOGO`.

🖼️ Hình ảnh minh họa (⚠️ Lưu ý, đây là hình ảnh sau khi đã chỉnh sửa file .env)

![Logo GitHub](https://github.com/manhtien-2k14/simple-profile/blob/main/review.png)

## 🚀 Bắt đầu

1) Cài dependencies

```bash
npm install
```

2) Sửa file .env `.env` :

Điền các biến sau:
- `VITE_AVATAR`
- `VITE_NAME`
- `VITE_DESCRIPT`
- `VITE_BACKGROUND`
- `VITE_YOUTUBE`
- `VITE_TIKTOK`
- `VITE_GMAIL`
- `VITE_LOGO`
- `VITE_STATUS`

3) Chạy dev server

```bash
npm run dev
```

Trong môi trường container/Codespaces, hãy mở/forward port 5173 để truy cập giao diện.

4) Build sản phẩm

```bash
npm run build
npm run preview
```

## 📝 Lưu ý
- Các biến môi trường cho client phải bắt đầu bằng `VITE_` để truy cập trong ứng dụng.
- Nút Gmail sử dụng `mailto:` theo địa chỉ đã cấu hình. 📧

## 📄 Giấy phép
Dự án mã nguồn mở do nhà phát triển Zweyx (sinh năm 2k14) đóng góp.
Phát hành theo giấy phép MIT. Xem chi tiết trong tệp LICENSE. ✅

## ✨ Lời từ tác giả
- Nếu các bạn thấy hay thì có thể ủng hộ mình 1 nút ⭐ ở phía trên bên phải góc màn hình
- Nếu các bạn có góp ý gì thì có thể sử dụng issues nhé
