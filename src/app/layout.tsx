import type { Metadata } from "next";
import { Be_Vietnam_Pro } from 'next/font/google';
import "./globals.css";

// Cấu hình font chữ
const vietnamPro = Be_Vietnam_Pro({ 
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-vietnam-pro',
});


export const dynamic = "force-static";

// 🔥 SEO hard-code title + description
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN ||
    "https://hyra-router-landing-page-beta.hyrateksolution.com";

  return {
    metadataBase: new URL(baseUrl),
    title: "Mega Router – Unified API Gateway for All Leading AI Models",
    description:
      "Access GPT-4.1, Claude 3.5, Llama 3.1, Groq, Gemma and 200+ AI models through one secure, OpenAI-compatible API. Fast, scalable, and effortless to integrate.",
    keywords: [
      "Mega",
      "Router",
      "AI",
      "API Gateway",
      "Router Mega",
      "Mega Router",
      "AI Router",
      "API Router",
      "AI Gateway",
      "Hyra AI",
    ],
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
      ],
      apple: "/apple-icon.png",
    },
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        "x-default": "/",
      },
    },
    manifest: "/manifest.json",
    openGraph: {
      title: "Mega Router – Unified API Gateway for All Leading AI Models",
      description:
        "Access GPT-4.1, Claude 3.5, Llama 3.1, Groq, Gemma and 200+ AI models through one secure, OpenAI-compatible API. Fast, scalable, and effortless to integrate.",
      siteName: "Hyra Router",
      images: [
        {
          url: `${baseUrl}/images/hyra-router-metadata.png`,
          width: 1200,
          height: 630,
          alt: "Mega Router - Unified API Gateway for AI Models",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mega Router – Unified API Gateway for All Leading AI Models",
      description:
        "Access GPT-4.1, Claude 3.5, Llama 3.1, Groq, Gemma and 100+ AI models through one secure, OpenAI-compatible API. Fast, scalable, and effortless to integrate.",
      images: [`${baseUrl}/images/hyra-router-metadata.png`],
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
  const locale = "en";

  return (
    <html lang={locale}>
      <body
        className={`${vietnamPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
