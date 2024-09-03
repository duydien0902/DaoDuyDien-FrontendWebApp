# Web Portal

## Giới thiệu

### App quản lý nhân viên gồm các chức năng như:

- Login
- Dashboard:
  - Hiển thị số lượng nhân sự công ty, số lượng hôm nay đi làm và nghỉ.
  - Chart hiển thị số lượng cv, on board, active trong 6 tháng gần nhất, hiển thị phần trăm tăng giảm của tháng hiện tại so với tháng trước.
  - Hiển thị các vai trò và số lượng trong công ty.
- Employee:
  - Các tabs All, Active, Inactive khi nhấn vào thì hiển thị theo người dùng lọc.
  - Hiển thị nhân viên trên table và có thể thêm, sửa hoặc xóa.
  - Phân trang mỗi trang sẽ hiển thị nhiều nhất 6 nhân viên.
- Responsive: hoạt động được trên desktop, tablet, mobile
- Các chức năng khác như là: typing, animation, hightlight active Tab, nền sáng và tối, hiển thị lỗi ở form, logout, favicon-title, hiển thị email khi người dùng đăng nhập.

### Link deploy: [https://dao-duy-dien-frontend-web-app.vercel.app](https://dao-duy-dien-frontend-web-app.vercel.app)

```
Tài khoản để login:

Email: test01@gmail.com
Password: 123456
```

## Cài Đặt

### Yêu Cầu

- Node.js phiên bản >= 18.18.0
- Yarn hoặc npm (công cụ quản lý gói)

### Cài Đặt

1. Clone dự án về máy:

   ```bash
   git clone https://github.com/duydien0902/DaoDuyDien-FrontendWebApp.git

   cd DaoDuyDien-FrontendWebApp
   ```

2. Cài đặt các gói cần thiết:

   ```bash
   yarn install
   # hoặc nếu bạn sử dụng npm
   npm install
   ```

3. Chạy dự án:

   ```bash
   yarn dev
   # hoặc nếu bạn sử dụng npm
   npm run dev
   ```

   Dự án sẽ chạy trên `http://localhost:3000`.

## Cấu Trúc Dự Án

Mô tả cấu trúc thư mục và các tệp chính trong dự án:

- `src/` - Thư mục chứa code chính của dự án.

  - `actions/` - Fake Api và dữ liệu khởi tạo.

  - `app/` - Bao gồm những sections và các tuyến đường của ứng dụng.

    - `(root)/`

      - `sections/` - Những phần của trang web và các components liên quan.

      - `(authentication)/` - Chứa các page liên quan đến phần authentication.
      - `(routes)/` - Những trang chính sau khi đã login thành công

  - `components/` - Các thành phần tái sử dụng lại (layout, ui ,...).
  - `lib/` - Các thư viện, tiện ích liên quan đến dự án.
  - `providers/` - Lớp bao bọc cả ứng dụng sử dụng providers liên quan
  - `types/` - khai báo các data type của typescript.
  - `utilities/` - Thư mục chứa các hàm tiện ích, các biến global
  - `middleware.ts/` - Quản lý các tuyến đường của ứng dụng.
