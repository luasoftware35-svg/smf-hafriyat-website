import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { AdminButton, AdminCard, AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/AdminTable";
import { deleteProjectAction, saveProjectAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";
import { getProjectById } from "@/lib/admin/queries";
import { projectCategoryLabels } from "@/lib/admin/types";

function arrayToLines(values: string[]) {
  return values.join("\n");
}

export default async function AdminProjectEditPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireAdmin();
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) notFound();

  return (
    <AdminShell
      userEmail={user.email}
      title={project.title}
      description="Proje detay sayfası içeriğini düzenleyin."
      actions={<AdminButton href="/admin/projects" variant="secondary">← Projeler</AdminButton>}
    >
      <AdminCard>
        <form action={saveProjectAction} className="grid gap-5 lg:grid-cols-2">
          <input type="hidden" name="id" value={project.id} />

          <AdminField label="Başlık">
            <input name="title" defaultValue={project.title} required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Slug">
            <input name="slug" defaultValue={project.slug} required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Kategori">
            <select name="category" defaultValue={project.category} className={adminInputClassName}>
              {Object.entries(projectCategoryLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </AdminField>
          <AdminField label="Tamamlanma tarihi">
            <input name="completed_date" defaultValue={project.completed_date} placeholder="2025-11" className={adminInputClassName} />
          </AdminField>
          <AdminField label="Konum">
            <input name="location" defaultValue={project.location} required className={adminInputClassName} />
          </AdminField>
          <div className="lg:col-span-2">
            <AdminField label="Açıklama">
              <textarea name="description" defaultValue={project.description} required className={adminTextareaClassName} />
            </AdminField>
          </div>
          <ImageUploadField name="before_image" label="Önce görseli" defaultValue={project.before_image} />
          <ImageUploadField name="after_image" label="Sonra görseli" defaultValue={project.after_image} />
          <div className="lg:col-span-2">
            <AdminField label="Galeri görselleri" hint="Her satır bir görsel yolu">
              <textarea name="gallery_images" defaultValue={arrayToLines(project.gallery_images)} className={adminTextareaClassName} />
            </AdminField>
          </div>
          <label className="flex items-center gap-3 text-sm text-white/80 lg:col-span-2">
            <input type="checkbox" name="is_published" defaultChecked={project.is_published} className="h-4 w-4 rounded border-white/20" />
            Yayında göster
          </label>
          <div className="lg:col-span-2">
            <AdminButton type="submit">Kaydet</AdminButton>
          </div>
        </form>

        <form action={deleteProjectAction.bind(null, project.id)} className="mt-8 border-t border-white/10 pt-6">
          <AdminButton type="submit" variant="danger">
            Projeyi sil
          </AdminButton>
        </form>
      </AdminCard>
    </AdminShell>
  );
}
