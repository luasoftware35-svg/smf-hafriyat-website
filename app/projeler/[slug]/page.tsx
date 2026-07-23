import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { BreadcrumbJsonLd, ProjectJsonLd } from "@/components/seo/JsonLd";
import { getProjectBySlug, getProjects } from "@/lib/data/projects";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildQuoteHref } from "@/lib/utils/contact-link";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/projeler/${slug}`,
    image: project.afterImage,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

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
        image={project.afterImage}
        completedDate={project.completedDate}
      />
      <PageHero
        eyebrow="Proje Detayı"
        title={project.title}
        description={project.description}
        image={project.afterImage}
        imageAlt={`${project.title} — ${project.location}`}
      />
      <Container className="py-16 lg:py-24">
        <Breadcrumbs
          className="mb-8"
          items={[
            { name: "Ana Sayfa", path: "/" },
            { name: "Projeler", path: "/projeler" },
            { name: project.title },
          ]}
        />
        <Link
          href="/projeler"
          className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Projelere dön
        </Link>
        <BeforeAfterSlider
          beforeSrc={project.beforeImage}
          afterSrc={project.afterImage}
          beforeAlt={`${project.title} — öncesi`}
          afterAlt={`${project.title} — sonrası`}
          className="max-w-4xl overflow-hidden rounded-md shadow-card-hover"
          autoDemo
        />

        {project.galleryImages.length > 0 && (
          <>
            <h2 className="mt-12 font-heading text-2xl text-text-primary">Proje Galerisi</h2>
            <div className="mt-2 h-1 w-16 gradient-accent-bar" />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {project.galleryImages.map((src, i) => (
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
        <Button href={buildQuoteHref({ proje: project.title, mesaj: `${project.title} benzeri proje için teklif talebi` })} className="mt-10">
          Benzer Proje İçin Teklif Al
        </Button>
      </Container>
      <CtaBanner />
    </>
  );
}
