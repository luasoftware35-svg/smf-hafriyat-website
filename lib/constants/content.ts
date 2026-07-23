export const stats = [
  { label: "Sektör Deneyimi", value: 28, suffix: "+ Yıl", orderIndex: 1 },
  { label: "Tamamlanan Proje", value: 900, suffix: "+", orderIndex: 2 },
  { label: "Hizmet Verilen Firma", value: 150, suffix: "+", orderIndex: 3 },
  { label: "Saha Ekibi", value: 25, suffix: "+ Kişi", orderIndex: 4 },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Keşif ve Metraj",
    shortLabel: "Saha ölçümü · hacim hesabı · teklif",
    description: "Parselde kazı derinliği, zemin ve hacim ölçülür; makine ihtiyacı ve süre yazılı teklifte belirtilir.",
  },
  {
    step: 2,
    title: "Ruhsat ve İSG Planı",
    shortLabel: "Ruhsat · İSG · mühendis onayı",
    description: "Yıkım ve hafriyat ruhsatı, İSG planı ve mühendis onayı koordine edilir; sahaya girmeden evrak tamamlanır.",
  },
  {
    step: 3,
    title: "Saha Kazısı",
    shortLabel: "Kepçe · damper · operatör",
    description: "Kendi ekskavatör ve damper filomuz sahaya iner — sertifikalı operatörler, günlük saha tutanağı tutulur.",
  },
  {
    step: 4,
    title: "Tesviye ve Teslim",
    shortLabel: "Dolgu · tesviye · saha kapanışı",
    description: "Enkaz kaldırma, tesviye ve saha temizliği; teslim tutanağı ile inşaata hazır zemin bırakılır.",
  },
] as const;

export const fleetHighlights = [
  "Taşeronsuz — sahada kendi operatör kadromuz",
  "12 araçlık filo, bakımlı ve sigortalı makineler",
  "Keşiften teslime tek ekip, aynı gün sevkiyat imkânı",
] as const;

/** smfhafriyat.com — iş makinesi filosu (model bilgisi onay bekliyor) */
export const fleet = [
  {
    name: "Ekskavatör",
    model: "Caterpillar 320 GC",
    capacity: "20–22 ton",
    specs: "Temel kazısı, dekapaj, hafriyat — günlük 400–600 m³ kapasite",
    icon: "Excavator",
  },
  {
    name: "Yükleyici (Loder)",
    model: "Caterpillar 950 GC",
    capacity: "3 m³ kepçe",
    specs: "Dolgu, tesviye ve yükleme — saatte 120–180 m³ hareket",
    icon: "Loader",
  },
  {
    name: "Damper Kamyon",
    model: "Mercedes-Benz Actros 4141",
    capacity: "16–20 m³",
    specs: "Moloz ve hafriyat nakliyesi — günlük 8–12 sefer",
    icon: "Truck",
  },
  {
    name: "Mini Ekskavatör",
    model: "Caterpillar 305.5E2 CR",
    capacity: "5 ton",
    specs: "Dar alan kanal kazısı, bahçe hattı — 0,8–1,2 m genişlik",
    icon: "MiniExcavator",
  },
  {
    name: "Derin Kazı Ekskavatör",
    model: "Komatsu PC300LC-8",
    capacity: "30 ton · 8 m+ derinlik",
    specs: "Fabrika temeli, bodrum kazısı — günlük 300–500 m³",
    icon: "Excavator",
  },
  {
    name: "Dozer",
    model: "Caterpillar D6T",
    capacity: "180 HP",
    specs: "Dekapaj, tesviye ve saha düzleme — geniş parsel işleri",
    icon: "Bulldozer",
  },
  {
    name: "Enkaz Yükleme",
    model: "Hitachi ZX210LC-5G + damper",
    capacity: "21 ton kepçe",
    specs: "Yıkım sonrası enkaz yükleme ve nakliye — aynı saha ekibi",
    icon: "Loader",
  },
  {
    name: "Yıkım Sahası",
    model: "Caterpillar 336 + hidrolik kırıcı",
    capacity: "36 ton",
    specs: "Kontrollü yıkım, enkaz ayrıştırma — OSB ve sanayi yapıları",
    icon: "Hammer",
  },
] as const;

export const trustHighlights = [
  {
    title: "28 Yılı Aşkın Tecrübe",
    text: "1998'den bu yana Denizli ve Ege'de hafriyat, yıkım ve enkaz kaldırma — aynı filo disiplini.",
  },
  {
    title: "900+ Proje Deneyimi",
    text: "Fabrika temelinden konut yıkımına, kanal kazısından dolgu tesviyesine — yazılı metraj ve teslim tutanağı.",
  },
  {
    title: "150+ Firmaya Hizmet",
    text: "İnşaat, sanayi ve kamu sektöründe müteahhit ve işverenlere doğrudan kepçe ve damper filosu.",
  },
] as const;

export const trustPrinciples = [
  { title: "Sıfır Kaza Hedefi", subtitle: "Sertifikalı operatör, İSG ekipmanı, günlük saha denetimi", year: "1998–2026" },
  { title: "Ruhsat ve Mevzuat", subtitle: "Belediye ruhsatı, moloz nakliye belgesi, tartım fişi", year: "2010–2026" },
  { title: "Çevreye Saygılı Saha", subtitle: "Toz bastırma, komşu yapı güvenliği, düzenli saha temizliği", year: "Sürekli" },
  { title: "Sigortalı Filo", subtitle: "Kasko ve üçüncü şahıs sigortası — tüm iş makineleri", year: "Sürekli" },
] as const;

export const teamMembers = [
  {
    name: "Ramiz Ramizoğlu",
    role: "Kurucu",
    bio: "Firmayı 1998'de hafriyat sektöründe kurdu; Ege Bölgesi'nde onlarca büyük projeye öncülük etti.",
    photo: "/images/hafriyat/haf-001.jpg",
  },
  {
    name: "Sedat Ramizoğlu",
    role: "CEO",
    bio: "Şirket yönetimi ve müşteri ilişkilerinden sorumlu. Denizli Merkezefendi merkezli operasyonları yönetir.",
    photo: "/images/hafriyat/haf-002.jpg",
  },
  {
    name: "Ferhat Ramizoğlu",
    role: "Genel Müdür",
    bio: "Saha operasyonları, proje planlama ve ekip koordinasyonundan sorumludur.",
    photo: "/images/hafriyat/haf-003.jpg",
  },
  {
    name: "Umut Avcı",
    role: "Yazılım Uzmanı",
    bio: "Proje takip ve dijital altyapı sistemlerinden sorumlu.",
    photo: "/images/hafriyat/haf-004.jpg",
  },
  {
    name: "Murat Ramizoğlu",
    role: "Hafriyat Uzmanı",
    bio: "Hafriyat ve kazı projelerinde saha deneyimi; operatör ekibi koordinasyonu.",
    photo: "/images/hafriyat/haf-006.jpg",
  },
  {
    name: "Serkan Ramizoğlu",
    role: "Hafriyat Uzmanı",
    bio: "Yıkım ve moloz kaldırma projelerinde uzman saha yöneticisi.",
    photo: "/images/hafriyat/haf-007.jpg",
  },
  {
    name: "Polat Ramizoğlu",
    role: "Hafriyat Uzmanı",
    bio: "Altyapı ve kanal kazı projelerinde saha operasyonlarından sorumlu.",
    photo: "/images/hafriyat/haf-004.jpg",
  },
] as const;

export const aboutContent = {
  history:
    "1998 yılında Denizli'de Ramizoğlu ailesi tarafından kurulduk. İlk günden beri taşeron kullanmadan kendi ekskavatör ve damper filomuzla çalışıyoruz. 2010'da SMF Yıkım Hafriyat Ltd. Şti. unvanıyla tescil edildik; bugün 900'ü aşkın projede yazılı metraj, ruhsat koordinasyonu ve teslim tutanağı ile iş bitirdik.",
  mission:
    "Her saha işinde güvenlik, dürüstlük ve çevreye saygıyı esas alıyoruz. Ruhsatlı, sigortalı ve belgeli hafriyat hizmeti sunmak temel taahhüdümüzdür.",
  vision:
    "Denizli ve Ege Bölgesi'nde hafriyat denince akla gelen, referans gösterilen bir firma olmak — aynı filo disiplini ve iş bitirme standardıyla.",
  whatWeDo:
    "28 yıllık tecrübemizle 150'nin üzerinde firmaya hizmet verdik. Temel kazısı, yıkım, derin kazı, kanal hattı ve enkaz kaldırma işlerini 12 araçlık kendi filomuzla yürütüyoruz.",
  foundedYear: 1998,
} as const;

export const whyUsItems = [
  {
    icon: "HardHat",
    title: "Kendi Filomuz",
    description: "Taşeron yok — Caterpillar, Komatsu ve Hitachi iş makineleri doğrudan sahada, kendi operatörlerimizle.",
  },
  {
    icon: "ShieldCheck",
    title: "Sertifikalı Operatörler",
    description: "İSG eğitimli operatör kadrosu, sıfır kaza hedefi, günlük saha denetimi ve emniyet ekipmanı zorunluluğu.",
  },
  {
    icon: "Timer",
    title: "Aynı Gün Saha Müdahalesi",
    description: "Denizli merkez ve çevre ilçelerde aynı gün keşif; acil yıkım ve enkaz işlerinde hızlı filo sevkiyatı.",
  },
  {
    icon: "Users",
    title: "Ramizoğlu Ailesi Liderliği",
    description: "Kurucudan saha ustasına aynı çatı altında — 25 kişilik ekip, tek sorumlu koordinasyon.",
  },
  {
    icon: "FileText",
    title: "Yazılı Metraj",
    description: "Keşif sonrası hacim, makine sayısı ve süre kalemleri yazılı teklifte; saha tutanağı ile takip.",
  },
  {
    icon: "BadgeCheck",
    title: "Resmi Sözleşme ve Teslim",
    description: "Sözleşme, tartım fişi, irsaliye ve teslim tutanağı — iş bitirme belgesi talep edilebilir.",
  },
] as const;

export const HOME_FAQ_COUNT = 8;

export const faqItems = [
  {
    question: "Denizli kazı hizmeti veriyor musunuz?",
    answer:
      "Evet. Denizli kazı, temel kazısı, derin kazı ve altyapı hattı projelerinde operatörlü ekskavatör filomuzla hizmet veriyoruz. Detaylar için Denizli kazı sayfamızı inceleyebilir veya 0533 353 22 53 hattından bize ulaşabilirsiniz.",
  },
  {
    question: "Denizli inşaat firmalarına hafriyat hizmeti sunuyor musunuz?",
    answer:
      "Müteahhit ve inşaat firmalarına konut, ticari ve sanayi projelerinde hafriyat, temel kazısı, yıkım ve enkaz kaldırma hizmeti sunuyoruz. Keşif sonrası yazılı metraj ve resmi sözleşme ile çalışırız.",
  },
  {
    question: "Denizli'de hafriyat firması arıyorum, SMF Hafriyat nerede?",
    answer:
      "Merkez ofisimiz Yeni Mah. Menderes Bulvarı No:7/A D:3, Merkezefendi, Denizli adresindedir. Denizli hafriyat, yıkım ve ekskavatör kazı ihtiyaçlarınız için 0533 353 22 53 numarasından veya info@smfhafriyat.com adresinden bize ulaşabilirsiniz.",
  },
  {
    question: "Kendi filonuz ve operatör kadronuz var mı?",
    answer:
      "Evet. Taşeronsuz modelle çalışıyoruz — 12 araçlık ekskavatör, loder, damper ve mini kepçe filomuz ile sertifikalı operatör ekibimiz doğrudan projeye atanır.",
  },
  {
    question: "Denizli hafriyat fiyatları nasıl belirlenir?",
    answer:
      "Fiyat; kazı metrajı (m³), derinlik, zemin durumu, makine ihtiyacı ve nakliye mesafesine göre keşif sonrası belirlenir. Yazılı metraj ve resmi sözleşme ile teklif sunuyoruz.",
  },
  {
    question: "Keşif ve teklif süreci ne kadar sürer?",
    answer:
      "Denizli ve çevre ilçelerde aynı gün keşif planlayabiliyoruz. Saha ölçümü ve hacim hesabı sonrası 1–3 iş günü içinde yazılı teklif iletilir. Hızlı koordinasyon için 0533 353 22 53.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Merkez ofisimiz Merkezefendi, Denizli'de olup Ege Bölgesi'nin tamamına — Aydın, Muğla, Uşak, Afyon ve çevre illere filo sevkiyatı yapıyoruz.",
  },
  {
    question: "Yıkım ve hafriyat ruhsat sürecinde destek veriyor musunuz?",
    answer:
      "Mühendis onaylı yıkım planı, İSG dokümantasyonu ve belediye ruhsat koordinasyonunda deneyimli ekibimiz süreci uçtan uca yönetir.",
  },
  {
    question: "Moloz taşıma belgeleriniz var mı?",
    answer:
      "Yıkım enkazı ve hafriyat molozu kepçe ile yüklenir, damper ile mevzuata uygun taşınır; tartım fişi, irsaliye ve resmi sözleşme ile süreç yürütülür.",
  },
  {
    question: "Ödeme ve fatura koşullarınız nedir?",
    answer:
      "Proje büyüklüğüne göre esnek ödeme planları sunuyoruz. Tüm işlemler faturalı, resmi sözleşmeli ve yazılı metraj esaslı yürütülür.",
  },
  {
    question: "Derin temel kazısı ve sanayi projelerinde çalışıyor musunuz?",
    answer:
      "Honaz OSB ve Denizli sanayi projelerinde derin kazı, fabrika temeli ve geniş metrajlı hafriyat işlerinde referans tecrübemiz vardır. Komatsu PC300 ile 8 m+ derinlik kapasitesi.",
  },
  {
    question: "İş makinesi kiralama yapıyor musunuz?",
    answer:
      "Evet. Hafriyat, yıkım ve kazı projeleri için ekskavatör, loder, damper ve mini kepçe kiralama hizmetimiz mevcuttur. Operatörlü ve operatörsüz seçenekler sunuyoruz.",
  },
  {
    question: "Acil saha müdahalesi ve aynı gün keşif mümkün mü?",
    answer:
      "Denizli merkez ve çevre ilçelerde aynı gün keşif planlayabiliyoruz. Acil yıkım, enkaz kaldırma ve saha müdahalesi için 0533 353 22 53 hattından ulaşın.",
  },
  {
    question: "Hangi belgelerle çalışıyorsunuz?",
    answer:
      "Resmi sözleşme, metraj tutanağı, moloz nakliye irsaliyesi, tartım fişi ve teslim tutanağı ile belgeli süreç yürütürüz. İş bitirme belgesi ve SGK kayıtları talep edilebilir.",
  },
  {
    question: "Çalışma saatleriniz nedir?",
    answer:
      "Hafta içi ve Cumartesi 08:00–18:00 arası ofis ve saha koordinasyonu yapıyoruz. Proje takvimine göre vardiyalı saha operasyonu planlanabilir.",
  },
] as const;

/** Ege Bölgesi illeri — ana sayfa hizmet bandı */
export const egeRegionProvinces = [
  "Afyonkarahisar",
  "Aydın",
  "Denizli",
  "Kütahya",
  "Manisa",
  "Muğla",
  "Uşak",
] as const;

export const serviceAreas = [
  { name: "Merkezefendi", districts: "Yeni Mah., Kınıklı, Servergazi", description: "Merkez ofis · Menderes Bulvarı · aynı gün keşif" },
  { name: "Pamukkale", districts: "Pamukkale, Gözler, Karahayıt", description: "Konut temel kazısı · kanal ve altyapı hattı" },
  { name: "Honaz", districts: "OSB, Kaklık, Honaz Merkez", description: "Fabrika derin temel kazısı · sanayi tesviye" },
  { name: "Acıpayam", districts: "Acıpayam, Yeşilyuva, Çameli", description: "Yağmur suyu hattı · kırsal hafriyat kazısı" },
  { name: "Çivril & Tavas", districts: "Çivril, Tavas, Baklan, Beyağaç", description: "Geniş parsel dolgu · kepçe tesviye işleri" },
  { name: "Buldan & Sarayköy", districts: "Buldan, Sarayköy, Babadağ", description: "Köprü altı kazı · dere ıslah hafriyatı" },
  { name: "Aydın", districts: "Efeler, Nazilli, Söke, Kuşadası", description: "Sanayi yıkımı · enkaz kaldırma · moloz nakliye" },
  { name: "Muğla", districts: "Menteşe, Fethiye, Milas, Bodrum", description: "Turizm projeleri · villa temel kazısı" },
] as const;

/** Ege Bölgesi ilçeleri — ana sayfa bandı (sadece ilçe adları) */
export const egeRegionDistricts = [
  "Merkezefendi",
  "Pamukkale",
  "Honaz",
  "Acıpayam",
  "Çivril",
  "Tavas",
  "Buldan",
  "Sarayköy",
  "Babadağ",
  "Baklan",
  "Beyağaç",
  "Çameli",
  "Efeler",
  "Nazilli",
  "Söke",
  "Kuşadası",
  "Menteşe",
  "Fethiye",
  "Milas",
  "Bodrum",
  "Yunusemre",
  "Şehzadeler",
  "Turgutlu",
  "Salihli",
] as const;

/** Ana sayfa Ege bandı — yalnızca iller + ilçeler */
export const egeServiceBandItems = [...egeRegionProvinces, ...egeRegionDistricts];

export const industrySectors = [
  { sector: "İnşaat & Müteahhitlik", description: "Konut, ticari ve karma projelerde hafriyat ve temel kazısı" },
  { sector: "Sanayi & Fabrika", description: "Fabrika yıkımı, enkaz kaldırma ve OSB projeleri" },
  { sector: "Altyapı & Belediye", description: "Kanalizasyon, yağmur suyu ve isale hatları kazısı" },
  { sector: "Kamu & Kurumsal", description: "Okul, tesis ve kamu yapıları yıkım ve hafriyat işleri" },
] as const;

/** Google Haritalar / yerel güven sinyali */
export const googleBusiness = {
  title: "Google Haritalar'da SMF Hafriyat",
  description: "Denizli hafriyat hizmetimizi deneyimlediyseniz Google üzerinden değerlendirmenizi paylaşabilirsiniz.",
  cta: "Google'da görüntüle",
  href: "https://maps.google.com/?q=Yeni+Mah.+Menderes+Bulvar%C4%B1+No+7%2FA+Merkezefendi+Denizli",
} as const;

export const clientProof = [
  { sector: "Organize Sanayi", project: "Honaz OSB fabrika temel kazısı", type: "Derin hafriyat" },
  { sector: "Konut & Müteahhit", project: "Merkezefendi kontrollü yıkım", type: "Yıkım & enkaz" },
  { sector: "Belediye Altyapı", project: "Pamukkale kanalizasyon hattı", type: "Kanal kazısı" },
  { sector: "Sanayi Yatırım", project: "Denizli sanayi sitesi tesviye", type: "Dolgu & tesviye" },
] as const;
