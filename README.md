Threads Frontend

Threads Frontend là giao diện người dùng của ứng dụng Threads-like Social Network, được xây dựng với React 18 và Vite, tập trung vào hiệu năng, khả năng mở rộng và trải nghiệm người dùng hiện đại.

Ứng dụng cung cấp đầy đủ các chức năng cốt lõi của một nền tảng mạng xã hội, bao gồm xác thực người dùng, hiển thị feed bài viết, và các tương tác như like, repost, comment, cùng với cơ chế refresh token an toàn để duy trì phiên đăng nhập.

✨ Tính năng chính

Xác thực người dùng (Đăng ký / Đăng nhập / Đăng xuất)

Quản lý phiên đăng nhập với Access Token & Refresh Token

Feed bài viết theo thời gian thực

Tương tác bài viết:

Like

Repost

Comment

Quản lý trạng thái toàn cục hiệu quả

UI hiện đại, responsive, dễ mở rộng

Tối ưu trải nghiệm người dùng và hiệu năng render

🧱 Công nghệ sử dụng
Core

React 18 – Xây dựng UI với component-based architecture

Vite – Công cụ build nhanh, tối ưu cho môi trường phát triển

React Router v6 – Quản lý routing và navigation

State Management

Redux Toolkit – Quản lý state toàn cục (authentication, feed, user data)

Zustand – Quản lý state cục bộ, đơn giản và linh hoạt

Networking & Authentication

Axios

Interceptor xử lý request/response

Tự động refresh access token khi hết hạn

Chuẩn hóa xử lý lỗi từ API

UI & Styling

Tailwind CSS – Utility-first CSS framework

Shadcn UI – Bộ UI component hiện đại, dễ tùy biến

Form & Validation

React Hook Form – Quản lý form hiệu quả, tối ưu render

Yup – Schema validation cho dữ liệu đầu vào

⚙️ Cài đặt & Chạy dự án
# Cài đặt dependencies
npm install

# Chạy môi trường development
npm run dev

# Build production
npm run build
