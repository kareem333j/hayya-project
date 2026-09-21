import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/language";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyHayya } from "@/components/sections/WhyHayya";
import { Partnerships } from "@/components/sections/Partnerships";
import { OurProjects } from "@/components/sections/OurProjects";
import { GlobalMarkets } from "@/components/sections/GlobalMarkets";
import { CtaBand } from "@/components/sections/CtaBand";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { PromoVideo } from "@/components/sections/PromoVideo";

/* ─── SEO constants ────────────────────────────────────────────────── */
const SITE_URL = "https://hayya-eg.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const OG_IMAGE_ALT = "HAYYA — Egyptian Agricultural Exports | hayya-eg.com";

const title =
  "HAYYA | Egyptian Agricultural Exports & B2B Trade — Cairo, Egypt";
const description =
  "HAYYA is an ISO 9001:2015 certified Egyptian company: premium agricultural exports (mangoes, grapes, pomegranates, vegetables), import/export trade, industrial supplies, contracting & real estate investment. Trusted B2B partner — El Shorouk City, Cairo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "HAYYA Egypt, Egyptian agricultural export, fresh produce export, mango export Egypt, grapes export Egypt, pomegranate export Egypt, Egyptian vegetables export, B2B Egypt exporter, import export Egypt, ISO 9001 Egypt, real estate Egypt investment, industrial supplies Egypt, Egyptian trade company, hayya-eg.com, تصدير زراعي مصري, هيّا, شركة هيّا",
      },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },

      /* ── Open Graph (WhatsApp, Facebook, LinkedIn, Telegram) ── */
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_EG" },

      /* ── Twitter / X Card ── */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            /* ── Organization ── */
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "HAYYA",
              alternateName: [
                "هيّا",
                "HAYYA Egypt",
                "Hayya for Engineering and Development",
                "شركة هيّا للهندسة والتطوير",
              ],
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/favicon.png`,
                width: 512,
                height: 512,
              },
              image: {
                "@type": "ImageObject",
                url: OG_IMAGE,
                width: 1200,
                height: 630,
              },
              description,
              foundingDate: "2022",
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "ISO 9001:2015 Quality Management",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "C31 University Mall",
                addressLocality: "El Shorouk City",
                addressRegion: "Cairo Governorate",
                addressCountry: "EG",
                postalCode: "11837",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.1181,
                longitude: 31.6033,
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+201060010040",
                  contactType: "sales",
                  areaServed: "Worldwide",
                  availableLanguage: ["English", "Arabic"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+201021820906",
                  contactType: "customer support",
                  areaServed: "Worldwide",
                  availableLanguage: ["English", "Arabic"],
                },
              ],
              email: "rezk@hayya-eg.com",
              sameAs: [
                "https://www.facebook.com/share/1GL3ZtikM8/",
                "https://www.instagram.com/hayya.egypt",
                "https://www.linkedin.com/company/hayya-engineering-and-development",
              ],
              knowsAbout: [
                "Agricultural Export",
                "Egyptian Fresh Produce",
                "Import Export Trade",
                "Real Estate Investment",
                "Industrial Supplies",
                "Construction Contracting",
                "B2B International Trade",
              ],
              numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
              areaServed: [
                { "@type": "Country", name: "Egypt" },
                { "@type": "Place", name: "Middle East" },
                { "@type": "Place", name: "Europe" },
                { "@type": "Place", name: "Gulf Countries" },
              ],
            },
            /* ── LocalBusiness ── */
            {
              "@type": "LocalBusiness",
              "@id": `${SITE_URL}/#localbusiness`,
              name: "HAYYA",
              url: SITE_URL,
              telephone: "+201060010040",
              email: "rezk@hayya-eg.com",
              image: OG_IMAGE,
              logo: `${SITE_URL}/favicon.png`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "C31 University Mall",
                addressLocality: "El Shorouk City",
                addressRegion: "Cairo Governorate",
                addressCountry: "EG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.1181,
                longitude: 31.6033,
              },
              priceRange: "$$",
              currenciesAccepted: "USD, EUR, EGP",
              openingHours: "Mo-Sa 09:00-18:00",
              hasMap:
                "https://maps.google.com/?q=El+Shorouk+City+Cairo+Egypt",
            },
            /* ── WebPage ── */
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/#webpage`,
              url: SITE_URL,
              name: title,
              description,
              inLanguage: ["en", "ar"],
              about: { "@id": `${SITE_URL}/#organization` },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: SITE_URL,
                  },
                ],
              },
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <PromoVideo />
        <Process />
        <WhyHayya />
        <OurProjects />
        <Partnerships />
        <GlobalMarkets />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
