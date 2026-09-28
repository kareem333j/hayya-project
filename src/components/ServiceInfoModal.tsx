import {
  Container, Wheat, Package, FlaskConical, Boxes, Leaf, Building2, HardHat, PhoneCall, X
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────
   TRADE INFO ITEMS
───────────────────────────────────────────────────────────────────── */
export const tradeInfoItems = {
  en: [
    { icon: Container, color: "text-blue-500", bg: "bg-blue-500/10", label: "Export — Sudan & Africa", detail: "Exported sheet steel (Saaj / صاج) to Sudan and selected African countries for metal manufacturing industries." },
    { icon: Wheat, color: "text-amber-500", bg: "bg-amber-500/10", label: "Export — Qatar & Gulf (Crops)", detail: "Exported agricultural crops and produce to Qatar and Gulf markets, supporting labor and industrial communities." },
    { icon: Package, color: "text-green-500", bg: "bg-green-500/10", label: "Import — Australia (Equipment)", detail: "Imported agricultural equipment and farming tools from Australia to serve customer requirements in Egypt." },
    { icon: FlaskConical, color: "text-red-500", bg: "bg-red-500/10", label: "Export — USA (Chemicals)", detail: "Shipped chemical materials and pesticides to the United States market." },
    { icon: Boxes, color: "text-purple-500", bg: "bg-purple-500/10", label: "Import — China (Plastics)", detail: "Imported plastic raw materials and plastic products from China." },
    { icon: Leaf, color: "text-emerald-500", bg: "bg-emerald-500/10", label: "Export — Europe (Fruits)", detail: "Exported guava, strawberries, and mango to European markets." },
  ],
  ar: [
    { icon: Container, color: "text-blue-500", bg: "bg-blue-500/10", label: "تصدير — السودان وأفريقيا", detail: "تصدير الصاج (ألواح الصلب) إلى السودان وبعض الدول الأفريقية لصناعات تصنيع المعادن." },
    { icon: Wheat, color: "text-amber-500", bg: "bg-amber-500/10", label: "تصدير — قطر والخليج (محاصيل)", detail: "تصدير محاصيل زراعية لقطر ودول الخليج، لخدمة مجتمعات العمال والمناطق الصناعية." },
    { icon: Package, color: "text-green-500", bg: "bg-green-500/10", label: "استيراد — أستراليا (معدات)", detail: "استيراد معدات زراعية وأدوات حرث وري من أستراليا لتلبية احتياجات العملاء في مصر." },
    { icon: FlaskConical, color: "text-red-500", bg: "bg-red-500/10", label: "تصدير — أمريكا (كيماويات)", detail: "تصدير شحنات من المواد الكيماوية والمبيدات الحشرية إلى السوق الأمريكية." },
    { icon: Boxes, color: "text-purple-500", bg: "bg-purple-500/10", label: "استيراد — الصين (بلاستيك)", detail: "استيراد مواد البلاستيك الخام والمنتجات البلاستيكية من الصين." },
    { icon: Leaf, color: "text-emerald-500", bg: "bg-emerald-500/10", label: "تصدير — أوروبا (فاكهة)", detail: "تصدير الجوافة والفراولة والمانجو إلى الأسواق الأوروبية." },
  ],
};

/* ─────────────────────────────────────────────────────────────────────
   CONTRACTING INFO ITEMS (Engineering projects)
───────────────────────────────────────────────────────────────────── */
export const contractingInfoItems = {
  en: [
    { icon: Building2, color: "text-orange-500", bg: "bg-orange-500/10", label: "Hazm Mall — Doha, Qatar", detail: "Luxury retail and lifestyle destination featuring a grand galleria, hospitality facilities, gardens, fountains and exhibition spaces. Engineering supervision and civil-defense coordination." },
    { icon: Building2, color: "text-blue-500", bg: "bg-blue-500/10", label: "Lusail Marina Twin Towers — Qatar (98,000 m²)", detail: "32-storey commercial mixed-use twin-tower development in Lusail Marina. Engineering supervision, site coordination and building-services oversight across the full delivery cycle." },
    { icon: Building2, color: "text-yellow-500", bg: "bg-yellow-500/10", label: "Qatar Stock Exchange — Doha", detail: "Finance and business facility supporting trading, investor services and business functions in Doha. Civil-defense and life-safety coordination throughout the project." },
    { icon: HardHat, color: "text-amber-500", bg: "bg-amber-500/10", label: "Qatalum Aluminium Plant — Mesaieed, Qatar", detail: "Integrated aluminium production complex including reduction, carbon, casthouse, port, storage and dedicated power infrastructure. Engineering supervision and fire-protection coordination." },
    { icon: Building2, color: "text-green-500", bg: "bg-green-500/10", label: "Embassy of Somalia — Doha (3,805 m²)", detail: "Embassy building project in the Onaiza district, Doha. Civil-defense coordination and building-services integration." },
  ],
  ar: [
    { icon: Building2, color: "text-orange-500", bg: "bg-orange-500/10", label: "هازم مول — الدوحة، قطر", detail: "وجهة تجارية وترفيهية راقية تضم جاليري كبير ومرافق ضيافة وحدائق ونوافير وفضاءات معارض. إشراف هندسي وتنسيق دفاع مدني." },
    { icon: Building2, color: "text-blue-500", bg: "bg-blue-500/10", label: "برجا لوسيل مارينا التوأم — قطر (98,000 م²)", detail: "مشروع برجين تجاريين متعدد الاستخدام من 32 طابقاً في لوسيل مارينا. إشراف هندسي وتنسيق موقع وإشراف على خدمات المبنى طوال دورة التنفيذ." },
    { icon: Building2, color: "text-yellow-500", bg: "bg-yellow-500/10", label: "بورصة قطر — الدوحة", detail: "مرفق مالي وتجاري يدعم التداول وخدمات المستثمرين والأعمال التجارية في الدوحة. تنسيق الدفاع المدني وسلامة الأرواح طوال المشروع." },
    { icon: HardHat, color: "text-amber-500", bg: "bg-amber-500/10", label: "مصنع قاطالوم للألمنيوم — مسيعيد، قطر", detail: "مجمع إنتاج ألمنيوم متكامل يشمل الاختزال والكربون وقاعة السبائك والميناء والتخزين والبنية التحتية للطاقة. إشراف هندسي وتنسيق الحماية من الحريق." },
    { icon: Building2, color: "text-green-500", bg: "bg-green-500/10", label: "سفارة الصومال — الدوحة (3,805 م²)", detail: "مشروع بناء السفارة في منطقة العنيزة، الدوحة. تنسيق الدفاع المدني وتكامل خدمات المبنى." },
  ],
};

/* ─────────────────────────────────────────────────────────────────────
   GENERAL SUPPLIES INFO ITEMS
───────────────────────────────────────────────────────────────────── */
export const suppliesInfoItems = {
  en: [
    { icon: Container, color: "text-teal-500", bg: "bg-teal-500/10", label: "Export-Grade Pallets", detail: "We supply pallets built to international export specifications. Delivered over 10,000 pallets to more than 4 factories." },
    { icon: HardHat, color: "text-orange-500", bg: "bg-orange-500/10", label: "Construction Materials (Sanad, Steel, Sand, Cement…)", detail: "We supply a full range of building materials including timber beams (Sanad/سند), steel rebar, sand, cement, and all construction materials." },
    { icon: Boxes, color: "text-red-500", bg: "bg-red-500/10", label: "Fire System Pipes, Machinery & Fire Alarm", detail: "We supply pipes, pumps, and machinery for fire suppression systems, along with fire alarm and early-warning detection systems." },
    { icon: Package, color: "text-purple-500", bg: "bg-purple-500/10", label: "All Types of Plastic Materials", detail: "We supply all types of plastic materials — raw resins, sheets, pipes, and finished plastic products across all grades." },
    { icon: HardHat, color: "text-blue-500", bg: "bg-blue-500/10", label: "All Industrial Materials", detail: "We supply all types of industrial materials to serve factories, contractors, and commercial operations — sourced and delivered to specification." },
  ],
  ar: [
    { icon: Container, color: "text-teal-500", bg: "bg-teal-500/10", label: "باليتات بمواصفات التصدير", detail: "نوفر باليتات بمواصفات التصدير الدولية. تم توريد أكثر من 10,000 باليته لأكثر من 4 مصانع." },
    { icon: HardHat, color: "text-orange-500", bg: "bg-orange-500/10", label: "مواد البناء (سند، حديد، رمل، أسمنت…)", detail: "نورد جميع مواد البناء بما فيها السند والحديد والرمل والأسمنت وجميع مواد التشييد والبناء." },
    { icon: Boxes, color: "text-red-500", bg: "bg-red-500/10", label: "مواسير وماكينات الفاير سيستم والفاير ألارم", detail: "نورد المواسير والماكينات الخاصة بأنظمة إطفاء الحريق وكذلك أنظمة الفاير ألارم والإنذار المبكر." },
    { icon: Package, color: "text-purple-500", bg: "bg-purple-500/10", label: "جميع أنواع البلاستيك", detail: "نورد جميع أنواع البلاستيك — راتنجات خام، ألواح، مواسير، ومنتجات بلاستيكية جاهزة بجميع الأصناف." },
    { icon: HardHat, color: "text-blue-500", bg: "bg-blue-500/10", label: "جميع المواد الصناعية", detail: "نورد جميع أنواع المواد الصناعية لخدمة المصانع والمقاولين والعمليات التجارية — نوفرها وفق المواصفات المطلوبة." },
  ],
};

/* ─────────────────────────────────────────────────────────────────────
   REAL ESTATE PROPERTIES
───────────────────────────────────────────────────────────────────── */
export const realEstateProperties = {
  en: [
    { image: "/projects/ابراج العالمين - شركة اعمار.jpeg", label: "Emaar Misr — Uptown Cairo / North Coast", name: "Emaar Misr Towers", detail: "Luxury residential, commercial, and hotel units by Emaar Properties — Egypt's iconic mixed-use developments.", types: ["Residential", "Commercial", "Hotel"] },
    { image: "/projects/مونتن فيو.jpeg", label: "Mountain View — New Cairo / October / North Coast", name: "Mountain View", detail: "Premium gated residential communities across New Cairo, October, and the North Coast. Residential, commercial, and touristic units.", types: ["Residential", "Touristic"] },
    { image: "/projects/بالم هيلث التجمع.jpeg", label: "Palm Hills — Fifth Settlement, New Cairo", name: "Palm Hills", detail: "Palm Hills New Cairo — a premium gated residential community with luxury villas, townhouses, and apartments.", types: ["Residential", "Commercial"] },
    { image: "/projects/مدينة نصر.jpeg", label: "Nasr City — Central Cairo", name: "Nasr City", detail: "Prime residential and commercial units in Nasr City — one of Cairo's most established and well-connected neighborhoods.", types: ["Residential", "Commercial"] },
  ],
  ar: [
    { image: "/projects/ابراج العالمين - شركة اعمار.jpeg", label: "إعمار مصر — أبراج العالمين / الساحل الشمالي", name: "أبراج العالمين — إعمار مصر", detail: "وحدات سكنية وتجارية وفندقية فاخرة من إعمار العقارية — مشاريع مصر المتكاملة الرائدة.", types: ["سكنية", "تجارية", "فندقية"] },
    { image: "/projects/مونتن فيو.jpeg", label: "مونتن فيو — القاهرة الجديدة / أكتوبر / الساحل", name: "مونتن فيو", detail: "مجمعات سكنية متكاملة في القاهرة الجديدة والساحل الشمالي والسادس من أكتوبر. وحدات سكنية وسياحية وتجارية.", types: ["سكنية", "سياحية"] },
    { image: "/projects/بالم هيلث التجمع.jpeg", label: "بالم هيلز — التجمع الخامس، القاهرة الجديدة", name: "بالم هيلز", detail: "مجمع سكني راقٍ في التجمع الخامس بالقاهرة الجديدة — فيلات وتاون هاوس وشقق فاخرة بأعلى المواصفات.", types: ["سكنية", "تجارية"] },
    { image: "/projects/مدينة نصر.jpeg", label: "مدينة نصر — وسط القاهرة", name: "مدينة نصر", detail: "وحدات سكنية وتجارية مميزة في مدينة نصر — أحد أكثر أحياء القاهرة رسوخاً بموقع مركزي ممتاز.", types: ["سكنية", "تجارية"] },
  ],
};

/* ─────────────────────────────────────────────────────────────────────
   INFO MODAL COMPONENT
───────────────────────────────────────────────────────────────────── */
export type InfoItem = { icon: React.ElementType; color: string; bg: string; label: string; detail: string };

export function InfoModal({
  isOpen, onClose, title, items, lang, isRealEstate, realEstateItems, closeLabel,
}: {
  isOpen: boolean; onClose: () => void; title: string;
  items: InfoItem[]; lang: "en" | "ar";
  isRealEstate?: boolean; realEstateItems?: typeof realEstateProperties.en | undefined; closeLabel: string;
}) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className={cn("relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl", lang === "ar" ? "text-right" : "text-left")}
        style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card px-6 py-4">
          <h3 className="text-lg font-bold text-navy">{title}</h3>
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition hover:bg-red-50 hover:text-red-500" aria-label={closeLabel}>
            <X className="h-4 w-4" />
          </button>
        </div>
        {/* Content */}
        <div className="p-6 space-y-4">
          {isRealEstate && realEstateItems ? (
            <div className="space-y-5">
              {realEstateItems.map((prop, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-border group">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img src={prop.image} alt={prop.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <p className="text-white font-bold text-base leading-tight">{prop.name}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-secondary/40">
                    <p className="text-xs font-bold text-gold uppercase tracking-wide mb-2">{prop.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{prop.detail}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {prop.types.map((t) => (
                        <span key={t} className="rounded-full bg-leaf/10 border border-leaf/20 px-3 py-0.5 text-xs font-semibold text-leaf">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-gold/30 bg-gold/5 p-4 flex items-start gap-3">
                <PhoneCall className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-navy mb-1">{lang === "ar" ? "نساعدك تلاقي أحسن موقع وأحسن سعر وأفضل طريقة دفع" : "We help you find the best location, best price & best payment plan"}</p>
                  <p className="text-xs text-muted-foreground">{lang === "ar" ? "سكنية · سياحية · تجارية · فندقية" : "Residential · Touristic · Commercial · Hotel"}</p>
                </div>
              </div>
            </div>
          ) : (
            items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-secondary/30 p-4 transition hover:border-gold/30 hover:bg-gold/5">
                  <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", item.bg)}>
                    <Icon className={cn("h-5 w-5", item.color)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-navy mb-1">{item.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
