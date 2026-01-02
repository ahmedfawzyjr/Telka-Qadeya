import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "تلك القضية | The Cause",
  description: "رحلة تفاعلية عبر تاريخ النضال الفلسطيني - An interactive journey through Palestinian history",
  keywords: ["Palestine", "فلسطين", "Nakba", "النكبة", "History", "Timeline", "Gaza", "غزة"],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'تلك القضية | The Cause',
    description: 'رحلة تفاعلية عبر تاريخ النضال الفلسطيني',
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تلك القضية | The Cause',
    description: 'An interactive journey through Palestinian history',
    images: ['/logo.png'],
  },
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
      className={`${inter.variable} ${cairo.variable}`}
    >
      <body className={`antialiased ${isRTL ? 'font-cairo' : 'font-inter'}`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
