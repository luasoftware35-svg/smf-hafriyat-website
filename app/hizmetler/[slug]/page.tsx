import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { getServiceBySlug, services } from "@/lib/constants/services";
import { getServiceImage, getServiceGallery } from "@/lib/constants/images";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ctaLinks } from "@/lib/constants/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/hizmetler/${slug}`,
    image: getServiceImage(slug),
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const image = getServiceImage(slug);
  const gallery = getServiceGallery(slug);

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
        title={service.title}
        description={service.shortDescription}
        image={image}
        imageAlt={`${service.title} — SMF Hafriyat Denizli`}
      />
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-text-secondary">{service.fullDescription}</p>
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
              <Button href={ctaLinks.quote.href}>{ctaLinks.quote.label}</Button>
              <Button href="/hizmetler" variant="secondary">Tüm Hizmetler</Button>
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
            </div>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="font-heading text-2xl text-text-primary">Saha Görselleri</h2>
          <div className="mt-2 h-1 w-16 gradient-accent-bar" />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
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

        <RelatedServices currentSlug={slug} />
      </Container>
    </>
  );
}
