import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Phone } from "lucide-react";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { ContactSection } from "@/components/sections/ContactSection";
import type { DistrictPage } from "@/lib/constants/districts";
import { contactInfo, ctaLinks } from "@/lib/constants/site";

type DistrictLandingLayoutProps = {
  district: DistrictPage;
  image: string;
  imageAlt: string;
};

export function DistrictLandingLayout({ district, image, imageAlt }: DistrictLandingLayoutProps) {
  return (
    <>
      <PageHero
        eyebrow={`${district.region} · ${district.name}`}
        title={`${district.name} Hafriyat ve Kazı Hizmeti`}
        description={district.shortDescription}
        image={image}
        imageAlt={imageAlt}
      />

      <Container className="py-12 lg:py-16">
        <Breadcrumbs
          className="mb-8"
          items={[
            { name: "Ana Sayfa", path: "/" },
            { name: "Hizmet Bölgeleri", path: "/hizmet-bolgeleri" },
            { name: district.name },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div>
            <p className="text-lg leading-relaxed text-text-primary">{district.intro}</p>
            <div className="mt-6 space-y-4">
              {district.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-base leading-[1.8] text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-text-secondary">
              <MapPin size={16} className="shrink-0 text-accent" aria-hidden="true" />
              <span>{district.districts}</span>
            </div>

            <h2 className="mt-10 font-heading text-2xl text-text-primary">Hizmet Kapsamı</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {district.services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-sm text-text-secondary">
                  <CheckCircle size={16} className="shrink-0 text-accent" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <AnimatedButton href={ctaLinks.quote.href} glow>
                Keşif Talep Edin
                <ArrowRight size={18} aria-hidden="true" />
              </AnimatedButton>
              <AnimatedButton href={contactInfo.phoneHref} variant="secondary" glow={false}>
                <Phone size={18} aria-hidden="true" />
                {contactInfo.phoneDisplay}
              </AnimatedButton>
            </div>

            <p className="mt-8 text-sm text-text-secondary">
              Diğer bölgeler için{" "}
              <Link href="/hizmet-bolgeleri" className="font-medium text-text-primary hover:text-accent">
                hizmet bölgeleri
              </Link>
              ,{" "}
              <Link href="/denizli-kazi" className="font-medium text-text-primary hover:text-accent">
                Denizli kazı
              </Link>{" "}
              ve{" "}
              <Link href="/denizli-insaat-hafriyat" className="font-medium text-text-primary hover:text-accent">
                Denizli inşaat hafriyat
              </Link>{" "}
              sayfalarımıza göz atın.
            </p>
          </div>

          <Card hover={false} className="overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
            <div className="space-y-3 border-t border-surface p-6 text-sm text-text-secondary">
              <p className="font-heading text-lg text-text-primary">Merkez Ofis</p>
              <p>{contactInfo.address.full}</p>
              <p>{contactInfo.workingHours.weekdays}</p>
            </div>
          </Card>
        </div>
      </Container>

      <ContactSection />
    </>
  );
}
