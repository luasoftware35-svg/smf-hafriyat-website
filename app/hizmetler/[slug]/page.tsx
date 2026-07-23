import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle, ShieldCheck, ArrowRight, Phone, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getServiceBySlug, getServices } from "@/lib/data/services";
import { getServiceImage, getServiceGallery } from "@/lib/constants/images";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo, serviceSeoDescription, serviceSeoTitle } from "@/lib/seo/local";
import { getContactInfo } from "@/lib/data/contact-settings";
import { buildQuoteHref } from "@/lib/utils/contact-link";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return createPageMetadata({
    title: serviceSeoTitle(service.title),
    description: serviceSeoDescription(service.shortDescription),
    path: `/hizmetler/${slug}`,
    image: getServiceImage(slug),
    keywords: [`denizli ${service.slug.replace(/-/g, " ")}`, "denizli hafriyat", ...localSeo.defaultKeywords],
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const allServices = await getServices();
  if (!service) notFound();

  const contactInfo = await getContactInfo();
  const image = getServiceImage(slug);
  const gallery = getServiceGallery(slug);
  const quoteHref = buildQuoteHref({ hizmet: slug });

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler" },
          { name: service.title, path: `/hizmetler/${slug}` },
        ]}
      />
      <ServiceJsonLd title={service.title} description={service.shortDescription} slug={slug} image={image} />
      <PageHero
        eyebrow="Hizmet Detayı"
        title={serviceSeoTitle(service.title)}
        description={serviceSeoDescription(service.shortDescription)}
        image={image}
        imageAlt={`${service.title} — SMF Hafriyat Denizli`}
      />
      <Container className="py-16 lg:py-24">
        <Breadcrumbs
          className="mb-8"
          items={[
            { name: "Ana Sayfa", path: "/" },
            { name: "Hizmetler", path: "/hizmetler" },
            { name: service.title },
          ]}
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-surface bg-bg-secondary/75 px-4 py-3 text-sm text-text-secondary">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Keşif</p>
                <p className="mt-2 font-medium text-text-primary">Aynı gün geri dönüş</p>
              </div>
              <div className="rounded-lg border border-surface bg-bg-secondary/75 px-4 py-3 text-sm text-text-secondary">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Filo</p>
                <p className="mt-2 font-medium text-text-primary">Kendi operatör ve makinelerimiz</p>
              </div>
              <div className="rounded-lg border border-surface bg-bg-secondary/75 px-4 py-3 text-sm text-text-secondary">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Süreç</p>
                <p className="mt-2 font-medium text-text-primary">Belgeli ve resmi ilerleyiş</p>
              </div>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Hizmet Detayı</p>
            <p className="mt-4 text-xl leading-relaxed text-text-primary">{service.fullDescription}</p>

            <div className="mt-8 space-y-5">
              {service.detailParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-[1.8] text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-lg border border-surface bg-bg-secondary/50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/15 text-accent">
                  <ShieldCheck size={22} aria-hidden="true" />
                </div>
                <h2 className="font-heading text-xl text-text-primary sm:text-2xl">Neden SMF Hafriyat?</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {service.trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="mt-10 font-heading text-2xl text-text-primary">Hizmet Kapsamı</h2>
            <ul className="mt-4 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <AnimatedButton href={quoteHref} glow>
                Bu İş İçin Teklif Al
                <ArrowRight size={18} aria-hidden="true" />
              </AnimatedButton>
              <AnimatedButton href={contactInfo.phoneHref} variant="secondary" glow={false}>
                <Phone size={18} aria-hidden="true" />
                Hemen Arayın
              </AnimatedButton>
            </div>
          </div>
          <Card hover={false} className="group overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image}
                alt={`${service.title} — SMF Hafriyat hizmet görseli`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-md glass px-4 py-3">
                <p className="font-heading text-lg text-text-primary">{service.title}</p>
                <p className="mt-1 text-xs text-text-secondary">1998&apos;den bu yana · Denizli · Ege Bölgesi</p>
              </div>
            </div>
            <div className="space-y-4 border-t border-surface p-6">
              <div className="flex items-start gap-3 text-sm text-text-secondary">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span>{contactInfo.address.full}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-text-secondary">
                <Phone size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span>{contactInfo.phoneDisplay} · Keşif ve proje koordinasyonu</span>
              </div>
              <div className="rounded-lg border border-surface bg-bg-secondary/70 px-4 py-3 text-sm text-text-secondary">
                Bu hizmet için gerekli saha, metraj ve makine planlamasını keşif sonrası netleştiriyoruz.
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="font-heading text-2xl text-text-primary">Saha Görselleri</h2>
          <div className="mt-2 h-1 w-16 gradient-accent-bar" />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-md border border-surface shadow-card">
                <Image
                  src={src}
                  alt={`${service.title} — saha görseli ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            ))}
          </div>
        </div>

        <RelatedServices currentSlug={slug} items={allServices} />
      </Container>
      <ProcessTimeline />
      <CtaBanner />
    </>
  );
}
