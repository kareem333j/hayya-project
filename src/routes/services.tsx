import { createFileRoute, Link } from "@tanstack/react-router";
import { LanguageProvider, useLanguage } from "@/lib/language";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { company } from "@/content/site";
import { ArrowRight, Package, Ship, Building2, HardHat, Home, Boxes, Facebook, Instagram, Linkedin, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { brandButton } from "@/components/BrandButton";
import { Image } from "@/components/Image";

/* ─── SEO constants ─────────────────────────────────────── */
const SITE_URL = "https://hayya-eg.com";
const PAGE_URL = `${SITE_URL}/services`;
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const title =
  "HAYYA Services | Agricultural Export, Trade, Contracting & Real Estate Egypt";
const description =
  "HAYYA offers 5 comprehensive services: Egyptian agricultural exports (produce), import/export trade, construction contracting & material supplies, general industrial supplies, and real estate investment consulting in Egypt. ISO 9001:2015 certified.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "HAYYA services Egypt, Egyptian agricultural export company, import export services Egypt, construction contracting Egypt, industrial supplies Egypt, real estate investment Egypt, B2B trade Egypt, Egyptian export company services, ISO certified Egypt company",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },

      /* ── Open Graph ── */
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "HAYYA Services — Egyptian Export & Trade" },
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
                  { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
                ],
              },
            },
            {
              "@type": "Service",
              name: "Egyptian Agricultural Products Export",
              provider: { "@type": "Organization", name: "HAYYA", url: SITE_URL },
              description:
                "Premium Egyptian agricultural produce exports including mangoes, grapes, pomegranates, tomatoes, bell peppers for international B2B buyers.",
              areaServed: "Worldwide",
              serviceType: "Agricultural Export",
            },
            {
              "@type": "Service",
              name: "Import & Export Trade Services",
              provider: { "@type": "Organization", name: "HAYYA", url: SITE_URL },
              description:
                "Comprehensive import/export operations connecting Egyptian suppliers with international markets, including customs clearance and trade facilitation.",
              areaServed: "Worldwide",
              serviceType: "Import Export Trade",
            },
            {
              "@type": "Service",
              name: "Contracting & Construction Material Supplies",
              provider: { "@type": "Organization", name: "HAYYA", url: SITE_URL },
              description:
                "Professional construction contracting and reliable supply of materials for residential, commercial, and government projects across Egypt.",
              areaServed: "Egypt",
              serviceType: "Construction Contracting",
            },
            {
              "@type": "Service",
              name: "General Supplies & Industrial Products",
              provider: { "@type": "Organization", name: "HAYYA", url: SITE_URL },
              description:
                "Wide range of high-quality industrial materials and general supplies for commercial and operational needs.",
              areaServed: "Egypt",
              serviceType: "Industrial Supplies",
            },
            {
              "@type": "Service",
              name: "Real Estate Marketing & Investment",
              provider: { "@type": "Organization", name: "HAYYA", url: SITE_URL },
              description:
                "Strategic property marketing, investment consulting, and deal facilitation for residential and commercial real estate in Egypt.",
              areaServed: "Egypt",
              serviceType: "Real Estate Investment",
            },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <LanguageProvider>
      <ServicesPage />
    </LanguageProvider>
  ),
});

/* ── copy ─────────────────────────────────────────────────────── */
const copy = {
  en: {
    eyebrow: "What We Do",
    title: "Five Pillars of Excellence",
    sub: "HAYYA delivers end-to-end solutions across agricultural exports, global trade logistics, contracting & supplies, general supplies & industrial products, and premium real estate investment — driven by integrity and global ambition.",
    services: [
      {
        id: "agri",
        icon: Package,
        label: "Agricultural Products",
        title: "Fresh Egyptian Produce for Global Markets",
        desc: "We source, grade, and export Egypt's finest agricultural produce — mangoes, grapes, pomegranates, tomatoes, peppers, and more — to international buyers seeking consistent quality and reliable supply chains.",
        points: [
          "Premium selection & professional grading",
          "Seasonal availability across a wide product range",
          "Flexible B2B supply solutions for importers",
          "Export documentation and logistics support",
        ],
        cta: "Explore Our Products",
        href: "/products",
        accent: "from-gold/20 to-amber-100/10",
        iconBg: "bg-gold/15 text-gold border-gold/30",
        badge: "Agricultural Export",
      },
      {
        id: "trade",
        icon: Ship,
        label: "Import & Export",
        title: "Global Trade Solutions, Egyptian Expertise",
        desc: "Beyond produce, HAYYA facilitates comprehensive import/export operations — connecting Egyptian suppliers with international markets and providing trade facilitation services for commodity buyers worldwide.",
        points: [
          "International trade documentation handling",
          "Customs clearance support & logistics coordination",
          "Supplier sourcing across Egyptian markets",
          "Long-term supply agreements for commercial buyers",
        ],
        cta: "Start a Trade Inquiry",
        href: "/#contact",
        accent: "from-blue-500/10 to-navy/5",
        iconBg: "bg-navy/10 text-navy border-navy/20",
        badge: "International Trade",
      },
      {
        id: "contracting",
        icon: HardHat,
        label: "Contracting & Supplies",
        title: "Construction Contracting & Material Supplies",
        desc: "HAYYA provides professional contracting services and reliable supply of construction materials — from steel and concrete to finishing materials — serving residential, commercial, and government projects across Egypt.",
        points: [
          "Supply of structural & finishing construction materials",
          "Subcontracting for residential & commercial projects",
          "Procurement management & vendor coordination",
          "Timely delivery with quality-guaranteed materials",
        ],
        cta: "Inquire About Contracting",
        href: "/#contact",
        accent: "from-orange-500/10 to-amber-50/20",
        iconBg: "bg-orange-500/10 text-orange-600 border-orange-500/20",
        badge: "Contracting",
      },
      {
        id: "industrial",
        icon: Boxes,
        label: "General Supplies & Industrial Products",
        title: "High-Quality Industrial Materials & General Supplies",
        desc: "HAYYA sources and supplies a wide range of high-quality industrial materials and general supplies — meeting diverse commercial and operational needs for businesses across multiple sectors.",
        points: [
          "Industrial materials sourcing & procurement",
          "General supplies for commercial & operational needs",
          "Quality-vetted products across multiple categories",
          "Flexible supply agreements for business buyers",
        ],
        cta: "Inquire About Supplies",
        href: "/#contact",
        accent: "from-teal-500/10 to-cyan-50/20",
        iconBg: "bg-teal-500/10 text-teal-600 border-teal-500/20",
        badge: "Industrial Supplies",
      },
      {
        id: "realestate",
        icon: Building2,
        label: "Real Estate Investment",
        title: "Smart Real Estate Marketing & Investment",
        desc: "HAYYA extends its trusted name into Egyptian real estate — offering strategic property marketing, investment consulting, and deal facilitation for residential and commercial projects across Egypt's fastest-growing cities.",
        points: [
          "Strategic property marketing & promotion",
          "Investment consultation for residential & commercial",
          "Market analysis for emerging Egyptian cities",
          "End-to-end deal facilitation for buyers & sellers",
        ],
        cta: "Inquire About Real Estate",
        href: "/#contact",
        accent: "from-leaf/15 to-emerald-50/20",
        iconBg: "bg-leaf/15 text-leaf border-leaf/30",
        badge: "Real Estate",
      },
    ],
    social: {
      title: "Connect With HAYYA",
      sub: "Follow us on social media for updates on our latest products, shipments, and real estate opportunities.",
    },
    cta: {
      title: "Ready to Work With Us?",
      body: "Whether you're an international buyer, a trade partner, or looking for a real estate investment — HAYYA is your trusted Egyptian partner.",
      btn: "Contact Us Now",
    },
  },
  ar: {
    eyebrow: "ماذا نفعل",
    title: "خمسة محاور للتميز",
    sub: "تقدم هيّا حلولاً متكاملة في التصدير الزراعي والتجارة الدولية والمقاولات والتوريدات والتوريدات العامة والمنتجات الصناعية والاستثمار العقاري — مدفوعةً بالنزاهة والطموح العالمي.",
    services: [
      {
        id: "agri",
        icon: Package,
        label: "المنتجات الزراعية",
        title: "محاصيل مصرية طازجة للأسواق العالمية",
        desc: "نقوم بتوريد وتدريج وتصدير أفضل المنتجات الزراعية المصرية — المانجو والعنب والرمان والطماطم والفلفل وغيرها — للمشترين الدوليين الباحثين عن الجودة الثابتة وسلاسل الإمداد الموثوقة.",
        points: [
          "اختيار متميز وتصنيف احترافي",
          "توافر موسمي عبر مجموعة واسعة من المنتجات",
          "حلول إمداد مرنة للمستوردين",
          "دعم وثائق التصدير والخدمات اللوجستية",
        ],
        cta: "استعرض منتجاتنا",
        href: "/products",
        accent: "from-gold/20 to-amber-100/10",
        iconBg: "bg-gold/15 text-gold border-gold/30",
        badge: "تصدير زراعي",
      },
      {
        id: "trade",
        icon: Ship,
        label: "الاستيراد والتصدير",
        title: "حلول التجارة العالمية بخبرة مصرية",
        desc: "تُيسّر هيّا عمليات الاستيراد والتصدير الشاملة — ربط الموردين المصريين بالأسواق الدولية وتقديم خدمات تسهيل التجارة لمشتري السلع في جميع أنحاء العالم.",
        points: [
          "معالجة وثائق التجارة الدولية",
          "دعم التخليص الجمركي والتنسيق اللوجستي",
          "توريد الموردين عبر الأسواق المصرية",
          "اتفاقيات إمداد طويلة الأمد للمشترين التجاريين",
        ],
        cta: "ابدأ استفسار تجاري",
        href: "/#contact",
        accent: "from-blue-500/10 to-navy/5",
        iconBg: "bg-navy/10 text-navy border-navy/20",
        badge: "تجارة دولية",
      },
      {
        id: "contracting",
        icon: HardHat,
        label: "المقاولات والتوريدات",
        title: "مقاولات البناء وتوريد مواد التشييد",
        desc: "تقدم هيّا خدمات مقاولات احترافية وتوريداً موثوقاً لمواد البناء — من الحديد والخرسانة إلى مواد التشطيب — لخدمة المشاريع السكنية والتجارية والحكومية في مصر.",
        points: [
          "توريد مواد البناء الإنشائية والتشطيبية",
          "المقاولات الفرعية للمشاريع السكنية والتجارية",
          "إدارة المشتريات وتنسيق الموردين",
          "تسليم في الوقت المحدد بمواد مضمونة الجودة",
        ],
        cta: "استفسر عن المقاولات",
        href: "/#contact",
        accent: "from-orange-500/10 to-amber-50/20",
        iconBg: "bg-orange-500/10 text-orange-600 border-orange-500/20",
        badge: "مقاولات",
      },
      {
        id: "industrial",
        icon: Boxes,
        label: "التوريدات العامة والمنتجات الصناعية",
        title: "مواد صناعية وتوريدات عامة عالية الجودة",
        desc: "تعمل هيّا على توريد وإمداد مجموعة واسعة من المواد الصناعية عالية الجودة والتوريدات العامة — لتلبية الاحتياجات التجارية والتشغيلية المتنوعة للشركات في قطاعات متعددة.",
        points: [
          "توريد ومشتريات المواد الصناعية",
          "توريدات عامة للاحتياجات التجارية والتشغيلية",
          "منتجات مدروسة الجودة عبر فئات متعددة",
          "اتفاقيات إمداد مرنة للمشترين التجاريين",
        ],
        cta: "استفسر عن التوريدات",
        href: "/#contact",
        accent: "from-teal-500/10 to-cyan-50/20",
        iconBg: "bg-teal-500/10 text-teal-600 border-teal-500/20",
        badge: "توريدات صناعية",
      },
      {
        id: "realestate",
        icon: Building2,
        label: "الاستثمار العقاري",
        title: "التسويق العقاري الذكي والاستثمار",
        desc: "تمتد هيّا بسمعتها الموثوقة إلى قطاع العقارات المصري — مقدمةً تسويقاً استراتيجياً للعقارات واستشارات استثمارية وتسهيل الصفقات للمشاريع السكنية والتجارية في أسرع مدن مصر نمواً.",
        points: [
          "تسويق وترويج عقاري استراتيجي",
          "استشارات استثمارية للسكني والتجاري",
          "تحليل السوق للمدن المصرية الناشئة",
          "تسهيل صفقات متكامل للمشترين والبائعين",
        ],
        cta: "استفسر عن العقارات",
        href: "/#contact",
        accent: "from-leaf/15 to-emerald-50/20",
        iconBg: "bg-leaf/15 text-leaf border-leaf/30",
        badge: "عقارات",
      },
    ],
    social: {
      title: "تواصل مع هيّا",
      sub: "تابعنا على وسائل التواصل الاجتماعي لمتابعة آخر منتجاتنا وشحناتنا وفرصنا العقارية.",
    },
    cta: {
      title: "هل أنت مستعد للعمل معنا؟",
      body: "سواء كنت مشترياً دولياً أو شريكاً تجارياً أو تبحث عن استثمار عقاري — هيّا شريكك المصري الموثوق.",
      btn: "تواصل معنا الآن",
    },
  },
};

/* ── social icons ─────────────────────────────────────────────── */
const socialLinks = [
  {
    name: "Facebook",
    href: company.facebook,
    Icon: Facebook,
    color: "hover:text-[#1877F2] hover:border-[#1877F2]/40",
  },
  {
    name: "Instagram",
    href: company.instagram,
    Icon: Instagram,
    color: "hover:text-[#E1306C] hover:border-[#E1306C]/40",
  },
  {
    name: "LinkedIn",
    href: company.linkedin,
    Icon: Linkedin,
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40",
  },
];

const serviceImages: Record<string, string> = {
  agri: "/service-agri.jpg",
  trade: "/service-trade.jpg",
  realestate: "/service-realestate.jpg",
  contracting: "/service-contracting.jpg",
  industrial: "/services/industrial_supplies.jpg",
  "realestate-marketing": "/service-realestate-marketing.jpg",
};

/* ── page ─────────────────────────────────────────────────────── */
function ServicesPage() {
  const { lang, dir } = useLanguage();
  const c = copy[lang];

  return (
    <>
      <Header />
      <main>
        {/* ── Hero Banner ─────────────────────────── */}
        <section className="relative overflow-hidden bg-navy-deep pt-32 pb-20 md:pt-40 md:pb-28">
          {/* decorative orbs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -start-32 h-[500px] w-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, oklch(0.755 0.13 76) 0%, transparent 65%)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -end-40 h-[600px] w-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, oklch(0.5 0.085 145) 0%, transparent 65%)" }}
          />

          <div className="container-hayya relative z-10 text-center">
            <Reveal>
              <p className="eyebrow" style={{ color: "oklch(0.755 0.13 76)" }}>
                {c.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl leading-[1.1] text-on-navy sm:text-5xl lg:text-6xl">
                {c.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-on-navy-muted sm:text-lg">
                {c.sub}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Services Cards ───────────────────────── */}
        <section className="py-20 md:py-28 lg:py-32 bg-background">
          <div className="container-hayya space-y-10">
            {c.services.map((svc, i) => {
              const Icon = svc.icon;
              const isEven = i % 2 === 0;

              return (
                <Reveal
                  key={svc.id}
                  delay={i * 100}
                  className={cn(
                    "group relative overflow-hidden border border-border bg-card rounded-2xl transition-all duration-500",
                    "hover:border-gold/40 hover:shadow-[0_20px_60px_-20px_oklch(0.28_0.062_254_/_0.12)]"
                  )}
                >
                  {/* top accent line */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div
                    className={cn(
                      "grid items-center gap-0 lg:grid-cols-2",
                      !isEven && dir === "ltr" && "lg:[direction:rtl]",
                      !isEven && dir === "rtl" && "lg:[direction:ltr]"
                    )}
                  >
                    {/* Visual Panel — real image */}
                    <div className="relative h-72 lg:h-full min-h-[380px] overflow-hidden bg-navy-deep/10">
                      <Image
                        src={serviceImages[svc.id]}
                        alt={svc.label}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* dark overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-navy-deep/10 to-transparent" />
                      {/* Badge */}
                      <div className="absolute top-5 start-5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-3 py-1 text-[0.7rem] font-bold tracking-[0.14em] text-white uppercase">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                          {svc.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content Panel */}
                    <div
                      className={cn(
                        "p-8 md:p-12 lg:p-14",
                        !isEven && "[direction:ltr] lg:[direction:ltr]",
                        dir === "rtl" && "[direction:rtl]"
                      )}
                    >
                      <p className="text-[0.7rem] font-bold tracking-[0.16em] text-gold uppercase">
                        {svc.label}
                      </p>
                      <h2 className="mt-3 text-2xl leading-[1.2] text-navy sm:text-3xl lg:text-[2rem]">
                        {svc.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {svc.desc}
                      </p>

                      <ul className="mt-6 space-y-2.5">
                        {svc.points.map((point) => (
                          <li key={point} className="flex items-start gap-3 text-sm text-navy/80">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        {svc.href === "/products" ? (
                          <Link
                            to="/products"
                            className={cn(
                              brandButton({ variant: "solid", size: "md" }),
                              "inline-flex items-center gap-2"
                            )}
                          >
                            {svc.cta}
                            <ArrowRight className={cn("h-4 w-4", dir === "rtl" && "rotate-180")} />
                          </Link>
                        ) : (
                          <a
                            href={svc.href}
                            className={cn(
                              brandButton({ variant: "outline", size: "md" }),
                              "inline-flex items-center gap-2"
                            )}
                          >
                            {svc.cta}
                            <ArrowRight className={cn("h-4 w-4", dir === "rtl" && "rotate-180")} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── Social Media Section ─────────────────── */}
        <section className="bg-secondary border-y border-border py-20">
          <div className="container-hayya text-center">
            <Reveal>
              <p className="eyebrow">{c.social.title}</p>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">{c.social.sub}</p>

              <div className="mt-10 flex flex-wrap justify-center gap-5">
                {socialLinks.map(({ name, href, Icon, color }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 text-navy/60 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft",
                      color
                    )}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm font-semibold">{name}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA Band ────────────────────────────── */}
        <section className="py-20 md:py-24 bg-navy-deep">
          <div className="container-hayya">
            <Reveal className="relative overflow-hidden rounded-2xl border border-gold/30 bg-white/5 px-8 py-16 text-center md:px-16 md:py-20 backdrop-blur-sm">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gold" />
              <h2 className="mx-auto max-w-3xl text-3xl leading-[1.16] text-on-navy sm:text-4xl">
                {c.cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-on-navy-muted">
                {c.cta.body}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/"
                  hash="contact"
                  className={cn(brandButton({ variant: "gold", size: "lg" }))}
                >
                  {c.cta.btn}
                </Link>
                <Link
                  to="/"
                  className={cn(brandButton({ variant: "ghostLight", size: "lg" }))}
                >
                  {lang === "en" ? "Back to Home" : "العودة للرئيسية"}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
