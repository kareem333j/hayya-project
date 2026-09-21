import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { LanguageProvider, useLanguage } from "@/lib/language";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { brandButton } from "@/components/BrandButton";
import { catalogCopy } from "@/content/site";
import { fetchPublishedProducts } from "@/lib/catalog";
import { cn } from "@/lib/utils";

/* ─── SEO constants ─────────────────────────────────────── */
const SITE_URL = "https://hayya-eg.com";
const PAGE_URL = `${SITE_URL}/products`;
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const title = "Egyptian Agricultural Products Catalog | HAYYA Export";
const description =
  "Browse HAYYA's export product catalog: fresh mangoes, grapes, pomegranates, tomatoes, bell peppers, potatoes, oranges, and aromatic herbs — all premium Egyptian agricultural produce ready for international B2B buyers.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Egyptian agricultural products, Egypt produce export catalog, mango export Egypt, fresh grapes Egypt, pomegranate export, Egyptian tomatoes export, bell peppers Egypt, potato export Egypt, orange export Egypt, herbs export Egypt, HAYYA products, B2B agricultural supplier Egypt",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },

      /* ── Open Graph ── */
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "HAYYA Egyptian Products Catalog" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },

      /* ── Twitter ── */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${PAGE_URL}/#webpage`,
              url: PAGE_URL,
              name: title,
              description,
              inLanguage: ["en", "ar"],
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Products", item: PAGE_URL },
                ],
              },
            },
            {
              "@type": "ItemList",
              name: "HAYYA Egyptian Agricultural Products",
              description: "Premium Egyptian agricultural products available for export",
              url: PAGE_URL,
              numberOfItems: 9,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Fresh Mangoes" },
                { "@type": "ListItem", position: 2, name: "Green Grapes" },
                { "@type": "ListItem", position: 3, name: "Table Grapes" },
                { "@type": "ListItem", position: 4, name: "Pomegranates" },
                { "@type": "ListItem", position: 5, name: "Tomatoes" },
                { "@type": "ListItem", position: 6, name: "Bell Peppers" },
                { "@type": "ListItem", position: 7, name: "Potatoes" },
                { "@type": "ListItem", position: 8, name: "Fresh Oranges" },
                { "@type": "ListItem", position: 9, name: "Rosemary & Aromatic Herbs" },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <LanguageProvider>
      <CatalogPage />
    </LanguageProvider>
  ),
});

function CatalogPage() {
  const { lang } = useLanguage();
  const c = catalogCopy[lang];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", "published"],
    queryFn: fetchPublishedProducts,
  });

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        <section className="container-hayya py-14 md:py-20">
          <p className="eyebrow">{c.pageLabel}</p>
          <h1 className="mt-5 max-w-3xl text-3xl leading-[1.14] text-navy sm:text-4xl lg:text-[3rem]">
            {c.pageTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {c.pageSub}
          </p>

          <div className="mt-12">
            {isLoading && <p className="text-sm text-muted-foreground">{c.loading}</p>}
            {isError && <p className="text-sm text-destructive">{c.error}</p>}
            {!isLoading && !isError && (data ?? []).length === 0 && (
              <p className="text-sm text-muted-foreground">{c.empty}</p>
            )}
            {(data ?? []).length > 0 && <ProductGrid products={data ?? []} />}
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link to="/" hash="contact" className={cn(brandButton({ variant: "gold", size: "lg" }))}>
              {c.inquire}
            </Link>
            <Link to="/" className={cn(brandButton({ variant: "outline", size: "lg" }))}>
              {c.backHome}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
