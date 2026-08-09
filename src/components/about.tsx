import { Accessibility, Banknote, CalendarCheck, ShoppingBag, Users, UtensilsCrossed } from "lucide-react";
import { useLang } from "@/lib/i18n";
import dessertImg from "@/assets/dish-dessert.jpg";

const features = [
  { icon: UtensilsCrossed, key: "featDinein" },
  { icon: ShoppingBag, key: "featTakeout" },
  { icon: CalendarCheck, key: "featReserve" },
  { icon: Users, key: "featFamily" },
  { icon: Accessibility, key: "featAccess" },
  { icon: Banknote, key: "featCash" },
];

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="scroll-mt-20 bg-background py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            {t("aboutKicker")}
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("aboutTitle")}</h2>
          <div className="gold-rule mt-4" />
          <p className="mt-6 leading-relaxed text-muted-foreground">{t("aboutP1")}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t("aboutP2")}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.key}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
              >
                <f.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="min-w-0 text-sm">{t(f.key)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-warm">
            <img
              src={dessertImg}
              alt={t("aboutTitle")}
              loading="lazy"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 start-6 rounded-2xl border border-border bg-card px-6 py-4 shadow-warm">
            <p className="text-2xl font-bold text-primary">100%</p>
            <p className="text-xs text-muted-foreground">Fresh &amp; Homemade</p>
          </div>
        </div>
      </div>
    </section>
  );
}
