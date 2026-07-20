export type Service = {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
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
      "Denizli'deki büyük metrajlı hafriyat, dekapaj, temel kazısı ve saha tesviye işlerinize kendi ekskavatör filomuz ve deneyimli operatör kadromuzla hızlı teklif sunuyoruz. Ruhsat süreçlerine uygun, kepçe operasyonlarıyla sahada kesintisiz çalışıyoruz.",
    features: ["Temel kazı ve dolgu", "Kepçe ile tesviye", "Ruhsat uyumlu hafriyat", "Hızlı saha koordinasyonu"],
    orderIndex: 1,
  },
  {
    slug: "yikim-calismalari",
    title: "Yıkım Çalışmaları",
    icon: "Hammer",
    shortDescription:
      "Kontrollü bina yıkımı, enkaz ayrıştırma ve kepçe ile enkaz kaldırma — mühendis onaylı planla.",
    fullDescription:
      "Yıkılması planlanan yapının statik durumu mühendislerimizce kontrol edilerek kontrollü yıkım planlanır. Ekskavatör ve dozer ile enkaz kaldırma, ayrıştırma ve damper nakliyesi aynı ekip tarafından yönetilir.",
    features: ["Kontrollü yıkım planı", "Enkaz kaldırma ve ayrıştırma", "Kepçe ile saha temizliği", "Belediye ruhsat desteği"],
    orderIndex: 2,
  },
  {
    slug: "altyapi-calismalari",
    title: "Altyapı Çalışmaları",
    icon: "HardHat",
    shortDescription:
      "Kanalizasyon, yağmursuyu ve isale hatları için ekskavatör ile kanal kazısı ve geri dolgu.",
    fullDescription:
      "Atıksu, yağmursuyu hatları, ana kollektörler ve isale hatları kazı işlerinde mini ekskavatör ve kepçe filomuzla çalışıyoruz. Belediye ve özel sektör altyapı projelerinde deneyimli hafriyat ekibimiz sahada.",
    features: ["Kanal ve boru hattı kazısı", "Kepçe ile kumlama yatağı", "Şebeke bağlantı kazıları", "As-built raporlama"],
    orderIndex: 3,
  },
  {
    slug: "is-makinesi-kiralama",
    title: "İş Makinesi Kiralama",
    icon: "Truck",
    shortDescription: "Ekskavatör, loder, damper ve mini ekskavatör — operatörlü hafriyat makinesi kiralama.",
    fullDescription:
      "Hafriyat, yıkım ve kazı projeleriniz için operatörlü veya operatörsüz ekskavatör, loder, damper ve mini ekskavatör kiralama hizmeti sunuyoruz. Bakımlı filomuz ve acil sevkiyat kapasitemizle sahanız durmaz.",
    features: ["Operatörlü ekskavatör kiralama", "Günlük / aylık esnek süre", "Bakımlı kepçe filosu", "Acil sevkiyat"],
    orderIndex: 4,
  },
  {
    slug: "derin-kazi",
    title: "Derin Kazı",
    icon: "ArrowDown",
    shortDescription: "Derin temelli enkaz kaldırma, bodrum ve otopark kazıları — iksa destekli derin hafriyat.",
    fullDescription:
      "Derin temelli enkaz kaldırma, bodrum, otopark ve endüstriyel tesisler için derin kazı projelerinde ekskavatör ve iksa ekipmanlarıyla çalışıyoruz. Zemin etüdü raporlarına uygun kazı derinliği ve güvenlik protokollerini titizlikle uyguluyoruz.",
    features: ["Derin temel kazısı", "Enkaz kaldırma ve iksa", "Drenaj sistemleri", "Geoteknik uyum"],
    orderIndex: 5,
  },
  {
    slug: "moloz-nakliyesi",
    title: "Moloz Nakliyesi",
    icon: "Package",
    shortDescription: "Yıkım ve hafriyat molozunun kepçe ile yüklenmesi, damper ile lisanslı taşınması.",
    fullDescription:
      "Yıkım ve hafriyat molozunun ekskavatör kepçesi ile yüklenmesi, damper kamyon filomuzla lisanslı bertaraf tesislerine nakliyesi. Tartım fişi, taşıma irsaliyesi ve çevre mevzuatına uygun belgelendirme sağlıyoruz.",
    features: ["Kepçe ile moloz yükleme", "Damper nakliyesi", "Belgeli taşıma", "Anlık sevkiyat planı"],
    orderIndex: 6,
  },
  {
    slug: "kum-cakil-temini",
    title: "Kum-Çakıl Temini",
    icon: "Mountain",
    shortDescription: "Hafriyat dolgu ve tesviye için kum, çakıl ve mıcır tedariki — saha teslimatı.",
    fullDescription:
      "Hafriyat dolgu, tesviye ve saha hazırlığı için kalibre edilmiş kum, çakıl ve mıcır malzemelerini doğrudan ocaktan temin ederek ekskavatör ve damper ile sahaya sevk ediyoruz.",
    features: ["Dolgu kumu ve mıcır", "Hafriyat sahasına teslimat", "Kalite belgesi", "Toplu sipariş indirimi"],
    orderIndex: 7,
  },
  {
    slug: "kanal-calismalari",
    title: "Kanal Çalışmaları",
    icon: "Waves",
    shortDescription: "Mini ekskavatör ile açık kanal kazısı, rögar ve yağmur suyu hattı çalışmaları.",
    fullDescription:
      "Yağmur suyu ve kanalizasyon kanallarında mini ekskavatör ile kazı, boru döşeme desteği ve kepçe ile geri dolgu işlemlerini yürütüyoruz. Belediye altyapı hafriyat projelerinde alt yüklenici olarak çalışıyoruz.",
    features: ["Kepçe ile açık kanal kazısı", "Rögar ve baca kazısı", "Geri dolgu", "Belediye hafriyat projeleri"],
    orderIndex: 8,
  },
  {
    slug: "su-tankeri-nakliyesi",
    title: "Su Tankeri Nakliyesi",
    icon: "Droplets",
    shortDescription: "Hafriyat sahasında toz bastırma ve geçici su temini için tanker hizmeti.",
    fullDescription:
      "Kuru hafriyat ve yıkım sahalarında toz bastırma, kepçe çalışması sırasında saha sulama ve geçici su temini için su tankeri hizmeti sunuyoruz. Denizli ve çevre ilçelere hızlı sevkiyat yapıyoruz.",
    features: ["Hafriyat sahası toz bastırma", "Kazı sahası sulama", "Acil su temini", "Günlük sevkiyat"],
    orderIndex: 9,
  },
  {
    slug: "toprak-moloz-tasima",
    title: "Toprak-Moloz Taşıma",
    icon: "Container",
    shortDescription: "Ekskavatör kepçe ile yükleme, damper ile toprak ve moloz taşımacılığı.",
    fullDescription:
      "Hafriyat sahasından çıkan toprağın ve yıkım enkazının ekskavatör ile yüklenmesi, damperli kamyon filomuzla taşınması ve lojistik yönetimi. Proje bazlı tonaj planlaması ve günlük sefer raporu sunuyoruz.",
    features: ["Kepçe ile yükleme", "Damperli kamyon filosu", "Tonaj planlaması", "Gece hafriyat imkânı"],
    orderIndex: 10,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
