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
          const response = await seedStaticContentAction();
          if (!response.ok) {
            alert(response.error);
            return;
          }

          alert(
            `Aktarım tamamlandı.\nHizmet: ${response.result.services}\nProje: ${response.result.projects}\nEkip: ${response.result.team}\nİstatistik: ${response.result.stats}\nSSS: ${response.result.faq}\nFilo: ${response.result.fleet}\nAyar: ${response.result.settings}`,
          );
        })
      }
    >
      {pending ? "Aktarılıyor..." : "Statik içeriği veritabanına aktar"}
    </AdminButton>
  );
}
