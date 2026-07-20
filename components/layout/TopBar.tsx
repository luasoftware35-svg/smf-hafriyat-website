import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { contactInfo, ctaLinks } from "@/lib/constants/site";

export function TopBar() {
  return (
    <div className="relative overflow-hidden border-b border-surface/80 bg-accent-foreground text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,160,32,0.15)_0%,transparent_50%,rgba(245,160,32,0.1)_100%)]" />
      <div className="relative mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-2.5 text-xs sm:justify-between sm:text-sm">
        <p className="flex items-center gap-2 font-medium">
          <Sparkles size={14} className="text-accent" aria-hidden="true" />
          <span>Denizli & Ege Bölgesi&apos;nde aynı gün ücretsiz keşif</span>
        </p>
        <div className="flex items-center gap-4">
          <a href={contactInfo.phoneHref} className="inline-flex min-h-11 items-center font-mono transition-colors hover:text-accent">
            {contactInfo.phoneDisplay}
          </a>
          <Link
            href={ctaLinks.quote.href}
            className="inline-flex min-h-11 items-center gap-1 font-semibold text-accent transition-opacity hover:opacity-80"
          >
            Teklif Al
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
