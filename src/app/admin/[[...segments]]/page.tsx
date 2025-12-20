// Payload CMS 3.x với withPayload
// withPayload sẽ tự động proxy requests đến Payload
// Admin UI sẽ được serve từ Payload server
export default function AdminPage() {
  // Với Payload CMS 3.x và withPayload, admin UI được serve trực tiếp
  // Không cần render gì ở đây, Payload sẽ handle
  return null;
}

