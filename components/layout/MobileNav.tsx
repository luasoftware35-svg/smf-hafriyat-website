"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, FileText, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { ctaLinks, navLinks, contactInfo } from "@/lib/constants/site";
import { brand } from "@/lib/constants/brand";
import { Button } from "@/components/ui/Button";
import { handleHashLinkClick } from "@/lib/utils/hash";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
};

export function MobileNav({ isOpen, onClose, pathname }: MobileNavProps) {
  const [expandedHref, setExpandedHref] = useState<string | null>(null);

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

            <nav aria-label="Mobil navigasyon" className="flex-1 overflow-y-auto">
              <div className="mb-5 rounded-xl border border-surface bg-bg-secondary/75 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Denizli Hafriyat</p>
                <p className="mt-2 text-sm font-medium text-text-primary">Yeni Mah. Menderes Bulvari No:7/A D:3</p>
                <p className="mt-1 text-sm text-text-secondary">Ayni gun kesif · Kendi filo · Belgeli surec</p>
                <div className="mt-3 flex items-start gap-2 text-sm text-text-secondary">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{contactInfo.address.district}, {contactInfo.address.city}</span>
                </div>
              </div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => {
                  const hasChildren = Boolean(link.children?.length);
                  const expanded = expandedHref === link.href;

                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className={cn(
                              "flex flex-1 items-center rounded-md px-4 py-3.5 text-base font-medium transition-colors",
                              isActive(link.href)
                                ? "bg-accent/10 text-accent"
                                : "text-text-primary hover:bg-surface/60 hover:text-accent",
                            )}
                          >
                            {link.label}
                          </Link>
                          {hasChildren && (
                            <button
                              type="button"
                              onClick={() => setExpandedHref(expanded ? null : link.href)}
                              className="mr-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-text-secondary hover:bg-surface/60 hover:text-accent"
                              aria-expanded={expanded}
                              aria-label={`${link.label} alt menü`}
                            >
                              <ChevronDown
                                size={18}
                                className={cn("transition-transform duration-200", expanded && "rotate-180")}
                                aria-hidden="true"
                              />
                            </button>
                          )}
                        </div>

                        {hasChildren && expanded && (
                          <ul className="mb-1 ml-3 border-l border-surface pl-3">
                            {link.children!.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={(event) => {
                                    handleHashLinkClick(event, child.href, pathname, onClose);
                                    if (!event.defaultPrevented) onClose();
                                  }}
                                  className="block rounded-md px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-accent/10 hover:text-accent"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-3 border-t border-surface pt-6">
              <div className="rounded-lg border border-surface bg-bg-secondary/60 px-4 py-3 text-sm text-text-secondary">
                <p className="font-medium text-text-primary">{brand.responsePromises[0]}</p>
                <p className="mt-1">{brand.responsePromises[1]}</p>
              </div>
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
