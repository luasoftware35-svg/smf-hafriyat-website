export type ChatbotAction = {
  label: string;
  href?: string;
  whatsapp?: boolean;
  topicId?: string;
};

export type ChatbotTopic = {
  id: string;
  label: string;
  response: string;
  actions?: ChatbotAction[];
};

export const chatbotWelcome =
  "Merhaba! SMF Hafriyat'a hoş geldiniz. Hafriyat, yıkım veya keşif talebiniz için size yardımcı olabilirim.";

export const chatbotTopics: ChatbotTopic[] = [
  {
    id: "quote",
    label: "Teklif ve keşif",
    response:
      "Ücretsiz saha keşfi planlayabiliriz. Parsel adresi ve proje türünü paylaşın; aynı gün geri dönüş hedefliyoruz. Formu doldurabilir veya WhatsApp Business hattımızdan yazabilirsiniz.",
    actions: [
      { label: "Keşif formu", href: "/iletisim" },
      { label: "WhatsApp'tan yaz", whatsapp: true },
    ],
  },
  {
    id: "services",
    label: "Hizmetler",
    response:
      "Hafriyat, yıkım, derin kazı, altyapı, enkaz kaldırma ve iş makinesi kiralama hizmetleri sunuyoruz. Detaylı bilgi için hizmetler sayfamıza göz atın.",
    actions: [
      { label: "Hizmetleri gör", href: "/hizmetler" },
      { label: "WhatsApp'tan yaz", whatsapp: true },
    ],
  },
  {
    id: "fleet",
    label: "Filo ve ekipman",
    response:
      "13 araçlık kendi filomuz var: Case, Volvo, Hyundai, Kobelco, JCB, Hidromek ve Youtop markalı ekskavatör, loder ve mini kepçe. Taşeronsuz, operatörlü sevkiyat yapıyoruz.",
    actions: [
      { label: "Filo listesi", href: "/filo" },
      { label: "WhatsApp'tan yaz", whatsapp: true },
    ],
  },
  {
    id: "hours",
    label: "Çalışma saatleri",
    response:
      "Pazartesi – Cumartesi: 08:00 – 18:00\nPazar: Kapalı\n\nMesai saatleri dışında WhatsApp Business üzerinden mesaj bırakabilirsiniz; en kısa sürede dönüş yapılır.",
    actions: [{ label: "WhatsApp'tan yaz", whatsapp: true }],
  },
  {
    id: "contact",
    label: "Telefon ve adres",
    response:
      "Merkez ofisimiz Yeni Mah. Menderes Bulvarı No:7/A D:3, Merkezefendi, Denizli. Telefon, e-posta ve harita bilgileri iletişim sayfamızda.",
    actions: [
      { label: "İletişim sayfası", href: "/iletisim" },
      { label: "WhatsApp'tan yaz", whatsapp: true },
    ],
  },
];

export const chatbotMenuPrompt = "Konu seçin — detaylı teklif için formu veya WhatsApp hattını kullanabilirsiniz:";
