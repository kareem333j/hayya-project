import heroImage from "@/assets/hero-field.jpg";
import { useLanguage } from "@/lib/language";
import { BrandLink } from "@/components/BrandButton";
import { Image } from "@/components/Image";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative isolate flex min-h-[92svh] items-end overflow-hidden">
      <Image
        src={heroImage}
        alt="Egyptian agricultural field at sunrise"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover hero-img"
        fallbackClassName="absolute inset-0 -z-20 h-full w-full"
      />
      {/* Decorative gold orb — top corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 end-0 -z-10 h-[520px] w-[520px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.755 0.13 76) 0%, transparent 65%)" }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to top, oklch(0.21 0.05 254 / 0.94) 0%, oklch(0.21 0.05 254 / 0.72) 45%, oklch(0.21 0.05 254 / 0.42) 100%)",
        }}
      />

      <div className="container-hayya pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="mt-5 text-[clamp(1.75rem,6vw,2.5rem)] leading-[1.06] text-on-navy sm:text-6xl lg:text-7xl">
            <span className="text-gold-shimmer">{t.hero.title.split('.')[0]}.</span>
            {t.hero.title.includes('.') && t.hero.title.substring(t.hero.title.indexOf('.') + 1)}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-navy-muted sm:text-lg">
            {t.hero.sub}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <BrandLink href="/#contact" variant="gold" size="lg" className="w-full sm:w-auto">
              {t.hero.primary}
            </BrandLink>
            <BrandLink href="/products" variant="ghostLight" size="lg" className="w-full sm:w-auto">
              {t.hero.secondary}
            </BrandLink>
          </div>
          <p className="mt-8 border-t border-on-navy/20 pt-5 text-xs font-semibold tracking-[0.16em] text-on-navy/70 uppercase">
            {t.hero.trust}
          </p>
        </div>
      </div>

      {/* Animated scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 transition-opacity hover:opacity-100 z-10">
        <div className="w-6 h-10 border-2 border-on-navy/40 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full float" style={{ animationDuration: '2s' }} />
        </div>
      </div>
    </section>
  );
}
