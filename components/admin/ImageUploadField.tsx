"use client";

import { useRef, useState, useTransition } from "react";
import { uploadMediaAction } from "@/lib/admin/actions";
import { adminInputClassName } from "@/components/admin/AdminTable";

type ImageUploadFieldProps = {
  name: string;
  label: string;
  defaultValue?: string;
  hint?: string;
};

export function ImageUploadField({ name, label, defaultValue = "", hint }: ImageUploadFieldProps) {
  const [url, setUrl] = useState(defaultValue);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (file: File) => {
    setError(null);
    const formData = new FormData();
    formData.append("file", file);
    startTransition(async () => {
      const result = await uploadMediaAction(formData);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setUrl(result.url);
    });
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white/80">{label}</label>
      {hint && <p className="text-xs text-white/45">{hint}</p>}
      <input type="hidden" name={name} value={url} />
      <input
        ref={inputRef}
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="/images/... veya yükle"
        className={adminInputClassName}
      />
      <div className="flex flex-wrap items-center gap-3">
        <label className="inline-flex cursor-pointer items-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
          {isPending ? "Yükleniyor..." : "Görsel yükle"}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            disabled={isPending}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleUpload(file);
              e.target.value = "";
            }}
          />
        </label>
        {url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={url} alt="" className="h-14 w-14 rounded-md border border-white/10 object-cover" />
        )}
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
