import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
import { Sprout, Award, PackageCheck, Ship } from "lucide-react";
import { cn } from "@/lib/utils";

// Map icons to step indices
const stepIcons = [Sprout, Award, PackageCheck, Ship];

export function Process() {
  const { t, dir } = useLanguage();

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-navy-deep/5">
      {/* Background aesthetic blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy-deep/10 rounded-full blur-[80px] -z-10" />

      <div className="container-hayya relative z-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t.process.label}</p>
          <h2 className="mt-5 text-3xl leading-[1.14] text-navy sm:text-4xl lg:text-[2.9rem]">
            {t.process.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.process.sub}</p>
        </Reveal>

        <ol className="relative mt-16 grid gap-12 md:mt-24 md:grid-cols-4 md:gap-8">
          {/* Timeline rail: vertical on mobile, horizontal on desktop */}
          <span
            aria-hidden="true"
            className="absolute start-[1.75rem] top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10 md:start-0 md:top-[1.75rem] md:h-[2px] md:w-full md:bg-gradient-to-r"
          />
          
          {t.process.steps.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <Reveal as="li" key={step.n} delay={i * 120} className="group relative ps-16 md:ps-0 md:pt-16">
                
                {/* Timeline Node / Icon */}
                <div className="absolute start-0 top-0 flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 md:start-0">
                  <Icon className="h-6 w-6 text-gold/80 transition-colors duration-500 group-hover:text-gold" strokeWidth={1.5} />
                </div>
                
                {/* Step Content */}
                <div className="pt-2 md:pt-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm font-bold tracking-[0.2em] text-gold/60 transition-colors duration-500 group-hover:text-gold">
                      {step.n}
                    </span>
                    <h3 className="text-xl font-bold text-navy transition-colors duration-500 group-hover:text-gold">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90 transition-colors duration-500 group-hover:text-navy-muted">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
