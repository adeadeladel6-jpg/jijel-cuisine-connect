import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { useLang, PHONE, PHONE_DISPLAY } from "@/lib/i18n";

const links = [
  { id: "about", key: "navAbout" },
  { id: "menu", key: "navMenu" },
  { id: "reserve", key: "navReserve" },
  { id: "contact", key: "navContact" },
];

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold font-bold text-primary-foreground">
              د
            </span>
            <span className="font-bold">{t("brandName")}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t("heroSubtitle")}</p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-primary/10"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-primary/10"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t("quickLinks")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-muted-foreground hover:text-primary">
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t("contactKicker")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{t("address")}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${PHONE}`} dir="ltr" className="hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">{t("hours")}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {t("hoursSatThu")}: <span dir="ltr">{t("hoursSatThuVal")}</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-primary">
                {t("hoursFri")}: <span dir="ltr">{t("hoursFriVal")}</span>
              </span>
            </li>
            <li>{t("featCash")}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border px-5 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {t("brandName")} — {t("rights")}
      </div>
    </footer>
  );
}
