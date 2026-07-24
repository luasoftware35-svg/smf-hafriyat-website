"use client";

import { usePathname } from "next/navigation";
import { SiteChatWidget } from "@/components/layout/SiteChatWidget";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export function FloatingActions() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="fixed bottom-[calc(6.25rem+env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] z-[60] flex flex-col items-end gap-3 pb-safe lg:bottom-6 lg:right-6 lg:pb-0">
      <SiteChatWidget />
      <WhatsAppButton />
    </div>
  );
}
