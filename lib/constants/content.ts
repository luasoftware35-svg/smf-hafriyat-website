export const stats = [
  { label: "Sektör Deneyimi", value: 21, suffix: "+ Yıl", orderIndex: 1 },
  { label: "Tamamlanan Proje", value: 900, suffix: "+", orderIndex: 2 },
  { label: "Hizmet Verilen Firma", value: 150, suffix: "+", orderIndex: 3 },
  { label: "Uzman Kadro", value: 7, suffix: "", orderIndex: 4 },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Stratejik Keşif",
    description: "Saha analizi, metraj hesabı ve operasyonel yol haritası — şeffaf, belgeli ve net teklif sunuyoruz.",
  },
  {
    step: 2,
    title: "Kurumsal Planlama",
    description: "Mühendis onaylı yıkım ve hafriyat planı; ruhsat, İSG ve çevre gerekliliklerinin koordinasyonu.",
  },
  {
    step: 3,
    title: "Disiplinli Uygulama",
    description: "Kendi ekskavatör filomuz sahaya iner — kurumsal İSG standartlarına bağlı, kesintisiz operasyon.",
  },
  {
    step: 4,
    title: "Belgeli Teslim",
    description: "Enkaz kaldırma, tesviye ve saha temizliği — projenizin bir sonraki aşamasına hazır zemin.",
  },
] as const;

/** smfhafriyat.com — temel iş makinesi filosu (4 ana grup) */
export const fleet = [
  { name: "Ekskavatör", capacity: "20–22 ton", specs: "Hafriyat, temel kazısı, derin kazı", icon: "Excavator" },
  { name: "Yükleyici (Loder)", capacity: "3 m³", specs: "Dolgu, tesviye ve yükleme işleri", icon: "Loader" },
  { name: "Damper Kamyon", capacity: "16–20 m³", specs: "Moloz, hafriyat ve toprak nakliyesi", icon: "Truck" },
  { name: "Mini Ekskavatör", capacity: "5 ton", specs: "Dar alan kazıları ve kanal çalışmaları", icon: "MiniExcavator" },
] as const;

export const trustHighlights = [
  {
    title: "21 Yılı Aşkın Tecrübe",
    text: "1998'den bu yana Ege'nin toprağına dokunan her projede aynı disiplin — yıkım, hafriyat ve enkaz kaldırma.",
  },
  {
    title: "900+ Proje Deneyimi",
    text: "Derin temel kazısından kontrollü yıkıma, fabrika enkazından altyapı hattına — her saha bizim için bir imza.",
  },
  {
    title: "150+ Firmaya Hizmet",
    text: "İnşaat, sanayi ve kamu sektöründe yüzlerce kuruma ekskavatör filomuzla güvenilir saha ortağı olduk.",
  },
] as const;

export const trustPrinciples = [
  { title: "İş Güvenliği Önceliği", subtitle: "Emniyet ve İSG her sahanın temel kuralı", year: "1998–2026" },
  { title: "Yasal Mevzuata Uyum", subtitle: "Ruhsat ve çevre gerekliliklerinden taviz yok", year: "2010–2026" },
  { title: "Çevreye Saygılı Çalışma", subtitle: "Bölge halkına zarar vermeden uygulama", year: "Sürekli" },
  { title: "Belgeli Nakliye", subtitle: "Moloz ve hafriyat taşıma — mevzuata uygun", year: "Sürekli" },
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
    photo: "/images/smf/12-proje-1.png",
  },
  {
    name: "Umut Avcı",
    role: "Yazılım Uzmanı",
    bio: "Kurumsal dijital altyapı ve proje takip sistemlerinden sorumlu.",
    photo: "/images/hafriyat/haf-004.jpg",
  },
  {
    name: "Murat Ramizoğlu",
    role: "Hafriyat Uzmanı",
    bio: "Hafriyat ve kazı projelerinde saha deneyimi; operatör ekibi koordinasyonu.",
    photo: "/images/smf/13-proje-2.png",
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
    photo: "/images/smf/17-proje-6.png",
  },
] as const;

export const aboutContent = {
  history:
    "1998 yılında Denizli'de attığımız ilk adımla Ege Bölgesi'nin altyapı haritasını şekillendirmeye başladık. Her kazı, her yıkım ve her enkaz hattı bizim için kurumsal bir taahhüttür. 2010'da SMF Yıkım Hafriyat Ltd. Şti. unvanıyla kurumsal kimliğimizi güçlendirdik; bugün 900'ü aşkın projeyle sektörün güvenilir referans markalarından biriyiz.",
  mission:
    "Her saha operasyonunda güvenlik, dürüstlük ve çevreye saygıyı vazgeçilmez ilke kabul ediyoruz. Yasal mevzuattan taviz vermeden, paydaşlarımıza ve toprağa kalıcı değer bırakan hafriyat ve yıkım hizmetleri sunmak kurumsal misyonumuzun özüdür.",
  vision:
    "Ege Bölgesi'nde hafriyat ve yıkım denince akla gelen ilk kurumsal marka olmak; uluslararası standartlarda disiplin, şeffaflık ve operasyonel mükemmellikle sektöre yön vermek.",
  whatWeDo:
    "21 yılı aşkın kurumsal tecrübemizle 150'nin üzerinde firmaya, 900'ün üzerinde projede stratejik saha ortağı olduk — derin temel kazısından kontrollü yıkıma, altyapı hattından enkaz kaldırmaya kadar.",
  foundedYear: 1998,
} as const;

export const whyUsItems = [
  {
    icon: "HardHat",
    title: "Kurumsal Filo Modeli",
    description: "Taşeron yok — ekskavatör, loder, damper ve mini kepçe ile doğrudan, kurumsal saha yönetimi.",
  },
  {
    icon: "ShieldCheck",
    title: "İş Güvenliği Standartları",
    description: "İSG ve emniyet her projenin temel taahhüdü; yasal mevzuata tam uyum, sıfır tolerans politikası.",
  },
  {
    icon: "Timer",
    title: "Operasyonel Çeviklik",
    description: "Büyük metrajlı hafriyat ve derin kazı projelerinde hızlı filo sevkiyatı ve proaktif saha koordinasyonu.",
  },
  {
    icon: "Users",
    title: "Uzman Saha Kadrosu",
    description: "Ramizoğlu ailesi liderliğinde deneyimli hafriyat uzmanları, operatörler ve proje koordinatörleri.",
  },
] as const;

export const faqItems = [
  {
    question: "Denizli'de hafriyat firması arıyorum, SMF Hafriyat nerede?",
    answer:
      "Merkez ofisimiz Yeni Mah. Menderes Bulvarı No:7/A D:3, Merkezefendi, Denizli adresindedir. Denizli hafriyat, yıkım ve ekskavatör kazı ihtiyaçlarınız için 0533 353 22 53 numarasından veya hello@genuadigital.com adresinden bize ulaşabilirsiniz.",
  },
  {
    question: "Denizli hafriyat fiyatları nasıl belirlenir?",
    answer:
      "Denizli hafriyat fiyatları; kazı metrajı, derinlik, zemin durumu, makine ihtiyacı ve nakliye mesafesine göre keşif sonrası belirlenir. SMF Hafriyat olarak şeffaf metraj ve resmi sözleşme ile teklif sunuyoruz.",
  },
  {
    question: "Keşif ve teklif süreci ne kadar sürer?",
    answer:
      "Denizli ve çevre illerde stratejik saha keşfi planlıyoruz. Ekskavatör metrajı ve kazı derinliği analizi sonrası şeffaf, belgeli teklif sunuyoruz. Hızlı koordinasyon için 0533 353 22 53 numarasından ulaşabilirsiniz.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Merkez ofisimiz Yeni Mah. Menderes Bulvarı, Merkezefendi, Denizli'de olup Ege Bölgesi'nin tamamına — Aydın, Muğla, Uşak, Afyon ve çevre illere kurumsal saha hizmeti veriyoruz.",
  },
  {
    question: "İş makinesi kiralama yapıyor musunuz?",
    answer:
      "Evet. Hafriyat, yıkım ve kazı projeleri için ekskavatör, loder, damper ve mini kepçe kiralama hizmetimiz mevcuttur. Operatörlü ve operatörsüz seçenekler sunuyoruz.",
  },
  {
    question: "Moloz taşıma belgeleriniz var mı?",
    answer:
      "Yıkım enkazı ve hafriyat molozu kepçe ile yüklenir, damper ile mevzuata uygun taşınır; tartım fişi, irsaliye ve resmi sözleşme ile kurumsal süreç yürütülür.",
  },
  {
    question: "Ödeme ve fatura koşullarınız nedir?",
    answer:
      "Proje büyüklüğüne göre esnek ödeme planları sunuyoruz. Tüm işlemler faturalı, resmi sözleşmeli ve şeffaf metraj esaslı yürütülür.",
  },
] as const;

export const serviceAreas = [
  { name: "Denizli Merkez", districts: "Merkezefendi, Pamukkale", description: "Merkez ofis — Yeni Mah. Menderes Bulvarı No:7/A D:3" },
  { name: "Honaz", districts: "Organize Sanayi Bölgesi", description: "Fabrika derin temel kazısı ve ekskavatör dolgu" },
  { name: "Acıpayam", districts: "Acıpayam, Çameli", description: "Kanal kazısı ve yağmur suyu hattı hafriyatı" },
  { name: "Çivril & Tavas", districts: "Çivril, Tavas, Baklan", description: "Kırsal hafriyat ve kepçe kazı işleri" },
  { name: "Aydın", districts: "Efeler, Nazilli, Söke", description: "Sanayi yıkımı ve enkaz kaldırma" },
  { name: "Muğla", districts: "Menteşe, Fethiye", description: "Turizm projelerinde hafriyat kazısı" },
] as const;

export const industrySectors = [
  { sector: "İnşaat & Müteahhitlik", description: "Konut, ticari ve karma projelerde hafriyat ve temel kazısı" },
  { sector: "Sanayi & Fabrika", description: "Fabrika yıkımı, enkaz kaldırma ve OSB projeleri" },
  { sector: "Altyapı & Belediye", description: "Kanalizasyon, yağmur suyu ve isale hatları kazısı" },
  { sector: "Kamu & Kurumsal", description: "Okul, tesis ve kamu yapıları yıkım ve hafriyat işleri" },
] as const;
