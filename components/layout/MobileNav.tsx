"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { ctaLinks, navLinks } from "@/lib/constants/site";
import { Button } from "@/components/ui/Button";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
};

export function MobileNav({ isOpen, onClose, pathname }: MobileNavProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobil menü">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-accent-foreground/40 backdrop-blur-sm"
            aria-label="Menüyü kapat"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="absolute right-0 top-0 flex h-full w-[min(100%,340px)] flex-col glass p-6 shadow-2xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-heading text-lg text-text-primary">Menü</span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-text-secondary hover:bg-surface/60 hover:text-accent"
                aria-label="Menüyü kapat"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobil navigasyon" className="flex-1">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center rounded-md px-4 py-3.5 text-base font-medium transition-colors",
                        isActive(link.href)
                          ? "bg-accent/10 text-accent"
                          : "text-text-primary hover:bg-surface/60 hover:text-accent",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-3 border-t border-surface pt-6">
              <Button href={ctaLinks.quote.href} onClick={onClose} className="w-full">
                <FileText size={16} aria-hidden="true" />
                {ctaLinks.quote.label}
              </Button>
              <Button href={ctaLinks.call.href} variant="secondary" onClick={onClose} className="w-full">
                <Phone size={16} aria-hidden="true" />
                {ctaLinks.call.label}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
