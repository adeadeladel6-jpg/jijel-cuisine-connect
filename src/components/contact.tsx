import { Clock, MapPin, Phone } from "lucide-react";
import { useLang, PHONE, PHONE_DISPLAY } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="scroll-mt-20 bg-secondary/30 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            {t("contactKicker")}
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("contactTitle")}</h2>
          <div className="gold-rule mx-auto mt-4" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border shadow-warm">
            <iframe
              title="Google Map — Larbi Ben M'hidi, Jijel"
              src="https://www.google.com/maps?q=Cite%20Larbi%20Ben%20M'hidi%2C%20Jijel%2C%20Algeria&output=embed"
              className="h-[340px] w-full lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="font-semibold">{t("contactKicker")}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t("address")}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{t("hours")}</p>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center justify-between gap-3 border-b border-border pb-2">
                      <span className="text-muted-foreground">{t("hoursSatThu")}</span>
                      <span dir="ltr">{t("hoursSatThuVal")}</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-primary">
                        {t("hoursFri")}
                        <span className="ms-2 rounded-full bg-primary/15 px-2 py-0.5 text-[11px]">
                          {t("friBadge")}
                        </span>
                      </span>
                      <span className="font-semibold text-primary" dir="ltr">
                        {t("hoursFriVal")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex min-w-0 items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="font-semibold">{t("phone")}</p>
                    <p className="mt-1 text-sm text-muted-foreground" dir="ltr">
                      {PHONE_DISPLAY}
                    </p>
                  </div>
                </div>
                <Button asChild variant="gold">
                  <a href={`tel:${PHONE}`}>{t("callNow")}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
