# Payload CMS Setup Guide

## Cài đặt và Cấu hình

### 1. Tạo file .env

Tạo file `.env` trong thư mục root với nội dung:

```env
# Payload CMS Configuration
PAYLOAD_SECRET=your-secret-key-here-change-this-in-production
MONGODB_URI=mongodb://localhost:27017/haanh-booking

# Next.js Configuration
NEXT_PUBLIC_DOMAIN=http://localhost:3000
NEXT_PUBLIC_ENV=development

# Encryption Key (if needed)
ENCRYPTION_KEY=your-encryption-key-here
```

**Lưu ý quan trọng:**
- `PAYLOAD_SECRET`: Tạo một chuỗi ngẫu nhiên mạnh (có thể dùng `openssl rand -base64 32`)
- `MONGODB_URI`: Đường dẫn kết nối MongoDB của bạn

### 2. Cài đặt MongoDB

Đảm bảo bạn đã cài đặt và chạy MongoDB:

```bash
# Nếu dùng Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Hoặc cài đặt MongoDB locally
# https://www.mongodb.com/try/download/community
```

### 3. Generate Types

Chạy lệnh để generate TypeScript types:

```bash
npm run generate:types
```

### 4. Tạo User Admin đầu tiên

Khi chạy lần đầu, Payload sẽ tự động tạo form đăng ký user admin đầu tiên tại `/admin`.

Hoặc bạn có thể tạo user admin bằng script:

```bash
# Tạo file scripts/create-admin.ts và chạy
npx tsx scripts/create-admin.ts
```

### 5. Truy cập Admin Panel

1. Chạy development server:
```bash
npm run dev
```

2. Truy cập: `http://localhost:3000/admin`

3. Đăng nhập với tài khoản admin đã tạo

## Collections có sẵn

### Users
- Quản lý người dùng và phân quyền
- Roles: Admin, Editor, User

### Pages
- Quản lý các trang tĩnh
- Fields: title, slug, content, status

### Posts
- Quản lý bài viết/blog
- Fields: title, slug, excerpt, content, featuredImage, status, publishedDate

### Media
- Quản lý upload files (images, documents, etc.)

## Bảo mật

- Route `/admin` được bảo vệ bởi authentication của Payload CMS
- Chỉ user đã đăng nhập mới có thể truy cập
- Middleware đã được cấu hình để exclude `/admin` khỏi next-intl routing

## Customization

Bạn có thể tùy chỉnh collections trong file `payload.config.ts`:

- Thêm/sửa/xóa collections
- Thêm fields mới
- Cấu hình permissions
- Customize admin UI

## Troubleshooting

### Lỗi kết nối MongoDB
- Kiểm tra MongoDB đã chạy chưa
- Kiểm tra `MONGODB_URI` trong `.env` có đúng không

### Lỗi PAYLOAD_SECRET
- Đảm bảo đã set `PAYLOAD_SECRET` trong `.env`
- Secret phải là chuỗi ngẫu nhiên mạnh

### Lỗi build
- Chạy `npm run generate:types` trước khi build
- Kiểm tra TypeScript errors

