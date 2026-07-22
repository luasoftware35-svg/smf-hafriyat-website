import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminCard, AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/AdminTable";
import { saveServiceAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";
import { serviceIconOptions } from "@/lib/admin/types";

export default async function AdminServiceNewPage() {
  const user = await requireAdmin();

  return (
    <AdminShell
      userEmail={user.email}
      title="Yeni Hizmet"
      description="Yeni bir hizmet kartı ve detay sayfası oluşturun."
      actions={<AdminButton href="/admin/services" variant="secondary">← Hizmetler</AdminButton>}
    >
      <AdminCard>
        <form action={saveServiceAction} className="grid gap-5 lg:grid-cols-2">
          <AdminField label="Başlık">
            <input name="title" required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Slug">
            <input name="slug" required placeholder="ornek-hizmet" className={adminInputClassName} />
          </AdminField>
          <AdminField label="İkon">
            <select name="icon" defaultValue="Shovel" className={adminInputClassName}>
              {serviceIconOptions.map((icon) => (
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
            <AdminField label="Kısa açıklama">
              <textarea name="short_description" required className={adminTextareaClassName} />
            </AdminField>
          </div>
          <div className="lg:col-span-2">
            <AdminField label="Tam açıklama">
              <textarea name="full_description" required className={adminTextareaClassName} />
            </AdminField>
          </div>
          <div className="lg:col-span-2">
            <AdminField label="Detay paragrafları" hint="Her satır bir paragraf">
              <textarea name="detail_paragraphs" className={adminTextareaClassName} />
            </AdminField>
          </div>
          <AdminField label="Güven maddeleri" hint="Her satır bir madde">
            <textarea name="trust_points" className={adminTextareaClassName} />
          </AdminField>
          <AdminField label="Özellikler" hint="Her satır bir özellik">
            <textarea name="features" className={adminTextareaClassName} />
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
