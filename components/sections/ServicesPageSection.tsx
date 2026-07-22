import { ServicesGridAnimated } from "@/components/sections/ServicesPageGrid";
import { getServices } from "@/lib/data/services";

export async function ServicesPageSection() {
  const services = await getServices();
  return <ServicesGridAnimated items={services} />;
}
