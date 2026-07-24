import { seedDatabaseFromStaticContent } from "../lib/admin/seed";

async function main() {
  const result = await seedDatabaseFromStaticContent();
  console.log("Seed tamamlandı:");
  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error("Seed hatası:", error instanceof Error ? error.message : error);
  process.exit(1);
});
