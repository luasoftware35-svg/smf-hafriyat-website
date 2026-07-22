import { StatsCounter } from "@/components/sections/StatsCounter";
import { getSiteStats } from "@/lib/data/stats";

export async function StatsCounterSection() {
  const stats = await getSiteStats();
  return <StatsCounter stats={stats} />;
}
