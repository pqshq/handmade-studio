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
      <body>{children}</body>
    </html>
  );
}
