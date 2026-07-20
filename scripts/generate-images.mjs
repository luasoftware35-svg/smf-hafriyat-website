import fs from "fs";

function projectSvg(type, label) {
  const isBefore = type === "before";
  const bg = isBefore ? "#f0ebe3" : "#fafaf7";
  const ground = isBefore ? "#e8e0d4" : "#f5f2ea";
  const accent = isBefore ? "#c4a574" : "#f5a020";
  const mound = isBefore ? "#ddd4c8" : "#ece8e1";
  const detail = isBefore ? "Dağınık saha, ham toprak" : "Tesviye edilmiş, temiz saha";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-label="${label}">
  <rect width="800" height="500" fill="${bg}"/>
  <rect y="320" width="800" height="180" fill="${ground}"/>
  <ellipse cx="400" cy="340" rx="280" ry="60" fill="${mound}" opacity="0.9"/>
  <rect x="120" y="180" width="200" height="120" fill="${isBefore ? "#e0d8cc" : "#ffffff"}" opacity="0.9" stroke="#ece8e1" stroke-width="2"/>
  <text x="40" y="60" fill="${accent}" font-family="Arial,sans-serif" font-size="28" font-weight="700">${label}</text>
  <text x="40" y="95" fill="#6b6560" font-family="Arial,sans-serif" font-size="18">${detail}</text>
</svg>`;
}

const team = [
  ["serkan-mutlu", "SM", "#f5a020"],
  ["emre-yildiz", "EY", "#e8940f"],
  ["fatma-arslan", "FA", "#f5a020"],
  ["burak-celik", "BÇ", "#d4880a"],
];

fs.mkdirSync("public/images/projects", { recursive: true });
fs.mkdirSync("public/images/team", { recursive: true });

for (let i = 1; i <= 6; i++) {
  fs.writeFileSync(`public/images/projects/before-${i}.svg`, projectSvg("before", `Proje ${i} — Öncesi`));
  fs.writeFileSync(`public/images/projects/after-${i}.svg`, projectSvg("after", `Proje ${i} — Sonrası`));
}

team.forEach(([slug, initials, color]) => {
  fs.writeFileSync(
    `public/images/team/${slug}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img">
  <rect width="400" height="400" fill="#fafaf7"/>
  <circle cx="200" cy="160" r="80" fill="#ffffff" stroke="${color}" stroke-width="4"/>
  <text x="200" y="175" text-anchor="middle" fill="${color}" font-family="Arial Black,sans-serif" font-size="48">${initials}</text>
  <rect y="280" width="400" height="120" fill="#f5f2ea"/>
</svg>`,
  );
});

console.log("Images generated");
