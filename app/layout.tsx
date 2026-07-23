import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { Archivo_Black, Barlow, IBM_Plex_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { GlobalCursorTrail } from "@/components/layout/GlobalCursorTrail";
import { HashScroll } from "@/components/layout/HashScroll";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants/site";
import { absoluteUrl } from "@/lib/seo/urls";
import { localSeo } from "@/lib/seo/local";
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
    default: localSeo.homeTitle,
    template: "%s | SMF Hafriyat Denizli",
  },
  description: localSeo.homeDescription,
  metadataBase: new URL(siteConfig.url),
  keywords: [...localSeo.defaultKeywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: true, email: true, address: true },
  icons: {
    icon: [{ url: siteConfig.logo, type: "image/png", sizes: "1024x1024" }],
    apple: [{ url: siteConfig.logo, type: "image/png", sizes: "1024x1024" }],
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "TR-20",
    "geo.placename": `${localSeo.city}, ${localSeo.country}`,
    "geo.position": `${localSeo.geo.latitude};${localSeo.geo.longitude}`,
    ICBM: `${localSeo.geo.latitude}, ${localSeo.geo.longitude}`,
  },
  openGraph: {
    title: localSeo.homeTitle,
    description: localSeo.homeDescription,
    url: siteConfig.url,
    locale: siteConfig.locale,
    type: "website",
    siteName: `${siteConfig.name} — Denizli Hafriyat`,
    images: [{ url: absoluteUrl("/images/smf/real/smf-kepce-bw.jpg"), width: 1200, height: 630, alt: "SMF Hafriyat — ekskavatör kepçe hafriyat operasyonu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: localSeo.homeTitle,
    description: localSeo.homeDescription,
    images: [absoluteUrl("/images/smf/real/smf-kepce-bw.jpg")],
  },
  alternates: { canonical: siteConfig.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="tr">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${archivoBlack.variable} ${barlow.variable} ${ibmPlexMono.variable} min-h-screen bg-bg-primary text-text-primary antialiased`}
      >
        {isProduction && gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
            <Suspense fallback={null}>
              <GoogleAnalytics />
            </Suspense>
          </>
        ) : null}
        <ScrollProgress />
        <HashScroll />
        <SiteChrome>
          <Header />
        </SiteChrome>
        <main className="pb-[calc(6.25rem+env(safe-area-inset-bottom,0px))] lg:pb-0">{children}</main>
        <SiteChrome>
          <Footer />
          <StickyMobileCta />
          <WhatsAppButton />
          <CookieConsent />
          <GlobalCursorTrail />
        </SiteChrome>
      </body>
    </html>
  );
}
