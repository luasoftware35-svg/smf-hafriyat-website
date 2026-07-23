import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { ContactSection } from "@/components/sections/ContactSection";
import type { SeoLandingPage } from "@/lib/constants/seo-pages";
import { getContactInfo } from "@/lib/data/contact-settings";
import { buildCtaLinks } from "@/lib/contact/derive";

type SeoLandingLayoutProps = {
  page: SeoLandingPage;
  image: string;
  imageAlt: string;
};

export async function SeoLandingLayout({ page, image, imageAlt }: SeoLandingLayoutProps) {
  const contactInfo = await getContactInfo();
  const ctaLinks = buildCtaLinks(contactInfo);
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.intro}
        image={image}
        imageAlt={imageAlt}
      />

      <Container className="py-12 lg:py-16">
        <Breadcrumbs
          className="mb-8"
          items={[
            { name: "Ana Sayfa", path: "/" },
            { name: page.title },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div>
            <div className="space-y-4">
              {page.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-base leading-[1.8] text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="mt-10 font-heading text-2xl text-text-primary">Öne Çıkan Hizmetler</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {page.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                  <CheckCircle size={16} className="shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-heading text-2xl text-text-primary">İlgili Hizmetler</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {page.relatedServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 rounded-full border border-surface bg-bg-secondary/50 px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-accent/30 hover:text-text-primary"
                  >
                    {service.label}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <AnimatedButton href={ctaLinks.quote.href} glow>
                Ücretsiz Keşif Talep Edin
                <ArrowRight size={18} aria-hidden="true" />
              </AnimatedButton>
              <AnimatedButton href={contactInfo.phoneHref} variant="secondary" glow={false}>
                <Phone size={18} aria-hidden="true" />
                Hemen Arayın
              </AnimatedButton>
            </div>
          </div>

          <Card hover={false} className="overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
            <div className="space-y-3 border-t border-surface p-6 text-sm text-text-secondary">
              <p className="font-heading text-lg text-text-primary">SMF Hafriyat — Denizli</p>
              <p>{contactInfo.address.full}</p>
              <p>
                <a href={contactInfo.phoneHref} className="font-medium text-text-primary hover:text-accent">
                  {contactInfo.phoneDisplay}
                </a>
              </p>
            </div>
          </Card>
        </div>
      </Container>

      <ContactSection />
    </>
  );
}
