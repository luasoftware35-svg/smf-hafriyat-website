import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminCard, AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/AdminTable";
import { deleteTeamMemberAction, saveTeamMemberAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";
import { getTeamMemberById } from "@/lib/admin/queries";

export default async function AdminTeamEditPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireAdmin();
  const { id } = await params;
  const member = await getTeamMemberById(id);
  if (!member) notFound();

  return (
    <AdminShell
      userEmail={user.email}
      title={member.name}
      description="Ekip üyesi bilgilerini düzenleyin."
      actions={<AdminButton href="/admin/team" variant="secondary">← Ekip</AdminButton>}
    >
      <AdminCard>
        <form action={saveTeamMemberAction} className="grid gap-5 lg:grid-cols-2">
          <input type="hidden" name="id" value={member.id} />
          <AdminField label="Ad Soyad">
            <input name="name" defaultValue={member.name} required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Rol">
            <input name="role" defaultValue={member.role} required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Fotoğraf yolu">
            <input name="photo" defaultValue={member.photo} required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Sıra">
            <input name="order_index" type="number" defaultValue={member.order_index} className={adminInputClassName} />
          </AdminField>
          <div className="lg:col-span-2">
            <AdminField label="Biyografi">
              <textarea name="bio" defaultValue={member.bio} required className={adminTextareaClassName} />
            </AdminField>
          </div>
          <label className="flex items-center gap-3 text-sm text-white/80 lg:col-span-2">
            <input type="checkbox" name="is_published" defaultChecked={member.is_published} className="h-4 w-4 rounded border-white/20" />
            Yayında göster
          </label>
          <div className="lg:col-span-2">
            <AdminButton type="submit">Kaydet</AdminButton>
          </div>
        </form>
        <form action={deleteTeamMemberAction.bind(null, member.id)} className="mt-8 border-t border-white/10 pt-6">
          <AdminButton type="submit" variant="danger">
            Üyeyi sil
          </AdminButton>
        </form>
      </AdminCard>
    </AdminShell>
  );
}
