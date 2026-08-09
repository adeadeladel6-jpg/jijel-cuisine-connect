import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { useLang, PHONE, PHONE_DISPLAY } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

const links = [
  { id: "about", key: "navAbout" },
  { id: "menu", key: "navMenu" },
  { id: "reserve", key: "navReserve" },
  { id: "contact", key: "navContact" },
];

export function SiteHeader() {
  const { t, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/95 shadow-warm backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:justify-between">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-gold text-base font-bold text-primary-foreground">
            د
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold text-foreground">{t("brandName")}</span>
            <span className="block text-[11px] tracking-widest text-primary">{t("brandTagline")}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button variant="ghost" size="sm" onClick={toggle} className="text-primary">
            {t("langSwitch")}
          </Button>
          <Button asChild variant="gold" size="sm" className="hidden sm:inline-flex">
            <a href={`tel:${PHONE}`}>
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">{PHONE_DISPLAY}</span>
              <span className="md:hidden">{t("callNow")}</span>
            </a>
          </Button>
          <button
            aria-label="menu"
            className="rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/98 px-4 py-4 backdrop-blur lg:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-foreground hover:bg-muted"
              >
                {t(l.key)}
              </a>
            ))}
            <Button asChild variant="gold" className="mt-2">
              <a href={`tel:${PHONE}`}>
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
