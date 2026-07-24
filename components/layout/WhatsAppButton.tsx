"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useSiteContact } from "@/components/providers/SiteContactProvider";

export function WhatsAppButton() {
  const { contactInfo } = useSiteContact();

  return (
    <a
      href={contactInfo.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp Business — ${contactInfo.whatsappDisplay}`}
      className="flex w-full min-w-[11.5rem] items-center gap-3 rounded-xl bg-[#25D366] px-3 py-2.5 text-white shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
        <WhatsAppIcon size={24} className="text-white" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-tight">WhatsApp</span>
        <span className="block text-[11px] leading-tight text-white/85">{contactInfo.whatsappDisplay}</span>
      </span>
    </a>
  );
}
