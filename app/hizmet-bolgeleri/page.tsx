import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { ContactSection } from "@/components/sections/ContactSection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo } from "@/lib/seo/local";
import { serviceAreas } from "@/lib/constants/content";
import { districtPages } from "@/lib/constants/districts";
import { getServiceAreaImage, siteImages } from "@/lib/constants/images";
import { contactInfo } from "@/lib/constants/site";

export const metadata = createPageMetadata({
  title: "Denizli Hafriyat Hizmet Bölgeleri",
  description:
    "Denizli hafriyat firması SMF Hafriyat; Merkezefendi, Pamukkale, Honaz, Acıpayam ve Ege Bölgesi'nde ekskavatör hafriyat, yıkım ve kanal kazısı hizmeti sunar.",
  path: "/hizmet-bolgeleri",
  image: siteImages.areasHero,
  keywords: ["denizli hafriyat bölgeleri", "merkezefendi hafriyat", "denizli kazı", "denizli hafriyat firması", ...localSeo.defaultKeywords],
});

function getDistrictHref(areaName: string): string | undefined {
  if (areaName.includes("Sarayköy") || areaName.includes("Buldan")) return "/hizmet-bolgeleri/saraykoy";
  const match = districtPages.find((district) => areaName.includes(district.name));
  return match ? `/hizmet-bolgeleri/${match.slug}` : undefined;
}

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmet Bölgeleri", path: "/hizmet-bolgeleri" },
        ]}
      />
      <PageHero
        eyebrow="Hizmet Bölgeleri"
        title="Denizli ve Ege Bölgesi'nde hafriyat hizmeti"
        description="Denizli merkezli SMF Hafriyat; Merkezefendi, Pamukkale ve çevre ilçelerde ekskavatör hafriyat, yıkım ve enkaz kaldırma."
        image={siteImages.areasHero}
        imageAlt="Ekskavatör hafriyat sahası — SMF hizmet bölgeleri"
      />

      <Container className="py-16 lg:py-24">
        <Breadcrumbs
          className="mb-8"
          items={[
            { name: "Ana Sayfa", path: "/" },
            { name: "Hizmet Bölgeleri" },
          ]}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {serviceAreas.map((area, index) => {
            const img = getServiceAreaImage(index);
            const districtHref = getDistrictHref(area.name);
            return (
              <Card key={area.name} hover={Boolean(districtHref)} className="group overflow-hidden">
                <div className="grid sm:grid-cols-2">
                  <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[200px]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="400px"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6">
                    <div className="flex items-center gap-2 text-accent">
                      <MapPin size={18} aria-hidden="true" />
                      {districtHref ? (
                        <Link href={districtHref} className="font-heading text-xl text-text-primary transition-colors hover:text-accent">
                          <h2>{area.name}</h2>
                        </Link>
                      ) : (
                        <h2 className="font-heading text-xl text-text-primary">{area.name}</h2>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-medium text-text-secondary">{area.districts}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{area.description}</p>
                    {districtHref ? (
                      <Link href={districtHref} className="mt-4 text-sm font-medium text-accent hover:underline">
                        {area.name} hafriyat detayı →
                      </Link>
                    ) : null}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card hover={false} className="mt-12 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px]">
              <Image src={siteImages.contact} alt="Enkaz kaldırma ekskavatör sahası — SMF Hafriyat merkez" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="flex flex-col justify-center p-8">
              <h2 className="font-heading text-2xl text-text-primary">Merkez Ofis</h2>
              <p className="mt-3 text-text-secondary">{contactInfo.address.full}</p>
              <p className="mt-2 text-sm text-text-secondary">{contactInfo.workingHours.weekdays}</p>
              <iframe
                src={contactInfo.mapEmbedUrl}
                title="SMF Hafriyat Denizli konum haritası"
                className="mt-6 h-56 w-full rounded-md border border-surface sm:h-64 lg:h-48"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Card>
      </Container>

      <ContactSection />
    </>
  );
}
