export interface FlightDeparture {
  airline: string;
  from: string;
  route: string;
  stop: string;
  country: string;
}

/**
 * QUY ƯỚC CHUẨN:
 * - slug = điểm KHỞI HÀNH (điểm đang click)
 * - from = slug
 * - stop = điểm ĐẾN
 * - KHÔNG có chiều ngược
 */

export const DESTINATION_DEPARTURE_MAP: Record<string, FlightDeparture[]> = {
  /* ================= 🇻🇳 VIỆT NAM ================= */

  "ha-noi": [
    { airline: "Vietnam Airlines", from: "Hà Nội", route: "Hà Nội → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Hà Nội", route: "Hà Nội → Đà Nẵng", stop: "Đà Nẵng", country: "Việt Nam" },
    { airline: "Bamboo Airways", from: "Hà Nội", route: "Hà Nội → Huế", stop: "Huế", country: "Việt Nam" },
    { airline: "Vietnam Airlines", from: "Hà Nội", route: "Hà Nội → Nha Trang", stop: "Nha Trang", country: "Việt Nam" },
    { airline: "Vietnam Airlines", from: "Hà Nội", route: "Hà Nội → Phú Quốc", stop: "Phú Quốc", country: "Việt Nam" },
    { airline: "ANA", from: "Hà Nội", route: "Hà Nội → Tokyo", stop: "Tokyo", country: "Nhật Bản" },
    { airline: "Korean Air", from: "Hà Nội", route: "Hà Nội → Seoul", stop: "Seoul", country: "Hàn Quốc" },
    { airline: "Singapore Airlines", from: "Hà Nội", route: "Hà Nội → Singapore", stop: "Singapore", country: "Singapore" },
  ],

  "ha-long": [
    { airline: "Vietnam Airlines", from: "Hạ Long", route: "Hạ Long → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "Bamboo Airways", from: "Hạ Long", route: "Hạ Long → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Hạ Long", route: "Hạ Long → Đà Nẵng", stop: "Đà Nẵng", country: "Việt Nam" },
    { airline: "Vietnam Airlines", from: "Hạ Long", route: "Hạ Long → Huế", stop: "Huế", country: "Việt Nam" },
    { airline: "AirAsia", from: "Hạ Long", route: "Hạ Long → Bangkok", stop: "Bangkok", country: "Thái Lan" },
    { airline: "Singapore Airlines", from: "Hạ Long", route: "Hạ Long → Singapore", stop: "Singapore", country: "Singapore" },
  ],

  "sapa": [
    { airline: "Vietnam Airlines", from: "Sa Pa", route: "Sa Pa → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Sa Pa", route: "Sa Pa → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "Bamboo Airways", from: "Sa Pa", route: "Sa Pa → Đà Nẵng", stop: "Đà Nẵng", country: "Việt Nam" },
    { airline: "Vietnam Airlines", from: "Sa Pa", route: "Sa Pa → Huế", stop: "Huế", country: "Việt Nam" },
    { airline: "ANA", from: "Sa Pa", route: "Sa Pa → Tokyo", stop: "Tokyo", country: "Nhật Bản" },
    { airline: "Korean Air", from: "Sa Pa", route: "Sa Pa → Seoul", stop: "Seoul", country: "Hàn Quốc" },
  ],
    "da-nang": [
    { airline: "VietJet Air", from: "Đà Nẵng", route: "Đà Nẵng → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Đà Nẵng", route: "Đà Nẵng → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "Bamboo Airways", from: "Đà Nẵng", route: "Đà Nẵng → Phú Quốc", stop: "Phú Quốc", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Đà Nẵng", route: "Đà Nẵng → Huế", stop: "Huế", country: "Việt Nam" },
    { airline: "ANA", from: "Sa Pa", route: "Đà Nẵng → Tokyo", stop: "Tokyo", country: "Nhật Bản" },
    { airline: "Korean Air", from: "Đà Nẵng", route: "Đà Nẵng → Seoul", stop: "Seoul", country: "Hàn Quốc" },
  ],

  "hue": [
    { airline: "Vietnam Airlines", from: "Huế", route: "Huế → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "Bamboo Airways", from: "Huế", route: "Huế → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Huế", route: "Huế → Đà Nẵng", stop: "Đà Nẵng", country: "Việt Nam" },
    { airline: "Vietnam Airlines", from: "Huế", route: "Huế → Nha Trang", stop: "Nha Trang", country: "Việt Nam" },
    { airline: "AirAsia", from: "Huế", route: "Huế → Bangkok", stop: "Bangkok", country: "Thái Lan" },
    { airline: "Singapore Airlines", from: "Huế", route: "Huế → Singapore", stop: "Singapore", country: "Singapore" },
  ],
      "nha-trang": [
    { airline: "VietJet Air", from: "Nha Trang", route: "Nha Trang → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Nha Trang", route: "Nha Trang → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "Bamboo Airways", from: "Nha Trang", route: "Nha Trang → Phú Quốc", stop: "Phú Quốc", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Nha Trang", route: "Nha Trang → Huế", stop: "Huế", country: "Việt Nam" },
    { airline: "ANA", from: "Nha Trang", route: "Nha Trang → Tokyo", stop: "Tokyo", country: "Nhật Bản" },
    { airline: "Korean Air", from: "Nha Trang", route: "Nha Trang → Seoul", stop: "Seoul", country: "Hàn Quốc" },
  ],
  "phu-quoc": [
    { airline: "VietJet Air", from: "Phú Quốc", route: "Phú Quốc → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Phú Quốc", route: "Phú Quốc → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "Bamboo Airways", from: "Phú Quốc", route: "Phú Quốc → Nha Trang", stop: "Nha Trang", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Phú Quốc", route: "Phú Quốc → Bali", stop: "Bali", country: "Indonesia" },
    { airline: "ANA", from: "Phú Quốc", route: "Phú Quốc → Osaka", stop: "Osaka", country: "Nhật Bản" },
    { airline: "Korean Air", from: "Phú Quốc", route: "Phú Quốc → Busan", stop: "Busan", country: "Hàn Quốc" },
    
  ],
      "ho-chi-minh": [
    { airline: "VietJet Air", from: "Hồ Chí Minh", route: "Hồ Chí Minh → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Hồ Chí Minh", route: "Hồ Chí Minh → Nha Trang", stop: "Nha Trang", country: "Việt Nam" },
    { airline: "Bamboo Airways", from: "Hồ Chí Minh", route: "Hồ Chí Minh → Phú Quốc", stop: "Phú Quốc", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Hồ Chí Minh", route: "Hồ Chí Minh → Huế", stop: "Huế", country: "Việt Nam" },
    { airline: "ANA", from: "Hồ Chí Minh", route: "Hồ Chí Minh → Osaka", stop: "Osaka", country: "Nhật Bản" },
    { airline: "Korean Air", from: "Hồ Chí Minh", route: "Hồ Chí Minh → Busan", stop: "Busan", country: "Hàn Quốc" },
    { airline: "VietJet Air", from: "Hồ Chí Minh", route: "Hồ Chí Minh → PhuKet", stop: "PhuKet", country: "Thái Lan" },
    { airline: "Korean Air", from: "Hồ Chí Minh", route: "Hồ Chí Minh → Bali", stop: "Bali", country: "Indonesia" },
  ],
  "hoi-an": [
    { airline: "VietJet Air", from: "Hội An", route: "Hội An → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "VietJet Air", from: "Hội An", route: "Hội An → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "Bamboo Airways", from: "Hội An", route: "Hội An → Nha Trang", stop: "Nha Trang", country: "Việt Nam" },
    { airline: "Vietnam Airlines", from: "Hội An", route: "Hội An → Phú Quốc", stop: "Phú Quốc", country: "Việt Nam" },
    { airline: "ANA", from: "Hội An", route: "Hội An → Osaka", stop: "Osaka", country: "Nhật Bản" },
    { airline: "Korean Air", from: "Hội An", route: "Hội An → Busan", stop: "Busan", country: "Hàn Quốc" },
    
  ],

  /* ================= 🌏 QUỐC TẾ ================= */

  "taipei": [
    { airline: "China Airlines", from: "Taipei", route: "Taipei → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "EVA Air", from: "Taipei", route: "Taipei → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "ANA", from: "Taipei", route: "Taipei → Tokyo", stop: "Tokyo", country: "Nhật Bản" },
    { airline: "Korean Air", from: "Taipei", route: "Taipei → Seoul", stop: "Seoul", country: "Hàn Quốc" },
    { airline: "Singapore Airlines", from: "Taipei", route: "Taipei → Singapore", stop: "Singapore", country: "Singapore" },
    { airline: "AirAsia", from: "Taipei", route: "Taipei → Bangkok", stop: "Bangkok", country: "Thái Lan" },
  ],
    "busan": [
    { airline: "Korean Air", from: "Busan", route: "Busan → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "Asiana Airlines", from: "Busan", route: "Busan → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "ANA", from: "Busan", route: "Busan → Tokyo", stop: "Tokyo", country: "Nhật Bản" },
    { airline: "Japan Airlines", from: "Busan", route: "Busan → Osaka", stop: "Osaka", country: "Nhật Bản" },
    { airline: "Singapore Airlines", from: "Busan", route: "Busan → Singapore", stop: "Singapore", country: "Singapore" },
    { airline: "Thai Airways", from: "Busan", route: "Busan → Bangkok", stop: "Bangkok", country: "Thái Lan" },
  ],
    "singapore": [
    { airline: "Korean Air", from: "Singapore", route: "Singapore → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "Asiana Airlines", from: "Singapore", route: "Singapore → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "ANA", from: "Singapore", route: "Singapore → Tokyo", stop: "Tokyo", country: "Nhật Bản" },
    { airline: "Japan Airlines", from: "Singapore", route: "Singapore → Osaka", stop: "Osaka", country: "Nhật Bản" },
    { airline: "Singapore Airlines", from: "Singapore", route: "Singapore → Phú Quốc", stop: "Phú Quốc", country: "Việt Nam" },
    { airline: "Thai Airways", from: "Singapore", route: "Singapore → Bangkok", stop: "Bangkok", country: "Thái Lan" },
  ],
  "bangkok": [
    { airline: "Korean Air", from: "Bangkok", route: "Bangkok → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "Asiana Airlines", from: "Bangkok", route: "Bangkok → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "ANA", from: "Bangkok", route: "Bangkok → Tokyo", stop: "Tokyo", country: "Nhật Bản" },
    { airline: "Japan Airlines", from: "Bangkok", route: "Bangkok → Osaka", stop: "Osaka", country: "Nhật Bản" },
    { airline: "Singapore Airlines", from: "Bangkok", route: "Bangkok → Singapore", stop: "Singapore", country: "Singapore" },
    { airline: "Thai Airways", from: "Bangkok", route: "Bangkok → Bali", stop: "Bali", country: "Indonesia" },
  ],
  "seoul": [
    { airline: "Korean Air", from: "Seoul", route: "Seoul → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "Asiana Airlines", from: "Seoul", route: "Seoul → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "ANA", from: "Seoul", route: "Seoul → Tokyo", stop: "Tokyo", country: "Nhật Bản" },
    { airline: "Japan Airlines", from: "Seoul", route: "Seoul → Osaka", stop: "Osaka", country: "Nhật Bản" },
    { airline: "Singapore Airlines", from: "Seoul", route: "Seoul → Phú Quốc", stop: "Phú Quốc", country: "Việt Nam" },
    { airline: "Thai Airways", from: "Seoul", route: "Seoul → Bali", stop: "Bali", country: "Indonesia" },
  ],
  "osaka": [
    { airline: "Korean Air", from: "Osaka", route: "Osaka → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "Asiana Airlines", from: "Osaka", route: "Osaka → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "ANA", from: "Osaka", route: "Osaka → Tokyo", stop: "Tokyo", country: "Nhật Bản" },
    { airline: "Japan Airlines", from: "Osaka", route: "Osaka → Osaka", stop: "Osaka", country: "Nhật Bản" },
    { airline: "Singapore Airlines", from: "Osaka", route: "Osaka → Phú Quốc", stop: "Phú Quốc", country: "Việt Nam" },
    { airline: "Thai Airways", from: "Osaka", route: "Osaka → Bali", stop: "Bali", country: "Indonesia" },
  ],
    "phuket": [
    { airline: "Korean Air", from: "Phuket", route: "Phuket → Hà Nội", stop: "Hà Nội", country: "Việt Nam" },
    { airline: "Asiana Airlines", from: "Phuket", route: "Phuket → TP.HCM", stop: "TP.HCM", country: "Việt Nam" },
    { airline: "ANA", from: "Phuket", route: "Phuket → Tokyo", stop: "Tokyo", country: "Nhật Bản" },
    { airline: "Japan Airlines", from: "Phuket", route: "Phuket → Osaka", stop: "Osaka", country: "Nhật Bản" },
    { airline: "Singapore Airlines", from: "Phuket", route: "Phuket → Phú Quốc", stop: "Phú Quốc", country: "Việt Nam" },
    { airline: "Thai Airways", from: "Phuket", route: "Phuket → Bali", stop: "Bali", country: "Indonesia" },
  ],
};
