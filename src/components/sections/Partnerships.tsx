import { FileSignature, Globe, ArrowUpRight } from "lucide-react";
import { partners } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";

export function Partnerships() {
  const { t, lang } = useLanguage();

  return (
    <section id="partnerships" className="py-24 md:py-32">
      <div className="container-hayya grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow">{t.partnerships.label}</p>
          <h2 className="mt-5 text-3xl leading-[1.14] text-navy sm:text-4xl lg:text-[2.9rem]">
            {t.partnerships.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {t.partnerships.body}
          </p>
          {/* Decorative divider */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
            <Globe className="h-4 w-4 text-gold/50" strokeWidth={1.5} />
          </div>
        </Reveal>

        <ul className="grid gap-6 sm:grid-cols-2 content-start">
          {partners.map((partner, i) => (
            <Reveal
              as="li"
              key={partner.id}
              delay={i * 130}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-navy-deep to-navy-deep/90 p-7 text-on-navy transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_20px_60px_-15px_rgba(10,20,50,0.35)]"
            >
              {/* Animated top gradient border */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-navy-deep group-hover:border-gold">
                  <FileSignature className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <ArrowUpRight className="h-4 w-4 text-on-navy/20 transition-all duration-500 group-hover:text-gold/60 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              {/* Text-based presentation — no third-party logos are used. */}
              <h3 className="mt-6 font-display text-2xl text-on-navy transition-colors duration-500 group-hover:text-gold">
                {lang === "ar" ? partner.nameAr : partner.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-on-navy-muted">
                {partner[lang]}
              </p>
              <p className="mt-6 border-t border-on-navy/10 pt-4 text-[0.65rem] font-bold tracking-[0.18em] text-on-navy/35 uppercase">
                {t.partnerships.note}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
