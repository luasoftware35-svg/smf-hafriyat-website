"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, FileText } from "lucide-react";
import { brand } from "@/lib/constants/brand";
import { ctaLinks } from "@/lib/constants/site";

export function StickyMobileCta() {
  const pathname = usePathname();
  const quoteLabel =
    pathname.startsWith("/hizmetler/") && pathname !== "/hizmetler"
      ? "Bu İş İçin Teklif Al"
      : pathname === "/iletisim"
        ? "Keşif Talebi Bırak"
        : ctaLinks.quote.label;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-surface glass pb-safe lg:hidden">
      <div className="mx-auto max-w-lg px-3 pb-3 pt-2">
        <p className="mb-2 text-center text-[11px] font-medium text-text-secondary">
          {brand.responsePromises[0]} · {brand.proofStrip[2]}
        </p>
        <div className="flex gap-3">
        <Link
          href={ctaLinks.call.href}
          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md border border-surface bg-bg-primary text-sm font-semibold text-text-primary transition-colors hover:border-accent active:scale-[0.98]"
        >
          <Phone size={16} aria-hidden="true" />
          Hemen Arayın
        </Link>
        <Link
          href={ctaLinks.quote.href}
          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md bg-accent text-sm font-semibold text-accent-foreground shadow-card transition-transform active:scale-[0.98]"
        >
          <FileText size={16} aria-hidden="true" />
          {quoteLabel}
        </Link>
        </div>
      </div>
    </div>
  );
}
