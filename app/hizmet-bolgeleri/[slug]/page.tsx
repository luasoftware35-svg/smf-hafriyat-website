import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { DistrictLandingLayout } from "@/components/sections/DistrictLandingLayout";
import { districtPages, getDistrictBySlug } from "@/lib/constants/districts";
import { getServiceAreaImage } from "@/lib/constants/images";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo } from "@/lib/seo/local";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return districtPages.map((district) => ({ slug: district.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const district = getDistrictBySlug(slug);
  if (!district) return {};

  return createPageMetadata({
    title: `${district.name} Hafriyat ve Kazı — Denizli`,
    description: district.shortDescription,
    path: `/hizmet-bolgeleri/${slug}`,
    keywords: [...district.keywords, ...localSeo.defaultKeywords],
  });
}

export default async function DistrictPage({ params }: Props) {
  const { slug } = await params;
  const district = getDistrictBySlug(slug);
  if (!district) notFound();

  const index = districtPages.findIndex((d) => d.slug === slug);
  const image = getServiceAreaImage(index >= 0 ? index : 0);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmet Bölgeleri", path: "/hizmet-bolgeleri" },
          { name: district.name, path: `/hizmet-bolgeleri/${slug}` },
        ]}
      />
      <DistrictLandingLayout district={district} image={image.src} imageAlt={image.alt} />
    </>
  );
}
