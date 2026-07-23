import { AdminShell } from "@/components/admin/AdminShell";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { AdminButton, AdminCard, AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/AdminTable";
import { saveTeamMemberAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";

export default async function AdminTeamNewPage() {
  const user = await requireAdmin();

  return (
    <AdminShell
      userEmail={user.email}
      title="Yeni Ekip Üyesi"
      description="Hakkımızda sayfasına yeni ekip kartı ekleyin."
      actions={<AdminButton href="/admin/team" variant="secondary">← Ekip</AdminButton>}
    >
      <AdminCard>
        <form action={saveTeamMemberAction} className="grid gap-5 lg:grid-cols-2">
          <AdminField label="Ad Soyad">
            <input name="name" required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Rol">
            <input name="role" required className={adminInputClassName} />
          </AdminField>
          <ImageUploadField name="photo" label="Fotoğraf" hint="Yükle veya /images/... yolu girin" />
          <AdminField label="Sıra">
            <input name="order_index" type="number" defaultValue={1} className={adminInputClassName} />
          </AdminField>
          <div className="lg:col-span-2">
            <AdminField label="Biyografi">
              <textarea name="bio" required className={adminTextareaClassName} />
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
