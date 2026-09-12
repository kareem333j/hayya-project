import { company } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
import { BrandLink } from "@/components/BrandButton";
import { Leaf, ArrowRight, Wheat } from "lucide-react";

export function CtaBand() {
  const { t, dir } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container-hayya">
        <Reveal delay={100}>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-deep px-6 py-16 shadow-[0_20px_60px_-15px_oklch(0.28_0.062_254/0.4)] md:px-20 md:py-24 text-center">
            
            {/* Background Gradient Orbs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
              <div className="absolute -left-[20%] -top-[50%] h-[200%] w-[60%] rounded-full bg-gold/10 blur-[120px]" />
              <div className="absolute -bottom-[50%] -right-[20%] h-[200%] w-[60%] rounded-full bg-leaf/10 blur-[120px]" />
              
              {/* Floating Decorative Elements */}
              <Leaf className="float absolute left-8 top-12 h-24 w-24 -rotate-12 text-white/5 opacity-50 blur-[2px] md:left-16 md:top-16 md:h-32 md:w-32" />
              <Wheat 
                className="float absolute bottom-8 right-8 h-32 w-32 rotate-12 text-gold/5 opacity-50 blur-[2px] md:bottom-16 md:right-16 md:h-48 md:w-48" 
                style={{ animationDelay: "1.5s" }} 
              />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Title */}
              <h2 className="text-balance mx-auto max-w-3xl font-display text-3xl leading-[1.15] text-on-navy sm:text-4xl lg:text-5xl">
                {t.cta.title}
              </h2>
              
              {/* Body */}
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-on-navy-muted md:text-lg">
                {t.cta.body}
              </p>
              
              {/* Buttons */}
              <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row sm:items-center">
                <BrandLink href="/#contact" variant="gold" size="lg" className="group w-full sm:w-auto rounded-full">
                  {t.cta.primary}
                  <ArrowRight 
                    className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} 
                  />
                </BrandLink>
                <BrandLink href={`mailto:${company.email}`} variant="ghostLight" size="lg" className="w-full sm:w-auto rounded-full">
                  {t.cta.secondary}
                </BrandLink>
              </div>
            </div>
            
            {/* Subtle inner border for premium glassmorphism feel */}
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
