import {
  Handshake,
  BadgeCheck,
  MessagesSquare,
  Boxes,
  Wheat,
  Infinity as InfinityIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const icons = [Handshake, BadgeCheck, MessagesSquare, Boxes, Wheat, InfinityIcon];

export function WhyHayya() {
  const { t } = useLanguage();

  return (
    <section id="why" className="relative overflow-hidden border-y border-border bg-secondary py-24 md:py-32">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -end-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute -start-40 bottom-0 h-[400px] w-[400px] rounded-full bg-navy-deep/10 blur-[100px]" />

      <div className="container-hayya relative z-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t.why.label}</p>
          <h2 className="mt-5 text-3xl leading-[1.14] text-navy sm:text-4xl lg:text-[2.9rem]">
            {t.why.title}
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => {
            const Icon = icons[i] ?? Handshake;
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 80}
                className="group relative flex flex-col rounded-2xl bg-white/60 p-7 backdrop-blur-sm border border-white transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:border-gold/30 hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.2)]"
              >
                {/* Large ghost number watermark */}
                <span className="pointer-events-none absolute end-5 top-4 font-display text-[4.5rem] font-bold leading-none text-navy/[0.04] transition-colors duration-500 group-hover:text-gold/10">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 transition-all duration-500 group-hover:from-gold group-hover:to-gold/80 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                  <Icon
                    className="h-5 w-5 text-gold transition-colors duration-500 group-hover:text-navy-deep"
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-navy transition-colors duration-500 group-hover:text-gold">
                  {item.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>

                {/* Bottom accent bar */}
                <div className="mt-5 h-px w-0 bg-gradient-to-r from-gold/60 to-transparent transition-all duration-700 group-hover:w-full" />
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
