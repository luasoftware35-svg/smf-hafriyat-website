export const whatsappDefaultMessage =
  "Merhaba, SMF Hafriyat resmi web sitesi üzerinden iletişime geçiyorum.\n\nKonu: Hafriyat / yıkım teklif talebi\nProje adresi / ilçe:\nTahmini kapsam:\n\nKeşif ve yazılı teklif rica ederim. İyi çalışmalar.";

export const whatsappBridgePath = "/whatsapp";

export function buildWhatsAppDirectUrl(phone: string, message: string = whatsappDefaultMessage): string {
  const normalized = phone.replace(/\D/g, "");
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

export function resolveWhatsAppContact(input: {
  whatsapp: string;
  whatsappHref?: string;
  whatsappMessage?: string;
}) {
  const whatsappMessage = input.whatsappMessage ?? whatsappDefaultMessage;
  const whatsappHref =
    input.whatsappHref?.startsWith("http") || !input.whatsappHref ? whatsappBridgePath : input.whatsappHref;

  return {
    whatsappMessage,
    whatsappHref,
    whatsappDirectHref: buildWhatsAppDirectUrl(input.whatsapp, whatsappMessage),
  };
}
