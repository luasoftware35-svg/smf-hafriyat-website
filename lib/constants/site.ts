import { buildWhatsAppDirectUrl, whatsappBridgePath, whatsappDefaultMessage } from "@/lib/contact/whatsapp";

export const siteConfig = {
  name: "SMF Hafriyat",
  legalName: "SMF Yıkım Hafriyat Ltd. Şti.",
  tradeName: "SMF Hafriyat ve Nakliyat Ltd. Şti.",
  tagline: "Denizli merkezli hafriyat, yıkım ve derin kazı",
  description:
    "SMF Hafriyat; 1998'den bu yana Yeni Mah. Menderes Bulvarı merkezli ekskavatör ile temel kazısı, yıkım, derin kazı ve enkaz kaldırma yapar. 12 araçlık kendi filomuz, taşeronsuz model.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smfhafriyat.com",
  locale: "tr_TR",
  foundedYear: 1998,
  companyRegisteredYear: 2010,
  yearsInBusiness: new Date().getFullYear() - 1998,
  employeeCount: { min: 20, max: 30, label: "20 – 30 kişi" },
  logo: "/logo.png",
  logoAlt: "SMF Hafriyat logo",
} as const;

export const companyLegal = {
  taxOffice: "Denizli Vergi Dairesi",
  tradeRegistry: "Denizli Ticaret Sicili — 2010",
  registeredYear: 2010,
} as const;

export const corporateCredentials = [
  { label: "Ticaret Sicili", note: "SMF Yıkım Hafriyat Ltd. Şti. — Denizli Ticaret Sicili, 2010" },
  { label: "Vergi Levhası", note: "Denizli Vergi Dairesi mükellefi" },
  { label: "Resmi İş Süreci", note: "Yazılı sözleşme, saha tutanağı, tartım fişi ve teslim belgesi" },
  { label: "Sigorta & İSG", note: "Kasko, üçüncü şahıs mali mesuliyet sigortası; İSG planlı saha operasyonu" },
] as const;

export const insuranceNote =
  "Tüm iş makinelerimiz kasko ve üçüncü şahıs mali mesuliyet sigortası kapsamındadır.";

export const contactInfo = {
  phone: "+90 258 377 80 80",
  phoneDisplay: "0258 377 80 80",
  phoneHref: "tel:+902583778080",
  phoneSecondary: "0533 353 22 53",
  phoneSecondaryHref: "tel:+905333532253",
  email: "smfhafriyatofis@hotmail.com",
  emailHref: "mailto:smfhafriyatofis@hotmail.com",
  emailSecondary: "hello@genuadigital.com",
  emailSecondaryHref: "mailto:hello@genuadigital.com",
  whatsapp: "905411560664",
  whatsappDisplay: "0541 156 06 64",
  whatsappMessage: whatsappDefaultMessage,
  whatsappHref: whatsappBridgePath,
  whatsappDirectHref: buildWhatsAppDirectUrl("905411560664"),
  contactPerson: "",
  address: {
    street: "Yeni Mah. Menderes Bulvarı No:7/A D:3",
    neighborhood: "Yeni Mahalle",
    district: "Merkezefendi",
    city: "Denizli",
    region: "Denizli",
    postalCode: "20000",
    country: "Türkiye",
    full: "Yeni Mah. Menderes Bulvarı No:7/A D:3, Merkezefendi, 20000 Denizli",
  },
  workingHours: {
    schedule: [
      { day: "Pazartesi", hours: "08:00 – 18:00" },
      { day: "Salı", hours: "08:00 – 18:00" },
      { day: "Çarşamba", hours: "08:00 – 18:00" },
      { day: "Perşembe", hours: "08:00 – 18:00" },
      { day: "Cuma", hours: "08:00 – 18:00" },
      { day: "Cumartesi", hours: "08:00 – 18:00" },
      { day: "Pazar", hours: "Kapalı" },
    ],
    weekdays: "Pazartesi – Cumartesi: 08:00 – 18:00",
    sunday: "Pazar: Kapalı",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Yeni+Mah.+Menderes+Bulvar%C4%B1+7%2FA+Merkezefendi+Denizli&hl=tr&z=16&output=embed",
  mapLink: "https://maps.google.com/?q=Yeni+Mah.+Menderes+Bulvar%C4%B1+No+7%2FA+Merkezefendi+Denizli",
  instagram: "https://www.instagram.com/smfhafriyat/",
} as const;

export type NavChildLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: readonly NavChildLink[];
};

export const navLinks: NavLink[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    children: [
      { label: "Hafriyat İşleri", href: "/hizmetler/hafriyat-isleri", description: "Temel kazısı, dekapaj ve saha tesviyesi" },
      { label: "Yıkım Çalışmaları", href: "/hizmetler/yikim-calismalari", description: "Kontrollü yıkım ve enkaz kaldırma" },
      { label: "Altyapı Çalışmaları", href: "/hizmetler/altyapi-calismalari", description: "Kanal, isale ve altyapı kazısı" },
      { label: "Derin Kazı", href: "/hizmetler/derin-kazi", description: "Bodrum ve endüstriyel temel kazısı" },
      { label: "İş Makinesi Kiralama", href: "/hizmetler/is-makinesi-kiralama", description: "Operatörlü kepçe ve damper" },
      { label: "Tüm hizmetler", href: "/hizmetler", description: "10 hizmetin tamamını görüntüle" },
    ],
  },
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
    children: [
      {
        label: "Misyonumuz",
        href: "/hakkimizda#misyon",
        description: "Güvenlik, dürüstlük ve çevreye saygı — vazgeçilmez ilkeler",
      },
      {
        label: "Vizyonumuz",
        href: "/hakkimizda#vizyon",
        description: "Ege'de hafriyat denince akla gelen firma hedefi",
      },
      {
        label: "Tarihçemiz",
        href: "/hakkimizda#tarihce",
        description: "1998'den bugüne Ramizoğlu ailesi liderliğinde",
      },
    ],
  },
  { label: "Filo", href: "/filo" },
  { label: "Projeler", href: "/projeler" },
  { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
  { label: "İletişim", href: "/iletisim" },
];

export const footerServices = [
  { label: "Hafriyat İşleri", href: "/hizmetler/hafriyat-isleri" },
  { label: "Yıkım Çalışmaları", href: "/hizmetler/yikim-calismalari" },
  { label: "Altyapı Çalışmaları", href: "/hizmetler/altyapi-calismalari" },
  { label: "İş Makinesi Kiralama", href: "/hizmetler/is-makinesi-kiralama" },
  { label: "Moloz Nakliyesi", href: "/hizmetler/moloz-nakliyesi" },
  { label: "Derin Kazı", href: "/hizmetler/derin-kazi" },
  { label: "Kum-Çakıl Temini", href: "/hizmetler/kum-cakil-temini" },
  { label: "Kanal Çalışmaları", href: "/hizmetler/kanal-calismalari" },
  { label: "Su Tankeri Nakliyesi", href: "/hizmetler/su-tankeri-nakliyesi" },
  { label: "Toprak & Moloz Taşıma", href: "/hizmetler/toprak-moloz-tasima" },
] as const;

export const footerPages = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Denizli Kazı", href: "/denizli-kazi" },
  { label: "Denizli İnşaat Hafriyat", href: "/denizli-insaat-hafriyat" },
  { label: "Filo & Ekipman", href: "/filo" },
  { label: "Projeler", href: "/projeler" },
  { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
] as const;

export const socialLinks = [
  { label: "Instagram", href: contactInfo.instagram },
  { label: "Google Haritalar", href: contactInfo.mapLink },
] as const;

export const quickContactChannels = [
  { label: "WhatsApp", href: contactInfo.whatsappHref, icon: "whatsapp" },
  { label: "Instagram", href: contactInfo.instagram, icon: "instagram" },
  { label: "Telefon", href: contactInfo.phoneHref, icon: "phone" },
] as const;

export const ctaLinks = {
  quote: { label: "Keşif Talep Edin", href: "/iletisim" },
  call: { label: "Hemen Ara", href: contactInfo.phoneHref },
} as const;
