"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, FileText } from "lucide-react";
import { brand } from "@/lib/constants/brand";
import { useSiteContact } from "@/components/providers/SiteContactProvider";

export function StickyMobileCta() {
  const { ctaLinks } = useSiteContact();
  const pathname = usePathname();

  if (pathname === "/iletisim" || pathname.startsWith("/admin")) {
    return null;
  }
  const quoteLabel =
    pathname.startsWith("/hizmetler/") && pathname !== "/hizmetler"
      ? "Teklif Al"
      : pathname === "/iletisim"
        ? "Keşif Talep Et"
        : "Teklif Al";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-surface glass pb-safe lg:hidden">
      <div className="mx-auto max-w-lg px-3 pb-3 pt-2">
        <p className="mb-2 truncate text-center text-[11px] font-medium text-text-secondary">
          {brand.responsePromises[0]} · {brand.proofStrip[2]}
        </p>
        <div className="flex gap-2 sm:gap-3">
        <Link
          href={ctaLinks.call.href}
          className="flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-md border border-surface bg-bg-primary px-2 text-sm font-semibold text-text-primary transition-colors hover:border-accent active:scale-[0.98] sm:px-3"
        >
          <Phone size={16} className="shrink-0" aria-hidden="true" />
          <span className="truncate">Ara</span>
        </Link>
        <Link
          href={ctaLinks.quote.href}
          className="flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-md bg-accent px-2 text-sm font-semibold text-accent-foreground shadow-card transition-transform active:scale-[0.98] sm:px-3"
          title={quoteLabel}
        >
          <FileText size={16} className="shrink-0" aria-hidden="true" />
          <span className="truncate">{quoteLabel}</span>
        </Link>
        </div>
      </div>
    </div>
  );
}
