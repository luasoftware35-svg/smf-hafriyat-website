"use client";

import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useSiteContact } from "@/components/providers/SiteContactProvider";

export function WhatsAppButton() {
  const pathname = usePathname();
  const { contactInfo } = useSiteContact();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="fixed bottom-[calc(6.25rem+env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] z-50 pb-safe lg:bottom-6 lg:right-5 lg:pb-0">
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ring-pulse" aria-hidden="true" />
      <a
        href={contactInfo.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp Business — ${contactInfo.whatsappDisplay}`}
        className="relative flex h-[3.75rem] w-[3.75rem] min-h-11 min-w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <WhatsAppIcon size={34} className="text-white drop-shadow-sm" />
      </a>
      <span className="pointer-events-none absolute -top-11 right-0 hidden rounded-full bg-[#075E54] px-3 py-1.5 text-xs font-semibold text-white shadow-lg lg:block">
        WhatsApp
      </span>
    </div>
  );
}
