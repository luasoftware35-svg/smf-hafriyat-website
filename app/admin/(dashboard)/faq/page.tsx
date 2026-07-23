import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminTable, AdminTableRow } from "@/components/admin/AdminTable";
import { PublishBadge } from "@/components/admin/StatusBadge";
import { requireAdmin } from "@/lib/admin/auth";
import { getAllDbFaqItems } from "@/lib/data/faq";

export default async function AdminFaqPage() {
  const user = await requireAdmin();
  const items = await getAllDbFaqItems();

  return (
    <AdminShell
      userEmail={user.email}
      title="SSS"
      description="Ana sayfa sık sorulan sorular bölümünü yönetin."
      actions={<AdminButton href="/admin/faq/new">+ Yeni soru</AdminButton>}
    >
      <AdminTable headers={["Soru", "Sıra", "Durum"]} isEmpty={items.length === 0}>
        {items.map((item) => (
          <AdminTableRow
            key={item.id}
            href={`/admin/faq/${item.id}`}
            cells={[
              item.question,
              item.order_index,
              <PublishBadge key="pub" published={item.is_published} />,
            ]}
          />
        ))}
      </AdminTable>
    </AdminShell>
  );
}
