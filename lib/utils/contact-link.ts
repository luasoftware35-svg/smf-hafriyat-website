const serviceToProjectType: Record<string, string> = {
  "hafriyat-isleri": "hafriyat",
  "yikim-calismalari": "yikim",
  "altyapi-calismalari": "altyapi",
  "is-makinesi-kiralama": "kiralama",
  "moloz-nakliyesi": "nakliye",
  "derin-kazi": "hafriyat",
  "kum-cakil-temini": "diger",
  "kanal-calismalari": "altyapi",
  "su-tankeri-nakliyesi": "diger",
  "toprak-moloz-tasima": "nakliye",
};

export function buildQuoteHref(params?: {
  hizmet?: string;
  bolge?: string;
  proje?: string;
  mesaj?: string;
}): string {
  if (!params) return "/iletisim";

  const search = new URLSearchParams();
  if (params.hizmet) search.set("hizmet", params.hizmet);
  if (params.bolge) search.set("bolge", params.bolge);
  if (params.proje) search.set("proje", params.proje);
  if (params.mesaj) search.set("mesaj", params.mesaj);

  const query = search.toString();
  return query ? `/iletisim?${query}` : "/iletisim";
}

export function projectTypeFromServiceSlug(slug: string): string | undefined {
  return serviceToProjectType[slug];
}
