"use client";

import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/constants/site";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-[5.5rem] right-4 z-50 pb-safe sm:right-5 lg:bottom-6 lg:pb-0">
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ring-pulse" aria-hidden="true" />
      <a
        href={contactInfo.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="relative flex h-14 w-14 min-h-11 min-w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <MessageCircle size={26} aria-hidden="true" />
      </a>
      <span className="pointer-events-none absolute -top-10 right-0 hidden rounded-md bg-accent-foreground px-3 py-1.5 text-xs font-medium text-white shadow-lg lg:block">
        WhatsApp
      </span>
    </div>
  );
}
