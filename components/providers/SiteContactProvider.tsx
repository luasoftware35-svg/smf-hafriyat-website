"use client";

import { createContext, useContext, type ReactNode } from "react";
import {
  contactInfo as staticContactInfo,
  corporateCredentials as staticCredentials,
  insuranceNote as staticInsuranceNote,
} from "@/lib/constants/site";
import type { ContactInfoData, CorporateCredential } from "@/lib/data/contact-settings";
import { buildCtaLinks, buildQuickContactChannels, buildSocialLinks } from "@/lib/contact/derive";

type SiteContactContextValue = {
  contactInfo: ContactInfoData;
  ctaLinks: ReturnType<typeof buildCtaLinks>;
  quickContactChannels: ReturnType<typeof buildQuickContactChannels>;
  socialLinks: ReturnType<typeof buildSocialLinks>;
  corporateCredentials: readonly CorporateCredential[];
  insuranceNote: string;
};

const SiteContactContext = createContext<SiteContactContextValue>({
  contactInfo: staticContactInfo,
  ctaLinks: buildCtaLinks(staticContactInfo),
  quickContactChannels: buildQuickContactChannels(staticContactInfo),
  socialLinks: buildSocialLinks(staticContactInfo),
  corporateCredentials: staticCredentials,
  insuranceNote: staticInsuranceNote,
});

type SiteContactProviderProps = {
  contactInfo: ContactInfoData;
  corporateCredentials: readonly CorporateCredential[];
  insuranceNote: string;
  children: ReactNode;
};

export function SiteContactProvider({
  contactInfo,
  corporateCredentials,
  insuranceNote,
  children,
}: SiteContactProviderProps) {
  const value: SiteContactContextValue = {
    contactInfo,
    ctaLinks: buildCtaLinks(contactInfo),
    quickContactChannels: buildQuickContactChannels(contactInfo),
    socialLinks: buildSocialLinks(contactInfo),
    corporateCredentials,
    insuranceNote,
  };

  return <SiteContactContext.Provider value={value}>{children}</SiteContactContext.Provider>;
}

export function useSiteContact() {
  return useContext(SiteContactContext);
}
