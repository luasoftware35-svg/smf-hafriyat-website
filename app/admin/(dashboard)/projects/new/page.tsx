import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminCard, AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/AdminTable";
import { saveProjectAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";
import { projectCategoryLabels } from "@/lib/admin/types";

export default async function AdminProjectNewPage() {
  const user = await requireAdmin();

  return (
    <AdminShell
      userEmail={user.email}
      title="Yeni Proje"
      description="Yeni referans projesi ekleyin."
      actions={<AdminButton href="/admin/projects" variant="secondary">← Projeler</AdminButton>}
    >
      <AdminCard>
        <form action={saveProjectAction} className="grid gap-5 lg:grid-cols-2">
          <AdminField label="Başlık">
            <input name="title" required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Slug">
            <input name="slug" required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Kategori">
            <select name="category" defaultValue="hafriyat" className={adminInputClassName}>
              {Object.entries(projectCategoryLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </AdminField>
          <AdminField label="Tamamlanma tarihi">
            <input name="completed_date" placeholder="2025-11" className={adminInputClassName} />
          </AdminField>
          <AdminField label="Konum">
            <input name="location" required className={adminInputClassName} />
          </AdminField>
          <div className="lg:col-span-2">
            <AdminField label="Açıklama">
              <textarea name="description" required className={adminTextareaClassName} />
            </AdminField>
          </div>
          <AdminField label="Önce görseli">
            <input name="before_image" required placeholder="/images/hafriyat/haf-001.jpg" className={adminInputClassName} />
          </AdminField>
          <AdminField label="Sonra görseli">
            <input name="after_image" required placeholder="/images/hafriyat/haf-002.jpg" className={adminInputClassName} />
          </AdminField>
          <div className="lg:col-span-2">
            <AdminField label="Galeri görselleri" hint="Her satır bir görsel yolu">
              <textarea name="gallery_images" className={adminTextareaClassName} />
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
