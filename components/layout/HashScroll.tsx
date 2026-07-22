"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHashWithRetry } from "@/lib/utils/hash";

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    scrollToHashWithRetry(`${pathname}${hash}`);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      scrollToHashWithRetry(`${window.location.pathname}${hash}`);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
