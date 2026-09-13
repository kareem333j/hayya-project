import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, X, ZoomIn } from "lucide-react";
import aboutImage from "@/assets/about-packing.jpg";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
import { BrandLink } from "@/components/BrandButton";
import { Image } from "@/components/Image";

import isoCertificate from "@/assets/iso-certificate.jpg";

export function About() {
  const { t, dir } = useLanguage();
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    if (isViewerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isViewerOpen]);

  return (
    <>
      <section id="about" className="relative overflow-hidden py-20 md:py-28 lg:py-32">
        <div className="container-hayya grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">{t.about.label}</p>
            <h2 className="mt-5 text-4xl leading-[1.2] text-navy sm:text-5xl lg:text-[2.6rem] font-bold">
              {t.about.title}
            </h2>
            <p className="mt-6 text-base md:text-[1.0625rem] leading-relaxed text-muted-foreground">{t.about.body}</p>
            <ul className="mt-8 space-y-4">
              {t.about.points.map((p) => (
                <li key={p} className="flex items-start gap-3.5 text-sm md:text-base text-navy/85 font-medium">
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold shadow-sm">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-5 rounded-2xl bg-white/60 backdrop-blur-sm p-4 sm:p-5 border border-gold/20 shadow-[0_8px_30px_rgba(212,175,55,0.08)]">
              <button
                type="button"
                onClick={() => setIsViewerOpen(true)}
                className="group relative shrink-0 w-20 sm:w-24 overflow-hidden rounded-lg shadow-md border border-navy-deep/10 bg-white transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="View ISO Certificate"
              >
                <div className="absolute inset-0 z-10 grid place-items-center bg-navy-deep/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
                <img
                  src={isoCertificate}
                  alt="ISO 9001:2015 Certificate"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </button>
              <div>
                <p className="text-sm sm:text-base font-bold text-navy-deep leading-relaxed">
                  {t.about.conclusion}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-gold uppercase tracking-widest">
                  ISO 9001:2015 Certified
                </p>
              </div>
            </div>

            <BrandLink href="/#contact" variant="outline" className="mt-9">
              {t.about.cta}
              <ArrowRight className={dir === "rtl" ? "h-4 w-4 rotate-180" : "h-4 w-4"} />
            </BrandLink>
          </Reveal>

          <Reveal delay={120} className="relative mt-12 lg:mt-0">
            {/* Decorative artistic backdrop elements */}
            <div className="absolute -start-6 -top-6 -z-20 h-full w-full rounded-2xl bg-navy-deep/5" />
            <div className="absolute -bottom-8 -end-8 -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-3xl" />
            <div className="absolute -top-12 -start-12 -z-10 h-48 w-48 rounded-full border border-gold/15" />

            {/* Premium double-frame container */}
            <div className="group relative rounded-2xl p-2 sm:p-4 bg-white/40 backdrop-blur-sm shadow-[0_0_50px_-20px_rgba(212,175,55,0.15)] transition-all duration-700 hover:shadow-[0_0_60px_-15px_rgba(212,175,55,0.3)] hover:-translate-y-2">

              {/* Animated gold border that traces the frame */}
              <div className="absolute inset-0 rounded-2xl border border-gold/20 transition-all duration-700 group-hover:border-gold/60" />

              {/* Image mask */}
              <div className="relative overflow-hidden rounded-xl shadow-inner bg-navy-deep/10">
                {/* Inner dark cinematic gradient overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-navy-deep/40 via-transparent to-transparent opacity-60 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-20" />

                <Image
                  src={aboutImage}
                  alt="Fresh produce being sorted and graded in a packing facility"
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {isViewerOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy-deep/95 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setIsViewerOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsViewerOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close viewer"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <img
              src={isoCertificate}
              alt="ISO 9001:2015 Certificate Full"
              className="max-h-[90vh] w-auto max-w-full rounded-xl shadow-2xl"
            />

            {/* Inline keyframes for animation since we don't want to modify tailwind config just for this */}
            <style>{`
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px) scale(0.95); }
                to { opacity: 1; transform: translateY(0) scale(1); }
              }
            `}</style>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
