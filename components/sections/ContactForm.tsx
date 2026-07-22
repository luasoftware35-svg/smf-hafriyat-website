"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { brand } from "@/lib/constants/brand";
import { contactInfo } from "@/lib/constants/site";
import {
  contactFormSchema,
  projectTypeOptions,
  type ContactFormData,
} from "@/lib/validations/contact-schema";

type ContactFormProps = {
  className?: string;
  variant?: "default" | "compact";
};

export function ContactForm({ className, variant = "default" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { message?: string; error?: string; whatsappUrl?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Form gönderilemedi.");
      }

      setWhatsappUrl(result.whatsappUrl ?? null);
      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Beklenmeyen bir hata oluştu.");
    }
  };

  if (status === "success") {
    return (
      <div className={cn("flex flex-col items-center py-12 text-center", className)} role="status">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 size={32} aria-hidden="true" />
        </div>
        <h3 className="font-heading text-xl text-text-primary">Talebiniz alındı!</h3>
        <p className="mt-2 max-w-sm text-sm text-text-secondary">
          Ekibimiz talebinizi inceliyor. Aynı gün geri dönüş hedefiyle sizinle iletişime geçeceğiz. Acil durumlar için {contactInfo.phoneDisplay} numarasını arayabilirsiniz.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {whatsappUrl && (
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp ile Devam Et
            </Button>
          )}
          <Button variant="secondary" onClick={() => { setStatus("idle"); setWhatsappUrl(null); }}>
            Yeni Talep Gönder
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-5", className)} noValidate>
      {variant === "default" ? (
        <div className="rounded-xl border border-surface bg-bg-secondary/70 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Keşif Bilgisi</p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            Formu doldurmak için proje adresi, iş tipi ve kısa detay yeterlidir. Keşif sonrası net metraj, makine planı ve resmi teklif tarafımızdan hazırlanır.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {brand.contactPromises.map((item) => (
              <span
                key={item}
                className="rounded-full border border-surface bg-bg-primary px-3 py-1.5 text-xs font-medium text-text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Ad Soyad *" autoComplete="name" error={errors.name?.message} {...register("name")} />
        <Input label="Telefon *" type="tel" autoComplete="tel" placeholder="05XX XXX XX XX" error={errors.phone?.message} {...register("phone")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="E-posta" type="email" autoComplete="email" error={errors.email?.message} {...register("email")} />
        <Select label="Proje Türü *" defaultValue="" error={errors.projectType?.message} {...register("projectType")}>
          <option value="" disabled>Seçiniz</option>
          {projectTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </Select>
      </div>

      <Input
        label="Proje Adresi / İlçe *"
        placeholder="Örn: Merkezefendi, Honaz OSB..."
        error={errors.projectAddress?.message}
        {...register("projectAddress")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Tahmini Hacim (m³ / m²)"
          placeholder="Örn: 500 m³ veya 1200 m²"
          error={errors.volume?.message}
          {...register("volume")}
        />
        <Input label="Tercih Edilen Keşif Tarihi" type="date" error={errors.siteVisitDate?.message} {...register("siteVisitDate")} />
      </div>

      <Textarea label="Proje Detayı *" rows={variant === "compact" ? 4 : 5} placeholder="Kazı derinliği, yıkım yapısı, süre beklentisi..." error={errors.message?.message} {...register("message")} />

      <div>
        <label className="flex items-start gap-3 rounded-md border border-surface bg-bg-secondary/50 p-4 text-sm text-text-secondary transition-colors hover:border-accent/30">
          <input type="checkbox" className="mt-1 h-5 w-5 shrink-0 rounded border-surface accent-accent" {...register("kvkkConsent")} />
          <span>
            <Link href="/kvkk" className="font-medium text-accent hover:underline">KVKK Aydınlatma Metni</Link>
            &apos;ni okudum, kişisel verilerimin işlenmesini kabul ediyorum. *
          </span>
        </label>
        {errors.kvkkConsent && <p className="mt-1.5 text-xs text-red-500">{errors.kvkkConsent.message}</p>}
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Gönderiliyor...
          </>
        ) : (
          <>
            <Send size={16} aria-hidden="true" />
            Teklif Talebi Gönder
          </>
        )}
      </Button>

      <p className="text-sm text-text-secondary">
        Acil talepler için formu beklemeden <Link href={contactInfo.phoneHref} className="font-medium text-accent hover:underline">{contactInfo.phoneDisplay}</Link> üzerinden doğrudan arayabilirsiniz.
      </p>

      {status === "error" && (
        <p className="rounded-md border border-red-400/30 bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
