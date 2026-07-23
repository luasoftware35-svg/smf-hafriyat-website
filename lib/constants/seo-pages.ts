/** Hedef anahtar kelime landing sayfaları */
export type SeoLandingPage = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  paragraphs: readonly string[];
  highlights: readonly string[];
  relatedServices: readonly { label: string; href: string }[];
  keywords: readonly string[];
  imageKey: "kazi" | "insaat";
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "denizli-kazi",
    path: "/denizli-kazi",
    title: "Denizli Kazı Hizmetleri",
    metaTitle: "Denizli Kazı | Ekskavatör Temel Kazısı — SMF Hafriyat",
    metaDescription:
      "Denizli kazı hizmeti: temel kazısı, derin kazı, kanal kazısı ve altyapı hattı. SMF Hafriyat — 1998'den beri kendi ekskavatör filosu, keşif sonrası net metraj ve belgeli süreç.",
    eyebrow: "Denizli Kazı",
    intro:
      "Denizli kazı ihtiyaçlarınız için SMF Hafriyat; konut temel kazısından fabrika derin kazısına, kanalizasyon hattından sanayi tesviyesine kadar operatörlü ekskavatör filosu ile hizmet verir.",
    paragraphs: [
      "Denizli'de kazı projelerinde metraj, derinlik, zemin durumu ve makine seçimi keşif sonrası netleştirilir. Taşeronsuz modelimizle ekskavatör, mini kepçe, loder ve damper aynı saha ekibi altında koordine edilir.",
      "Merkezefendi, Pamukkale, Honaz OSB ve Ege Bölgesi'nde müteahhit ve sanayi yatırımcıları için resmi sözleşme, İSG planı ve belgeli moloz nakliyesi ile çalışırız.",
      "Acil saha müdahalesi ve aynı gün keşif için 0533 353 22 53 numarasından veya WhatsApp üzerinden bize ulaşabilirsiniz.",
    ],
    highlights: [
      "Temel ve derin kazı",
      "Kanal ve altyapı kazısı",
      "Operatörlü ekskavatör filosu",
      "Keşif sonrası net metraj",
      "Belgeli teslim",
    ],
    relatedServices: [
      { label: "Hafriyat İşleri", href: "/hizmetler/hafriyat-isleri" },
      { label: "Derin Kazı", href: "/hizmetler/derin-kazi" },
      { label: "Altyapı Çalışmaları", href: "/hizmetler/altyapi-calismalari" },
      { label: "Kanal Çalışmaları", href: "/hizmetler/kanal-calismalari" },
    ],
    keywords: ["denizli kazı", "denizli ekskavatör kazı", "denizli temel kazısı", "denizli derin kazı"],
    imageKey: "kazi",
  },
  {
    slug: "denizli-insaat-hafriyat",
    path: "/denizli-insaat-hafriyat",
    title: "Denizli İnşaat Hafriyat ve Kazı",
    metaTitle: "Denizli İnşaat Hafriyat | Müteahhit Kazı Hizmeti — SMF Hafriyat",
    metaDescription:
      "Denizli inşaat hafriyat ve müteahhit kazı hizmeti. Konut, ticari ve sanayi projelerinde temel kazısı, hafriyat, yıkım ve enkaz kaldırma — SMF Hafriyat, 1998'den beri.",
    eyebrow: "Denizli İnşaat",
    intro:
      "Denizli inşaat sektöründe müteahhitler, yapı firmaları ve yatırımcılar için hafriyat, temel kazısı, yıkım ve enkaz kaldırma hizmetlerini tek çatı altında sunuyoruz.",
    paragraphs: [
      "İnşaat projelerinin başlangıç aşamasında dekapaj, temel kazısı, dolgu-tecrit ve tesviye işlerini proje takvimine uygun planlıyoruz. Metraj tutanağı ve yazılı teklif ile şeffaf süreç yürütürüz.",
      "Konut, karma proje, fabrika ve OSB yatırımlarında yıkım, hafriyat ve moloz nakliyesini aynı saha ekibiyle koordine ederek müteahhitlerin zaman kaybını minimize ediyoruz.",
      "150'den fazla müteahhite hizmet verdik. Ruhsat, İSG ve teslim tutanağı süreçlerinde 28 yıllık saha tecrübesi ve 12 araçlık kendi filomuzla yanınızdayız.",
    ],
    highlights: [
      "Müteahhit temel kazısı",
      "Konut ve ticari hafriyat",
      "Yıkım ve enkaz kaldırma",
      "Resmi sözleşme",
      "Proje takvimine uyum",
    ],
    relatedServices: [
      { label: "Hafriyat İşleri", href: "/hizmetler/hafriyat-isleri" },
      { label: "Yıkım Çalışmaları", href: "/hizmetler/yikim-calismalari" },
      { label: "Moloz Nakliyesi", href: "/hizmetler/moloz-nakliyesi" },
      { label: "Derin Kazı", href: "/hizmetler/derin-kazi" },
    ],
    keywords: ["denizli inşaat", "denizli inşaat hafriyat", "denizli müteahhit kazı", "denizli inşaat firması hafriyat"],
    imageKey: "insaat",
  },
];

export function getSeoLandingPage(slug: string): SeoLandingPage | undefined {
  return seoLandingPages.find((p) => p.slug === slug);
}
