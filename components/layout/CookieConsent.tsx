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
      className="fixed inset-x-3 bottom-safe-offset z-50 rounded-md border border-surface bg-bg-secondary/95 p-4 shadow-card backdrop-blur-md lg:inset-x-auto lg:bottom-6 lg:left-6 lg:max-w-md lg:pb-4"
    >
      <p className="text-sm leading-relaxed text-text-secondary">
        Deneyiminizi iyileştirmek için çerezler kullanıyoruz. Siteyi kullanmaya devam ederek{" "}
        <Link href="/kvkk" className="text-accent hover:underline">
          KVKK Aydınlatma Metni
        </Link>
        &apos;ni kabul etmiş olursunuz.
      </p>
      <div className="mt-4 flex gap-3">
        <Button onClick={accept} className="min-h-11 flex-1">
          Kabul Et
        </Button>
      </div>
    </div>
  );
}
