import { TeamGrid } from "@/components/sections/TeamGrid";
import { getTeamMembers } from "@/lib/data/team";

export async function TeamGridSection() {
  const members = await getTeamMembers();
  return <TeamGrid members={members} />;
}
