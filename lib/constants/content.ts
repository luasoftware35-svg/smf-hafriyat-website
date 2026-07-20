export const stats = [
  { label: "Sektör Deneyimi", value: 21, suffix: "+ Yıl", orderIndex: 1 },
  { label: "Tamamlanan Proje", value: 900, suffix: "+", orderIndex: 2 },
  { label: "Hizmet Verilen Firma", value: 150, suffix: "+", orderIndex: 3 },
  { label: "Uzman Kadro", value: 7, suffix: "", orderIndex: 4 },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Keşif & Teklif",
    description: "Sahayı inceliyor, kazı metrajını ölçüyor ve ekskavatör ihtiyacınız için net bir teklif sunuyoruz.",
  },
  {
    step: 2,
    title: "Planlama & Ruhsat",
    description: "Mühendislerimiz yıkım ve hafriyat planını onaylar; ruhsat süreçlerini sizin adınıza koordine ederiz.",
  },
  {
    step: 3,
    title: "Uygulama",
    description: "Kepçe ve ekskavatör filomuz sahaya iner — İSG kurallarına bağlı, disiplinli operasyon başlar.",
  },
  {
    step: 4,
    title: "Teslim & Temizlik",
    description: "Enkaz kaldırılır, saha tesviye edilir; belgeli teslim ile projeniz kusursuz kapanır.",
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
    "1998'de toprağın altına uzanan ilk kepçemizle yola çıktık. Ege'nin siluetini yeniden şekillendiren her kazı, her yıkım, her enkaz hattı bizim için bir imza. 2010'da SMF Yıkım Hafriyat Ltd. Şti. olarak Denizli Merkezefendi'nde kurumsal kimliğimizi taçlandırdık — ve o günden bu yana sahadaki her operasyonu aynı özenle yürütüyoruz.",
  mission:
    "Sahayı bir tuval, ekskavatörü bir fırça gibi kullanıyoruz. Güvenlik, dürüstlük ve çevreye saygı — vazgeçilmez üçlümüz. Yasal mevzuattan taviz vermeden, insanlara ve toprağa huzur bırakan hafriyat ve yıkım işleri üretmek misyonumuzun özüdür.",
  vision:
    "Ege Bölgesi'nde hafriyat denince akla gelen ilk isim olmak; uluslararası standartlarda, disiplinli ve zarif saha operasyonlarıyla sektörün referans markası haline gelmek.",
  whatWeDo:
    "Yıkım ve hafriyat sanatında 21 yılı aşkın tecrübemizle 150'nin üzerinde firmaya, 900'ün üzerinde projede eşlik ettik — derin temel kazısından enkaz kaldırmaya, kontrollü yıkımdan altyapı hattına kadar.",
  foundedYear: 1998,
} as const;

export const whyUsItems = [
  {
    icon: "HardHat",
    title: "Kendi Filomuz",
    description: "Taşeron değil — ekskavatör, loder, damper ve mini kepçe ile hafriyat ve yıkım sahasında doğrudan hizmet.",
  },
  {
    icon: "ShieldCheck",
    title: "İş Güvenliği",
    description: "İş güvenliği ve emniyet her projede ön planda; yasal mevzuata tam uyum.",
  },
  {
    icon: "Timer",
    title: "Hızlı Çözüm",
    description: "Büyük metrajlı hafriyat, derin temel kazısı ve yıkım enkaz kaldırma işlerinize hızlı ekskavatör sevkiyatı.",
  },
  {
    icon: "Users",
    title: "Uzman Kadro",
    description: "Ramizoğlu ailesi liderliğinde deneyimli hafriyat uzmanları, kepçe operatörleri ve saha ekibi.",
  },
] as const;

export const faqItems = [
  {
    question: "Keşif ve teklif süreci ne kadar sürer?",
    answer:
      "Denizli ve çevre illerde hafriyat sahası keşfi planlayabiliyoruz. Ekskavatör metrajı ve kazı derinliği analizi sonrası teklif sunuyoruz. Hızlı teklif için 0533 353 22 53 numarasından arayabilirsiniz.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Merkez ofisimiz Denizli Merkezefendi'de olup Ege Bölgesi'nin tamamına — Aydın, Muğla, Uşak, Afyon ve çevre illere hizmet veriyoruz.",
  },
  {
    question: "İş makinesi kiralama yapıyor musunuz?",
    answer:
      "Evet. Hafriyat, yıkım ve kazı projeleri için ekskavatör, loder, damper ve mini kepçe kiralama hizmetimiz mevcuttur. Operatörlü ve operatörsüz seçenekler sunuyoruz.",
  },
  {
    question: "Moloz taşıma belgeleriniz var mı?",
    answer:
      "Yıkım enkazı ve hafriyat molozu kepçe ile yüklenir, damper ile mevzuata uygun taşınır; tartım fişi ve irsaliye düzenlenir.",
  },
  {
    question: "Ödeme ve fatura koşullarınız nedir?",
    answer:
      "Proje büyüklüğüne göre esnek ödeme planları sunuyoruz. Tüm işlemler faturalı ve resmi sözleşmeli yürütülür.",
  },
] as const;

export const serviceAreas = [
  { name: "Denizli Merkez", districts: "Merkezefendi, Pamukkale", description: "Merkez ofis — Bozburun Mah. Menderes Bulvarı" },
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
