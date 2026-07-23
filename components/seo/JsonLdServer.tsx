import { getContactInfo } from "@/lib/data/contact-settings";
import { JsonLd } from "@/components/seo/JsonLd";

export async function JsonLdServer() {
  const contactInfo = await getContactInfo();
  return <JsonLd contactInfo={contactInfo} />;
}
