import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminCard, AdminField, adminInputClassName } from "@/components/admin/AdminTable";
import { saveSiteStatAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";

export default async function AdminStatNewPage() {
  const user = await requireAdmin();

  return (
    <AdminShell
      userEmail={user.email}
      title="Yeni İstatistik"
      description="Ana sayfaya yeni sayaç kartı ekleyin."
      actions={<AdminButton href="/admin/stats" variant="secondary">← İstatistikler</AdminButton>}
    >
      <AdminCard>
        <form action={saveSiteStatAction} className="grid gap-5 lg:grid-cols-2">
          <AdminField label="Etiket">
            <input name="label" required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Değer">
            <input name="value" type="number" required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Sonek">
            <input name="suffix" placeholder="+ Yıl" className={adminInputClassName} />
          </AdminField>
          <AdminField label="Sıra">
            <input name="order_index" type="number" defaultValue={1} className={adminInputClassName} />
          </AdminField>
          <label className="flex items-center gap-3 text-sm text-white/80 lg:col-span-2">
            <input type="checkbox" name="is_published" defaultChecked className="h-4 w-4 rounded border-white/20" />
            Yayında göster
          </label>
          <div className="lg:col-span-2">
            <AdminButton type="submit">Oluştur</AdminButton>
          </div>
        </form>
      </AdminCard>
    </AdminShell>
  );
}
