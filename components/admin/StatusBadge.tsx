import { cn } from "@/lib/utils";
import type { SubmissionStatus } from "@/lib/admin/types";
import { submissionStatusLabels } from "@/lib/admin/types";

const statusStyles: Record<SubmissionStatus, string> = {
  yeni: "bg-sky-500/15 text-sky-300 border-sky-500/20",
  inceleniyor: "bg-amber-500/15 text-amber-300 border-amber-500/20",
  tamamlandi: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  iptal: "bg-rose-500/15 text-rose-300 border-rose-500/20",
};

export function StatusBadge({ status }: { status: SubmissionStatus }) {
  return (
    <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-xs font-medium", statusStyles[status])}>
      {submissionStatusLabels[status]}
    </span>
  );
}

export function PublishBadge({ published }: { published: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-1 text-xs font-medium",
        published ? "border-emerald-500/20 bg-emerald-500/15 text-emerald-300" : "border-white/10 bg-white/5 text-white/50",
      )}
    >
      {published ? "Yayında" : "Taslak"}
    </span>
  );
}
