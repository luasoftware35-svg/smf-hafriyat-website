import { PageHero } from "@/components/ui/PageHero";
import { ProjectsPageContent } from "@/components/sections/ProjectsPageContent";
import { ImageMarquee } from "@/components/sections/ImageMarquee";
import { BreadcrumbJsonLd, ProjectsItemListJsonLd } from "@/components/seo/JsonLd";
import { getProjects } from "@/lib/data/projects";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo, pageSeoDescription } from "@/lib/seo/local";
import { brand } from "@/lib/constants/brand";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Denizli Hafriyat Projeleri",
  description: pageSeoDescription(brand.pages.projects.description),
  path: "/projeler",
  image: siteImages.fleetHero,
  keywords: ["denizli hafriyat projeleri", ...localSeo.defaultKeywords],
});

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "Projeler", path: "/projeler" }]} />
      <ProjectsItemListJsonLd items={projects} />
      <PageHero
        eyebrow="Projeler"
        title={brand.pages.projects.title}
        description={brand.pages.projects.description}
        image={siteImages.fleetHero}
        imageAlt="Ekskavatör hafriyat projesi — SMF Hafriyat"
      />
      <ProjectsPageContent projects={projects} />
      <ImageMarquee />
    </>
  );
}
