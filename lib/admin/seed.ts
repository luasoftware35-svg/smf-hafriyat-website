import { services } from "@/lib/constants/services";
import { projects } from "@/lib/constants/projects";
import { faqItems, fleet, stats, teamMembers } from "@/lib/constants/content";
import {
  contactInfo,
  corporateCredentials,
  insuranceNote,
} from "@/lib/constants/site";
import { createServiceRoleClient, isServiceRoleConfigured } from "@/lib/supabase/server";

export type SeedResult = {
  services: number;
  projects: number;
  team: number;
  stats: number;
  faq: number;
  fleet: number;
  settings: number;
};

export async function seedDatabaseFromStaticContent(): Promise<SeedResult> {
  if (!isServiceRoleConfigured()) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY tanımlı değil.");
  }

  const supabase = createServiceRoleClient();

  const serviceRows = services.map((service) => ({
    slug: service.slug,
    title: service.title,
    icon: service.icon,
    short_description: service.shortDescription,
    full_description: service.fullDescription,
    detail_paragraphs: service.detailParagraphs,
    trust_points: service.trustPoints,
    features: service.features,
    order_index: service.orderIndex,
    is_published: true,
  }));

  const projectRows = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    category: project.category,
    description: project.description,
    location: project.location,
    completed_date: project.completedDate,
    before_image: project.beforeImage,
    after_image: project.afterImage,
    gallery_images: project.galleryImages,
    is_published: true,
  }));

  const teamRows = teamMembers.map((member, index) => ({
    name: member.name,
    role: member.role,
    bio: member.bio,
    photo: member.photo,
    order_index: index + 1,
    is_published: true,
  }));

  const statRows = stats.map((stat) => ({
    label: stat.label,
    value: stat.value,
    suffix: stat.suffix,
    order_index: stat.orderIndex,
    is_published: true,
  }));

  const faqRows = faqItems.map((item, index) => ({
    question: item.question,
    answer: item.answer,
    order_index: index + 1,
    is_published: true,
  }));

  const fleetRows = fleet.map((item, index) => ({
    name: item.name,
    model: item.model,
    capacity: item.capacity,
    specs: item.specs,
    icon: item.icon,
    order_index: index + 1,
    is_published: true,
  }));

  const settingsRows = [
    {
      key: "contact",
      value: {
        phone: contactInfo.phone,
        phoneDisplay: contactInfo.phoneDisplay,
        phoneHref: contactInfo.phoneHref,
        phoneSecondary: contactInfo.phoneSecondary,
        phoneSecondaryHref: contactInfo.phoneSecondaryHref,
        email: contactInfo.email,
        emailHref: contactInfo.emailHref,
        emailSecondary: contactInfo.emailSecondary,
        emailSecondaryHref: contactInfo.emailSecondaryHref,
        whatsapp: contactInfo.whatsapp,
        whatsappDisplay: contactInfo.whatsappDisplay,
        whatsappHref: contactInfo.whatsappHref,
        contactPerson: contactInfo.contactPerson,
        addressFull: contactInfo.address.full,
        addressStreet: contactInfo.address.street,
        workingHoursWeekdays: contactInfo.workingHours.weekdays,
        workingHoursSunday: contactInfo.workingHours.sunday,
        instagram: contactInfo.instagram,
        mapLink: contactInfo.mapLink,
      },
    },
    {
      key: "credentials",
      value: {
        credentials: corporateCredentials,
        insuranceNote,
      },
    },
  ];

  const { error: servicesError } = await supabase.from("services").upsert(serviceRows, { onConflict: "slug" });
  if (servicesError) throw new Error(`Hizmetler aktarılamadı: ${servicesError.message}`);

  const { error: projectsError } = await supabase.from("projects").upsert(projectRows, { onConflict: "slug" });
  if (projectsError) throw new Error(`Projeler aktarılamadı: ${projectsError.message}`);

  const { error: teamError } = await supabase.from("team_members").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  if (teamError) throw new Error(`Ekip temizlenemedi: ${teamError.message}`);

  const { error: teamInsertError } = await supabase.from("team_members").insert(teamRows);
  if (teamInsertError) throw new Error(`Ekip aktarılamadı: ${teamInsertError.message}`);

  const { error: statsError } = await supabase.from("site_stats").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  if (statsError) throw new Error(`İstatistikler temizlenemedi: ${statsError.message}`);

  const { error: statsInsertError } = await supabase.from("site_stats").insert(statRows);
  if (statsInsertError) throw new Error(`İstatistikler aktarılamadı: ${statsInsertError.message}`);

  const { error: faqDeleteError } = await supabase.from("faq_items").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  if (faqDeleteError) throw new Error(`SSS temizlenemedi: ${faqDeleteError.message}`);
  const { error: faqInsertError } = await supabase.from("faq_items").insert(faqRows);
  if (faqInsertError) throw new Error(`SSS aktarılamadı: ${faqInsertError.message}`);

  const { error: fleetDeleteError } = await supabase.from("fleet_items").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  if (fleetDeleteError) throw new Error(`Filo temizlenemedi: ${fleetDeleteError.message}`);
  const { error: fleetInsertError } = await supabase.from("fleet_items").insert(fleetRows);
  if (fleetInsertError) throw new Error(`Filo aktarılamadı: ${fleetInsertError.message}`);

  const { error: settingsError } = await supabase.from("site_settings").upsert(settingsRows, { onConflict: "key" });
  if (settingsError) throw new Error(`Site ayarları aktarılamadı: ${settingsError.message}`);

  return {
    services: serviceRows.length,
    projects: projectRows.length,
    team: teamRows.length,
    stats: statRows.length,
    faq: faqRows.length,
    fleet: fleetRows.length,
    settings: settingsRows.length,
  };
}
