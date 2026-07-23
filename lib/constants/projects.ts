export type ProjectCategory = "hafriyat" | "yikim" | "altyapi";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  location: string;
  completedDate: string;
  beforeImage: string;
  afterImage: string;
  galleryImages: string[];
};

export const projectCategories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "Tümü" },
  { value: "hafriyat", label: "Hafriyat" },
  { value: "yikim", label: "Yıkım" },
  { value: "altyapi", label: "Altyapı" },
];

export const projects: Project[] = [
  {
    slug: "denizli-osb-fabrika-temel-kazi",
    title: "Denizli OSB Fabrika Temel Kazısı",
    category: "hafriyat",
    description:
      "12.000 m² fabrika sahasında 4,5 metre derinlikte derin temel kazısı — ekskavatör filomuzla 18 günde tesviye ve dolgu dengesi kuruldu.",
    location: "Honaz, Denizli",
    completedDate: "2025-11",
    beforeImage: "/images/hafriyat/haf-008.jpg",
    afterImage: "/images/smf/real/smf-saha-05.png",
    galleryImages: ["/images/smf/real/smf-saha-05.png"],
  },
  {
    slug: "merkezefendi-konut-yikim",
    title: "Merkezefendi Konut Yıkımı",
    category: "yikim",
    description:
      "5 katlı betonarme yapının kontrollü yıkımı; kepçe ile enkaz ayrıştırma ve damper nakliyesi — tek sözleşme, kusursuz teslim.",
    location: "Merkezefendi, Denizli",
    completedDate: "2025-09",
    beforeImage: "/images/hafriyat/haf-006.jpg",
    afterImage: "/images/smf/real/smf-saha-02.png",
    galleryImages: ["/images/smf/real/smf-saha-01.png"],
  },
  {
    slug: "pamukkale-kanalizasyon-hatti",
    title: "Pamukkale Kanalizasyon Hattı",
    category: "altyapi",
    description:
      "2,4 km kanalizasyon hattı ekskavatör kazısı, rögar bağlantıları ve geri dolgu — belediye denetiminde sorunsuz teslim.",
    location: "Pamukkale, Denizli",
    completedDate: "2025-06",
    beforeImage: "/images/hafriyat/haf-004.jpg",
    afterImage: "/images/smf/real/smf-saha-02.png",
    galleryImages: ["/images/smf/real/smf-saha-04.png"],
  },
  {
    slug: "sanayi-sitesi-dolgu-tesviye",
    title: "Sanayi Sitesi Dolgu ve Tesviye",
    category: "hafriyat",
    description:
      "8.500 m² sanayi parselinde ekskavatör kazı-dolgu dengesi; kepçe tesviye ile ±3 cm tolerans — milimetrik hassasiyet.",
    location: "Organize Sanayi, Denizli",
    completedDate: "2025-03",
    beforeImage: "/images/hafriyat/haf-008.jpg",
    afterImage: "/images/smf/real/smf-saha-05.png",
    galleryImages: ["/images/smf/real/smf-saha-03.png"],
  },
  {
    slug: "camlik-depo-yikim",
    title: "Çamlık Depo Yıkımı",
    category: "yikim",
    description:
      "10.000 m² kapalı depo alanının dozer ve ekskavatör ile kontrollü yıkımı; enkaz kaldırma çevredeki tesislere dokunulmadan tamamlandı.",
    location: "Çamlık, Denizli",
    completedDate: "2024-12",
    beforeImage: "/images/hafriyat/haf-003.jpg",
    afterImage: "/images/smf/real/smf-saha-02.png",
    galleryImages: ["/images/smf/real/smf-saha-01.png"],
  },
  {
    slug: "acipayam-yagmur-suyu",
    title: "Acıpayam Yağmur Suyu Şebekesi",
    category: "altyapi",
    description:
      "Acıpayam ilçesinde mini ekskavatör ile 1,8 km yağmur suyu kanal kazısı ve baca bağlantıları — altyapının sessiz gücü.",
    location: "Acıpayam, Denizli",
    completedDate: "2024-08",
    beforeImage: "/images/smf/real/smf-saha-02.png",
    afterImage: "/images/smf/real/smf-saha-04.png",
    galleryImages: ["/images/smf/real/smf-saha-02.png"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
