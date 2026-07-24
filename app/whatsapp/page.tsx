import { WhatsAppBridgeSection } from "@/components/sections/WhatsAppBridgeSection";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getContactInfo } from "@/lib/data/contact-settings";
import { siteConfig } from "@/lib/constants/site";

export const metadata = createPageMetadata({
  title: "WhatsApp Business — SMF Hafriyat",
  description: `${siteConfig.name} resmi WhatsApp Business hattı. Hafriyat ve yıkım projeleriniz için keşif talebi oluşturun.`,
  path: "/whatsapp",
  noIndex: true,
});

export default async function WhatsAppBridgePage() {
  const contactInfo = await getContactInfo();

  return <WhatsAppBridgeSection contactInfo={contactInfo} />;
}
