/** Hafriyat / yıkım / kazı — yalnızca doğrulanmış ekskavatör görselleri (haf-001 … haf-009) */
import { teamMembers } from "@/lib/constants/content";

const h = (n: number) => `/images/hafriyat/haf-${String(n).padStart(3, "0")}.jpg`;

/** Pexels doğrulanmış: ekskavatör, yıkım, enkaz, damper — dışında görsel kullanılmaz */
const core = {
  excavatorAerial: h(1),      // 10421754 — havadan ekskavatör kazısı
  excavatorDumpTruck: h(2),   // 10421760 — ekskavatör + damper
  bulldozerDemolition: h(3),  // 11555191 — dozer yıkım
  siteExcavator: h(4),        // 16227436 — saha ekskavatör
  enkazTurkey: h(5),          // 17727622 — enkaz yıkım Türkiye
  buildingDemolition: h(6),   // 12879116 — bina yıkımı ekskavatör
  rubbleExcavator: h(7),      // 29281411 — enkaz arası kepçe
  deepExcavator: h(8),        // 25559747 — derin kazı
  debrisLoading: h(9),        // 9373714 — enkaz yükleme
} as const;

const smf = {
  p1: "/images/smf/12-proje-1.png",
  p2: "/images/smf/13-proje-2.png",
  p3: "/images/smf/14-proje-3.png",
  p4: "/images/smf/15-proje-4.png",
  p5: "/images/smf/16-proje-5.png",
  p6: "/images/smf/17-proje-6.png",
} as const;

export const siteImages = {
  hero: core.excavatorAerial,
  heroAlt: "Ekskavatör kepçe ile hafriyat kazısı — SMF Hafriyat Denizli",
  og: core.excavatorDumpTruck,
  about: core.siteExcavator,
  contact: core.debrisLoading,
  fleetHero: core.excavatorAerial,
  areasHero: core.deepExcavator,
  faqSide: core.rubbleExcavator,
  legal: core.deepExcavator,
  trustBg: core.buildingDemolition,

  fleet: [
    { src: core.excavatorAerial, alt: "Ekskavatör — temel kazısı ve hafriyat" },
    { src: core.excavatorDumpTruck, alt: "Kepçe ve damper — moloz hafriyat nakliyesi" },
    { src: core.bulldozerDemolition, alt: "Dozer ile yıkım ve enkaz kaldırma" },
    { src: core.rubbleExcavator, alt: "Mini kepçe — dar alan kanal kazısı" },
  ],

  process: [
    { src: core.siteExcavator, alt: "Keşif — hafriyat sahası analizi" },
    { src: core.deepExcavator, alt: "Planlama — derin temel kazı projesi" },
    { src: core.rubbleExcavator, alt: "Uygulama — kepçe ile saha kazısı" },
    { src: core.debrisLoading, alt: "Teslim — enkaz kaldırma, temiz saha" },
  ],

  aboutSections: {
    history: core.enkazTurkey,
    mission: core.buildingDemolition,
    vision: core.excavatorAerial,
  },

  certificates: [core.excavatorAerial, core.buildingDemolition, core.debrisLoading, core.bulldozerDemolition],

  serviceAreas: [
    { src: core.excavatorAerial, alt: "Denizli ekskavatör hafriyat kazısı" },
    { src: core.deepExcavator, alt: "Honaz OSB derin temel kazısı" },
    { src: core.rubbleExcavator, alt: "Pamukkale kanal kazısı — kepçe" },
    { src: core.siteExcavator, alt: "Acıpayam hafriyat sahası" },
    { src: core.excavatorDumpTruck, alt: "Aydın moloz ve hafriyat nakliyesi" },
    { src: core.enkazTurkey, alt: "Muğla dolgu ve tesviye kazısı" },
  ],

  clients: [
    { src: core.deepExcavator, alt: "Fabrika derin temel kazısı" },
    { src: core.buildingDemolition, alt: "Yıkım sahası enkaz kaldırma" },
    { src: core.rubbleExcavator, alt: "Altyapı kanal kazısı" },
    { src: core.debrisLoading, alt: "Kontrollü yıkım ve moloz nakliyesi" },
  ],

  services: {
    "hafriyat-isleri": core.excavatorAerial,
    "yikim-calismalari": core.buildingDemolition,
    "altyapi-calismalari": core.rubbleExcavator,
    "is-makinesi-kiralama": core.excavatorDumpTruck,
    "derin-kazi": core.deepExcavator,
    "moloz-nakliyesi": core.debrisLoading,
    "kum-cakil-temini": core.siteExcavator,
    "kanal-calismalari": core.bulldozerDemolition,
    "su-tankeri-nakliyesi": core.enkazTurkey,
    "toprak-moloz-tasima": core.excavatorDumpTruck,
  },

  serviceGallery: {
    "hafriyat-isleri": [core.excavatorAerial, core.siteExcavator, smf.p1],
    "yikim-calismalari": [core.buildingDemolition, core.enkazTurkey, smf.p2],
    "altyapi-calismalari": [core.rubbleExcavator, core.deepExcavator, smf.p4],
    "is-makinesi-kiralama": [core.excavatorDumpTruck, core.excavatorAerial, core.bulldozerDemolition],
    "derin-kazi": [core.deepExcavator, core.rubbleExcavator, smf.p3],
    "moloz-nakliyesi": [core.debrisLoading, core.excavatorDumpTruck, smf.p5],
    "kum-cakil-temini": [core.siteExcavator, core.excavatorAerial, smf.p1],
    "kanal-calismalari": [core.bulldozerDemolition, core.rubbleExcavator, smf.p6],
    "su-tankeri-nakliyesi": [core.enkazTurkey, core.siteExcavator, smf.p4],
    "toprak-moloz-tasima": [core.debrisLoading, core.excavatorDumpTruck, smf.p3],
  } as Record<string, string[]>,

  projects: {
    "denizli-osb-fabrika-temel-kazi": {
      before: core.siteExcavator,
      after: core.excavatorAerial,
      gallery: [core.deepExcavator],
    },
    "merkezefendi-konut-yikim": {
      before: core.buildingDemolition,
      after: core.enkazTurkey,
      gallery: [core.rubbleExcavator],
    },
    "pamukkale-kanalizasyon-hatti": {
      before: core.bulldozerDemolition,
      after: core.rubbleExcavator,
      gallery: [core.deepExcavator],
    },
    "sanayi-sitesi-dolgu-tesviye": {
      before: core.siteExcavator,
      after: core.excavatorAerial,
      gallery: [core.deepExcavator],
    },
    "camlik-depo-yikim": {
      before: core.buildingDemolition,
      after: core.debrisLoading,
      gallery: [core.enkazTurkey],
    },
    "acipayam-yagmur-suyu": {
      before: core.bulldozerDemolition,
      after: core.rubbleExcavator,
      gallery: [core.excavatorDumpTruck],
    },
  },
} as const;

export const marqueeImages = [
  { src: core.excavatorAerial, alt: "Ekskavatör hafriyat kazısı" },
  { src: core.buildingDemolition, alt: "Yıkım sahası kepçe çalışması" },
  { src: core.excavatorDumpTruck, alt: "Damper ile moloz taşıma" },
  { src: core.deepExcavator, alt: "Derin temel kazısı" },
  { src: core.debrisLoading, alt: "Enkaz kaldırma — kepçe yükleme" },
  { src: core.rubbleExcavator, alt: "Enkaz arasında kepçe operasyonu" },
  { src: core.enkazTurkey, alt: "Yıkım sonrası saha temizliği" },
  { src: core.bulldozerDemolition, alt: "Dozer ile yıkım hafriyatı" },
];

export function getServiceImage(slug: string): string {
  return siteImages.services[slug as keyof typeof siteImages.services] ?? core.excavatorAerial;
}

export function getServiceGallery(slug: string): string[] {
  return siteImages.serviceGallery[slug] ?? [getServiceImage(slug), core.excavatorAerial, core.rubbleExcavator];
}

type ProjectImages = { before: string; after: string; gallery: readonly string[] };

export function getProjectImages(slug: string): ProjectImages {
  const project = siteImages.projects[slug as keyof typeof siteImages.projects];
  if (project) return project;
  const first = Object.values(siteImages.projects)[0];
  return first ?? { before: core.siteExcavator, after: core.excavatorAerial, gallery: [core.rubbleExcavator] };
}

export function getProjectImagesByIndex(index: number): { before: string; after: string } {
  const slugs = Object.keys(siteImages.projects);
  const slug = slugs[index % slugs.length] ?? slugs[0];
  const imgs = getProjectImages(slug);
  return { before: imgs.before, after: imgs.after };
}

export function getFleetImage(index: number) {
  return siteImages.fleet[index] ?? siteImages.fleet[0];
}

export function getTeamPhoto(index: number) {
  const member = teamMembers[index] ?? teamMembers[0];
  return { src: member.photo, alt: `${member.name} — ${member.role}` };
}

export function getCertificateImage(index: number): string {
  return siteImages.certificates[index % siteImages.certificates.length] ?? siteImages.certificates[0];
}

export function getServiceAreaImage(index: number) {
  return siteImages.serviceAreas[index] ?? siteImages.serviceAreas[0];
}

export function getClientImage(index: number) {
  return siteImages.clients[index] ?? siteImages.clients[0];
}

export const fleetImages = siteImages.fleet.map((f) => f.src);
export const teamPhotos = teamMembers.map((m) => m.photo);
