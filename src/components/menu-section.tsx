import { useState } from "react";
import { Flame } from "lucide-react";
import { menuItems, type Category } from "@/lib/menu-data";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const cats: { id: Category | "all"; key: string }[] = [
  { id: "all", key: "catAll" },
  { id: "starters", key: "catStarters" },
  { id: "mains", key: "catMains" },
  { id: "desserts", key: "catDesserts" },
  { id: "drinks", key: "catDrinks" },
];

export function MenuSection() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<Category | "all">("all");

  const items = active === "all" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="scroll-mt-20 bg-secondary/30 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            {t("menuKicker")}
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("menuTitle")}</h2>
          <div className="gold-rule mx-auto mt-4" />
          <p className="mt-4 text-sm text-muted-foreground">{t("menuNote")}</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <Button
              key={c.id}
              size="sm"
              variant={active === c.id ? "gold" : "outlineGold"}
              onClick={() => setActive(c.id)}
            >
              {t(c.key)}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const info = item[lang];
            return (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-warm"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={info.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.popular && (
                    <span className="absolute top-3 end-3 inline-flex items-center gap-1 rounded-full bg-gradient-gold px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                      <Flame className="h-3 w-3" /> {t("tagPopular")}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="min-w-0 text-lg font-semibold">{info.name}</h3>
                    <span className="shrink-0 font-bold text-primary" dir="ltr">
                      {item.price} DZD
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{info.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
