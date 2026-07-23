import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminCard, AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/AdminTable";
import { saveFaqAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";

export default async function AdminFaqNewPage() {
  const user = await requireAdmin();

  return (
    <AdminShell
      userEmail={user.email}
      title="Yeni SSS"
      description="Ana sayfaya yeni sık sorulan soru ekleyin."
      actions={<AdminButton href="/admin/faq" variant="secondary">← SSS</AdminButton>}
    >
      <AdminCard>
        <form action={saveFaqAction} className="grid gap-5">
          <AdminField label="Soru">
            <input name="question" required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Cevap">
            <textarea name="answer" required className={adminTextareaClassName} rows={5} />
          </AdminField>
          <AdminField label="Sıra">
            <input name="order_index" type="number" defaultValue={1} className={adminInputClassName} />
          </AdminField>
          <label className="flex items-center gap-3 text-sm text-white/80">
            <input type="checkbox" name="is_published" defaultChecked className="h-4 w-4 rounded border-white/20" />
            Yayında göster
          </label>
          <div>
            <AdminButton type="submit">Oluştur</AdminButton>
          </div>
        </form>
      </AdminCard>
    </AdminShell>
  );
}
