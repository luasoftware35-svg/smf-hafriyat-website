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

export const corporatePhoneCopy = {
  main: "0258 377 80 80",
  whatsappAccounting: "0541 156 06 64",
  mobile: "0533 353 22 53",
} as const;
