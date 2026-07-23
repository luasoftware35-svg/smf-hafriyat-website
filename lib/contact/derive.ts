import type { ContactInfoData } from "@/lib/data/contact-settings";

export function buildCtaLinks(contactInfo: ContactInfoData) {
  return {
    quote: { label: "Keşif Talep Edin", href: "/iletisim" },
    call: { label: "Hemen Ara", href: contactInfo.phoneHref },
  } as const;
}

export function buildQuickContactChannels(contactInfo: ContactInfoData) {
  return [
    { label: "WhatsApp", href: contactInfo.whatsappHref, icon: "whatsapp" as const },
    { label: "Instagram", href: contactInfo.instagram, icon: "instagram" as const },
    { label: "Telefon", href: contactInfo.phoneHref, icon: "phone" as const },
  ] as const;
}

export function buildSocialLinks(contactInfo: ContactInfoData) {
  return [
    { label: "Instagram", href: contactInfo.instagram },
    { label: "Google Haritalar", href: contactInfo.mapLink },
  ] as const;
}
