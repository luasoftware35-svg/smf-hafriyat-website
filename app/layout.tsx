import type { Metadata, Viewport } from "next";
import { Archivo_Black, Barlow, IBM_Plex_Mono } from "next/font/google";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants/site";
import { absoluteUrl } from "@/lib/seo/urls";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f5a020",
  viewportFit: "cover",
};

const archivoBlack = Archivo_Black({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: "400",
});

const barlow = Barlow({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "SMF Hafriyat | Denizli Hafriyat ve Kazı Hizmetleri",
    template: "%s | SMF Hafriyat",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "hafriyat denizli",
    "ekskavatör kazı",
    "derin temel kazısı",
    "enkaz kaldırma",
    "yıkım denizli",
    "kepçe kiralama",
    "moloz nakliyesi",
    "SMF Hafriyat",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: true, email: true, address: true },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "SMF Hafriyat | Denizli Hafriyat ve Kazı Hizmetleri",
    description: siteConfig.description,
    url: siteConfig.url,
    locale: siteConfig.locale,
    type: "website",
    siteName: siteConfig.name,
    images: [{ url: absoluteUrl("/images/hafriyat/haf-001.jpg"), width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMF Hafriyat | Denizli Hafriyat ve Kazı Hizmetleri",
    description: siteConfig.description,
    images: [absoluteUrl("/images/hafriyat/haf-001.jpg")],
  },
  alternates: { canonical: siteConfig.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${archivoBlack.variable} ${barlow.variable} ${ibmPlexMono.variable} min-h-screen bg-bg-primary text-text-primary antialiased`}
      >
        <ScrollProgress />
        <Header />
        <main className="pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] lg:pb-0">{children}</main>
        <Footer />
        <StickyMobileCta />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
