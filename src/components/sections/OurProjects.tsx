import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import {
  Building2,
  Wheat,
  Flame,
  HardHat,
  MapPin,
  Calendar,
  Factory,
  Package,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { ProfileModal } from "@/components/ProfileModal";


/* ------------------------------------------------------------------
   REAL PROJECT DATA — sourced from Hayya Engineering & Development
   Company Profile 2026 (official document)
   ------------------------------------------------------------------ */
const projects = [
  {
    id: "chemical-warehouses-qatar",
    category: "construction",
    icon: Factory,
    accent: "oklch(0.755 0.13 76)", // gold
    gradient: "from-[oklch(0.32_0.09_76)] to-[oklch(0.22_0.05_90)]",
    highlight: true,
    en: {
      name: "Chemical Warehouses — Birkat Al Awamer",
      location: "Qatar",
      year: "2023",
      type: "General Contracting",
      tag: "Certified Completion",
      metric: "5,250 m²",
      metricLabel: "Total Area",
      desc: "Construction of two chemical warehouse buildings with external guard room and ancillary works. Completion certificate issued by Al Wakra Municipality, Ministry of Municipality, Qatar — 28 November 2023.",
    },
    ar: {
      name: "مستودعات كيماويات — بركة العوامر",
      location: "قطر",
      year: "٢٠٢٣",
      type: "مقاولات عامة",
      tag: "شهادة إتمام رسمية",
      metric: "٥٢٥٠ م²",
      metricLabel: "المساحة الإجمالية",
      desc: "إنشاء مستودعين للكيماويات بمساحة 5,250 م² مع غرفة حراسة خارجية وأعمال موقع. شهادة الإتمام صادرة من بلدية الوكرة، وزارة البلدية، قطر — 28 نوفمبر 2023.",
    },
  },
  {
    id: "hazm-mall-doha",
    category: "engineering",
    icon: Building2,
    accent: "oklch(0.6 0.12 254)", // blue
    gradient: "from-[oklch(0.28_0.062_254)] to-[oklch(0.38_0.055_254)]",
    highlight: false,
    en: {
      name: "Hazm Mall — Doha",
      location: "Doha, Qatar",
      year: "Completed",
      type: "Engineering Supervision",
      tag: "Engineering",
      metric: null,
      metricLabel: null,
      desc: "Luxury retail and lifestyle destination featuring a grand galleria, hospitality facilities, gardens, fountains and exhibition spaces. Engineering supervision and civil-defense coordination.",
    },
    ar: {
      name: "هازم مول — الدوحة",
      location: "الدوحة، قطر",
      year: "مكتمل",
      type: "إشراف هندسي",
      tag: "هندسة",
      metric: null,
      metricLabel: null,
      desc: "وجهة تجارية وترفيهية راقية تضم جاليري كبير ومرافق ضيافة وحدائق ونوافير وفضاءات معارض. إشراف هندسي وتنسيق دفاع مدني.",
    },
  },
  {
    id: "lusail-marina-twin-towers",
    category: "engineering",
    icon: Building2,
    accent: "oklch(0.6 0.12 254)",
    gradient: "from-[oklch(0.24_0.055_254)] to-[oklch(0.34_0.06_240)]",
    highlight: false,
    en: {
      name: "Lusail Marina Twin Towers",
      location: "Lusail, Qatar",
      year: "Completed",
      type: "Engineering Supervision",
      tag: "Engineering",
      metric: "98,000 m²",
      metricLabel: "Built-up Area",
      desc: "32-storey commercial mixed-use twin-tower development in Lusail Marina. Engineering supervision, site coordination and building-services oversight across the full delivery cycle.",
    },
    ar: {
      name: "برجا لوسيل مارينا التوأم",
      location: "لوسيل، قطر",
      year: "مكتمل",
      type: "إشراف هندسي",
      tag: "هندسة",
      metric: "٩٨٠٠٠ م²",
      metricLabel: "المساحة المبنية",
      desc: "مشروع برجين تجاريين متعدد الاستخدام من 32 طابقاً في لوسيل مارينا. إشراف هندسي وتنسيق موقع وإشراف على خدمات المبنى طوال دورة التنفيذ.",
    },
  },
  {
    id: "qatar-stock-exchange",
    category: "engineering",
    icon: Building2,
    accent: "oklch(0.6 0.12 254)",
    gradient: "from-[oklch(0.26_0.058_254)] to-[oklch(0.36_0.052_230)]",
    highlight: false,
    en: {
      name: "Qatar Stock Exchange",
      location: "Doha, Qatar",
      year: "Completed",
      type: "Civil-Defense Coordination",
      tag: "Engineering",
      metric: null,
      metricLabel: null,
      desc: "Finance and business facility supporting trading, investor services and business functions in Doha. Civil-defense and life-safety coordination throughout the project.",
    },
    ar: {
      name: "بورصة قطر",
      location: "الدوحة، قطر",
      year: "مكتمل",
      type: "تنسيق دفاع مدني",
      tag: "هندسة",
      metric: null,
      metricLabel: null,
      desc: "مرفق مالي وتجاري يدعم التداول وخدمات المستثمرين والأعمال التجارية في الدوحة. تنسيق الدفاع المدني وسلامة الأرواح طوال المشروع.",
    },
  },
  {
    id: "qatalum-aluminium-plant",
    category: "engineering",
    icon: Factory,
    accent: "oklch(0.65 0.1 76)",
    gradient: "from-[oklch(0.30_0.07_76)] to-[oklch(0.20_0.05_90)]",
    highlight: false,
    en: {
      name: "Qatalum Aluminium Plant",
      location: "Mesaieed Industrial City, Qatar",
      year: "Completed",
      type: "Engineering Supervision",
      tag: "Industrial",
      metric: null,
      metricLabel: null,
      desc: "Integrated aluminium production complex including reduction, carbon, casthouse, port, storage and dedicated power infrastructure. Engineering supervision and fire-protection coordination.",
    },
    ar: {
      name: "مصنع قاطالوم للألمنيوم",
      location: "مدينة مسيعيد الصناعية، قطر",
      year: "مكتمل",
      type: "إشراف هندسي",
      tag: "صناعي",
      metric: null,
      metricLabel: null,
      desc: "مجمع إنتاج ألمنيوم متكامل يشمل الاختزال والكربون وقاعة السبائك والميناء والتخزين والبنية التحتية للطاقة. إشراف هندسي وتنسيق الحماية من الحريق.",
    },
  },
  {
    id: "somalia-embassy-doha",
    category: "construction",
    icon: Building2,
    accent: "oklch(0.62 0.11 145)",
    gradient: "from-[oklch(0.28_0.07_145)] to-[oklch(0.38_0.055_145)]",
    highlight: false,
    en: {
      name: "Embassy of Somalia — Doha",
      location: "Onaiza, Doha, Qatar",
      year: "Completed",
      type: "Construction",
      tag: "Contracting",
      metric: "3,805 m²",
      metricLabel: "Total Area",
      desc: "Embassy building project in the Onaiza district, Doha, with a total area of approximately 3,804.98 m². Civil-defense coordination and building-services integration.",
    },
    ar: {
      name: "سفارة الصومال — الدوحة",
      location: "العنيزة، الدوحة، قطر",
      year: "مكتمل",
      type: "إنشاء",
      tag: "مقاولات",
      metric: "٣٨٠٥ م²",
      metricLabel: "المساحة الإجمالية",
      desc: "مشروع بناء السفارة في منطقة العنيزة، الدوحة، بمساحة إجمالية تبلغ حوالي 3,804.98 م². تنسيق الدفاع المدني وتكامل خدمات المبنى.",
    },
  },
  {
    id: "agricultural-export",
    category: "trade",
    icon: Wheat,
    accent: "oklch(0.68 0.14 145)",
    gradient: "from-[oklch(0.35_0.09_145)] to-[oklch(0.45_0.07_145)]",
    highlight: false,
    en: {
      name: "Agricultural Export — Gulf & International",
      location: "Gulf Countries · Africa · Europe",
      year: "Ongoing",
      type: "Trade & Export",
      tag: "Export",
      metric: null,
      metricLabel: null,
      desc: "Export of potatoes and strawberries to Gulf countries and selected African and European markets. Import of agricultural tools and equipment to serve customer requirements.",
    },
    ar: {
      name: "تصدير زراعي — الخليج والأسواق الدولية",
      location: "دول الخليج · أفريقيا · أوروبا",
      year: "جارٍ",
      type: "تجارة وتصدير",
      tag: "تصدير",
      metric: null,
      metricLabel: null,
      desc: "تصدير البطاطس والفراولة إلى دول الخليج وأسواق أفريقيا وأوروبا المختارة. استيراد أدوات ومعدات زراعية لخدمة متطلبات العملاء.",
    },
  },
  {
    id: "steel-export-africa",
    category: "trade",
    icon: Package,
    accent: "oklch(0.58 0.09 254)",
    gradient: "from-[oklch(0.22_0.05_254)] to-[oklch(0.30_0.06_220)]",
    highlight: false,
    en: {
      name: "Steel Products Export — Africa",
      location: "African Markets",
      year: "Completed",
      type: "Trade & Export",
      tag: "Industrial Trade",
      metric: "1+",
      metricLabel: "Shipments",
      desc: "Supply of sheet metal to metal manufacturing companies in African markets. More than one completed shipment, building a growing trade channel for Egyptian industrial products.",
    },
    ar: {
      name: "تصدير منتجات صلب — أفريقيا",
      location: "الأسواق الأفريقية",
      year: "مكتمل",
      type: "تجارة وتصدير",
      tag: "تجارة صناعية",
      metric: "+1",
      metricLabel: "شحنات",
      desc: "توريد صفائح معدنية لشركات تصنيع المعادن في الأسواق الأفريقية. أكثر من شحنة مكتملة، مع العمل على توسيع قناة تجارية للمنتجات الصناعية المصرية.",
    },
  },
  {
    id: "fire-protection-supply",
    category: "supply",
    icon: Flame,
    accent: "oklch(0.65 0.18 30)",
    gradient: "from-[oklch(0.28_0.1_30)] to-[oklch(0.20_0.07_30)]",
    highlight: false,
    en: {
      name: "Safety & Fire Protection Supply",
      location: "Egypt & Qatar",
      year: "Ongoing",
      type: "General Supplies",
      tag: "Supply",
      metric: null,
      metricLabel: null,
      desc: "Supply of PPE (helmets, safety shoes, reflective vests), fire extinguishers, hose reels, fire hoses, detectors and early-warning alarm systems for factories, contractors and oil & gas operations.",
    },
    ar: {
      name: "توريد السلامة والحماية من الحريق",
      location: "مصر وقطر",
      year: "جارٍ",
      type: "توريدات عامة",
      tag: "توريدات",
      metric: null,
      metricLabel: null,
      desc: "توريد معدات الحماية الشخصية (خوذات، أحذية أمان، سترات عاكسة)، طفايات الحريق، بكرات الخراطيم، الكاشفات وأنظمة الإنذار المبكر لمصانع والمقاولين وعمليات النفط والغاز.",
    },
  },
  {
    id: "construction-materials-supply",
    category: "supply",
    icon: HardHat,
    accent: "oklch(0.63 0.12 76)",
    gradient: "from-[oklch(0.26_0.07_76)] to-[oklch(0.36_0.055_90)]",
    highlight: false,
    en: {
      name: "Construction Materials Supply",
      location: "Egypt",
      year: "Ongoing",
      type: "General Supplies",
      tag: "Supply",
      metric: null,
      metricLabel: null,
      desc: "Sourcing and supply of sand, crushed stone, cement, rebar, sheet metal and pipes & fittings. Coordinated per customer specification for quantity, grade, and delivery timing.",
    },
    ar: {
      name: "توريد مواد البناء",
      location: "مصر",
      year: "جارٍ",
      type: "توريدات عامة",
      tag: "توريدات",
      metric: null,
      metricLabel: null,
      desc: "توريد الرمل والحجر المكسور والأسمنت وحديد التسليح والصفائح المعدنية والأنابيب والتركيبات. منسق وفق مواصفات العميل من حيث الكمية والدرجة وتوقيت التسليم.",
    },
  },
];

/* ------------------------------------------------------------------
   Categories
   ------------------------------------------------------------------ */
const categories = [
  { id: "all",          en: "All",            ar: "الكل" },
  { id: "construction", en: "Construction",   ar: "إنشاء" },
  { id: "engineering",  en: "Engineering",    ar: "هندسة" },
  { id: "trade",        en: "Trade & Export", ar: "تجارة وتصدير" },
  { id: "supply",       en: "Supply",         ar: "توريدات" },
];

/* ------------------------------------------------------------------
   Main Component
   ------------------------------------------------------------------ */
const PAGE_SIZE = 6;

export function OurProjects() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Reset pagination when filter changes
  useEffect(() => { setShowAll(false); }, [activeCategory]);

  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
  const hasMore = filtered.length > PAGE_SIZE && !showAll;

  const c = {
    en: {
      eyebrow: "Our Portfolio",
      title: "Projects & Deliveries",
      sub: "A verified record of construction, engineering supervision, trade and supply work carried out by Hayya Engineering and Development.",
      filterLabel: "Filter by sector",
      ctaLabel: "Start a conversation",
      showMore: "Show More Projects",
      showLess: "Show Less",
    },
    ar: {
      eyebrow: "محفظة أعمالنا",
      title: "المشاريع والإنجازات",
      sub: "سجل موثق من أعمال الإنشاء والإشراف الهندسي والتجارة والتوريد التي نفذتها هيّا للهندسة والتطوير.",
      filterLabel: "تصفية حسب القطاع",
      ctaLabel: "ابدأ محادثة",
      showMore: "عرض المزيد من المشاريع",
      showLess: "عرض أقل",
    },
  }[lang];

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-navy-deep py-24 md:py-36"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 10% 20%, oklch(0.26 0.06 254 / 0.75) 0%, oklch(0.14 0.035 254) 70%)",
        }}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.035]"
      >
        <defs>
          <pattern
            id="proj-grid"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 72 0 L 0 0 0 72"
              fill="none"
              stroke="oklch(0.755 0.13 76)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#proj-grid)" />
      </svg>
      <div className="pointer-events-none absolute -end-60 top-1/4 h-[500px] w-[500px] rounded-full bg-gold/[0.05] blur-[140px]" />

      <div className="container-hayya relative z-10">
        {/* Header */}
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="mt-5 font-display text-[2.5rem] leading-[1.1] text-on-navy sm:text-5xl md:text-[3.5rem] lg:text-[4rem]">
            {c.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-on-navy-muted">
            {c.sub}
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal className="mt-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-on-navy-muted">
            {c.filterLabel}
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`project-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300",
                  activeCategory === cat.id
                    ? "border-gold bg-gold text-navy-deep shadow-[0_0_20px_oklch(0.755_0.13_76/0.35)]"
                    : "border-white/[0.1] bg-white/[0.04] text-on-navy-muted hover:border-gold/40 hover:bg-white/[0.08] hover:text-on-navy"
                )}
              >
                {lang === "ar" ? cat.ar : cat.en}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => {
            const p = project[lang];
            const Icon = project.icon;
            return (
              <Reveal
                key={project.id}
                as="article"
                delay={(i % 3) * 80}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-500",
                  project.highlight
                    ? "border-gold/30 bg-white/[0.06] shadow-[0_0_40px_-10px_oklch(0.755_0.13_76/0.2)]"
                    : "border-white/[0.07] bg-white/[0.03]",
                  "hover:-translate-y-2 hover:border-gold/25 hover:bg-white/[0.07]",
                  "hover:shadow-[0_20px_50px_-20px_oklch(0.755_0.13_76/0.22)]"
                )}
              >
                {/* Top accent bar */}
                <div
                  className={cn(
                    "h-1 w-full bg-gradient-to-r transition-opacity duration-500",
                    project.gradient,
                    "opacity-60 group-hover:opacity-100"
                  )}
                />

                <div className="flex flex-1 flex-col p-7">
                  {/* Icon + Tag row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/[0.08] transition-all duration-500 group-hover:bg-gold/10 group-hover:ring-gold/20">
                      <Icon
                        className="h-5 w-5 text-gold/70 transition-colors duration-500 group-hover:text-gold"
                        strokeWidth={1.6}
                      />
                    </div>
                    <span className="rounded-full border border-gold/15 bg-gold/[0.08] px-3 py-1 text-xs font-semibold text-gold/80">
                      {p.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-display text-[1.1rem] font-bold leading-snug text-on-navy transition-colors duration-300 group-hover:text-gold">
                    {p.name}
                  </h3>

                  {/* Meta */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                    <span className="flex items-center gap-1.5 text-xs text-on-navy-muted">
                      <MapPin className="h-3 w-3 shrink-0 text-gold/50" />
                      {p.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-on-navy-muted">
                      <Calendar className="h-3 w-3 shrink-0 text-gold/50" />
                      {p.year}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-gold/60">
                    {p.type}
                  </p>

                  {/* Description */}
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-on-navy-muted">
                    {p.desc}
                  </p>

                  {/* Card Action */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
                    <button
                      type="button"
                      onClick={() => setIsProfileOpen(true)}
                      className="inline-flex items-center gap-2 rounded-xl border border-gold/30 bg-gold/[0.08] px-3.5 py-2 text-xs font-semibold text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy-deep hover:shadow-[0_4px_16px_oklch(0.755_0.13_76/0.25)] focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>{lang === "ar" ? "عرض البروفايل" : "View Profile"}</span>
                    </button>
                    <span className="text-[11px] font-medium text-on-navy-muted/60">
                      {lang === "ar" ? "وثيقة الشركة" : "Official Record"}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Show More / Show Less */}
        {(hasMore || showAll) && (
          <Reveal className="mt-10 text-center">
            <button
              id="projects-show-more"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-7 py-3 text-sm font-semibold text-on-navy-muted backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.1] hover:text-on-navy"
            >
              {showAll ? c.showLess : c.showMore}
              <span className={cn("transition-transform duration-300", showAll ? "rotate-180" : "")}>
                ↓
              </span>
            </button>
          </Reveal>
        )}

        {/* CTA */}
        <Reveal className="mt-14 text-center">
          <Link
            to="/"
            hash="contact"
            id="projects-contact-cta"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-8 py-4 font-semibold text-navy-deep shadow-[0_0_30px_oklch(0.755_0.13_76/0.2)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_45px_oklch(0.755_0.13_76/0.4)]"
          >
            {c.ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      {/* Company Profile Modal */}
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </section>
  );
}
