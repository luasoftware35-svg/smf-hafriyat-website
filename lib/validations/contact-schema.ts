import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Ad soyad en az 2 karakter olmalıdır.")
    .max(100, "Ad soyad en fazla 100 karakter olabilir."),
  phone: z
    .string()
    .min(10, "Geçerli bir telefon numarası giriniz.")
    .max(20, "Telefon numarası çok uzun.")
    .regex(/^[\d\s+()-]+$/, "Geçerli bir telefon numarası giriniz."),
  email: z.string().email("Geçerli bir e-posta adresi giriniz.").optional().or(z.literal("")),
  projectType: z.string().min(1, "Proje türü seçiniz."),
  projectAddress: z
    .string()
    .min(5, "Proje adresi veya ilçe bilgisi giriniz.")
    .max(300, "Adres en fazla 300 karakter olabilir."),
  volume: z
    .string()
    .max(100, "Hacim bilgisi en fazla 100 karakter olabilir.")
    .optional()
    .or(z.literal("")),
  siteVisitDate: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .min(10, "Mesaj en az 10 karakter olmalıdır.")
    .max(2000, "Mesaj en fazla 2000 karakter olabilir."),
  kvkkConsent: z.boolean().refine((value) => value === true, {
    message: "KVKK aydınlatma metnini onaylamanız gerekmektedir.",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const projectTypeOptions = [
  { value: "hafriyat", label: "Hafriyat İşleri" },
  { value: "yikim", label: "Yıkım Çalışmaları" },
  { value: "altyapi", label: "Altyapı Çalışmaları" },
  { value: "kiralama", label: "İş Makinesi Kiralama" },
  { value: "nakliye", label: "Moloz / Toprak Nakliyesi" },
  { value: "diger", label: "Diğer" },
] as const;
