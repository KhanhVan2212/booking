# Landing Page CMS Payload

File này chứa payload JSON cho landing page, được sử dụng để quản lý nội dung thông qua CMS.

## Cấu trúc

Payload được định nghĩa trong `landing-page.payload.json` với các section sau:

### 1. Hero Section
- `backgroundImage`: URL hình nền
- `title`: Tiêu đề chính
- `highlightedText`: Text được highlight (màu đỏ)
- `subtitle`: Mô tả phụ

### 2. Services Section
- `header`: Badge và tiêu đề section
- `mainServices`: 4 service cards chính (Vé máy bay, Du lịch, Sự kiện, Hỗ trợ)
- `detailedServices`: 6 tiện ích chi tiết (Visa, Hoàn đổi vé, Check-in, v.v.)

### 3. Features Section
- `title`: Tiêu đề section
- `features`: 4 đặc điểm nổi bật (Giá cạnh tranh, Giải pháp linh hoạt, v.v.)

### 4. Destinations Section
- `title`, `description`: Thông tin header
- `destinations`: Danh sách điểm đến phổ biến (id, name, price, imageUrl)

### 5. Flash Deals Section
- `title`, `description`: Thông tin header
- `deals`: Danh sách ưu đãi chớp nhoáng (from, to, price, oldPrice, timeLeft, image)

### 6. Inspiration Section
- `title`, `description`: Thông tin header
- `blogs`: Danh sách blog posts (title, category, image, date, readTime)

### 7. Airline Partners Section
- `badge`: Text badge
- `airlines`: Danh sách đối tác hàng không (name, logo path)

### 8. Contact Section
- `badge`, `title`, `description`: Thông tin header
- `contactInfo`: Thông tin liên hệ (phone, email, location)
- `form`: Cấu hình form liên hệ (title, field labels, submit button text)

## TypeScript Types

Các types được định nghĩa trong `src/types/landing-page.types.ts`:

```typescript
import { LandingPageCMSData } from "@/types/landing-page.types";
```

## Sử dụng

```typescript
import landingPageData from "@/data/landing-page.payload.json";
import { LandingPageCMSData } from "@/types/landing-page.types";

const data: LandingPageCMSData = landingPageData;

// Sử dụng data trong components
<HeroSection data={data.hero} />
<ServicesSection data={data.services} />
```

## Lưu ý

- Tất cả các URLs hình ảnh nên được quản lý qua CMS
- Icon names phải khớp với tên từ thư viện `react-icons/fa6`
- Có thể thêm/bớt items trong các arrays (destinations, deals, blogs, airlines, v.v.)
- Links có thể để trống (#) hoặc điền đường dẫn thực tế
