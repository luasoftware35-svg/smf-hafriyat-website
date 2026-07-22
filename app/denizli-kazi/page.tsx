import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SeoLandingLayout } from "@/components/sections/SeoLandingLayout";
import { seoLandingPages } from "@/lib/constants/seo-pages";
import { siteImages } from "@/lib/constants/images";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo } from "@/lib/seo/local";

const page = seoLandingPages[0];

export const metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  image: siteImages.areasHero,
  keywords: [...page.keywords, ...localSeo.defaultKeywords],
});

export default function DenizliKaziPage() {
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
        image={siteImages.areasHero}
        imageAlt="Denizli ekskavatör kazı hizmeti — SMF Hafriyat"
      />
    </>
  );
}
