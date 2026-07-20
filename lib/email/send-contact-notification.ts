import { contactInfo } from "@/lib/constants/site";

type ContactPayload = {
  name: string;
  phone: string;
  email?: string;
  projectType: string;
  projectAddress: string;
  volume?: string;
  siteVisitDate?: string;
  message: string;
};

export async function sendContactNotification(data: ContactPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL ?? contactInfo.email;

  if (!apiKey) {
    return false;
  }

  const body = `
Yeni teklif talebi — SMF Hafriyat Web Sitesi

Ad Soyad: ${data.name}
Telefon: ${data.phone}
E-posta: ${data.email || "—"}
Proje Türü: ${data.projectType}
Proje Adresi: ${data.projectAddress}
Tahmini Hacim: ${data.volume || "—"}
Keşif Tarihi: ${data.siteVisitDate || "—"}

Mesaj:
${data.message}
  `.trim();

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SMF Hafriyat Web <onboarding@resend.dev>",
        to: [toEmail],
        subject: `Yeni Teklif Talebi — ${data.name}`,
        text: body,
      }),
    });

    return response.ok;
  } catch {
    return false;
  }
}
