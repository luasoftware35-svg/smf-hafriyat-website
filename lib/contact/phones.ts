import { contactInfo } from "@/lib/constants/site";
import type { ContactInfoData } from "@/lib/data/contact-settings";

export type CorporatePhoneLine = {
  label: string;
  display: string;
  href: string;
};

export function buildCorporatePhoneLines(contact: ContactInfoData): CorporatePhoneLine[] {
  return [
    { label: "Merkez Hat", display: contact.phoneDisplay, href: contact.phoneHref },
    { label: "WhatsApp & Muhasebe", display: contact.whatsappDisplay, href: contact.whatsappHref },
    { label: "Mobil Hat", display: contact.phoneSecondary, href: contact.phoneSecondaryHref },
  ];
}

/** Metin içerikleri için tek kaynak — FAQ, SEO landing vb. */
export function contactCopy() {
  return {
    main: contactInfo.phoneDisplay,
    whatsappAccounting: contactInfo.whatsappDisplay,
    mobile: contactInfo.phoneSecondary,
    mainCall: `${contactInfo.phoneDisplay} merkez hattımızdan`,
    mainCallShort: `${contactInfo.phoneDisplay} merkez hattından`,
    fullChannels: `${contactInfo.phoneDisplay} merkez hattından, WhatsApp & Muhasebe (${contactInfo.whatsappDisplay}) üzerinden, mobil hat (${contactInfo.phoneSecondary})`,
    urgentLine: `${contactInfo.phoneDisplay} merkez hattından veya WhatsApp & Muhasebe (${contactInfo.whatsappDisplay}) üzerinden`,
  };
}
