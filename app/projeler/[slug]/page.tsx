import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { BreadcrumbJsonLd, ProjectJsonLd } from "@/components/seo/JsonLd";
import { getProjectBySlug, projects } from "@/lib/constants/projects";
import { getProjectImages } from "@/lib/constants/images";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ctaLinks } from "@/lib/constants/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const imgs = getProjectImages(slug);
  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/projeler/${slug}`,
    image: imgs.after,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const imgs = getProjectImages(slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Projeler", path: "/projeler" },
          { name: project.title, path: `/projeler/${slug}` },
        ]}
      />
      <ProjectJsonLd
        title={project.title}
        description={project.description}
        slug={slug}
        location={project.location}
        image={imgs.after}
        completedDate={project.completedDate}
      />
      <PageHero
        eyebrow="Proje Detayı"
        title={project.title}
        description={project.description}
        image={imgs.after}
        imageAlt={`${project.title} — ${project.location}`}
      />
      <Container className="py-16 lg:py-24">
        <BeforeAfterSlider
          beforeSrc={imgs.before}
          afterSrc={imgs.after}
          beforeAlt={`${project.title} — öncesi`}
          afterAlt={`${project.title} — sonrası`}
          className="max-w-4xl overflow-hidden rounded-md shadow-card-hover"
          autoDemo
        />

        {imgs.gallery.length > 0 && (
          <>
            <h2 className="mt-12 font-heading text-2xl text-text-primary">Proje Galerisi</h2>
            <div className="mt-2 h-1 w-16 gradient-accent-bar" />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {imgs.gallery.map((src, i) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-md border border-surface shadow-card">
                  <Image
                    src={src}
                    alt={`${project.title} — saha görseli ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-md border border-surface bg-bg-secondary p-4">
            <dt className="text-xs uppercase tracking-wider text-text-secondary">Konum</dt>
            <dd className="mt-1 font-medium text-text-primary">{project.location}</dd>
          </div>
          <div className="rounded-md border border-surface bg-bg-secondary p-4">
            <dt className="text-xs uppercase tracking-wider text-text-secondary">Kategori</dt>
            <dd className="mt-1 font-medium capitalize text-text-primary">{project.category}</dd>
          </div>
          <div className="rounded-md border border-surface bg-bg-secondary p-4">
            <dt className="text-xs uppercase tracking-wider text-text-secondary">Tamamlanma</dt>
            <dd className="mt-1 font-mono text-text-primary">{project.completedDate}</dd>
          </div>
        </div>
        <Button href={ctaLinks.quote.href} className="mt-10">{ctaLinks.quote.label}</Button>
      </Container>
      <CtaBanner />
    </>
  );
}
