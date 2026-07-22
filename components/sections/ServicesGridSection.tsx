import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { getServices } from "@/lib/data/services";

type ServicesGridSectionProps = {
  limit?: number;
  showAllLink?: boolean;
};

export async function ServicesGridSection({ limit, showAllLink }: ServicesGridSectionProps) {
  const services = await getServices();
  return <ServicesGrid limit={limit} showAllLink={showAllLink} items={services} />;
}
