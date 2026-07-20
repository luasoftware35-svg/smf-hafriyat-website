"use client";

import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { ctaLinks } from "@/lib/constants/site";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-surface glass pb-safe lg:hidden">
      <div className="mx-auto flex max-w-lg gap-3 p-3">
        <Link
          href={ctaLinks.call.href}
          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md border border-surface bg-bg-primary text-sm font-semibold text-text-primary transition-colors hover:border-accent active:scale-[0.98]"
        >
          <Phone size={16} aria-hidden="true" />
          Ara
        </Link>
        <Link
          href={ctaLinks.quote.href}
          className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md bg-accent text-sm font-semibold text-accent-foreground shadow-card transition-transform active:scale-[0.98]"
        >
          <FileText size={16} aria-hidden="true" />
          Teklif Al
        </Link>
      </div>
    </div>
  );
}
