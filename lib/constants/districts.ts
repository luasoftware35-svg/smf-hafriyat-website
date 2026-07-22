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
  Denizli: "/hizmet-bolgeleri",
};
