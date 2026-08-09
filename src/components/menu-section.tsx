import { useState } from "react";
import { Flame } from "lucide-react";
import { menuItems, categoryImage, type Category } from "@/lib/menu-data";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const cats: { id: Category | "all"; key: string }[] = [
  { id: "all", key: "catAll" },
  { id: "seafood", key: "catSeafood" },
  { id: "grills", key: "catGrills" },
  { id: "mains", key: "catMains" },
  { id: "starters", key: "catStarters" },
  { id: "desserts", key: "catDesserts" },
  { id: "drinks", key: "catDrinks" },
];

const catKey: Record<Category, string> = {
  seafood: "catSeafood",
  grills: "catGrills",
  mains: "catMains",
  starters: "catStarters",
  desserts: "catDesserts",
  drinks: "catDrinks",
};

export function MenuSection() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<Category | "all">("all");

  const groups: Category[] =
    active === "all" ? ["seafood", "grills", "mains", "starters", "desserts", "drinks"] : [active];

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

        {/* Tabs: scrollable on mobile */}
        <div className="mt-8 -mx-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-2 sm:mx-auto sm:w-auto sm:flex-wrap sm:justify-center">
            {cats.map((c) => (
              <Button
                key={c.id}
                size="sm"
                className="shrink-0"
                variant={active === c.id ? "gold" : "outlineGold"}
                onClick={() => setActive(c.id)}
              >
                {t(c.key)}
              </Button>
            ))}
          </div>
        </div>

        {groups.map((g) => {
          const items = menuItems.filter((i) => i.category === g);
          if (!items.length) return null;
          return (
            <div key={g} className="mt-12">
              <div className="flex items-center gap-4">
                <img
                  src={categoryImage[g]}
                  alt={t(catKey[g])}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-14 w-14 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <h3 className="truncate text-xl font-bold sm:text-2xl">{t(catKey[g])}</h3>
                  <span className="text-xs text-muted-foreground">
                    {items.length} {t("dishesCount")}
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => {
                  const info = item[lang];
                  return (
                    <article
                      key={item.id}
                      className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-warm"
                    >
                      <img
                        src={item.image}
                        alt={info.name}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="h-16 w-16 shrink-0 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="min-w-0 truncate text-base font-semibold">{info.name}</h4>
                          {item.popular && (
                            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-gold px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
                              <Flame className="h-3 w-3" />
                            </span>
                          )}
                        </div>
                        {info.desc && (
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {info.desc}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 text-sm font-bold text-primary" dir="ltr">
                        {item.price === null ? (
                          <span dir="auto" className="text-xs font-semibold">
                            {t("byWeight")}
                          </span>
                        ) : (
                          `${item.price} DZD`
                        )}
                      </span>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
