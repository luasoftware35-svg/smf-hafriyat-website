import { AdminShell } from "@/components/admin/AdminShell";
import { AdminCard } from "@/components/admin/AdminTable";
import { SeedDatabaseButton } from "@/components/admin/SeedDatabaseButton";
import { requireAdmin } from "@/lib/admin/auth";
import { isServiceRoleConfigured, isSupabaseConfigured } from "@/lib/supabase/server";

export default async function AdminSettingsPage() {
  const user = await requireAdmin();
  const supabaseReady = isSupabaseConfigured();
  const serviceRoleReady = isServiceRoleConfigured();

  return (
    <AdminShell
      userEmail={user.email}
      title="Ayarlar"
      description="Veritabanı kurulumu ve panel yapılandırması."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <AdminCard>
          <h2 className="font-heading text-lg text-white">Supabase durumu</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Public URL + anon key: {supabaseReady ? "✓ Tanımlı" : "✗ Eksik"}</li>
            <li>Service role key: {serviceRoleReady ? "✓ Tanımlı" : "✗ Eksik"}</li>
            <li>Giriş yapan admin: {user.email}</li>
          </ul>
        </AdminCard>

        <AdminCard>
          <h2 className="font-heading text-lg text-white">İlk kurulum adımları</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-white/70">
            <li>Supabase SQL Editor&apos;da `supabase/migrations/001_admin_cms.sql` dosyasını çalıştırın.</li>
            <li>Authentication → Users bölümünden admin kullanıcısı oluşturun.</li>
            <li>
              SQL ile admin yetkisi verin:
              <pre className="mt-2 overflow-x-auto rounded-lg bg-black/30 p-3 text-xs text-accent">
                {`insert into admin_users (user_id, email)\nvalues ('USER_UUID', 'admin@smfhafriyat.com');`}
              </pre>
            </li>
            <li>Vercel/local `.env` dosyasına Supabase anahtarlarını ekleyin.</li>
            <li>Aşağıdaki butonla statik site içeriğini veritabanına aktarın.</li>
          </ol>
        </AdminCard>

        <AdminCard className="lg:col-span-2">
          <h2 className="font-heading text-lg text-white">İçerik aktarımı</h2>
          <p className="mt-2 text-sm text-white/60">
            Mevcut `lib/constants` içindeki hizmetler, projeler, ekip ve istatistikleri Supabase tablolarına yükler. Var olan slug kayıtları güncellenir.
          </p>
          <div className="mt-4">
            <SeedDatabaseButton />
          </div>
        </AdminCard>
      </div>
    </AdminShell>
  );
}
