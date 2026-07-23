/** SMF Hafriyat görsel serisi — Higgsfield ile üretilmiş, Denizli/Ege tutarlı saha fotoğrafları */
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
  notFound: core.buildingDemolition,
  trustBg: core.buildingDemolition,

  fleet: [
    { src: core.excavatorDumpTruck, alt: "Ekskavatör ve damper — temel kazısı operasyonu" },
    { src: core.siteExcavator, alt: "Saha iş makinesi — dolgu ve tesviye" },
    { src: core.debrisLoading, alt: "Kepçe ile yükleme — moloz ve hafriyat nakliyesi" },
    { src: core.rubbleExcavator, alt: "Dar alan kazısı — kanal ve mini ekskavatör operasyonu" },
    { src: core.deepExcavator, alt: "Derin temel kazısı — fabrika ve sanayi sahası" },
    { src: core.bulldozerDemolition, alt: "Dozer — dekapaj ve saha tesviye" },
    { src: core.excavatorAerial, alt: "Havadan ekskavatör operasyonu — geniş saha kazısı" },
    { src: core.buildingDemolition, alt: "Kontrollü yıkım — enkaz kaldırma sahası" },
  ],

  process: [
    { src: h(11), alt: "Keşif — hafriyat sahası genel değerlendirme" },
    { src: h(10), alt: "Planlama — iş makinesi ve saha organizasyonu" },
    { src: h(2), alt: "Uygulama — ekskavatör ve damper saha operasyonu" },
    { src: h(16), alt: "Teslim — loder ile tesviye ve saha kapanışı" },
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
    "hafriyat-isleri": h(2),
    "yikim-calismalari": h(6),
    "altyapi-calismalari": h(4),
    "is-makinesi-kiralama": h(10),
    "derin-kazi": h(8),
    "moloz-nakliyesi": h(14),
    "kum-cakil-temini": h(11),
    "kanal-calismalari": h(15),
    "su-tankeri-nakliyesi": h(18),
    "toprak-moloz-tasima": h(12),
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
      before: h(8),
      after: h(16),
      gallery: [h(2)],
    },
    "merkezefendi-konut-yikim": {
      before: h(6),
      after: h(11),
      gallery: [h(9)],
    },
    "pamukkale-kanalizasyon-hatti": {
      before: h(4),
      after: h(10),
      gallery: [h(15)],
    },
    "sanayi-sitesi-dolgu-tesviye": {
      before: h(8),
      after: h(17),
      gallery: [h(2)],
    },
    "camlik-depo-yikim": {
      before: h(3),
      after: h(11),
      gallery: [h(14)],
    },
    "acipayam-yagmur-suyu": {
      before: h(15),
      after: h(10),
      gallery: [h(4)],
    },
  },
} as const;

export const showcaseSlides = [
  {
    src: core.excavatorAerial,
    alt: "Ekskavatör ile havadan hafriyat kazısı — SMF Hafriyat",
    tag: "Hafriyat Operasyonları",
    title: "Stratejik temel kazısı ve saha hafriyatı",
    subtitle: "Dekapaj, dolgu ve büyük metrajlı projelerde kurumsal filo disiplini ve ölçülebilir performans.",
  },
  {
    src: core.buildingDemolition,
    alt: "Kontrollü bina yıkımı — ekskavatör enkaz kaldırma",
    tag: "Kontrollü Yıkım",
    title: "Mühendis onaylı yıkım ve enkaz yönetimi",
    subtitle: "Planlı yıkım, ayrıştırma ve belgeli damper nakliyesi — kurumsal İSG standartlarıyla.",
  },
  {
    src: core.deepExcavator,
    alt: "Derin temel kazısı — ekskavatör hafriyat",
    tag: "Derin Kazı",
    title: "Derin temelli altyapı operasyonları",
    subtitle: "Bodrum, otopark ve endüstriyel temellerde iksa destekli, güvenli hafriyat çözümleri.",
  },
  {
    src: core.excavatorDumpTruck,
    alt: "Ekskavatör moloz yükleme — damper nakliyesi",
    tag: "Lojistik Entegrasyon",
    title: "Entegre yükleme ve belgeli nakliye",
    subtitle: "Hafriyat molozu ve yıkım enkazında şeffaf tartım, irsaliye ve mevzuata uygun taşıma.",
  },
  {
    src: core.rubbleExcavator,
    alt: "Enkaz arasında kepçe operasyonu — kanal kazısı",
    tag: "Altyapı",
    title: "Altyapı hatlarında kurumsal saha gücü",
    subtitle: "Kanalizasyon, yağmursuyu ve isale projelerinde ekskavatör ile hassas kazı operasyonları.",
  },
  {
    src: core.bulldozerDemolition,
    alt: "Dozer ile yıkım sahası tesviye — SMF Hafriyat",
    tag: "Filo Kapasitesi",
    title: "Çok disiplinli iş makinesi filosu",
    subtitle: "Dar alan ve geniş metraj projelerinde operatörlü dozer, loder ve mini kepçe desteği.",
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
    src: core.bulldozerDemolition,
    alt: "Dozer ile yıkım sahası — SMF Hafriyat filo",
    tag: "Kurumsal Filo",
    title: "Operatörlü ekskavatör, dozer ve damper — tek çatı",
    subtitle: "Taşeron modeli yerine kendi filomuzla hafriyat, yıkım ve enkaz yönetiminde kurumsal güvence.",
  },
  {
    src: core.debrisLoading,
    alt: "Enkaz yükleme kepçe — moloz nakliyesi",
    tag: "Belgeli Süreç",
    title: "Enkaz yönetiminde şeffaflık ve mevzuat uyumu",
    subtitle: "Yıkım ve hafriyat molozunda tartım fişi, irsaliye ve resmi sözleşme ile kurumsal teslim.",
  },
  {
    src: core.rubbleExcavator,
    alt: "Kanal kazısı ekskavatör — altyapı hafriyat",
    tag: "Altyapı Ortaklığı",
    title: "Altyapı projelerinde stratejik saha ortağı",
    subtitle: "Kanal, isale ve yağmursuyu hatlarında mini kepçe ve büyük ekskavatör kapasitesi.",
  },
];

export const ctaPromoSlides: PromoSlide[] = [
  {
    src: core.excavatorAerial,
    alt: "Havadan hafriyat kazısı — SMF Hafriyat teklif",
    tag: "Stratejik Ortaklık",
    title: "Projeniz için kurumsal keşif planlayın",
    subtitle: "Denizli ve Ege Bölgesi'nde aynı gün geri dönüş — şeffaf metraj, resmi sözleşme.",
  },
  {
    src: core.buildingDemolition,
    alt: "Kontrollü yıkım sahası — SMF Hafriyat",
    tag: "Keşif Talep Edin",
    title: "Sahaya inmeden net metraj, net plan",
    subtitle: "Keşif sonrası ekskavatör ihtiyacınızı mühendis onaylı süreçle planlıyoruz.",
  },
  {
    src: core.deepExcavator,
    alt: "Derin temel kazısı — SMF Hafriyat",
    tag: "0533 353 22 53",
    title: "Büyük metraj ve derin kazı projelerinde yanınızdayız",
    subtitle: "Telefon veya WhatsApp ile hızlı koordinasyon — Pzt–Cmt 08:00–18:00.",
  },
];

/** Ana sayfa hizmet vitrini — 3 doğrulanmış saha görseli (haf-001…009) */
export const servicesVisualPanels = [
  {
    src: h(2),
    alt: "Ekskavatör ve damper — hafriyat saha operasyonu",
    title: "Hafriyat & Temel Kazısı",
    caption: "Dekapaj, dolgu ve büyük metraj saha çalışmaları",
  },
  {
    src: h(6),
    alt: "Bina yıkımı ekskavatör — kontrollü yıkım sahası",
    title: "Yıkım & Enkaz",
    caption: "Kontrollü yıkım ve saha temizliği",
  },
  {
    src: h(8),
    alt: "Derin temel kazısı — SMF Hafriyat",
    title: "Derin Kazı & Filo",
    caption: "Derin temel ve operatörlü makine koordinasyonu",
  },
] as const;

export const whyUsSpotlightSlides: PromoSlide[] = [
  {
    src: h(2),
    alt: "Ekskavatör ve damper — SMF Hafriyat saha operasyonu",
    tag: "Saha Operasyonu",
    title: "Kendi filomuz, kendi operatörlerimiz",
    subtitle: "Taşeron yok — keşiften teslime tek kurumsal ekip ve doğrudan saha yönetimi.",
  },
  {
    src: h(11),
    alt: "Hafriyat sahası genel görünüm — SMF Hafriyat Denizli",
    tag: "Denizli Merkez",
    title: "1998'den bu yana aynı saha disiplini",
    subtitle: "Merkezefendi merkezli planlama, belgeli süreç ve şeffaf metraj yaklaşımı.",
  },
  {
    src: h(19),
    alt: "Ekskavatör kepçe detay — profesyonel saha uygulaması",
    tag: "Kurumsal Standart",
    title: "İSG ve mevzuat uyumu vazgeçilmez standart",
    subtitle: "Ruhsata uygun, emniyet odaklı hafriyat ve yıkım operasyonları.",
  },
];

export const actionSpotlights = [
  {
    src: core.excavatorAerial,
    alt: "Hafriyat kazısı ekskavatör — SMF hizmetler",
    tag: "Hizmet Portföyü",
    title: "Entegre hafriyat ve yıkım çözümleri",
    subtitle: "10 kategoride kurumsal saha operasyonları.",
    href: "/hizmetler",
    ctaLabel: "Portföyü incele",
  },
  {
    src: core.bulldozerDemolition,
    alt: "Dozer filo — SMF ekipman",
    tag: "Kurumsal Filo",
    title: "Operasyonel güvence sunan makine parkı",
    subtitle: "Operatörlü kiralama ve proje bazlı saha desteği.",
    href: "/filo",
    ctaLabel: "Filoyu keşfet",
  },
  {
    src: core.debrisLoading,
    alt: "Enkaz kaldırma sahası — SMF projeler",
    tag: "Referanslar",
    title: "900+ tamamlanan kurumsal proje",
    subtitle: "Öncesi/sonrası ile kanıtlanmış saha performansı.",
    href: "/projeler",
    ctaLabel: "Referansları gör",
  },
] as const;

export const heroBanners = [
  {
    src: core.excavatorAerial,
    alt: "Denizli hafriyat ekskavatör kazısı — SMF Hafriyat",
    tag: "Denizli Hafriyat",
    slogan: "Denizli'nin güvenilir hafriyat ve yıkım markası",
    highlight: "Yeni Mah. Menderes Bulvarı merkezli — ekskavatör ile temel kazısı, yıkım ve derin kazı",
  },
  {
    src: core.buildingDemolition,
    alt: "Kontrollü bina yıkımı — SMF Hafriyat enkaz kaldırma",
    tag: "Kontrollü Yıkım",
    slogan: "Denizli hafriyat, kazı ve yıkımda kurumsal saha ekibi",
    highlight: "Mühendis onaylı süreç — enkaz kaldırma ve kurumsal İSG standartları",
  },
  {
    src: core.deepExcavator,
    alt: "Derin temel kazısı — ekskavatör hafriyat sahası",
    tag: "Derin Kazı",
    slogan: "Derin temellerde operasyonel mükemmellik",
    highlight: "Bodrum, otopark ve endüstriyel temellerde iksa destekli kurumsal hafriyat",
  },
  {
    src: core.excavatorDumpTruck,
    alt: "Ekskavatör ve damper — moloz nakliyesi SMF Hafriyat",
    tag: "Kurumsal Filo",
    slogan: "Entegre filo, kesintisiz operasyon, tek sorumlu ekip",
    highlight: "Taşeronsuz model — operatörlü ekskavatör, loder ve damper filosu",
  },
  {
    src: core.enkazTurkey,
    alt: "Yıkım sonrası enkaz kaldırma — SMF Hafriyat Türkiye sahası",
    tag: "1998'den Beri",
    slogan: "28 yıllık kurumsal tecrübe, 900+ referans proje",
    highlight: "Denizli merkezli — Ege Bölgesi'nde stratejik saha ortağı",
  },
] as const;

/** Ana sayfa hero — en fazla 2 slide */
export const homeHeroBanners = heroBanners.slice(0, 2);

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
