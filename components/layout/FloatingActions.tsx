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
    <div className="fixed bottom-[calc(6.5rem+env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] z-[60] pb-safe lg:bottom-8 lg:right-8 lg:pb-0">
      <div className="flex w-[min(100vw-2rem,12.5rem)] flex-col gap-2 overflow-hidden rounded-2xl border border-surface/80 bg-bg-primary/95 p-2 shadow-[0_16px_48px_rgba(0,0,0,0.18)] backdrop-blur-md">
        <SiteChatWidget />
        <WhatsAppButton />
      </div>
    </div>
  );
}
