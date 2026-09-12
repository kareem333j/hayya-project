import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/hayya-logo.png";
import { useLanguage } from "@/lib/language";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";

const links = [
  { type: "hash", href: "/#home", key: "home" },
  { type: "hash", href: "/#about", key: "about" },
  { type: "route", to: "/products", key: "products" },
  { type: "route", to: "/services", key: "services" },
  { type: "hash", href: "/#why", key: "why" },
  { type: "hash", href: "/#partnerships", key: "partnerships" },
  { type: "hash", href: "/#contact", key: "contact" },
] as const;

export function Header() {
  const { t, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

  useEffect(() => {
    // Use requestAnimationFrame to debounce scroll handler off the critical path
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const showIndicator = (key: string) => {
    const el = linkRefs.current[key];
    const nav = navRef.current;
    if (!el || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setIndicator({ left: elRect.left - navRect.left, width: elRect.width, visible: true });
  };

  return (
    <>
      <header
        className={cn(
          // Only transition compositor-safe properties — NO transition-all (causes reflow on every scroll frame)
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
          scrolled
            ? "bg-white/96 backdrop-blur-xl shadow-[0_1px_0_0_oklch(0.28_0.062_254/0.08),0_8px_40px_-8px_oklch(0.28_0.062_254/0.14)] border-b border-navy/8"
            : "bg-gradient-to-b from-navy-deep/70 to-transparent",
        )}
        style={{
          // body::before paints a fixed 3px gold bar at top:0/z-index:9999.
          // Without extra top padding the header content sits flush against it
          // (or behind it on iOS notch devices), making the top feel tighter
          // than the bottom.  max() keeps us clear of both the bar AND the iOS
          // safe-area inset so the fix is permanent across every device.
          paddingTop: "max(3px, env(safe-area-inset-top, 3px))",
        }}
      >
        <div
          className={cn(
            // Use padding instead of height — padding changes don't trigger layout reflow cascade
            "container-hayya flex items-center justify-between transition-[padding] duration-300",
            scrolled ? "py-2 md:py-3" : "py-2.5 md:py-4 lg:py-6",
          )}
        >
          {/* ── Logo ── */}
          <Link to="/" className="flex items-center shrink-0" aria-label="HAYYA home">
            <img
              src={logo}
              alt="HAYYA"
              width={1152}
              height={576}
              className={cn(
                // Only transition filter (GPU) not width/height (layout)
                // Mobile: h-12, scrolled desktop: h-16, open desktop: h-20
                "w-auto transition-[filter,height] duration-300",
                scrolled
                  ? "h-12 md:h-14 lg:h-16"
                  : "h-14 md:h-16 lg:h-20 brightness-0 invert",
              )}
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav
            ref={navRef}
            className="relative hidden items-center lg:flex"
            aria-label="Main"
            onMouseLeave={() => setIndicator(s => ({ ...s, visible: false }))}
          >
            {/* Sliding underline */}
            <span
              className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-gold transition-all duration-250 ease-out"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.visible ? 1 : 0,
              }}
            />

            {links.map((l) => (
              l.type === "hash" ? (
                <a
                  key={l.key}
                  href={l.href}
                  ref={(el) => { linkRefs.current[l.key] = el; }}
                  onMouseEnter={() => showIndicator(l.key)}
                  className={cn(
                    "relative px-4 py-3 text-[0.8125rem] font-semibold tracking-wide transition-colors duration-200",
                    scrolled
                      ? "text-navy/70 hover:text-navy"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  {t.nav[l.key]}
                </a>
              ) : (
                <Link
                  key={l.key}
                  to={l.to}
                  ref={(el) => { linkRefs.current[l.key] = el; }}
                  onMouseEnter={() => showIndicator(l.key)}
                  className={cn(
                    "relative px-4 py-3 text-[0.8125rem] font-semibold tracking-wide transition-colors duration-200",
                    scrolled
                      ? "text-navy/70 hover:text-navy"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  {t.nav[l.key]}
                </Link>
              )
            ))}
          </nav>

          {/* ── Desktop right ── */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher
              tone={scrolled ? "dark" : "light"}
              className="self-stretch"
            />
            <a
              href="/#contact"
              className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-full bg-gold px-6 text-[0.8rem] font-bold tracking-wide text-navy-deep shadow-[0_2px_12px_oklch(0.755_0.13_76/0.4)] transition-all duration-300 hover:shadow-[0_4px_20px_oklch(0.755_0.13_76/0.6)] hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">{t.nav.quote}</span>
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
            </a>
          </div>

          {/* ── Mobile toggle ── */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher
              tone={scrolled ? "dark" : "light"}
              className="h-10"
            />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.nav.menu}
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full transition-all duration-200",
                scrolled
                  ? "bg-navy/8 text-navy hover:bg-navy/14"
                  : "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25",
              )}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ──────────────────────── Mobile Drawer ──────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 z-[200] overflow-hidden lg:hidden transition-all duration-500",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-navy-deep/60 backdrop-blur-sm transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />

        {/* Panel slides in from the logical end side */}
        <div
          className={cn(
            "absolute inset-y-0 end-0 flex w-[min(320px,90vw)] flex-col bg-navy-deep transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            open
              ? "translate-x-0"
              : dir === "rtl"
                ? "-translate-x-full"
                : "translate-x-full",
          )}
        >
          {/* Panel header */}
          <div className="flex h-20 items-center justify-between border-b border-on-navy/10 px-6">
            <img
              src={logo}
              alt="HAYYA"
              width={1152}
              height={576}
              className="h-16 w-auto brightness-0 invert"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.nav.close}
              className="grid h-10 w-10 place-items-center rounded-full bg-on-navy/10 text-on-navy transition-colors hover:bg-on-navy/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4" aria-label="Mobile">
            {links.map((l) => (
              l.type === "hash" ? (
                <a
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-[0.9375rem] font-medium text-on-navy/75 transition-all duration-200 hover:bg-on-navy/8 hover:text-on-navy"
                >
                  <span>{t.nav[l.key]}</span>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold/0 transition-colors duration-200 group-hover:bg-gold" />
                </a>
              ) : (
                <Link
                  key={l.key}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-[0.9375rem] font-medium text-on-navy/75 transition-all duration-200 hover:bg-on-navy/8 hover:text-on-navy"
                >
                  <span>{t.nav[l.key]}</span>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold/0 transition-colors duration-200 group-hover:bg-gold" />
                </Link>
              )
            ))}
          </nav>

          {/* Footer CTA */}
          <div className="border-t border-on-navy/10 px-6 py-6 space-y-4">
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full h-12 text-sm font-bold tracking-wide bg-gold text-navy-deep shadow-[0_2px_16px_oklch(0.755_0.13_76/0.4)] transition-all duration-300 hover:shadow-[0_4px_24px_oklch(0.755_0.13_76/0.55)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">{t.nav.quote}</span>
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />
            </a>
            <div className="flex justify-center">
              <LanguageSwitcher tone="light" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
