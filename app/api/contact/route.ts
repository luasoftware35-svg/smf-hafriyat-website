import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact-schema";
import { sendContactNotification } from "@/lib/email/send-contact-notification";
import { createServiceRoleClient, isServiceRoleConfigured } from "@/lib/supabase/server";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Çok fazla istek gönderildi. Lütfen bir dakika bekleyin." }, { status: 429 });
    }

    const body: unknown = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Geçerli form verisi." },
        { status: 400 },
      );
    }

    const data = parsed.data;
    let saved = false;

    try {
      if (isServiceRoleConfigured()) {
        const supabase = createServiceRoleClient();
        const { error } = await supabase.from("contact_submissions").insert({
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: data.email?.trim() || null,
        project_type: data.projectType,
        project_address: data.projectAddress.trim(),
        volume: data.volume?.trim() || null,
        site_visit_date: data.siteVisitDate || null,
        message: data.message.trim(),
        status: "yeni",
      });

        if (!error) {
          saved = true;
        } else {
          console.error("Supabase insert error:", error.message);
        }
      }
    } catch {
      console.info("Supabase not configured — trying email notification");
    }

    const emailSent = await sendContactNotification({
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email?.trim(),
      projectType: data.projectType,
      projectAddress: data.projectAddress.trim(),
      volume: data.volume?.trim(),
      siteVisitDate: data.siteVisitDate,
      message: data.message.trim(),
    });

    if (emailSent) saved = true;

    if (!saved) {
      console.error("Contact submission failed — no storage configured:", {
        name: data.name,
        phone: data.phone,
        projectType: data.projectType,
      });
      return NextResponse.json(
        {
          error:
            "Talebiniz şu an kaydedilemedi. Lütfen doğrudan arayın: 0533 353 22 53 veya WhatsApp üzerinden yazın.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({
      message: "Talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.",
      whatsappUrl: `https://wa.me/905333532253?text=${encodeURIComponent(
        `Merhaba, web sitesinden teklif talebi gönderdim.\nAd: ${data.name}\nProje: ${data.projectType}\nAdres: ${data.projectAddress}`,
      )}`,
    });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası. Lütfen tekrar deneyin veya 0533 353 22 53 numarasını arayın." }, { status: 500 });
  }
}
