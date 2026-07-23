import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminTable, AdminTableRow } from "@/components/admin/AdminTable";
import { PublishBadge } from "@/components/admin/StatusBadge";
import { requireAdmin } from "@/lib/admin/auth";
import { getAllDbFleetItems } from "@/lib/data/fleet";

export default async function AdminFleetPage() {
  const user = await requireAdmin();
  const items = await getAllDbFleetItems();

  return (
    <AdminShell
      userEmail={user.email}
      title="Filo"
      description="Ana sayfa ve filo sayfasındaki makine listesini yönetin."
      actions={<AdminButton href="/admin/fleet/new">+ Yeni makine</AdminButton>}
    >
      <AdminTable headers={["Makine", "Model", "Kapasite", "Sıra", "Durum"]} isEmpty={items.length === 0}>
        {items.map((item) => (
          <AdminTableRow
            key={item.id}
            href={`/admin/fleet/${item.id}`}
            cells={[
              item.name,
              item.model,
              item.capacity,
              item.order_index,
              <PublishBadge key="pub" published={item.is_published} />,
            ]}
          />
        ))}
      </AdminTable>
    </AdminShell>
  );
}
