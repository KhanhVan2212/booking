# Sửa lỗi Payload CMS Admin - Trang trắng

## ✅ Đã sửa:
1. ✅ Cập nhật `PAYLOAD_SECRET` từ placeholder sang secret key thực
2. ✅ Đã tạo cấu trúc route đúng: `src/app/admin/[[...segments]]/page.tsx`
3. ✅ Đã cấu hình `withPayload` trong `next.config.mjs`

## 🔧 Các bước tiếp theo:

### 1. **KHỞI ĐỘNG LẠI DEV SERVER** (QUAN TRỌNG!)

Sau khi cập nhật `.env`, bạn **PHẢI** khởi động lại server:

```bash
# Dừng server hiện tại (nhấn Ctrl+C trong terminal đang chạy npm run dev)
# Sau đó chạy lại:
npm run dev
```

**Lý do**: Payload CMS cần đọc lại biến môi trường khi khởi động. Nếu không restart, nó vẫn dùng giá trị cũ.

### 2. Kiểm tra MongoDB

Đảm bảo MongoDB đang chạy:
```bash
mongosh --eval "db.version()"
```

Nếu chưa chạy:
```bash
brew services start mongodb-community
# hoặc
mongod
```

### 3. Truy cập /admin

Sau khi restart server, truy cập:
```
http://localhost:3000/admin
```

### 4. Kiểm tra Console Browser

Nếu vẫn trắng, mở Console (F12) và kiểm tra:
- Có lỗi JavaScript không?
- Có request nào fail không?
- Network tab: có request nào đến `/admin` không?

### 5. Kiểm tra Server Logs

Trong terminal chạy `npm run dev`, xem có lỗi gì khi:
- Server khởi động
- Khi truy cập `/admin`

## 🔍 Debug thêm:

Nếu vẫn không hoạt động, thử:

1. **Kiểm tra file .env có đúng không:**
```bash
cat .env
```

Phải thấy:
```
PAYLOAD_SECRET=Vh/e2i/WgKKPVekem3miYhNhcNZy1xgKhXripLiewCE=
MONGODB_URI=mongodb://localhost:27017/haanh-booking
```

2. **Xóa cache và rebuild:**
```bash
rm -rf .next
npm run build
npm run dev
```

3. **Kiểm tra Payload có được import đúng không:**
```bash
npm list payload @payloadcms/next
```

## 📝 Lưu ý:

- Với Payload CMS 3.x và `withPayload`, routes sẽ được tự động xử lý
- Không cần route handler thủ công
- `withPayload` sẽ tự động proxy requests đến Payload
- Nếu vẫn trắng sau khi restart, có thể cần kiểm tra version compatibility

## 🆘 Nếu vẫn không hoạt động:

Gửi cho tôi:
1. Console errors từ browser (F12)
2. Server logs khi truy cập `/admin`
3. Output của `npm list payload @payloadcms/next`

