"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useSiteContact } from "@/components/providers/SiteContactProvider";

export function WhatsAppButton() {
  const { contactInfo } = useSiteContact();

  return (
    <div className="relative">
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/35 animate-ring-pulse" aria-hidden="true" />
      <a
        href={contactInfo.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        title={`WhatsApp Business — ${contactInfo.whatsappDisplay}`}
        aria-label={`WhatsApp Business — ${contactInfo.whatsappDisplay}`}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <WhatsAppIcon size={30} className="text-white drop-shadow-sm" />
      </a>
    </div>
  );
}
