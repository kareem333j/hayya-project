import { useLanguage } from "@/lib/language";
import { copy } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Info } from "lucide-react";
import {
  pesticidesInfoItems,
  tradeInfoItems,
  contractingInfoItems,
  suppliesInfoItems,
  realEstateProperties,
  InfoModal,
  type InfoItem
} from "@/components/ServiceInfoModal";

export function Services() {
  const { lang } = useLanguage();
  const c = copy[lang].services;
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const [openModal, setOpenModal] = useState<string | null>(null);

  const getInfoKey = (id: string) => {
    if (id === "pesticides") return "pesticides";
    if (id === "import-export") return "trade";
    if (id === "contracting") return "contracting";
    if (id === "industrial") return "supplies";
    if (id === "real-estate") return "realestate";
    return null;
  };

  const getModalData = (key: string) => {
    if (key === "pesticides") return { items: pesticidesInfoItems[lang], isRealEstate: false, isPesticides: true };
    if (key === "trade") return { items: tradeInfoItems[lang], isRealEstate: false, isPesticides: false };
    if (key === "contracting") return { items: contractingInfoItems[lang], isRealEstate: false, isPesticides: false };
    if (key === "supplies") return { items: suppliesInfoItems[lang], isRealEstate: false, isPesticides: false };
    if (key === "realestate") return { items: [] as InfoItem[], isRealEstate: true, isPesticides: false };
    return { items: [] as InfoItem[], isRealEstate: false, isPesticides: false };
  };

  const getModalTitle = (key: string) => {
    const titles: Record<string, Record<string, string>> = {
      pesticides: { en: "Agricultural Solutions — Fertilizers & Pesticides", ar: "حلول زراعية — الأسمدة والمبيدات" },
      trade: { en: "Trade Operations", ar: "عمليات التجارة" },
      contracting: { en: "Our Engineering Projects", ar: "مشاريعنا الهندسية" },
      supplies: { en: "Supply Details", ar: "تفاصيل التوريدات" },
      realestate: { en: "Real Estate Projects", ar: "المشاريع العقارية" },
    };
    return titles[key]?.[lang] ?? "";
  };

  const getInfoLabel = (key: string) => {
    const labels: Record<string, Record<string, string>> = {
      pesticides: { en: "Solutions Details", ar: "تفاصيل الحلول والمبيدات" },
      trade: { en: "Trade Operations", ar: "عمليات التجارة" },
      contracting: { en: "Our Projects", ar: "مشاريعنا" },
      supplies: { en: "Supply Details", ar: "تفاصيل التوريدات" },
      realestate: { en: "View Properties", ar: "المشاريع العقارية" },
    };
    return labels[key]?.[lang] ?? "";
  };

  return (
    <section id="services" className="border-y border-border bg-secondary py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="container-hayya">
        <Reveal className="max-w-3xl text-center mx-auto mb-16 md:mb-24">
          <p className="eyebrow inline-block">{c.label}</p>
          <h2 className="mt-5 font-display text-[2.5rem] leading-[1.14] text-navy sm:text-5xl md:text-[3.5rem] lg:text-[4.5rem]">
            {c.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.sub}</p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {c.items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 100}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-background border border-border/50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-navy/5 hover:border-gold/30 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted sm:aspect-[16/9]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex items-end justify-between">
                  <h3 className="font-display text-2xl font-bold text-white md:text-3xl max-w-[80%] leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed flex-1 text-base">
                  {item.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap gap-4 items-center justify-between">
                  {getInfoKey(item.id) ? (
                    // For items with modal (pesticides, import-export, etc.) — CTA opens modal directly
                    <button
                      onClick={() => setOpenModal(getInfoKey(item.id)!)}
                      className="inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:text-gold group/btn"
                    >
                      {item.cta}
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-all group-hover/btn:bg-gold/10 group-hover/btn:scale-110">
                        <Arrow className={cn("h-4 w-4 transition-transform", isRtl ? "group-hover/btn:-translate-x-1" : "group-hover/btn:translate-x-1")} />
                      </span>
                    </button>
                  ) : (
                    <Link
                      to={item.link.split('#')[0] || "/"}
                      {...(item.link.split('#')[1] ? { hash: item.link.split('#')[1] } : {})}
                      className="inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:text-gold group/btn"
                    >
                      {item.cta}
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-all group-hover/btn:bg-gold/10 group-hover/btn:scale-110">
                        <Arrow className={cn("h-4 w-4 transition-transform", isRtl ? "group-hover/btn:-translate-x-1" : "group-hover/btn:translate-x-1")} />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {openModal && (
          <InfoModal
            isOpen={!!openModal}
            onClose={() => setOpenModal(null)}
            title={getModalTitle(openModal)}
            items={getModalData(openModal).items}
            isRealEstate={getModalData(openModal).isRealEstate}
            realEstateItems={realEstateProperties[lang]}
            isPesticides={getModalData(openModal).isPesticides}
            lang={lang}
            closeLabel={lang === "ar" ? "إغلاق" : "Close"}
          />
        )}
      </div>
    </section>
  );
}
