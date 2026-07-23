import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminCard, AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/AdminTable";
import { saveFleetItemAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";
import { fleetIconOptions } from "@/lib/admin/types";

export default async function AdminFleetNewPage() {
  const user = await requireAdmin();

  return (
    <AdminShell
      userEmail={user.email}
      title="Yeni Filo Kaydı"
      description="Makine parkına yeni ekipman ekleyin."
      actions={<AdminButton href="/admin/fleet" variant="secondary">← Filo</AdminButton>}
    >
      <AdminCard>
        <form action={saveFleetItemAction} className="grid gap-5 lg:grid-cols-2">
          <AdminField label="Makine adı">
            <input name="name" required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Model">
            <input name="model" required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Kapasite">
            <input name="capacity" placeholder="20 Ton" required className={adminInputClassName} />
          </AdminField>
          <AdminField label="İkon">
            <select name="icon" defaultValue="Excavator" className={adminInputClassName}>
              {fleetIconOptions.map((icon) => (
                <option key={icon} value={icon}>
                  {icon}
                </option>
              ))}
            </select>
          </AdminField>
          <AdminField label="Sıra">
            <input name="order_index" type="number" defaultValue={1} className={adminInputClassName} />
          </AdminField>
          <div className="lg:col-span-2">
            <AdminField label="Özellikler">
              <textarea name="specs" required className={adminTextareaClassName} />
            </AdminField>
          </div>
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
