/** Denizli yerel SEO — anahtar kelimeler, başlık ve açıklama şablonları */
export const localSeo = {
  city: "Denizli",
  region: "Denizli",
  country: "Türkiye",
  geo: {
    latitude: 37.7842,
    longitude: 29.0945,
  },
  homeTitle: "Denizli Hafriyat | SMF Hafriyat — Ekskavatör Kazı, Yıkım ve Enkaz Kaldırma",
  homeDescription:
    "Denizli hafriyat firması SMF Hafriyat; Yeni Mah. Menderes Bulvarı merkezli. Ekskavatör ile temel kazısı, yıkım, derin kazı, enkaz kaldırma ve moloz nakliyesi. 1998'den beri Denizli ve Ege'de kendi filomuzla hizmet.",
  defaultKeywords: [
    "denizli hafriyat",
    "hafriyat denizli",
    "denizli hafriyat firması",
    "denizli ekskavatör kazı",
    "denizli yıkım firması",
    "denizli enkaz kaldırma",
    "denizli moloz nakliyesi",
    "denizli kepçe kiralama",
    "derin temel kazısı denizli",
    "merkezefendi hafriyat",
    "SMF Hafriyat",
    "denizli hafriyat fiyatları",
  ],
  knowAbout: [
    "Denizli hafriyat",
    "Ekskavatör kazı",
    "Temel kazısı",
    "Yıkım",
    "Enkaz kaldırma",
    "Derin kazı",
    "Moloz nakliyesi",
    "Altyapı kazısı",
  ],
} as const;

export function serviceSeoTitle(serviceTitle: string): string {
  return `${serviceTitle} Denizli`;
}

export function serviceSeoDescription(shortDescription: string): string {
  if (shortDescription.toLowerCase().includes("denizli")) return shortDescription;
  return `Denizli ${shortDescription.charAt(0).toLowerCase()}${shortDescription.slice(1)}`;
}

export function pageSeoDescription(description: string): string {
  if (description.toLowerCase().includes("denizli")) return description;
  return `Denizli — ${description}`;
}
