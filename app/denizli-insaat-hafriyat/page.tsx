import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SeoLandingLayout } from "@/components/sections/SeoLandingLayout";
import { seoLandingPages } from "@/lib/constants/seo-pages";
import { siteImages } from "@/lib/constants/images";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo } from "@/lib/seo/local";

const page = seoLandingPages[1];

export const metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  image: siteImages.trustBg,
  keywords: [...page.keywords, ...localSeo.defaultKeywords],
});

export default function DenizliInsaatHafriyatPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: page.title, path: page.path },
        ]}
      />
      <SeoLandingLayout
        page={page}
        image={siteImages.trustBg}
        imageAlt="Denizli inşaat hafriyat ve müteahhit kazı — SMF Hafriyat"
      />
    </>
  );
}
