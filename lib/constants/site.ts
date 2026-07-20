export const siteConfig = {
  name: "SMF Hafriyat",
  legalName: "SMF Yıkım Hafriyat Ltd. Şti.",
  tradeName: "SMF Hafriyat ve Nakliyat Ltd. Şti.",
  tagline: "Toprağın altında bıraktığımız imza — Denizli'den Ege'ye hafriyat ve yıkım",
  description:
    "1998'den bu yana ekskavatör, kepçe ve damper filomuzla hafriyat, yıkım, derin temelli enkaz kaldırma ve altyapı kazısı. Denizli ve Ege Bölgesi.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smfhafriyat.com",
  locale: "tr_TR",
  foundedYear: 1998,
  companyRegisteredYear: 2010,
} as const;

export const companyLegal = {
  taxOffice: "Denizli Vergi Dairesi",
  tradeRegistry: "Denizli Ticaret Sicili — 2010",
} as const;

export const contactInfo = {
  phone: "+90 533 353 22 53",
  phoneDisplay: "0533 353 22 53",
  phoneHref: "tel:+905333532253",
  phoneSecondary: "0551 124 53 06",
  phoneSecondaryHref: "tel:+905511245306",
  email: "info@smfhafriyat.com",
  emailHref: "mailto:info@smfhafriyat.com",
  whatsapp: "905333532253",
  whatsappHref:
    "https://wa.me/905333532253?text=Merhaba%2C%20SMF%20Hafriyat%20%C3%BCzerinden%20yaz%C4%B1yorum.%20Hafriyat%20%2F%20y%C4%B1k%C4%B1m%20projem%20i%C3%A7in%20teklif%20almak%20istiyorum.",
  contactPerson: "Sedat Ramizoğlu",
  address: {
    street: "Bozburun Mah. Menderes Bulvarı No:7/A D:3",
    district: "Merkezefendi",
    city: "Denizli",
    region: "Ege Bölgesi",
    postalCode: "20000",
    country: "Türkiye",
    full: "Bozburun Mah. Menderes Bulvarı No:7/A D:3, Merkezefendi, 20000 Denizli",
  },
  workingHours: {
    weekdays: "Pazartesi – Cumartesi: 08:00 – 18:00",
    sunday: "Pazar: Kapalı (Acil işler için WhatsApp)",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=SMF+Hafriyat+Menderes+Bulvar%C4%B1+7A+Merkezefendi+Denizli&hl=tr&z=16&output=embed",
  mapLink: "https://maps.google.com/?q=Bozburun+Mah.+Menderes+Bulvar%C4%B1+No+7A+Merkezefendi+Denizli",
} as const;

export const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Filo", href: "/filo" },
  { label: "Projeler", href: "/projeler" },
  { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
] as const;

export const footerServices = [
  { label: "Hafriyat İşleri", href: "/hizmetler/hafriyat-isleri" },
  { label: "Yıkım Çalışmaları", href: "/hizmetler/yikim-calismalari" },
  { label: "Altyapı Çalışmaları", href: "/hizmetler/altyapi-calismalari" },
  { label: "İş Makinesi Kiralama", href: "/hizmetler/is-makinesi-kiralama" },
  { label: "Moloz Nakliyesi", href: "/hizmetler/moloz-nakliyesi" },
  { label: "Derin Kazı", href: "/hizmetler/derin-kazi" },
] as const;

export const footerPages = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Filo & Ekipman", href: "/filo" },
  { label: "Projeler", href: "/projeler" },
  { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
] as const;

export const socialLinks = [
  { label: "Web Sitesi", href: "https://www.smfhafriyat.com" },
] as const;

export const ctaLinks = {
  quote: { label: "Teklif Al", href: "/iletisim" },
  call: { label: "Hemen Ara", href: contactInfo.phoneHref },
} as const;
