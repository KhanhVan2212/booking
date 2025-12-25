import { NextIntlClientProvider } from "next-intl";
import AppProvider from "../provider";
import { getMessages } from "next-intl/server";
import Footer from "@/components/Layout/Footer";
import HeaderWrapper from "@/components/Layout/HeaderWrapper";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

import { Toaster } from "sonner";
import FloatingContact from "@/components/Layout/FloatingContact";

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages({ locale: locale });

  return (
    // <html lang={locale}>
    //     <body
    //     className={`${bricolageGrotesque.className} ${bricolageGrotesque.variable} ${ibmPlexMono.variable} ${inter.variable} bg-white antialiased`}
    //     >
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AppProvider>
        <HeaderWrapper locale={locale} />
        <main>{children}</main>
        <FloatingContact />
        <Footer />
        <Toaster richColors position="top-right" />
      </AppProvider>
    </NextIntlClientProvider>
    //     </body>
    // </html>
  );
}
