interface GuideResponse {
  id: number;
  documentId: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  time_read: string;
  createdAt: string;
  locale: string;
  thumbnail?: string[];
}

// Export Landing Page CMS Types
export * from "./landing-page.types";
