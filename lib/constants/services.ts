export type Service = {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  detailParagraphs: readonly string[];
  trustPoints: readonly string[];
  features: string[];
  orderIndex: number;
};

export const services: Service[] = [
  {
    slug: "hafriyat-isleri",
    title: "Hafriyat İşleri",
    icon: "Shovel",
    shortDescription:
      "Ekskavatör ve kepçe ile temel kazısı, dekapaj, dolgu ve büyük metrajlı hafriyat işlerinize Denizli'de hızlı çözüm.",
    fullDescription:
      "Denizli ve Ege Bölgesi'nde 1998'den bu yana kendi ekskavatör filomuz ve operatör kadromuzla hafriyat, dekapaj ve temel kazısı hizmeti sunuyoruz.",
    detailParagraphs: [
      "SMF Hafriyat olarak hafriyat işlerini yalnızca kazı yapmak olarak değil; projenizin güvenli, planlı ve zamanında ilerlemesi olarak ele alıyoruz. Denizli Merkezefendi merkezli filomuzla fabrika, konut, sanayi ve kamu projelerinde temel kazısı, dekapaj, dolgu ve saha tesviye operasyonlarını kendi ekibimizle yürütüyoruz.",
      "Keşif aşamasında saha analizi, metraj hesabı ve ekskavatör ihtiyacını netleştiriyor; ruhsat ve mevzuat gerekliliklerine uygun çalışma planı oluşturuyoruz. Taşeron kullanmadan, operatörlü kepçe filomuzla sahada kesintisiz ve kontrollü ilerliyoruz.",
      "900'ü aşkın tamamlanan proje deneyimimizle büyük metrajlı hafriyat işlerinde de aynı disiplini koruyor; proje sonunda temiz, tesviye edilmiş ve teslim edilmeye hazır bir saha bırakıyoruz.",
    ],
    trustPoints: [
      "1998'den bu yana Denizli ve Ege Bölgesi'nde faaliyet",
      "Kendi ekskavatör, loder ve damper filosu — taşeron yok",
      "Ruhsat ve mevzuata uygun, belgeli hafriyat süreci",
      "Keşif sonrası şeffaf metraj ve net teklif",
      "150'den fazla kuruma hizmet verilmiş saha tecrübesi",
    ],
    features: ["Temel kazı ve dolgu", "Kepçe ile tesviye", "Ruhsat uyumlu hafriyat", "Hızlı saha koordinasyonu", "Gece çalışma imkânı"],
    orderIndex: 1,
  },
  {
    slug: "yikim-calismalari",
    title: "Yıkım Çalışmaları",
    icon: "Hammer",
    shortDescription:
      "Kontrollü bina yıkımı, enkaz ayrıştırma ve kepçe ile enkaz kaldırma — mühendis onaylı planla.",
    fullDescription:
      "Kontrollü yıkım, enkaz ayrıştırma ve saha temizliğini mühendis onaylı planla, kendi filomuzla tek sözleşme altında yönetiyoruz.",
    detailParagraphs: [
      "Yıkım çalışmalarında güvenlik ve çevreye saygı bizim için pazarlık konusu değildir. Yıkılacak yapının statik durumu değerlendirilir, kontrollü yıkım planı hazırlanır ve sahada İSG kurallarına bağlı operasyon başlatılır.",
      "Ekskavatör ve dozer filomuzla yıkım sonrası enkaz ayrıştırma, kepçe ile yükleme ve damper nakliyesi aynı ekip tarafından koordine edilir. Komşu yapılara, trafiğe ve çevreye zarar vermeden, planlanan takvimde ilerleriz.",
      "Belediye ruhsat süreçlerinde destek sağlıyor; yıkım bitiminde enkazı kaldırılmış, tesviye edilmiş ve inşaata hazır bir zemin teslim ediyoruz.",
    ],
    trustPoints: [
      "Mühendis onaylı kontrollü yıkım planı",
      "Yıkım + enkaz kaldırma + nakliye tek elden",
      "İş güvenliği ve emniyet öncelikli saha yönetimi",
      "Belediye ruhsat ve bildirim süreçlerine uyum",
      "Belgeli moloz taşıma ve bertaraf koordinasyonu",
    ],
    features: ["Kontrollü yıkım planı", "Enkaz kaldırma ve ayrıştırma", "Kepçe ile saha temizliği", "Belediye ruhsat desteği", "Komşu yapı güvenliği"],
    orderIndex: 2,
  },
  {
    slug: "altyapi-calismalari",
    title: "Altyapı Çalışmaları",
    icon: "HardHat",
    shortDescription:
      "Kanalizasyon, yağmursuyu ve isale hatları için ekskavatör ile kanal kazısı ve geri dolgu.",
    fullDescription:
      "Belediye ve özel sektör altyapı projelerinde kanal, kollektör ve isale hattı kazısı için deneyimli hafriyat ekibimiz sahada.",
    detailParagraphs: [
      "Altyapı çalışmalarında milimetrik planlama ve düzenli saha raporlaması kritik öneme sahiptir. Kanalizasyon, yağmursuyu, isale ve şebeke bağlantı hatlarında mini ekskavatör ve kepçe filomuzla kazı, kumlama yatağı hazırlığı ve geri dolgu işlemlerini yürütüyoruz.",
      "Belediye projelerinde alt yüklenici olarak; özel sektör altyapı işlerinde ise ana yüklenici veya doğrudan işveren nezdinde çalışıyoruz. Proje mühendisliği ekipleriyle koordineli ilerleyerek hat güzergâhına uygun, güvenli kazı operasyonları gerçekleştiriyoruz.",
      "As-built raporlama, saha fotoğraflaması ve günlük ilerleme takibi ile şeffaf bir iş ilişkisi sunuyoruz.",
    ],
    trustPoints: [
      "Belediye ve özel sektör referans deneyimi",
      "Mini kepçe ile dar alan kanal kazısı kapasitesi",
      "Proje mühendisliği ile koordineli saha yönetimi",
      "Günlük ilerleme ve as-built raporlama",
      "Geri dolgu ve sıkıştırma standartlarına uyum",
    ],
    features: ["Kanal ve boru hattı kazısı", "Kepçe ile kumlama yatağı", "Şebeke bağlantı kazıları", "As-built raporlama", "Geri dolgu ve tesviye"],
    orderIndex: 3,
  },
  {
    slug: "is-makinesi-kiralama",
    title: "İş Makinesi Kiralama",
    icon: "Truck",
    shortDescription: "Ekskavatör, loder, damper ve mini ekskavatör — operatörlü hafriyat makinesi kiralama.",
    fullDescription:
      "Bakımlı, sigortalı ve operatörlü ekskavatör filomuzla günlük veya aylık esnek kiralama — acil sevkiyat imkânı.",
    detailParagraphs: [
      "İş makinesi kiralama hizmetimizde amacımız yalnızca makine göndermek değil; projenizin durmamasını sağlamaktır. Ekskavatör, loder, damper ve mini ekskavatör seçeneklerimizi operatörlü veya operatörsüz olarak sunuyoruz.",
      "Filomuz düzenli bakımdan geçer; operatörlerimiz hafriyat, yıkım ve altyapı sahalarında deneyimlidir. Denizli ve çevre illere hızlı sevkiyat yaparak acil projelerinizde aynı gün makine planlayabiliyoruz.",
      "Günlük, haftalık ve aylık kiralama seçenekleriyle bütçenize uygun, şeffaf sözleşmeli çalışıyoruz.",
    ],
    trustPoints: [
      "Operatörlü ve operatörsüz kiralama seçenekleri",
      "Bakımlı, sigortalı ekskavatör ve damper filosu",
      "Denizli merkezli hızlı sevkiyat ağı",
      "Esnek süre ve faturalı sözleşme",
      "Acil proje desteği — aynı gün makine",
    ],
    features: ["Operatörlü ekskavatör kiralama", "Günlük / aylık esnek süre", "Bakımlı kepçe filosu", "Acil sevkiyat", "Mini ekskavatör — dar alan"],
    orderIndex: 4,
  },
  {
    slug: "derin-kazi",
    title: "Derin Kazı",
    icon: "ArrowDown",
    shortDescription: "Derin temelli enkaz kaldırma, bodrum ve otopark kazıları — iksa destekli derin hafriyat.",
    fullDescription:
      "Bodrum, otopark ve endüstriyel tesislerde geoteknik raporlara uygun, iksa destekli derin hafriyat hizmeti.",
    detailParagraphs: [
      "Derin kazı projelerinde güvenlik marjı ve zemin bilimi bizim için vazgeçilmezdir. Bodrum kat, otopark, fabrika temeli ve endüstriyel tesis projelerinde geoteknik etüt raporlarına uygun kazı derinliği planlanır; iksa ve drenaj gereksinimleri koordine edilir.",
      "Derin temelli enkaz kaldırma, yan kaymayı önleyici çalışma disiplini ve günlük saha denetimi ile operasyonları yönetiyoruz. Komşu yapılara ve altyapı hatlarına zarar vermeden, kontrollü ilerliyoruz.",
      "Denizli OSB, sanayi ve konut projelerinde tamamladığımız derin kazı referanslarımızla güven veren bir saha ortağı olmayı hedefliyoruz.",
    ],
    trustPoints: [
      "Geoteknik raporlara uygun kazı planlaması",
      "İksa destekli derin hafriyat deneyimi",
      "Komşu yapı ve altyapı güvenliği önceliği",
      "Günlük saha denetimi ve ilerleme raporu",
      "Endüstriyel ve konut projelerinde referans",
    ],
    features: ["Derin temel kazısı", "Enkaz kaldırma ve iksa", "Drenaj sistemleri", "Geoteknik uyum", "OSB ve fabrika projeleri"],
    orderIndex: 5,
  },
  {
    slug: "moloz-nakliyesi",
    title: "Moloz Nakliyesi",
    icon: "Package",
    shortDescription: "Yıkım ve hafriyat molozunun kepçe ile yüklenmesi, damper ile lisanslı taşınması.",
    fullDescription:
      "Moloz yükleme, damper nakliyesi ve lisanslı bertaraf süreçlerini mevzuata uygun, belgeli şekilde yönetiyoruz.",
    detailParagraphs: [
      "Moloz nakliyesi hizmetimiz yıkım ve hafriyat operasyonlarının ayrılmaz parçasıdır. Ekskavatör kepçesi ile yükleme, damper kamyon filomuzla taşıma ve lisanslı bertaraf tesislerine sevk işlemlerini tek çatı altında koordine ediyoruz.",
      "Her sefer için tartım fişi, taşıma irsaliyesi ve gerekli çevre belgeleri düzenlenir. Moloz türüne göre ayrıştırma yapılır; mevzuata aykırı döküm veya taşıma kesinlikle uygulanmaz.",
      "Günlük sefer planı ve tonaj raporu ile proje yönetiminize şeffaf veri sunuyoruz.",
    ],
    trustPoints: [
      "Lisanslı bertaraf tesislerine yasal taşıma",
      "Tartım fişi ve irsaliye ile belgeli süreç",
      "Moloz ayrıştırma ve sınıflandırma",
      "Günlük sefer ve tonaj raporlaması",
      "Yıkım + nakliye tek sözleşme avantajı",
    ],
    features: ["Kepçe ile moloz yükleme", "Damper nakliyesi", "Belgeli taşıma", "Anlık sevkiyat planı", "Moloz ayrıştırma"],
    orderIndex: 6,
  },
  {
    slug: "kum-cakil-temini",
    title: "Kum-Çakıl Temini",
    icon: "Mountain",
    shortDescription: "Hafriyat dolgu ve tesviye için kum, çakıl ve mıcır tedariki — saha teslimatı.",
    fullDescription:
      "Kalibre edilmiş dolgu malzemelerini ocaktan temin edip ekskavatör ve damper ile doğrudan sahanıza sevk ediyoruz.",
    detailParagraphs: [
      "Hafriyat dolgu, tesviye ve zemin hazırlığı için ihtiyaç duyduğunuz kum, çakıl ve mıcır malzemelerini güvenilir ocaklardan temin ediyoruz. Malzeme kalitesi projenizin dayanıklılığını doğrudan etkilediği için tedarik zincirimizi titizlikle yönetiyoruz.",
      "Ekskavatör ve damper filomuzla malzemeyi doğrudan hafriyat sahanıza sevk ediyor; tesviye ve dolgu operasyonlarını aynı ekip koordine edebiliyor. Toplu siparişlerde proje bazlı fiyatlandırma sunuyoruz.",
      "Kalite belgesi ve teslim tutanağı ile şeffaf tedarik süreci yürütüyoruz.",
    ],
    trustPoints: [
      "Kalibre edilmiş kum, çakıl ve mıcır tedariki",
      "Ocaktan sahaya doğrudan damper sevkiyatı",
      "Kalite belgesi ve teslim tutanağı",
      "Dolgu + hafriyat operasyonu tek elden",
      "Toplu siparişte proje bazlı fiyat",
    ],
    features: ["Dolgu kumu ve mıcır", "Hafriyat sahasına teslimat", "Kalite belgesi", "Toplu sipariş indirimi", "Tesviye koordinasyonu"],
    orderIndex: 7,
  },
  {
    slug: "kanal-calismalari",
    title: "Kanal Çalışmaları",
    icon: "Waves",
    shortDescription: "Mini ekskavatör ile açık kanal kazısı, rögar ve yağmur suyu hattı çalışmaları.",
    fullDescription:
      "Yağmursuyu ve kanalizasyon hatlarında mini kepçe ile hassas kanal kazısı ve geri dolgu hizmeti.",
    detailParagraphs: [
      "Kanal çalışmalarında dar sokak, bahçe geçişi ve mevcut altyapı hatlarına yakınlık hassas operasyon gerektirir. Mini ekskavatör filomuzla açık kanal kazısı, rögar ve baca açımı, boru döşeme desteği ve geri dolgu işlemlerini yürütüyoruz.",
      "Belediye yağmursuyu ve kanalizasyon projelerinde alt yüklenici olarak; site içi altyapı işlerinde doğrudan müteahhitlerle çalışıyoruz. Mevcut hatlara zarar vermeden, proje çizimlerine sadık kalarak ilerliyoruz.",
      "Günlük kazı metrajı ve saha fotoğrafları ile şeffaf raporlama sunuyoruz.",
    ],
    trustPoints: [
      "Mini ekskavatör ile dar alan kanal kazısı",
      "Mevcut altyapı hatlarına zararsız çalışma",
      "Belediye projelerinde alt yüklenici deneyimi",
      "Rögar ve baca açımı uzmanlığı",
      "Günlük metraj ve saha raporlaması",
    ],
    features: ["Kepçe ile açık kanal kazısı", "Rögar ve baca kazısı", "Geri dolgu", "Belediye hafriyat projeleri", "Boru döşeme desteği"],
    orderIndex: 8,
  },
  {
    slug: "su-tankeri-nakliyesi",
    title: "Su Tankeri Nakliyesi",
    icon: "Droplets",
    shortDescription: "Hafriyat sahasında toz bastırma ve geçici su temini için tanker hizmeti.",
    fullDescription:
      "Hafriyat ve yıkım sahalarında toz bastırma, sulama ve geçici su temini için günlük tanker sevkiyatı.",
    detailParagraphs: [
      "Kuru hafriyat ve yıkım sahalarında toz kontrolü hem iş güvenliği hem de çevresel sorumluluk açısından zorunludur. Su tankeri hizmetimizle saha sulama, toz bastırma ve geçici su temini sağlıyoruz.",
      "Kepçe çalışması sırasında zemin nemlendirme, yıkım sonrası enkaz alanı sulama ve inşaat sahası geçici su ihtiyacı için Denizli ve çevre ilçelere günlük sevkiyat yapıyoruz.",
      "Hafriyat operasyonunuzla entegre planlama yaparak gereksiz bekleme sürelerini ortadan kaldırıyoruz.",
    ],
    trustPoints: [
      "Hafriyat sahası toz bastırma uzmanlığı",
      "Günlük ve acil su tankeri sevkiyatı",
      "Denizli ve çevre ilçelere hızlı ulaşım",
      "Hafriyat operasyonu ile entegre planlama",
      "Çevreye duyarlı saha yönetimi",
    ],
    features: ["Hafriyat sahası toz bastırma", "Kazı sahası sulama", "Acil su temini", "Günlük sevkiyat", "Yıkım sahası nemlendirme"],
    orderIndex: 9,
  },
  {
    slug: "toprak-moloz-tasima",
    title: "Toprak-Moloz Taşıma",
    icon: "Container",
    shortDescription: "Ekskavatör kepçe ile yükleme, damper ile toprak ve moloz taşımacılığı.",
    fullDescription:
      "Toprak ve moloz taşımacılığında tonaj planlaması, günlük sefer raporu ve belgeli lojistik yönetimi.",
    detailParagraphs: [
      "Hafriyat sahasından çıkan toprağın ve yıkım enkazının taşınması lojistik disiplin gerektirir. Ekskavatör ile yükleme, damperli kamyon filomuzla taşıma ve varış noktası koordinasyonunu proje bazlı planlıyoruz.",
      "Günlük sefer sayısı, tonaj raporu ve saat bazlı operasyon takibi ile işvereninize şeffaf veri sunuyoruz. Gece hafriyat ve taşıma imkânı ile proje takviminize uyum sağlıyoruz.",
      "Toprak ve moloz ayrımı yapılarak mevzuata uygun bertaraf veya dolgu sahalarına yönlendirme gerçekleştirilir.",
    ],
    trustPoints: [
      "Proje bazlı tonaj ve sefer planlaması",
      "Günlük lojistik rapor ve şeffaf takip",
      "Damperli kamyon filosu — taşeron yok",
      "Gece taşıma imkânı",
      "Toprak-moloz ayrımı ve yasal bertaraf",
    ],
    features: ["Kepçe ile yükleme", "Damperli kamyon filosu", "Tonaj planlaması", "Gece hafriyat imkânı", "Günlük sefer raporu"],
    orderIndex: 10,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
