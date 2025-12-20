# Hướng dẫn sửa lỗi Payload CMS Admin

## Vấn đề
Trang `/admin` hiển thị trắng hoặc message "Loading Payload CMS Admin..."

## Giải pháp

### 1. Cập nhật PAYLOAD_SECRET trong file .env

File `.env` hiện tại có:
```
PAYLOAD_SECRET=your-secret-key-here
```

Cần thay thế bằng một secret key thực sự. Bạn có thể:

**Cách 1: Tạo secret key mới**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Cách 2: Sử dụng secret key đã tạo**
```
PAYLOAD_SECRET=Vh/e2i/WgKKPVekem3miYhNhcNZy1xgKhXripLiewCE=
```

Cập nhật file `.env`:
```env
PAYLOAD_SECRET=Vh/e2i/WgKKPVekem3miYhNhcNZy1xgKhXripLiewCE=
MONGODB_URI=mongodb://localhost:27017/haanh-booking
```

### 2. Đảm bảo MongoDB đang chạy

Kiểm tra MongoDB:
```bash
mongosh --eval "db.version()"
```

Nếu MongoDB chưa chạy, khởi động nó:
```bash
# Với Homebrew (macOS)
brew services start mongodb-community

# Hoặc chạy trực tiếp
mongod
```

### 3. Khởi động lại dev server

Sau khi cập nhật `.env`:
```bash
# Dừng server hiện tại (Ctrl+C)
# Sau đó chạy lại
npm run dev
```

### 4. Truy cập lại /admin

Truy cập: `http://localhost:3000/admin`

Payload CMS sẽ:
- Tự động render admin UI nếu đã có user
- Hiển thị form tạo user admin đầu tiên nếu chưa có user

## Kiểm tra

1. **Kiểm tra console browser (F12)**: Xem có lỗi JavaScript không
2. **Kiểm tra server logs**: Xem có lỗi khi khởi tạo Payload không
3. **Kiểm tra MongoDB connection**: Đảm bảo có thể kết nối đến MongoDB

## Lưu ý

- `PAYLOAD_SECRET` phải là một chuỗi ngẫu nhiên mạnh, không được để là placeholder
- `MONGODB_URI` phải đúng và MongoDB phải đang chạy
- Với Payload CMS 3.x và `withPayload`, routes sẽ được tự động xử lý, không cần route handler thủ công

