import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { Download, Bug, Sprout, ShieldAlert } from "lucide-react";

export function Pesticides() {
  const { lang } = useLanguage();
  
  const content = {
    en: {
      label: "Agricultural Solutions",
      title: "Fertilizers & Pesticides",
      sub: "We provide comprehensive solutions for crop protection and public health. Our products ensure maximum yield and safety against agricultural pests and public health threats.",
      agriTitle: "Agricultural Pesticides",
      agriDesc: "Effective treatments including Fungicides, Insecticides, Nematicides, and Herbicides to protect your crops.",
      healthTitle: "Public Health Pesticides",
      healthDesc: "Specialized solutions for controlling flying insects, crawling insects, and rodents in urban and public environments.",
      pestsTitle: "Key Pests Managed",
      pestsDesc: "Targeted interventions for destructive pests like the Red Palm Weevil, Fruit Fly, and Fall Armyworm.",
      downloadCatalog: "Download Products Catalog",
      downloadGuide: "Download Pests Guide",
    },
    ar: {
      label: "حلول زراعية متكاملة",
      title: "الأسمدة والمبيدات",
      sub: "نقدم حلولاً شاملة لحماية المحاصيل والصحة العامة. تضمن منتجاتنا أعلى إنتاجية وأمان ضد الآفات الزراعية ومهددات الصحة العامة.",
      agriTitle: "المبيدات الزراعية",
      agriDesc: "مبيدات فعالة تشمل المبيدات الفطرية، الحشرية، النيماتودا، ومبيدات الحشائش لحماية محاصيلك.",
      healthTitle: "مبيدات الصحة العامة",
      healthDesc: "حلول متخصصة لمكافحة الحشرات الطائرة والزاحفة والقوارض في البيئات الحضرية والعامة.",
      pestsTitle: "أهم الآفات المستهدفة",
      pestsDesc: "مكافحة موجهة للآفات المدمرة مثل سوسة النخيل، ذبابة الفاكهة، ودودة الحشد الخريفية.",
      downloadCatalog: "تحميل دليل المنتجات",
      downloadGuide: "تحميل دليل مكافحة الآفات",
    }
  };

  const c = content[lang];

  return (
    <section id="pesticides" className="py-20 md:py-28 lg:py-32 overflow-hidden bg-background">
      <div className="container-hayya">
        <Reveal className="max-w-3xl text-center mx-auto mb-16 md:mb-24">
          <p className="eyebrow inline-block">{c.label}</p>
          <h2 className="mt-5 font-display text-[2.5rem] leading-[1.14] text-navy sm:text-5xl md:text-[3.5rem]">
            {c.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.sub}</p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          <Reveal delay={100} className="group relative flex flex-col p-8 rounded-[2rem] bg-secondary border border-border/50 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-navy/5 hover:border-gold/30 hover:-translate-y-2">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
              <Sprout className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-display text-2xl font-bold text-navy mb-4">{c.agriTitle}</h3>
            <p className="text-muted-foreground leading-relaxed flex-1">{c.agriDesc}</p>
          </Reveal>

          <Reveal delay={200} className="group relative flex flex-col p-8 rounded-[2rem] bg-secondary border border-border/50 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-navy/5 hover:border-gold/30 hover:-translate-y-2">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
              <ShieldAlert className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-display text-2xl font-bold text-navy mb-4">{c.healthTitle}</h3>
            <p className="text-muted-foreground leading-relaxed flex-1">{c.healthDesc}</p>
          </Reveal>

          <Reveal delay={300} className="group relative flex flex-col p-8 rounded-[2rem] bg-secondary border border-border/50 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-navy/5 hover:border-gold/30 hover:-translate-y-2">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
              <Bug className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-display text-2xl font-bold text-navy mb-4">{c.pestsTitle}</h3>
            <p className="text-muted-foreground leading-relaxed flex-1">{c.pestsDesc}</p>
          </Reveal>
        </div>

        <Reveal delay={400} className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/003.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-navy px-8 text-sm font-semibold text-white transition-all hover:bg-navy/90 hover:scale-105 shadow-md"
          >
            <Download className="h-5 w-5" />
            {c.downloadCatalog}
          </a>
          <a
            href="/00.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border-2 border-navy bg-transparent px-8 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white hover:scale-105"
          >
            <Download className="h-5 w-5" />
            {c.downloadGuide}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
