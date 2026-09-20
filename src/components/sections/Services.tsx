import { useLanguage } from "@/lib/language";
import { copy } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Services() {
  const { lang } = useLanguage();
  const c = copy[lang].services;
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

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

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
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
                <div className="mt-8 pt-6 border-t border-border/60">
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
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
