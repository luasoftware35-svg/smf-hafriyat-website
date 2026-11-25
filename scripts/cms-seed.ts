import { readFileSync } from "node:fs";
import { join } from "node:path";

function loadEnvLocal() {
  const raw = readFileSync(join(process.cwd(), ".env.local"), "utf8");
  for (const line of raw.split("\n")) {
    if (!line || line.startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i === -1) continue;
    let val = line.slice(i + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    process.env[line.slice(0, i)] = val;
  }
}

loadEnvLocal();

async function main() {
  const { seedDatabaseFromStaticContent } = await import("../lib/admin/seed");
  const result = await seedDatabaseFromStaticContent();
  console.log("Seed tamamlandı:");
  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error("Seed hatası:", error instanceof Error ? error.message : error);
  process.exit(1);
});
