import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminCard, AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/AdminTable";
import { saveContactSettingsAction, saveCredentialsSettingsAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";
import { getDbContactSettings, getDbCredentialsSettings } from "@/lib/data/contact-settings";

export default async function AdminContactPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const user = await requireAdmin();
  const [contact, credentials] = await Promise.all([getDbContactSettings(), getDbCredentialsSettings()]);
  const { saved } = await searchParams;

  return (
    <AdminShell
      userEmail={user.email}
      title="İletişim & Kurumsal"
      description="Site genelinde görünen telefon, adres ve kurumsal belge bilgilerini yönetin."
    >
      {saved === "1" && (
        <p className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Ayarlar kaydedildi.
        </p>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <AdminCard>
          <h2 className="font-heading text-lg text-white">İletişim bilgileri</h2>
          <form action={saveContactSettingsAction} className="mt-5 grid gap-4">
            <AdminField label="Telefon (tel link)">
              <input name="phone" defaultValue={contact.phone} className={adminInputClassName} />
            </AdminField>
            <AdminField label="Telefon (görünen)">
              <input name="phoneDisplay" defaultValue={contact.phoneDisplay} className={adminInputClassName} />
            </AdminField>
            <AdminField label="Telefon href">
              <input name="phoneHref" defaultValue={contact.phoneHref} className={adminInputClassName} />
            </AdminField>
            <AdminField label="İkinci telefon">
              <input name="phoneSecondary" defaultValue={contact.phoneSecondary} className={adminInputClassName} />
            </AdminField>
            <AdminField label="İkinci telefon href">
              <input name="phoneSecondaryHref" defaultValue={contact.phoneSecondaryHref} className={adminInputClassName} />
            </AdminField>
            <AdminField label="E-posta">
              <input name="email" defaultValue={contact.email} className={adminInputClassName} />
            </AdminField>
            <AdminField label="E-posta href">
              <input name="emailHref" defaultValue={contact.emailHref} className={adminInputClassName} />
            </AdminField>
            <AdminField label="WhatsApp numarası">
              <input name="whatsapp" defaultValue={contact.whatsapp} className={adminInputClassName} />
            </AdminField>
            <AdminField label="WhatsApp link">
              <input name="whatsappHref" defaultValue={contact.whatsappHref} className={adminInputClassName} />
            </AdminField>
            <AdminField label="İletişim sorumlusu">
              <input name="contactPerson" defaultValue={contact.contactPerson} className={adminInputClassName} />
            </AdminField>
            <AdminField label="Adres (tam)">
              <textarea name="addressFull" defaultValue={contact.addressFull} className={adminTextareaClassName} rows={2} />
            </AdminField>
            <AdminField label="Adres (sokak)">
              <input name="addressStreet" defaultValue={contact.addressStreet} className={adminInputClassName} />
            </AdminField>
            <AdminField label="Çalışma saatleri (hafta içi)">
              <input name="workingHoursWeekdays" defaultValue={contact.workingHoursWeekdays} className={adminInputClassName} />
            </AdminField>
            <AdminField label="Çalışma saatleri (pazar)">
              <input name="workingHoursSunday" defaultValue={contact.workingHoursSunday} className={adminInputClassName} />
            </AdminField>
            <AdminField label="Instagram">
              <input name="instagram" defaultValue={contact.instagram} className={adminInputClassName} />
            </AdminField>
            <AdminField label="Harita linki">
              <input name="mapLink" defaultValue={contact.mapLink} className={adminInputClassName} />
            </AdminField>
            <AdminButton type="submit">İletişimi kaydet</AdminButton>
          </form>
        </AdminCard>

        <AdminCard>
          <h2 className="font-heading text-lg text-white">Kurumsal belgeler</h2>
          <form action={saveCredentialsSettingsAction} className="mt-5 grid gap-4">
            {(credentials.credentials ?? []).map((cred, index) => (
              <div key={index} className="grid gap-3 rounded-lg border border-white/10 p-4">
                <AdminField label={`Belge ${index + 1} — etiket`}>
                  <input name="cred_label" defaultValue={cred.label} className={adminInputClassName} />
                </AdminField>
                <AdminField label="Not">
                  <input name="cred_note" defaultValue={cred.note} className={adminInputClassName} />
                </AdminField>
              </div>
            ))}
            <AdminField label="Sigorta notu">
              <textarea name="insuranceNote" defaultValue={credentials.insuranceNote} className={adminTextareaClassName} rows={3} />
            </AdminField>
            <AdminButton type="submit">Belgeleri kaydet</AdminButton>
          </form>
        </AdminCard>
      </div>
    </AdminShell>
  );
}
