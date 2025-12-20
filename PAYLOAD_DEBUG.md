# Debug Payload CMS Admin - Trang trắng

## Vấn đề hiện tại
Trang `/admin` hiển thị trắng hoặc không có Payload admin UI.

## Đã thử:
1. ✅ Cập nhật PAYLOAD_SECRET
2. ✅ Tạo route `/admin/[[...segments]]/page.tsx`
3. ✅ Cấu hình `withPayload` trong next.config.mjs
4. ✅ Thêm `serverURL` vào payload.config.ts
5. ✅ Di chuyển vào route group `(payload)`

## Cần kiểm tra:

### 1. Console Browser (F12)
Mở Console và kiểm tra:
- Có lỗi JavaScript không?
- Có request nào đến `/api/*` không?
- Có request nào đến Payload không?

### 2. Network Tab (F12 → Network)
Khi truy cập `/admin`, kiểm tra:
- Request nào được gửi?
- Request nào fail?
- Có request đến `/api/admin` hoặc `/api/users` không?

### 3. Server Logs
Trong terminal chạy `npm run dev`, kiểm tra:
- Có lỗi khi khởi động không?
- Có log về Payload initialization không?
- Có lỗi khi truy cập `/admin` không?

### 4. Kiểm tra API
Thử truy cập:
- `http://localhost:3000/api/users` - Phải trả về JSON hoặc error
- `http://localhost:3000/api/admin` - Phải trả về admin UI hoặc redirect

### 5. Kiểm tra MongoDB
```bash
mongosh --eval "db.version()"
mongosh haanh-booking --eval "db.users.countDocuments()"
```

## Có thể cần:

Với Payload CMS 3.x, có thể cần:
1. Tạo API route handler cho `/api/[...slug]/route.ts`
2. Hoặc cấu hình khác trong `withPayload`
3. Hoặc sử dụng cách render admin UI khác

## Gửi thông tin:

Vui lòng gửi:
1. Console errors (F12 → Console)
2. Network requests (F12 → Network) khi truy cập `/admin`
3. Server logs khi truy cập `/admin`
4. Response của `curl http://localhost:3000/api/users`

