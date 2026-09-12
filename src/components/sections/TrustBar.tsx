import { Sprout, ShieldCheck, Truck, Globe2 } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";

const icons = [Sprout, ShieldCheck, Truck, Globe2];

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <section
      className="border-b border-border bg-card"
      style={{
        borderTop: "2px solid transparent",
        backgroundImage: "linear-gradient(white, white), linear-gradient(90deg, oklch(0.755 0.13 76 / 0.6), oklch(0.86 0.08 82 / 0.4), oklch(0.755 0.13 76 / 0.6))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      <div className="container-hayya grid gap-px sm:grid-cols-2 lg:grid-cols-4">
        {t.trust.map((item, i) => {
          const Icon = icons[i] ?? Sprout;
          return (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="border-border px-1 py-9 sm:px-7 lg:not-first:border-s group"
            >
              <Icon className="h-5 w-5 text-gold float" strokeWidth={1.6} style={{ animationDelay: `${i * 0.4}s` }} />
              <h3 className="mt-4 text-base font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
