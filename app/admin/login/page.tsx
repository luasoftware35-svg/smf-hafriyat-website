import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { isSupabaseConfigured } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Admin Giriş",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  const configured = isSupabaseConfigured();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b1220] px-4 py-10 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111827] p-8 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-accent">SMF Hafriyat</p>
        <h1 className="mt-2 font-heading text-3xl">Admin Paneli</h1>
        <p className="mt-2 text-sm text-white/55">İçerik, form talepleri ve site istatistiklerini buradan yönetin.</p>

        {!configured ? (
          <div className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
            Supabase ortam değişkenleri tanımlı değil. `.env.local` dosyasına Supabase URL ve anon key ekleyin.
          </div>
        ) : (
          <div className="mt-6">
            <Suspense fallback={<div className="text-sm text-white/50">Form yükleniyor...</div>}>
              <AdminLoginForm />
            </Suspense>
          </div>
        )}

        <Link href="/" className="mt-6 block text-center text-sm text-white/45 hover:text-accent">
          ← Siteye dön
        </Link>
      </div>
    </div>
  );
}
