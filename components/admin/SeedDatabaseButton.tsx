"use client";

import { useTransition } from "react";
import { seedStaticContentAction } from "@/lib/admin/actions";
import { AdminButton } from "@/components/admin/AdminTable";

export function SeedDatabaseButton() {
  const [pending, startTransition] = useTransition();

  return (
    <AdminButton
      variant="secondary"
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          try {
            const result = await seedStaticContentAction();
            alert(
              `Aktarım tamamlandı.\nHizmet: ${result.result.services}\nProje: ${result.result.projects}\nEkip: ${result.result.team}\nİstatistik: ${result.result.stats}`,
            );
          } catch (error) {
            alert(error instanceof Error ? error.message : "Aktarım başarısız.");
          }
        })
      }
    >
      {pending ? "Aktarılıyor..." : "Statik içeriği veritabanına aktar"}
    </AdminButton>
  );
}
