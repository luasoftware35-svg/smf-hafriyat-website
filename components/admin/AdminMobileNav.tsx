"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { cn } from "@/lib/utils";

type AdminMobileNavProps = {
  userEmail?: string | null;
};

export function AdminMobileNav({ userEmail }: AdminMobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:bg-white/8 lg:hidden"
        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          aria-label="Menüyü kapat"
          onClick={() => setOpen(false)}
        />

        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[min(100%,18rem)] pt-safe pb-safe transition-transform duration-300",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <AdminSidebar userEmail={userEmail} onNavigate={() => setOpen(false)} />
        </div>
      </div>
    </>
  );
}
