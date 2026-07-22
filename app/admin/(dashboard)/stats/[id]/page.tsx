import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminCard, AdminField, adminInputClassName } from "@/components/admin/AdminTable";
import { deleteSiteStatAction, saveSiteStatAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";
import { getSiteStatById } from "@/lib/admin/queries";

export default async function AdminStatEditPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireAdmin();
  const { id } = await params;
  const stat = await getSiteStatById(id);
  if (!stat) notFound();

  return (
    <AdminShell
      userEmail={user.email}
      title={stat.label}
      description="Sayaç değerini düzenleyin."
      actions={<AdminButton href="/admin/stats" variant="secondary">← İstatistikler</AdminButton>}
    >
      <AdminCard>
        <form action={saveSiteStatAction} className="grid gap-5 lg:grid-cols-2">
          <input type="hidden" name="id" value={stat.id} />
          <AdminField label="Etiket">
            <input name="label" defaultValue={stat.label} required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Değer">
            <input name="value" type="number" defaultValue={stat.value} required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Sonek">
            <input name="suffix" defaultValue={stat.suffix} placeholder="+ Yıl, +, vb." className={adminInputClassName} />
          </AdminField>
          <AdminField label="Sıra">
            <input name="order_index" type="number" defaultValue={stat.order_index} className={adminInputClassName} />
          </AdminField>
          <label className="flex items-center gap-3 text-sm text-white/80 lg:col-span-2">
            <input type="checkbox" name="is_published" defaultChecked={stat.is_published} className="h-4 w-4 rounded border-white/20" />
            Yayında göster
          </label>
          <div className="lg:col-span-2">
            <AdminButton type="submit">Kaydet</AdminButton>
          </div>
        </form>
        <form action={deleteSiteStatAction.bind(null, stat.id)} className="mt-8 border-t border-white/10 pt-6">
          <AdminButton type="submit" variant="danger">
            İstatistiği sil
          </AdminButton>
        </form>
      </AdminCard>
    </AdminShell>
  );
}
