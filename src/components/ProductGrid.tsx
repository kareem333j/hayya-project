import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/language";
import { catalogCopy } from "@/content/site";
import { localDesc, localName, type ProductWithImage } from "@/lib/catalog";
import { Image } from "@/components/Image";
import { cn } from "@/lib/utils";

export function ProductGrid({
  products,
  ctaHref = "/#contact",
}: {
  products: ProductWithImage[];
  ctaHref?: string;
}) {
  const { lang, dir } = useLanguage();
  const c = catalogCopy[lang];

  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, i) => (
        <Reveal
          as="li"
          key={product.id}
          delay={(i % 3) * 100}
          className="group relative flex flex-col rounded-2xl bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.25)]"
        >
          {/* Subtle glowing border behind the card that activates on hover */}
          <div className="absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-b from-border to-border opacity-50 transition-all duration-500 group-hover:from-gold/50 group-hover:to-transparent" />

          {/* Image Container */}
          <div className="relative overflow-hidden rounded-t-[15px] bg-navy-deep/5">
            {/* Inner vignette & shine */}
            <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-inset ring-black/5 mix-blend-overlay" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

            {/* Floating Season Badge */}
            {product.season && (
              <div className="absolute top-4 end-4 z-20 overflow-hidden rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[0.65rem] font-bold tracking-widest text-white uppercase backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-gold/90 group-hover:border-gold">
                {c.season}: {product.season}
              </div>
            )}

            {product.displayImage ? (
              <Image
                src={product.displayImage}
                alt={localName(product, lang)}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
            ) : (
              <div className="aspect-[4/3] w-full" />
            )}
          </div>

          {/* Content Container */}
          <div className="relative flex flex-1 flex-col p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-navy transition-colors duration-300 group-hover:text-gold">
              {localName(product, lang)}
            </h3>
            
            <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-muted/80 line-clamp-3">
              {localDesc(product, lang)}
            </p>
            
            {/* Animated CTA */}
            <div className="mt-6 flex items-center pt-4 border-t border-navy/5">
              <a
                href={ctaHref}
                className="group/btn inline-flex items-center gap-3 text-xs font-bold tracking-[0.15em] text-navy uppercase transition-colors hover:text-gold focus-visible:outline-none"
              >
                <span>{c.inquire}</span>
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-navy/5 transition-all duration-300 group-hover/btn:bg-gold/10 group-hover/btn:text-gold">
                  <ArrowRight
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      dir === "rtl" ? "rotate-180 group-hover/btn:-translate-x-1" : "group-hover/btn:translate-x-1"
                    )}
                  />
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
