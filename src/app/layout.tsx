import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "تلك القضية | The Cause",
  description: "An interactive journey through Palestinian history",
  keywords: ["Palestine", "فلسطين", "Nakba", "النكبة", "History", "Timeline"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const isRTL = locale === 'ar';

  return (
    <html
      lang={locale}
      dir={isRTL ? 'rtl' : 'ltr'}
      suppressHydrationWarning
      className={`${inter.variable} ${tajawal.variable}`}
    >
      <body className={`antialiased ${isRTL ? 'font-tajawal' : 'font-inter'}`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
