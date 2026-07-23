import {
  companyLegal,
  contactInfo as staticContactInfo,
  corporateCredentials as staticCredentials,
  insuranceNote as staticInsuranceNote,
  siteConfig,
} from "@/lib/constants/site";
import { createServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export type ContactInfoData = {
  phone: string;
  phoneDisplay: string;
  phoneHref: string;
  phoneSecondary: string;
  phoneSecondaryHref: string;
  email: string;
  emailHref: string;
  whatsapp: string;
  whatsappHref: string;
  contactPerson: string;
  address: {
    street: string;
    neighborhood: string;
    district: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    full: string;
  };
  workingHours: {
    weekdays: string;
    sunday: string;
  };
  mapEmbedUrl: string;
  mapLink: string;
  instagram: string;
};
export type CorporateCredential = { label: string; note: string };

type ContactSettingsValue = Partial<{
  phone: string;
  phoneDisplay: string;
  phoneHref: string;
  phoneSecondary: string;
  phoneSecondaryHref: string;
  email: string;
  emailHref: string;
  whatsapp: string;
  whatsappHref: string;
  contactPerson: string;
  addressFull: string;
  addressStreet: string;
  workingHoursWeekdays: string;
  workingHoursSunday: string;
  instagram: string;
  mapLink: string;
}>;

type CredentialsSettingsValue = {
  credentials?: CorporateCredential[];
  insuranceNote?: string;
};

async function getSetting<T>(key: string): Promise<T | null> {
  if (!isSupabaseConfigured()) return null;
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase.from("site_settings").select("value").eq("key", key).maybeSingle();
    if (error || !data) return null;
    return data.value as T;
  } catch {
    return null;
  }
}

export async function getContactInfo(): Promise<ContactInfoData> {
  const db = await getSetting<ContactSettingsValue>("contact");
  if (!db) return staticContactInfo;

  return {
    ...staticContactInfo,
    phone: db.phone ?? staticContactInfo.phone,
    phoneDisplay: db.phoneDisplay ?? staticContactInfo.phoneDisplay,
    phoneHref: db.phoneHref ?? staticContactInfo.phoneHref,
    phoneSecondary: db.phoneSecondary ?? staticContactInfo.phoneSecondary,
    phoneSecondaryHref: db.phoneSecondaryHref ?? staticContactInfo.phoneSecondaryHref,
    email: db.email ?? staticContactInfo.email,
    emailHref: db.emailHref ?? staticContactInfo.emailHref,
    whatsapp: db.whatsapp ?? staticContactInfo.whatsapp,
    whatsappHref: db.whatsappHref ?? staticContactInfo.whatsappHref,
    contactPerson: db.contactPerson ?? staticContactInfo.contactPerson,
    instagram: db.instagram ?? staticContactInfo.instagram,
    mapLink: db.mapLink ?? staticContactInfo.mapLink,
    mapEmbedUrl: staticContactInfo.mapEmbedUrl,
    address: {
      ...staticContactInfo.address,
      street: db.addressStreet ?? staticContactInfo.address.street,
      full: db.addressFull ?? staticContactInfo.address.full,
    },
    workingHours: {
      weekdays: db.workingHoursWeekdays ?? staticContactInfo.workingHours.weekdays,
      sunday: db.workingHoursSunday ?? staticContactInfo.workingHours.sunday,
    },
  };
}

export async function getCorporateCredentials(): Promise<{
  credentials: readonly CorporateCredential[];
  insuranceNote: string;
}> {
  const db = await getSetting<CredentialsSettingsValue>("credentials");
  if (!db) {
    return { credentials: staticCredentials, insuranceNote: staticInsuranceNote };
  }
  return {
    credentials: db.credentials?.length ? db.credentials : staticCredentials,
    insuranceNote: db.insuranceNote ?? staticInsuranceNote,
  };
}

export async function getDbContactSettings(): Promise<ContactSettingsValue> {
  const db = await getSetting<ContactSettingsValue>("contact");
  return {
    phone: db?.phone ?? staticContactInfo.phone,
    phoneDisplay: db?.phoneDisplay ?? staticContactInfo.phoneDisplay,
    phoneHref: db?.phoneHref ?? staticContactInfo.phoneHref,
    phoneSecondary: db?.phoneSecondary ?? staticContactInfo.phoneSecondary,
    phoneSecondaryHref: db?.phoneSecondaryHref ?? staticContactInfo.phoneSecondaryHref,
    email: db?.email ?? staticContactInfo.email,
    emailHref: db?.emailHref ?? staticContactInfo.emailHref,
    whatsapp: db?.whatsapp ?? staticContactInfo.whatsapp,
    whatsappHref: db?.whatsappHref ?? staticContactInfo.whatsappHref,
    contactPerson: db?.contactPerson ?? staticContactInfo.contactPerson,
    addressFull: db?.addressFull ?? staticContactInfo.address.full,
    addressStreet: db?.addressStreet ?? staticContactInfo.address.street,
    workingHoursWeekdays: db?.workingHoursWeekdays ?? staticContactInfo.workingHours.weekdays,
    workingHoursSunday: db?.workingHoursSunday ?? staticContactInfo.workingHours.sunday,
    instagram: db?.instagram ?? staticContactInfo.instagram,
    mapLink: db?.mapLink ?? staticContactInfo.mapLink,
  };
}

export async function getDbCredentialsSettings(): Promise<CredentialsSettingsValue> {
  const db = await getSetting<CredentialsSettingsValue>("credentials");
  return {
    credentials: db?.credentials ?? [...staticCredentials],
    insuranceNote: db?.insuranceNote ?? staticInsuranceNote,
  };
}

export { siteConfig, companyLegal };
