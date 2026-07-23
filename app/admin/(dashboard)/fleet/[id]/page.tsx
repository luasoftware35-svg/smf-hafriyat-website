import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminCard, AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/AdminTable";
import { deleteFleetItemAction, saveFleetItemAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";
import { getFleetItemById } from "@/lib/admin/queries";
import { fleetIconOptions } from "@/lib/admin/types";

export default async function AdminFleetEditPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireAdmin();
  const { id } = await params;
  const item = await getFleetItemById(id);
  if (!item) notFound();

  return (
    <AdminShell
      userEmail={user.email}
      title={item.name}
      description="Filo kaydını düzenleyin."
      actions={<AdminButton href="/admin/fleet" variant="secondary">← Filo</AdminButton>}
    >
      <AdminCard>
        <form action={saveFleetItemAction} className="grid gap-5 lg:grid-cols-2">
          <input type="hidden" name="id" value={item.id} />
          <AdminField label="Makine adı">
            <input name="name" defaultValue={item.name} required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Model">
            <input name="model" defaultValue={item.model} required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Kapasite">
            <input name="capacity" defaultValue={item.capacity} required className={adminInputClassName} />
          </AdminField>
          <AdminField label="İkon">
            <select name="icon" defaultValue={item.icon} className={adminInputClassName}>
              {fleetIconOptions.map((icon) => (
                <option key={icon} value={icon}>
                  {icon}
                </option>
              ))}
            </select>
          </AdminField>
          <AdminField label="Sıra">
            <input name="order_index" type="number" defaultValue={item.order_index} className={adminInputClassName} />
          </AdminField>
          <div className="lg:col-span-2">
            <AdminField label="Özellikler">
              <textarea name="specs" defaultValue={item.specs} required className={adminTextareaClassName} />
            </AdminField>
          </div>
          <label className="flex items-center gap-3 text-sm text-white/80 lg:col-span-2">
            <input type="checkbox" name="is_published" defaultChecked={item.is_published} className="h-4 w-4 rounded border-white/20" />
            Yayında göster
          </label>
          <div className="lg:col-span-2">
            <AdminButton type="submit">Kaydet</AdminButton>
          </div>
        </form>
        <form action={deleteFleetItemAction.bind(null, item.id)} className="mt-8 border-t border-white/10 pt-6">
          <AdminButton type="submit" variant="danger">
            Kaydı sil
          </AdminButton>
        </form>
      </AdminCard>
    </AdminShell>
  );
}
