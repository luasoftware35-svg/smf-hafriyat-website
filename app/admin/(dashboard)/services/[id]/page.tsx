import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import {
  AdminButton,
  AdminCard,
  AdminField,
  adminInputClassName,
  adminTextareaClassName,
} from "@/components/admin/AdminTable";
import { deleteServiceAction, saveServiceAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";
import { getServiceById } from "@/lib/admin/queries";
import { serviceIconOptions } from "@/lib/admin/types";

function arrayToLines(values: string[]) {
  return values.join("\n");
}

export default async function AdminServiceEditPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireAdmin();
  const { id } = await params;
  const service = await getServiceById(id);
  if (!service) notFound();

  return (
    <AdminShell
      userEmail={user.email}
      title={service.title}
      description="Hizmet detay sayfası içeriğini düzenleyin."
      actions={<AdminButton href="/admin/services" variant="secondary">← Hizmetler</AdminButton>}
    >
      <AdminCard>
        <form action={saveServiceAction} className="grid gap-5 lg:grid-cols-2">
          <input type="hidden" name="id" value={service.id} />

          <AdminField label="Başlık">
            <input name="title" defaultValue={service.title} required className={adminInputClassName} />
          </AdminField>

          <AdminField label="Slug">
            <input name="slug" defaultValue={service.slug} required className={adminInputClassName} />
          </AdminField>

          <AdminField label="İkon">
            <select name="icon" defaultValue={service.icon} className={adminInputClassName}>
              {serviceIconOptions.map((icon) => (
                <option key={icon} value={icon}>
                  {icon}
                </option>
              ))}
            </select>
          </AdminField>

          <AdminField label="Sıra">
            <input name="order_index" type="number" defaultValue={service.order_index} className={adminInputClassName} />
          </AdminField>

          <div className="lg:col-span-2">
            <AdminField label="Kısa açıklama">
              <textarea name="short_description" defaultValue={service.short_description} required className={adminTextareaClassName} />
            </AdminField>
          </div>

          <div className="lg:col-span-2">
            <AdminField label="Tam açıklama">
              <textarea name="full_description" defaultValue={service.full_description} required className={adminTextareaClassName} />
            </AdminField>
          </div>

          <div className="lg:col-span-2">
            <AdminField label="Detay paragrafları" hint="Her satır bir paragraf">
              <textarea name="detail_paragraphs" defaultValue={arrayToLines(service.detail_paragraphs)} className={adminTextareaClassName} />
            </AdminField>
          </div>

          <AdminField label="Güven maddeleri" hint="Her satır bir madde">
            <textarea name="trust_points" defaultValue={arrayToLines(service.trust_points)} className={adminTextareaClassName} />
          </AdminField>

          <AdminField label="Özellikler" hint="Her satır bir özellik">
            <textarea name="features" defaultValue={arrayToLines(service.features)} className={adminTextareaClassName} />
          </AdminField>

          <label className="flex items-center gap-3 text-sm text-white/80 lg:col-span-2">
            <input type="checkbox" name="is_published" defaultChecked={service.is_published} className="h-4 w-4 rounded border-white/20" />
            Yayında göster
          </label>

          <div className="flex flex-wrap gap-3 lg:col-span-2">
            <AdminButton type="submit">Kaydet</AdminButton>
          </div>
        </form>

        <form action={deleteServiceAction.bind(null, service.id)} className="mt-8 border-t border-white/10 pt-6">
          <AdminButton type="submit" variant="danger">
            Hizmeti sil
          </AdminButton>
        </form>
      </AdminCard>
    </AdminShell>
  );
}
