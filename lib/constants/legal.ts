import { buildCorporatePhoneLines } from "@/lib/contact/phones";
import { companyLegal, siteConfig } from "@/lib/constants/site";
import type { ContactInfoData } from "@/lib/data/contact-settings";

export const LEGAL_LAST_UPDATED = "24 Temmuz 2026";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const legalRelatedLinks = [
  { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
] as const;

export function buildDataControllerLines(contact: ContactInfoData): string[] {
  const phones = buildCorporatePhoneLines(contact);
  return [
    `Ticari unvan: ${siteConfig.legalName}`,
    `Marka / işletme adı: ${siteConfig.name}`,
    `Adres: ${contact.address.full}`,
    ...phones.map((line) => `${line.label}: ${line.display}`),
    `E-posta: ${contact.email}`,
    `Vergi dairesi: ${companyLegal.taxOffice}`,
    `Ticaret sicili: ${companyLegal.tradeRegistry}`,
  ];
}

export function buildKvkkSections(contact: ContactInfoData): LegalSection[] {
  return [
    {
      id: "giris",
      title: "1. Giriş",
      paragraphs: [
        `${siteConfig.legalName} ("Şirket") olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca veri sorumlusu sıfatıyla; web sitemiz, iletişim kanallarımız ve saha operasyonlarımız kapsamında elde edilen kişisel verilerinizin işlenmesine ilişkin sizi bilgilendirmek amacıyla bu aydınlatma metnini hazırlamış bulunmaktayız.`,
        "Bu metin; keşif talebi formu, telefon/WhatsApp/e-posta iletişimi ve sözleşme süreçlerinde işlenen kişisel veriler için geçerlidir.",
      ],
    },
    {
      id: "veri-sorumlusu",
      title: "2. Veri Sorumlusunun Kimliği",
      bullets: buildDataControllerLines(contact),
    },
    {
      id: "islenen-veriler",
      title: "3. İşlenen Kişisel Veri Kategorileri",
      bullets: [
        "Kimlik ve iletişim bilgileri: ad soyad, telefon numarası, e-posta adresi",
        "Proje bilgileri: proje türü, proje/parsel adresi, tahmini hacim, keşif tarihi tercihi, mesaj içeriği",
        "Müşteri işlem bilgileri: teklif talebi, sözleşme ve saha tutanak kayıtları",
        "İşlem güvenliği bilgileri: IP adresi, tarayıcı bilgisi, oturum kayıtları (web sitesi)",
        "Görsel ve ses kayıtları: yalnızca açık rızanız veya meşru menfaat kapsamında saha görüntüleri",
      ],
    },
    {
      id: "amaclar",
      title: "4. Kişisel Verilerin İşlenme Amaçları",
      bullets: [
        "Keşif planlaması, metraj çalışması ve yazılı teklif hazırlanması",
        "Müşteri ilişkileri yönetimi ve talep/şikâyet süreçlerinin yürütülmesi",
        "Sözleşme süreçlerinin kurulması ve ifası",
        "Muhasebe, faturalandırma ve yasal yükümlülüklerin yerine getirilmesi",
        "Bilgi güvenliği, erişim loglarının tutulması ve kötüye kullanımın önlenmesi",
        "Web sitesi performansının ölçülmesi (yalnızca çerez onayı sonrası analitik)",
      ],
    },
    {
      id: "hukuki-sebepler",
      title: "5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi",
      paragraphs: [
        "Kişisel verileriniz; web sitesi iletişim formu, telefon, WhatsApp Business, e-posta, yüz yüze görüşme ve saha ziyaretleri aracılığıyla otomatik veya otomatik olmayan yollarla toplanmaktadır.",
      ],
      bullets: [
        "KVKK m. 5/2-c: Sözleşmenin kurulması veya ifası için veri işlemenin gerekli olması",
        "KVKK m. 5/2-ç: Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi",
        "KVKK m. 5/2-f: İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaat",
        "KVKK m. 5/1: Açık rıza (analitik çerezler ve pazarlama iletişimi için, ayrıca alındığında)",
      ],
    },
    {
      id: "aktarim",
      title: "6. Kişisel Verilerin Aktarılması",
      paragraphs: [
        "Kişisel verileriniz; yalnızca belirtilen amaçlarla sınırlı olmak üzere aşağıdaki taraflara aktarılabilir:",
      ],
      bullets: [
        "Barındırma ve altyapı hizmet sağlayıcıları (Vercel, Supabase)",
        "E-posta ve bildirim hizmet sağlayıcıları",
        "Mali müşavirlik, hukuk danışmanlığı ve bağımsız denetim hizmeti alınan taraflar",
        "Yetkili kamu kurum ve kuruluşları (yasal zorunluluk halinde)",
        "Google Analytics (yalnızca çerez onayı sonrası, anonimleştirilmiş kullanım istatistikleri)",
      ],
    },
    {
      id: "saklama",
      title: "7. Veri Saklama Süreleri",
      bullets: [
        "Teklif talebi kayıtları: talebin sonuçlanmasından itibaren en fazla 2 yıl",
        "Sözleşme ve proje dosyaları: ilgili mevzuatta öngörülen süreler boyunca (genel olarak 10 yıl)",
        "Muhasebe ve finans kayıtları: Vergi Usul Kanunu kapsamında 5 yıl",
        "Web sitesi erişim logları: en fazla 1 yıl",
        "Süre sonunda veriler silinir, yok edilir veya anonim hale getirilir.",
      ],
    },
    {
      id: "guvenlik",
      title: "8. Veri Güvenliği Tedbirleri",
      paragraphs: [
        "Şirketimiz; kişisel verilerin hukuka aykırı işlenmesini ve yetkisiz erişimi önlemek amacıyla SSL/TLS şifreleme, erişim yetkilendirme, yedekleme, loglama ve personel gizlilik taahhütleri dahil teknik ve idari tedbirler uygulamaktadır.",
      ],
    },
    {
      id: "haklar",
      title: "9. İlgili Kişinin Hakları (KVKK m. 11)",
      bullets: [
        "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
        "İşlenmişse buna ilişkin bilgi talep etme",
        "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
        "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
        "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
        "KVKK m. 7 kapsamında silinmesini veya yok edilmesini isteme",
        "Düzeltme/silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme",
        "Münhasıran otomatik sistemler ile analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
        "Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde tazminat talep etme",
      ],
    },
    {
      id: "basvuru",
      title: "10. Başvuru Yöntemi",
      paragraphs: [
        `KVKK kapsamındaki taleplerinizi; kimliğinizi doğrulayacak bilgi ve belgelerle birlikte ${contact.email} e-posta adresine veya ${contact.address.full} posta adresine iletebilirsiniz.`,
        "Başvurular en geç 30 gün içinde sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde Kişisel Verileri Koruma Kurulu tarifesindeki ücret uygulanabilir.",
        "Kurul'a şikâyet hakkınız saklıdır.",
      ],
    },
  ];
}

export function buildPrivacySections(contact: ContactInfoData): LegalSection[] {
  return [
    {
      id: "giris",
      title: "1. Giriş",
      paragraphs: [
        `${siteConfig.legalName} ("Şirket", "biz") olarak ${siteConfig.url} alan adlı web sitesini ziyaret eden ve hizmetlerimizden yararlanan kişilerin gizliliğine önem veriyoruz.`,
        "Bu Gizlilik Politikası; hangi verileri topladığımızı, nasıl kullandığımızı ve haklarınızı açıklar. Kişisel veri işleme süreçlerimiz hakkında ayrıntılı bilgi için KVKK Aydınlatma Metni'ne bakınız.",
      ],
    },
    {
      id: "kapsam",
      title: "2. Kapsam",
      paragraphs: [
        "Bu politika; web sitemiz, iletişim formu, telefon/WhatsApp/e-posta kanalları ve saha hizmetleri kapsamında işlenen kişisel veriler için geçerlidir.",
      ],
    },
    {
      id: "toplanan-veriler",
      title: "3. Toplanan Veriler",
      bullets: [
        "Form verileri: ad, telefon, e-posta, proje bilgileri, mesaj",
        "Teknik veriler: IP adresi, tarayıcı türü, cihaz bilgisi, sayfa görüntüleme",
        "İletişim kayıtları: telefon, WhatsApp ve e-posta yazışmaları",
        "Çerez ve benzeri teknolojiler: ayrıntılar için Çerez Politikası",
      ],
    },
    {
      id: "kullanim",
      title: "4. Verilerin Kullanım Amaçları",
      bullets: buildKvkkSections(contact)[3].bullets ?? [],
    },
    {
      id: "paylasim",
      title: "5. Veri Paylaşımı",
      paragraphs: [
        "Verileriniz yalnızca hizmetin gerektirdiği ölçüde ve sözleşmesel gizlilik yükümlülükleri altındaki tedarikçilerimizle paylaşılır. Verileriniz reklam amacıyla üçüncü taraflara satılmaz.",
      ],
    },
    {
      id: "guvenlik",
      title: "6. Veri Güvenliği",
      paragraphs: [
        "Web sitemiz HTTPS ile korunmaktadır. Veri tabanı erişimleri rol bazlı yetkilendirme ile sınırlandırılmıştır. Personelimize gizlilik ve veri minimizasyonu eğitimi verilmektedir.",
      ],
    },
    {
      id: "haklar",
      title: "7. Haklarınız",
      paragraphs: [
        "KVKK kapsamındaki tüm haklarınız saklıdır. Taleplerinizi Veri Sorumlusuna aşağıdaki iletişim kanallarından iletebilirsiniz.",
      ],
      bullets: buildDataControllerLines(contact),
    },
    {
      id: "degisiklik",
      title: "8. Politika Değişiklikleri",
      paragraphs: [
        `Bu politika ${LEGAL_LAST_UPDATED} tarihinde güncellenmiştir. Değişiklikler bu sayfada yayımlanır; önemli güncellemelerde gerekli görüldüğünde ek bilgilendirme yapılır.`,
      ],
    },
  ];
}

export function buildCookieSections(): LegalSection[] {
  return [
    {
      id: "nedir",
      title: "1. Çerez Nedir?",
      paragraphs: [
        "Çerezler; web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Site işlevselliğini sağlamak, güvenliği artırmak ve (onayınızla) kullanım istatistiklerini ölçmek için kullanılabilir.",
      ],
    },
    {
      id: "turler",
      title: "2. Kullandığımız Çerez Türleri",
      bullets: [
        "Zorunlu çerezler: oturum yönetimi, güvenlik ve form işlevselliği için gereklidir; devre dışı bırakılamaz.",
        "Analitik çerezler: Google Analytics aracılığıyla anonimleştirilmiş ziyaret istatistikleri; yalnızca onay sonrası yüklenir.",
        "Yerel depolama (localStorage): çerez tercihinizi hatırlamak için smf-cookie-consent anahtarı kullanılır.",
      ],
    },
    {
      id: "google-analytics",
      title: "3. Google Analytics",
      paragraphs: [
        "Onay vermeniz hâlinde Google Analytics ile sayfa görüntüleme, oturum süresi ve trafik kaynağı gibi toplu istatistikler toplanır. Google'ın veri işleme politikası için policies.google.com adresini inceleyebilirsiniz.",
      ],
    },
    {
      id: "yonetim",
      title: "4. Çerez Tercihlerinizi Yönetme",
      bullets: [
        "Site altındaki çerez bildiriminden Kabul Et seçeneği ile analitik çerezlere onay verebilirsiniz.",
        "Tarayıcı ayarlarından çerezleri silebilir veya engelleyebilirsiniz; bu durumda bazı site özellikleri kısıtlanabilir.",
        "Chrome: Ayarlar → Gizlilik ve güvenlik → Çerezler",
        "Safari: Tercihler → Gizlilik → Çerezleri yönet",
      ],
    },
    {
      id: "guncelleme",
      title: "5. Güncellemeler",
      paragraphs: [
        `Bu Çerez Politikası ${LEGAL_LAST_UPDATED} tarihinde güncellenmiştir.`,
      ],
    },
  ];
}

export function buildTermsSections(contact: ContactInfoData): LegalSection[] {
  return [
    {
      id: "kabul",
      title: "1. Koşulların Kabulü",
      paragraphs: [
        `${siteConfig.url} web sitesini kullanarak bu Kullanım Koşulları'nı kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız siteyi kullanmayınız.`,
      ],
    },
    {
      id: "hizmet",
      title: "2. Hizmet Tanımı",
      paragraphs: [
        `${siteConfig.name}; hafriyat, yıkım, kazı, dolgu ve ilgili saha hizmetleri sunan ${siteConfig.legalName} bünyesinde faaliyet gösteren kurumsal bir işletmedir. Web sitesindeki bilgiler genel bilgilendirme amaçlıdır; bağlayıcı teklif yazılı metraj ve resmi sözleşme ile oluşur.`,
      ],
    },
    {
      id: "fikri-mulkiyet",
      title: "3. Fikri Mülkiyet",
      paragraphs: [
        "Site içeriği, logo, görseller, metinler ve tasarım unsurları Şirket'e veya lisans verenlerine aittir. İzinsiz kopyalama, çoğaltma veya ticari kullanım yasaktır.",
      ],
    },
    {
      id: "sorumluluk",
      title: "4. Sorumluluk Sınırı",
      paragraphs: [
        "Site 'olduğu gibi' sunulmaktadır. Teknik kesinti, güncelleme veya üçüncü taraf bağlantılarından doğabilecek zararlardan Şirket sorumlu tutulamaz. Dış bağlantıların içeriğinden bağlantı verilen siteler sorumludur.",
      ],
    },
    {
      id: "iletisim",
      title: "5. İletişim",
      bullets: buildDataControllerLines(contact),
    },
    {
      id: "hukuk",
      title: "6. Uygulanacak Hukuk",
      paragraphs: [
        "Bu koşullarda Türkiye Cumhuriyeti hukuku uygulanır. Uyuşmazlıklarda Denizli Mahkemeleri ve İcra Daireleri yetkilidir.",
        `Son güncelleme: ${LEGAL_LAST_UPDATED}`,
      ],
    },
  ];
}
