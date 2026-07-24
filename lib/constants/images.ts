/** SMF Hafriyat — doğrulanmış saha fotoğrafları (Denizli operasyonları) */
import { teamMembers } from "@/lib/constants/content";

const h = (n: number) => `/images/hafriyat/haf-${String(n).padStart(3, "0")}.jpg`;

/** Gerçek SMF saha fotoğrafları — markalı filo ve operasyon görselleri */
const real = {
  kepceBw: "/images/smf/real/smf-kepce-bw.jpg",
  damperLogo: "/images/smf/real/smf-saha-01.png",
  kaziToz: "/images/smf/real/smf-saha-02.png",
  havadanFilo: "/images/smf/real/smf-saha-03.png",
  yuklemeDamper: "/images/smf/real/smf-saha-04.png",
  derinSaha: "/images/smf/real/smf-saha-05.png",
} as const;

const realAlt = {
  kepceBw: "Siyah beyaz ekskavatör kepçe detay — SMF Hafriyat hafriyat operasyonu, Denizli",
  damperLogo: "SMF Hafriyat damper kamyonu ve ekskavatör — hafriyat toprağı taşıma, Denizli",
  kaziToz: "SMF Hafriyat ekskavatör ile kazı operasyonu — saha tozu, Denizli",
  havadanFilo: "SMF Hafriyat filo operasyonu — havadan ekskavatör ve damper kamyonları, Denizli",
  yuklemeDamper: "SMF Hafriyat ekskavatör ile damper yükleme — hafriyat sahası, Denizli",
  derinSaha: "SMF Hafriyat derin kazı sahası — ekskavatör ve damper, Denizli inşaat projesi",
} as const;

/** Stok yedek görseller — gerçek fotoğrafların yetmediği slotlar için */
const core = {
  excavatorAerial: real.havadanFilo,
  excavatorDumpTruck: real.yuklemeDamper,
  bulldozerDemolition: h(3),
  siteExcavator: real.kaziToz,
  enkazTurkey: h(5),
  buildingDemolition: h(6),
  rubbleExcavator: h(7),
  deepExcavator: real.derinSaha,
  debrisLoading: real.damperLogo,
} as const;

const smf = {
  p1: real.havadanFilo,
  p2: real.kaziToz,
  p3: real.derinSaha,
  p4: real.yuklemeDamper,
  p5: real.damperLogo,
  p6: real.derinSaha,
} as const;

export const siteImages = {
  hero: real.kepceBw,
  heroAlt: realAlt.kepceBw,
  og: real.kepceBw,
  about: real.derinSaha,
  contact: real.damperLogo,
  fleetHero: real.havadanFilo,
  areasHero: real.kaziToz,
  faqSide: real.yuklemeDamper,
  legal: real.kaziToz,
  notFound: real.kaziToz,
  trustBg: real.kaziToz,

  fleet: [
    { src: real.havadanFilo, alt: realAlt.havadanFilo },
    { src: real.yuklemeDamper, alt: realAlt.yuklemeDamper },
    { src: real.damperLogo, alt: realAlt.damperLogo },
    { src: real.kaziToz, alt: realAlt.kaziToz },
    { src: real.derinSaha, alt: realAlt.derinSaha },
    { src: core.bulldozerDemolition, alt: "Dozer — dekapaj ve saha tesviye" },
    { src: core.rubbleExcavator, alt: "Dar alan kazısı — kanal operasyonu" },
    { src: core.buildingDemolition, alt: "Kontrollü yıkım — enkaz kaldırma sahası" },
  ],

  process: [
    { src: real.kaziToz, alt: "Keşif — SMF hafriyat sahası değerlendirme" },
    { src: real.havadanFilo, alt: "Planlama — SMF filo ve saha organizasyonu" },
    { src: real.yuklemeDamper, alt: "Uygulama — ekskavatör ve damper saha operasyonu" },
    { src: real.derinSaha, alt: "Teslim — tesviye ve saha kapanışı" },
  ],

  aboutSections: {
    history: real.kaziToz,
    mission: real.yuklemeDamper,
    vision: real.havadanFilo,
  },

  certificates: [real.havadanFilo, real.derinSaha, real.damperLogo, real.yuklemeDamper],

  serviceAreas: [
    { src: real.havadanFilo, alt: "Denizli ekskavatör hafriyat kazısı — SMF saha" },
    { src: real.derinSaha, alt: "Honaz OSB derin temel kazısı — SMF operasyonu" },
    { src: real.yuklemeDamper, alt: "Pamukkale hafriyat — kepçe ve damper" },
    { src: real.kaziToz, alt: "Acıpayam hafriyat sahası — SMF filo" },
    { src: real.damperLogo, alt: "Aydın moloz ve hafriyat nakliyesi — SMF damper" },
    { src: real.derinSaha, alt: "Muğla dolgu ve tesviye — SMF saha ekibi" },
  ],

  clients: [
    { src: real.derinSaha, alt: "Fabrika derin temel kazısı — SMF referans" },
    { src: real.kaziToz, alt: "Hafriyat sahası operasyonu — SMF" },
    { src: real.yuklemeDamper, alt: "Moloz yükleme ve nakliye — SMF filo" },
    { src: real.damperLogo, alt: "Hafriyat toprağı taşıma — SMF damper" },
  ],

  services: {
    "hafriyat-isleri": real.kaziToz,
    "yikim-calismalari": core.buildingDemolition,
    "altyapi-calismalari": core.rubbleExcavator,
    "is-makinesi-kiralama": real.havadanFilo,
    "derin-kazi": real.derinSaha,
    "moloz-nakliyesi": real.damperLogo,
    "kum-cakil-temini": real.yuklemeDamper,
    "kanal-calismalari": real.kaziToz,
    "su-tankeri-nakliyesi": core.enkazTurkey,
    "toprak-moloz-tasima": real.yuklemeDamper,
  },

  serviceGallery: {
    "hafriyat-isleri": [real.kaziToz, real.havadanFilo, real.yuklemeDamper],
    "yikim-calismalari": [core.buildingDemolition, real.kaziToz, smf.p2],
    "altyapi-calismalari": [real.kaziToz, core.rubbleExcavator, smf.p4],
    "is-makinesi-kiralama": [real.havadanFilo, real.yuklemeDamper, real.damperLogo],
    "derin-kazi": [real.derinSaha, real.kaziToz, smf.p3],
    "moloz-nakliyesi": [real.damperLogo, real.yuklemeDamper, smf.p5],
    "kum-cakil-temini": [real.yuklemeDamper, real.havadanFilo, smf.p1],
    "kanal-calismalari": [real.kaziToz, core.rubbleExcavator, smf.p6],
    "su-tankeri-nakliyesi": [real.kaziToz, core.enkazTurkey, smf.p4],
    "toprak-moloz-tasima": [real.yuklemeDamper, real.damperLogo, smf.p3],
  } as Record<string, string[]>,

  projects: {
    "denizli-osb-fabrika-temel-kazi": {
      before: core.deepExcavator,
      after: real.derinSaha,
      gallery: [real.havadanFilo],
    },
    "merkezefendi-konut-yikim": {
      before: core.buildingDemolition,
      after: real.kaziToz,
      gallery: [real.damperLogo],
    },
    "pamukkale-kanalizasyon-hatti": {
      before: core.rubbleExcavator,
      after: real.kaziToz,
      gallery: [real.yuklemeDamper],
    },
    "sanayi-sitesi-dolgu-tesviye": {
      before: core.deepExcavator,
      after: real.derinSaha,
      gallery: [real.havadanFilo],
    },
    "camlik-depo-yikim": {
      before: core.buildingDemolition,
      after: real.kaziToz,
      gallery: [real.damperLogo],
    },
    "acipayam-yagmur-suyu": {
      before: real.kaziToz,
      after: real.yuklemeDamper,
      gallery: [real.kaziToz],
    },
  },
} as const;

export const showcaseSlides = [
  {
    src: real.havadanFilo,
    alt: realAlt.havadanFilo,
    tag: "Hafriyat Operasyonları",
    title: "Temel kazısı ve büyük metraj hafriyat",
    subtitle: "Caterpillar 320 ile günlük 400–600 m³ kapasite — dekapaj, dolgu, tesviye.",
  },
  {
    src: real.yuklemeDamper,
    alt: realAlt.yuklemeDamper,
    tag: "Kepçe + Damper",
    title: "Yükleme ve nakliye aynı saha ekibi",
    subtitle: "Kepçe yükler, damper taşır — taşeron yok, tek sözleşme.",
  },
  {
    src: real.derinSaha,
    alt: realAlt.derinSaha,
    tag: "Derin Kazı",
    title: "Fabrika temeli ve bodrum kazısı",
    subtitle: "Komatsu PC300 ile 8 m+ derinlik — iksa koordinasyonu, günlük saha tutanağı.",
  },
  {
    src: real.damperLogo,
    alt: realAlt.damperLogo,
    tag: "Moloz Nakliyesi",
    title: "Belgeli hafriyat ve enkaz taşıma",
    subtitle: "Tartım fişi, irsaliye ve mevzuata uygun damper nakliyesi.",
  },
  {
    src: real.kaziToz,
    alt: realAlt.kaziToz,
    tag: "Saha Operasyonu",
    title: "Denizli'de aktif kazı sahası",
    subtitle: "1998'den beri aynı filo — sertifikalı operatör, sigortalı makine.",
  },
  {
    src: real.havadanFilo,
    alt: realAlt.havadanFilo,
    tag: "SMF Filosu",
    title: "12 araçlık iş makinesi parkı",
    subtitle: "Ekskavatör, damper, dozer — Denizli merkezli sevkiyat.",
  },
] as const;

export type PromoSlide = {
  src: string;
  alt: string;
  tag: string;
  title: string;
  subtitle: string;
};

export const midPagePromoSlides: PromoSlide[] = [
  {
    src: real.havadanFilo,
    alt: realAlt.havadanFilo,
    tag: "Kendi Filo",
    title: "Operatörlü ekskavatör, dozer ve damper",
    subtitle: "12 araçlık park — taşeron yok, kepçe ve damper aynı saha ekibinde.",
  },
  {
    src: real.damperLogo,
    alt: realAlt.damperLogo,
    tag: "Belgeli Süreç",
    title: "Tartım fişi, irsaliye, teslim tutanağı",
    subtitle: "Moloz nakliyesi mevzuata uygun — yazılı metraj, resmi sözleşme.",
  },
  {
    src: real.kaziToz,
    alt: realAlt.kaziToz,
    tag: "Denizli Saha Ekibi",
    title: "28 yıl, 900+ proje, 20–30 kişilik ekip",
    subtitle: "Ramizoğlu ailesi liderliğinde Denizli ve Ege Bölgesi'nde hafriyat.",
  },
];

export const ctaPromoSlides: PromoSlide[] = [
  {
    src: real.havadanFilo,
    alt: realAlt.havadanFilo,
    tag: "Keşif Talebi",
    title: "Parseliniz için keşif planlayın",
    subtitle: "Denizli ve Ege Bölgesi'nde aynı gün geri dönüş — yazılı metraj, resmi sözleşme.",
  },
  {
    src: real.yuklemeDamper,
    alt: realAlt.yuklemeDamper,
    tag: "Metraj ve Teklif",
    title: "Sahaya inmeden hacim hesabı",
    subtitle: "Keşif sonrası makine ihtiyacı ve süre kalemleri yazılı teklifte.",
  },
  {
    src: real.derinSaha,
    alt: realAlt.derinSaha,
    tag: "0533 353 22 53",
    title: "Derin kazı ve büyük metraj işler",
    subtitle: "Telefon veya WhatsApp — Pzt–Cmt 08:00–18:00, acil sevkiyat mümkün.",
  },
];

/** Ana sayfa hizmet vitrini — gerçek SMF saha fotoğrafları */
export const servicesVisualPanels = [
  {
    src: real.yuklemeDamper,
    alt: realAlt.yuklemeDamper,
    title: "Hafriyat & Temel Kazısı",
    caption: "Dekapaj, dolgu ve büyük metraj saha çalışmaları",
  },
  {
    src: real.kaziToz,
    alt: realAlt.kaziToz,
    title: "Saha Operasyonu",
    caption: "SMF filo ile aktif kazı ve yükleme",
  },
  {
    src: real.derinSaha,
    alt: realAlt.derinSaha,
    title: "Derin Kazı & Filo",
    caption: "Derin temel ve operatörlü makine koordinasyonu",
  },
] as const;

export const whyUsSpotlightSlides: PromoSlide[] = [
  {
    src: real.yuklemeDamper,
    alt: realAlt.yuklemeDamper,
    tag: "Saha Operasyonu",
    title: "Kendi filomuz, kendi operatörlerimiz",
    subtitle: "Taşeron yok — keşiften teslime tek ekip, doğrudan saha yönetimi.",
  },
  {
    src: real.havadanFilo,
    alt: realAlt.havadanFilo,
    tag: "Denizli Merkez",
    title: "1998'den beri aynı filo disiplini",
    subtitle: "Merkezefendi merkezli planlama, yazılı metraj, teslim tutanağı.",
  },
  {
    src: real.derinSaha,
    alt: realAlt.derinSaha,
    tag: "İSG Standardı",
    title: "Sertifikalı operatör, sıfır kaza hedefi",
    subtitle: "Ruhsatlı, sigortalı makine — İSG ekipmanı zorunlu.",
  },
];

export const actionSpotlights = [
  {
    src: real.kaziToz,
    alt: realAlt.kaziToz,
    tag: "Hizmetler",
    title: "Hafriyat, yıkım, kazı — 10 kategori",
    subtitle: "Temel kazısından moloz nakliyesine kadar.",
    href: "/hizmetler",
    ctaLabel: "Hizmetleri gör",
  },
  {
    src: real.havadanFilo,
    alt: realAlt.havadanFilo,
    tag: "Filo",
    title: "12 araçlık sigortalı makine parkı",
    subtitle: "Operatörlü kiralama ve proje bazlı sevkiyat.",
    href: "/filo",
    ctaLabel: "Filoyu incele",
  },
  {
    src: real.derinSaha,
    alt: realAlt.derinSaha,
    tag: "Referanslar",
    title: "900+ tamamlanan proje",
    subtitle: "Fabrika temeli, yıkım, kanal kazısı referansları.",
    href: "/projeler",
    ctaLabel: "Projeleri gör",
  },
] as const;

export const heroBanners = [
  {
    src: real.kepceBw,
    alt: realAlt.kepceBw,
    tag: "Denizli Hafriyat",
    slogan: "Denizli'nin 28 yıllık hafriyat ve yıkım firması",
    highlight: "Yeni Mah. Menderes Bulvarı merkezli — temel kazısı, yıkım, derin kazı",
  },
  {
    src: real.havadanFilo,
    alt: realAlt.havadanFilo,
    tag: "Kendi Filo",
    slogan: "Kepçe, damper, dozer — tek ekip, tek sözleşme",
    highlight: "12 araçlık SMF filosu — Denizli sahasında operatörlü sevkiyat",
  },
  {
    src: real.derinSaha,
    alt: realAlt.derinSaha,
    tag: "Derin Kazı",
    slogan: "8 metreye kadar derin temel kazısı",
    highlight: "Komatsu PC300 ile fabrika ve bodrum kazısı — iksa koordinasyonu",
  },
  {
    src: real.damperLogo,
    alt: realAlt.damperLogo,
    tag: "Moloz Nakliyesi",
    slogan: "Belgeli hafriyat toprağı ve moloz taşıma",
    highlight: "Damper filosu ile tartım fişi ve irsaliye — mevzuata uygun nakliye",
  },
  {
    src: real.kaziToz,
    alt: realAlt.kaziToz,
    tag: "1998'den Beri",
    slogan: "Ramizoğlu ailesi liderliğinde 900+ proje",
    highlight: "Denizli merkezli — Ege Bölgesi'nde taşeronsuz hafriyat",
  },
] as const;

/** Ana sayfa hero — siyah beyaz kepçe + havadan SMF filo operasyonu */
export const homeHeroBanners = [heroBanners[0], heroBanners[1]] as const;

export const marqueeImages = [
  { src: real.havadanFilo, alt: "SMF Hafriyat havadan filo operasyonu" },
  { src: real.yuklemeDamper, alt: "Ekskavatör damper yükleme — SMF saha" },
  { src: real.damperLogo, alt: "SMF damper kamyonu — hafriyat taşıma" },
  { src: real.derinSaha, alt: "Derin kazı sahası — SMF Hafriyat" },
  { src: real.kaziToz, alt: "Aktif kazı operasyonu — SMF Denizli" },
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
