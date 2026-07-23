import { faqItems } from "@/lib/constants/content";
import { services } from "@/lib/constants/services";
import { projects } from "@/lib/constants/projects";
import { contactInfo as staticContactInfo, siteConfig } from "@/lib/constants/site";
import type { ContactInfoData } from "@/lib/data/contact-settings";
import { siteImages } from "@/lib/constants/images";
import { localSeo } from "@/lib/seo/local";
import { absoluteUrl } from "@/lib/seo/urls";

const orgId = `${siteConfig.url}/#organization`;
const ogImage = absoluteUrl(siteImages.og);

type FaqJsonLdItem = {
  question: string;
  answer: string;
};

export function FaqJsonLd({ items = faqItems }: { items?: readonly FaqJsonLdItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function JsonLd({ contactInfo = staticContactInfo }: { contactInfo?: ContactInfoData }) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "@id": orgId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.tradeName, "SMF Denizli Hafriyat"],
    foundingDate: "1998",
    founder: { "@type": "Person", name: "Ramiz Ramizoğlu" },
    employee: { "@type": "Person", name: contactInfo.contactPerson, jobTitle: "CEO" },
    description: siteConfig.description,
    url: siteConfig.url,
    image: ogImage,
    logo: absoluteUrl(siteConfig.logo),
    telephone: contactInfo.phone,
    email: contactInfo.email,
    priceRange: "$$",
    hasMap: contactInfo.mapLink,
    knowsAbout: localSeo.knowAbout,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: contactInfo.phone,
        email: contactInfo.email,
        areaServed: "TR",
        availableLanguage: ["Turkish"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address.street,
      addressNeighborhood: contactInfo.address.neighborhood,
      addressLocality: contactInfo.address.city,
      addressRegion: contactInfo.address.region,
      postalCode: contactInfo.address.postalCode,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: localSeo.geo.latitude,
      longitude: localSeo.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Denizli" },
      { "@type": "AdministrativeArea", name: "Merkezefendi" },
      { "@type": "AdministrativeArea", name: "Pamukkale" },
      { "@type": "AdministrativeArea", name: "Honaz" },
      { "@type": "AdministrativeArea", name: "Ege Bölgesi" },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: localSeo.geo.latitude,
        longitude: localSeo.geo.longitude,
      },
      geoRadius: 120000,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Denizli Hafriyat ve Yıkım Hizmetleri",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service.title} — Denizli`,
          description: service.shortDescription,
          url: absoluteUrl(`/hizmetler/${service.slug}`),
          areaServed: { "@type": "City", name: "Denizli" },
        },
      })),
    },
    sameAs: [
      siteConfig.url,
      contactInfo.instagram,
      contactInfo.mapLink,
      ...(process.env.NEXT_PUBLIC_GOOGLE_MAPS_REVIEW_URL ? [process.env.NEXT_PUBLIC_GOOGLE_MAPS_REVIEW_URL] : []),
    ].filter(Boolean),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${siteConfig.name} — Denizli Hafriyat`,
    description: siteConfig.description,
    inLanguage: "tr-TR",
    publisher: { "@id": orgId },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}

type BreadcrumbItem = { name: string; path: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

type ItemListJsonLdProps = {
  name: string;
  items: { name: string; url: string; description?: string }[];
};

export function ItemListJsonLd({ name, items }: ItemListJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.url),
      description: item.description,
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ContactPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "İletişim — Denizli Hafriyat SMF Hafriyat",
    url: absoluteUrl("/iletisim"),
    description: "Denizli hafriyat firması SMF Hafriyat iletişim, keşif talebi ve teklif formu.",
    mainEntity: { "@id": orgId },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

type ServiceJsonLdProps = {
  title: string;
  description: string;
  slug: string;
  image: string;
};

export function ServiceJsonLd({ title, description, slug, image }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${title} — Denizli`,
    description,
    url: absoluteUrl(`/hizmetler/${slug}`),
    image: absoluteUrl(image),
    provider: { "@id": orgId },
    areaServed: [
      { "@type": "City", name: "Denizli" },
      { "@type": "AdministrativeArea", name: "Ege Bölgesi" },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

type ProjectJsonLdProps = {
  title: string;
  description: string;
  slug: string;
  location: string;
  image: string;
  completedDate?: string;
};

export function ProjectJsonLd({ title, description, slug, location, image, completedDate }: ProjectJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: title,
    description,
    url: absoluteUrl(`/projeler/${slug}`),
    image: absoluteUrl(image),
    locationCreated: { "@type": "Place", name: location },
    creator: { "@id": orgId },
    ...(completedDate ? { dateModified: completedDate } : {}),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ProjectsItemListJsonLd({
  items = projects,
}: {
  items?: { title: string; slug: string; description: string }[];
}) {
  return (
    <ItemListJsonLd
      name="SMF Hafriyat Denizli Projeleri"
      items={items.map((p) => ({
        name: p.title,
        url: `/projeler/${p.slug}`,
        description: p.description,
      }))}
    />
  );
}

export function ServicesItemListJsonLd() {
  return (
    <ItemListJsonLd
      name="Denizli Hafriyat Hizmetleri — SMF Hafriyat"
      items={services.map((s) => ({
        name: `${s.title} Denizli`,
        url: `/hizmetler/${s.slug}`,
        description: s.shortDescription,
      }))}
    />
  );
}
