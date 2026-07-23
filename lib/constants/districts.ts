/** İlçe / bölge SEO landing sayfaları */
export type DistrictPage = {
  slug: string;
  name: string;
  region: string;
  districts: string;
  shortDescription: string;
  intro: string;
  paragraphs: readonly string[];
  services: readonly string[];
  keywords: readonly string[];
};

export const districtPages: DistrictPage[] = [
  {
    slug: "merkezefendi",
    name: "Merkezefendi",
    region: "Denizli",
    districts: "Yeni Mahalle, Kınıklı, Servergazi, Adalet",
    shortDescription:
      "Merkezefendi hafriyat ve kazı hizmeti — SMF Hafriyat merkez ofisi Menderes Bulvarı'nda; aynı gün keşif ve operatörlü ekskavatör filosu.",
    intro:
      "Merkezefendi, SMF Hafriyat'ın merkez ofisinin bulunduğu ilçedir. Denizli hafriyat, Denizli kazı ve yıkım taleplerinde en hızlı saha koordinasyonunu burada sağlıyoruz.",
    paragraphs: [
      "Konut temel kazısı, ticari yapı hafriyatı, kontrollü yıkım ve enkaz kaldırma projelerinde kendi ekskavatör, loder ve damper filomuzla taşeronsuz çalışıyoruz. Keşif sonrası net metraj, resmi sözleşme ve belgeli teslim süreci uygulanır.",
      "Yeni Mahalle ve çevresindeki inşaat firmaları, müteahhitler ve sanayi yatırımları için derin temel kazısı, kanal hattı ve tesviye işlerinde referans saha deneyimimiz vardır.",
    ],
    services: ["Hafriyat işleri", "Temel kazısı", "Kontrollü yıkım", "Moloz nakliyesi", "Derin kazı"],
    keywords: ["merkezefendi hafriyat", "merkezefendi kazı", "denizli merkezefendi hafriyat", "denizli hafriyat"],
  },
  {
    slug: "pamukkale",
    name: "Pamukkale",
    region: "Denizli",
    districts: "Pamukkale, Gözler, Karahayıt, Akköy",
    shortDescription:
      "Pamukkale hafriyat ve kazı — konut temel kazısı, kanalizasyon hattı ve altyapı kazı projelerinde SMF Hafriyat.",
    intro:
      "Pamukkale ilçesinde konut, turizm ve altyapı projelerinde ekskavatör kazı, hafriyat ve enkaz kaldırma hizmeti sunuyoruz.",
    paragraphs: [
      "Kanalizasyon, yağmur suyu ve isale hatları kazısında dar alan ve geniş metrajlı sahalar için mini ekskavatör ve 20 ton sınıfı kepçe filomuzu planlıyoruz.",
      "Müteahhit ve inşaat firmaları için temel kazısı, dolgu-tecrit ve tesviye işlerinde keşif, metraj tutanağı ve resmi süreç yönetimi sağlıyoruz.",
    ],
    services: ["Altyapı kazısı", "Kanal çalışmaları", "Konut temel kazısı", "Hafriyat işleri"],
    keywords: ["pamukkale hafriyat", "pamukkale kazı", "denizli pamukkale hafriyat"],
  },
  {
    slug: "honaz",
    name: "Honaz",
    region: "Denizli",
    districts: "Honaz OSB, Kaklık, Honaz Merkez",
    shortDescription:
      "Honaz OSB ve sanayi sahalarında derin temel kazısı, fabrika hafriyatı ve tesviye — SMF Hafriyat Denizli.",
    intro:
      "Honaz organize sanayi ve fabrika yatırımlarında derin kazı, geniş metrajlı hafriyat ve sanayi tesviye projelerinde uzman saha ekibimiz görev alır.",
    paragraphs: [
      "Fabrika temeli, depo ve üretim tesisi projelerinde derin kazı ekskavatör filomuz ve operatör kadromuzla planlı operasyon yürütüyoruz.",
      "OSB projelerinde İSG, ruhsat koordinasyonu ve belgeli moloz nakliyesi ile kurumsal süreç standartlarımızı koruyoruz.",
    ],
    services: ["Derin kazı", "Sanayi hafriyatı", "Dolgu ve tesviye", "Moloz nakliyesi"],
    keywords: ["honaz hafriyat", "honaz osb kazı", "denizli honaz hafriyat"],
  },
  {
    slug: "saraykoy",
    name: "Sarayköy",
    region: "Denizli",
    districts: "Sarayköy, Buldan, Babadağ",
    shortDescription:
      "Sarayköy ve çevresinde köprü altı kazı, dere ıslah hafriyatı ve kırsal altyapı kazı projeleri.",
    intro:
      "Sarayköy, Buldan ve Babadağ hattında altyapı, dere ıslah ve kırsal hafriyat kazı projelerinde SMF Hafriyat saha hizmeti verir.",
    paragraphs: [
      "Köprü altı kazı, dere yatağı düzenleme ve yağmur suyu hattı projelerinde ekskavatör ve dozer filomuzla sahaya hızlı sevkiyat yapıyoruz.",
      "Belediye ve müteahhit projelerinde metraj bazlı teklif, resmi sözleşme ve belgeli teslim protokolü uygulanır.",
    ],
    services: ["Altyapı kazısı", "Dere ıslah hafriyatı", "Hafriyat işleri", "Toprak nakliyesi"],
    keywords: ["sarayköy hafriyat", "buldan hafriyat", "denizli sarayköy kazı"],
  },
  {
    slug: "acipayam",
    name: "Acıpayam",
    region: "Denizli",
    districts: "Acıpayam, Yeşilyuva, Çameli",
    shortDescription:
      "Acıpayam hafriyat ve kazı — yağmur suyu hattı, kırsal altyapı ve geniş parsel tesviye projeleri.",
    intro:
      "Acıpayam ve çevre mahallelerde yağmur suyu hattı, kırsal hafriyat kazısı ve dolgu-tesviye işlerinde SMF Hafriyat saha ekibi görev alır.",
    paragraphs: [
      "Kırsal altyapı ve geniş parsel projelerinde ekskavatör filomuzla keşif, metraj planı ve operatörlü saha uygulaması sunuyoruz.",
      "Belediye ve müteahhit projelerinde belgeli moloz nakliyesi ve resmi süreç yönetimi ile kurumsal standartlarımızı koruyoruz.",
    ],
    services: ["Altyapı kazısı", "Hafriyat işleri", "Dolgu ve tesviye", "Moloz nakliyesi"],
    keywords: ["acıpayam hafriyat", "acıpayam kazı", "denizli acıpayam hafriyat"],
  },
  {
    slug: "civril",
    name: "Çivril",
    region: "Denizli",
    districts: "Çivril, Tavas, Baklan, Beyağaç",
    shortDescription:
      "Çivril ve Tavas hattında geniş parsel dolgu, kepçe tesviye ve kırsal hafriyat kazı projeleri.",
    intro:
      "Çivril, Tavas ve çevre ilçelerde geniş metrajlı hafriyat, dolgu-tesviye ve altyapı kazı projelerinde SMF Hafriyat hizmet verir.",
    paragraphs: [
      "Tarım ve sanayi yatırımlarında geniş parsel tesviye, dolgu ve temel kazısı operasyonlarını kendi filomuzla yürütüyoruz.",
      "Keşif sonrası net metraj, resmi sözleşme ve belgeli teslim süreci ile projeleri planlı şekilde tamamlıyoruz.",
    ],
    services: ["Hafriyat işleri", "Dolgu ve tesviye", "Altyapı kazısı", "Toprak nakliyesi"],
    keywords: ["çivril hafriyat", "tavas hafriyat", "denizli çivril kazı"],
  },
  {
    slug: "aydin",
    name: "Aydın",
    region: "Aydın",
    districts: "Efeler, Nazilli, Söke, Kuşadası",
    shortDescription:
      "Aydın ve çevresinde sanayi yıkımı, enkaz kaldırma ve moloz nakliye projeleri — SMF Hafriyat.",
    intro:
      "Aydın ili genelinde sanayi yıkımı, enkaz kaldırma, temel kazısı ve moloz nakliye projelerinde Ege Bölgesi deneyimimizle hizmet sunuyoruz.",
    paragraphs: [
      "Organize sanayi, konut ve altyapı projelerinde ekskavatör, loder ve damper filomuzla taşeronsuz saha operasyonu yürütüyoruz.",
      "Keşif, metraj tutanağı ve resmi sözleşme süreçlerinde kurumsal standartlarımızı koruyoruz.",
    ],
    services: ["Yıkım çalışmaları", "Hafriyat işleri", "Moloz nakliyesi", "Derin kazı"],
    keywords: ["aydın hafriyat", "aydın kazı", "efeler hafriyat", "nazilli hafriyat"],
  },
  {
    slug: "mugla",
    name: "Muğla",
    region: "Muğla",
    districts: "Menteşe, Fethiye, Milas, Bodrum",
    shortDescription:
      "Muğla ve turizm bölgelerinde villa temel kazısı, hafriyat ve enkaz kaldırma — SMF Hafriyat.",
    intro:
      "Muğla ili genelinde turizm, konut ve villa projelerinde temel kazısı, hafriyat ve enkaz kaldırma hizmeti sunuyoruz.",
    paragraphs: [
      "Dar alan ve geniş metrajlı projelerde mini ekskavatör ve 20 ton sınıfı kepçe filomuzu planlı şekilde sevk ediyoruz.",
      "Keşif sonrası makine planı, metraj ve belgeli teslim protokolü ile projeleri güvenli şekilde tamamlıyoruz.",
    ],
    services: ["Temel kazısı", "Hafriyat işleri", "Yıkım çalışmaları", "Moloz nakliyesi"],
    keywords: ["muğla hafriyat", "bodrum kazı", "fethiye hafriyat", "milas hafriyat"],
  },
];

export function getDistrictBySlug(slug: string): DistrictPage | undefined {
  return districtPages.find((d) => d.slug === slug);
}

/** Ege bandı pill → ilçe sayfası eşlemesi */
export const districtLinkMap: Record<string, string> = {
  Merkezefendi: "/hizmet-bolgeleri/merkezefendi",
  Pamukkale: "/hizmet-bolgeleri/pamukkale",
  Honaz: "/hizmet-bolgeleri/honaz",
  Sarayköy: "/hizmet-bolgeleri/saraykoy",
  Buldan: "/hizmet-bolgeleri/saraykoy",
  Babadağ: "/hizmet-bolgeleri/saraykoy",
  Acıpayam: "/hizmet-bolgeleri/acipayam",
  Çivril: "/hizmet-bolgeleri/civril",
  Tavas: "/hizmet-bolgeleri/civril",
  Baklan: "/hizmet-bolgeleri/civril",
  Beyağaç: "/hizmet-bolgeleri/civril",
  Efeler: "/hizmet-bolgeleri/aydin",
  Nazilli: "/hizmet-bolgeleri/aydin",
  Söke: "/hizmet-bolgeleri/aydin",
  Kuşadası: "/hizmet-bolgeleri/aydin",
  Menteşe: "/hizmet-bolgeleri/mugla",
  Fethiye: "/hizmet-bolgeleri/mugla",
  Milas: "/hizmet-bolgeleri/mugla",
  Bodrum: "/hizmet-bolgeleri/mugla",
  Denizli: "/hizmet-bolgeleri",
};
