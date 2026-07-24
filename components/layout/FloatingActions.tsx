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
    <>
      <div className="fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] right-3 z-[70] flex flex-col gap-2 lg:hidden">
        <SiteChatWidget variant="compact" />
        <WhatsAppButton variant="compact" />
      </div>

      <div className="fixed bottom-8 right-8 z-[70] hidden lg:block">
        <div className="flex w-[min(100vw-2rem,12.5rem)] flex-col gap-2 overflow-visible rounded-2xl border border-surface/80 bg-bg-primary/95 p-2 shadow-[0_16px_48px_rgba(0,0,0,0.18)] backdrop-blur-md">
          <SiteChatWidget variant="dock" />
          <WhatsAppButton variant="dock" />
        </div>
      </div>
    </>
  );
}
