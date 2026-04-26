import type { Metadata } from "next";
import { getSiteMetadata } from "@/content/metadata";
import { defaultLocale } from "@/i18n/locales";
import "@/styles/globals.css";

export const metadata: Metadata = getSiteMetadata(defaultLocale);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale}>
      <body className="min-h-screen bg-[#f8f4ed] text-[#211b16] antialiased">
        {children}
      </body>
    </html>
  );
}
