import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { MenuSection } from "@/components/menu-section";
import { Reservation } from "@/components/reservation";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

const title = "مطعم دار الضيافة — جيجل | Restaurant à Jijel";
const description =
  "مطعم عائلي في حي العربي بن مهيدي، جيجل. غداء وعشاء وحلويات، حجز طاولات وخدمة خارجية. اتصل: +213 655 70 09 50";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "مطعم دار الضيافة",
          telephone: "+213655700950",
          servesCuisine: "Algerian",
          paymentAccepted: "Cash",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Cité Larbi Ben M'hidi",
            addressLocality: "Jijel",
            addressCountry: "DZ",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
              opens: "10:59",
              closes: "00:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Friday",
              opens: "10:59",
              closes: "01:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main>
          <Hero />
          <About />
          <MenuSection />
          <Reservation />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </LangProvider>
  );
}
