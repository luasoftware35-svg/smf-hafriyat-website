"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const CONSENT_KEY = "smf-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Çerez onayı"
      className="fixed inset-x-3 bottom-safe-offset z-50 rounded-xl border border-surface bg-bg-primary/95 p-4 shadow-card backdrop-blur-md lg:inset-x-auto lg:bottom-6 lg:left-6 lg:max-w-md lg:pb-4"
    >
      <p className="text-sm font-medium text-text-primary">Çerez Tercihleri</p>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        Zorunlu çerezler site işlevselliği için kullanılır. Analitik çerezler yalnızca onayınızla etkinleştirilir. Ayrıntılar için{" "}
        <Link href="/cerez-politikasi" className="font-medium text-accent hover:underline">
          Çerez Politikası
        </Link>
        ,{" "}
        <Link href="/gizlilik-politikasi" className="font-medium text-accent hover:underline">
          Gizlilik Politikası
        </Link>{" "}
        ve{" "}
        <Link href="/kvkk" className="font-medium text-accent hover:underline">
          KVKK Aydınlatma Metni
        </Link>
        &apos;ne bakınız.
      </p>
      <div className="mt-4 flex gap-3">
        <Button onClick={accept} className="min-h-11 flex-1">
          Kabul Et
        </Button>
      </div>
    </div>
  );
}
