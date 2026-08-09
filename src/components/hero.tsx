import { Phone, UtensilsCrossed, CalendarDays, Clock } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { useLang, PHONE, PHONE_DISPLAY } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt={t("brandName")}
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-5 pt-24 pb-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/40 px-4 py-1.5 text-xs text-primary backdrop-blur">
          {t("heroKicker")}
        </span>

        <h1 className="mt-6 text-4xl leading-tight font-bold text-foreground sm:text-5xl md:text-6xl">
          <span className="text-gradient-gold">{t("heroTitle")}</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("heroSubtitle")}
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
          <Button asChild variant="gold" size="lg">
            <a href="#menu">
              <UtensilsCrossed className="h-5 w-5" /> {t("heroCtaMenu")}
            </a>
          </Button>
          <Button asChild variant="outlineGold" size="lg">
            <a href="#reserve">
              <CalendarDays className="h-5 w-5" /> {t("heroCtaReserve")}
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href={`tel:${PHONE}`} dir="ltr">
              <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
            </a>
          </Button>
        </div>

        <div className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 text-primary" />
          {t("heroOpenToday")}
        </div>
      </div>
    </section>
  );
}
