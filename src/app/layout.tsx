import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

// Cấu hình font chữ
const vietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-vietnam-pro",
});

export const dynamic = "force-static";

import { Toaster } from "sonner";

// 🔥 SEO hard-code title + description cho Hà Anh JSC
export async function generateMetadata(): Promise<Metadata> {
  // Bạn nên thay đổi domain này thành domain thật của Hà Anh khi deploy
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || "https://haanhjsc.com.vn";

  const siteTitle =
    "Hà Anh JSC | Vé Máy Bay - Du Lịch - Tổ Chức Sự Kiện Hàng Đầu";
  const siteDescription =
    "Hà Anh JSC chuyên cung cấp vé máy bay nội địa & quốc tế, tour du lịch, đặt phòng khách sạn, tổ chức sự kiện MICE và dịch vụ visa. Cam kết Chuyên nghiệp – Tận tâm – Hiệu quả.";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: siteTitle,
      template: `%s | Hà Anh JSC`,
    },
    description: siteDescription,
    keywords: [
      "Hà Anh JSC",
      "Vé máy bay",
      "Đặt vé máy bay giá rẻ",
      "Du lịch",
      "Tour du lịch",
      "Tổ chức sự kiện",
      "Hội thảo",
      "Visa",
      "Đại lý vé máy bay Hà Nội",
      "Hà Anh Aviation",
    ],
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
      ],
      apple: "/apple-icon.png",
    },
    // Đổi theme color sang màu Đỏ thương hiệu hoặc Trắng
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#DC2626" }, // Màu đỏ thương hiệu
    ],
    alternates: {
      canonical: "/",
      languages: {
        vi: "/",
        "x-default": "/",
      },
    },
    manifest: "/manifest.json",
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      siteName: "Hà Anh JSC",
      images: [
        {
          url: "/images/backgrounds/banner-seo.webp",
          width: 1200,
          height: 630,
          alt: "Hà Anh JSC - Dịch vụ Hàng không và Du lịch",
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [`${baseUrl}/images/ha-anh-jsc-og.png`],
    },
    robots: {
      index: process.env.NEXT_PUBLIC_ENV === "production",
      follow: process.env.NEXT_PUBLIC_ENV === "production",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Đổi locale sang tiếng Việt
  const locale = "vi";

  return (
    <html lang={locale}>
      <body
        className={`${vietnamPro.variable} bg-white text-slate-800 antialiased`}
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
