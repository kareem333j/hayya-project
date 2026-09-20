import logo from "@/assets/hayya-logo.png";
import { catalogCopy, company, products } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const navKeys = ["home", "about", "products", "services", "why", "partnerships", "contact"] as const;
const navHrefs: Record<(typeof navKeys)[number], string> = {
  home: "/#home",
  about: "/#about",
  products: "/products",
  services: "/services",
  why: "/#why",
  partnerships: "/#partnerships",
  contact: "/#contact",
};

export function Footer() {
  const { t, lang, dir } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-navy-deep pt-20 pb-8 text-on-navy">
      {/* Premium glowing top border */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      
      {/* Decorative background blur */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -start-[20%] -top-[20%] h-[500px] w-[500px] rounded-full opacity-[0.03] mix-blend-screen"
        style={{ background: "radial-gradient(circle, oklch(0.755 0.13 76) 0%, transparent 70%)" }}
      />

      <div className="container-hayya relative z-10 grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        
        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col">
          <img
            src={logo}
            alt="HAYYA"
            width={1152}
            height={576}
            style={{ width: "120px", height: "auto" }}
            loading="lazy"
            className="brightness-0 invert drop-shadow-md"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-on-navy-muted">
            {t.footer.desc}
          </p>
          
          <div className="mt-8 flex items-center gap-3">
            <a
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-on-navy/15 bg-on-navy/5 text-on-navy/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#1877F2]/50 hover:bg-[#1877F2] hover:text-white hover:shadow-[0_0_15px_rgba(24,119,242,0.4)]"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-on-navy/15 bg-on-navy/5 text-on-navy/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#E1306C]/50 hover:bg-[#E1306C] hover:text-white hover:shadow-[0_0_15px_rgba(225,48,108,0.4)]"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-on-navy/15 bg-on-navy/5 text-on-navy/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <nav aria-label={t.footer.nav} className="pt-2">
          <h3 className="text-sm font-bold tracking-[0.16em] text-gold uppercase">
            {t.footer.nav}
          </h3>
          <ul className="mt-6 space-y-3.5">
            {navKeys.map((key) => (
              <li key={key}>
                <Link
                  to={(navHrefs[key].split('#')[0] || "/") as any}
                  {...(navHrefs[key].split('#')[1] ? { hash: navHrefs[key].split('#')[1] } : {})}
                  className={cn(
                    "group inline-flex items-center text-sm text-on-navy-muted transition-colors hover:text-white",
                    dir === "rtl" ? "hover:-translate-x-1" : "hover:translate-x-1",
                    "transition-transform duration-300"
                  )}
                >
                  <span className={cn(
                    "opacity-0 transition-all duration-300 group-hover:opacity-100 text-gold",
                    dir === "rtl" ? "ml-2 -translate-x-2 group-hover:translate-x-0" : "mr-2 -translate-x-2 group-hover:translate-x-0"
                  )}>—</span>
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Products */}
        <div className="pt-2">
          <h3 className="text-sm font-bold tracking-[0.16em] text-gold uppercase">
            {t.footer.products}
          </h3>
          <ul className="mt-6 space-y-3.5">
            {products.slice(0, 5).map((product) => (
              <li key={product.id}>
                <Link
                  to="/products"
                  className={cn(
                    "group inline-flex items-center text-sm text-on-navy-muted transition-colors hover:text-white",
                    dir === "rtl" ? "hover:-translate-x-1" : "hover:translate-x-1",
                    "transition-transform duration-300"
                  )}
                >
                  <span className={cn(
                    "opacity-0 transition-all duration-300 group-hover:opacity-100 text-gold",
                    dir === "rtl" ? "ml-2 -translate-x-2 group-hover:translate-x-0" : "mr-2 -translate-x-2 group-hover:translate-x-0"
                  )}>—</span>
                  {product[lang].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="pt-2">
          <h3 className="text-sm font-bold tracking-[0.16em] text-gold uppercase">
            {t.footer.contact}
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-on-navy-muted">
            <li>
              <a href={`tel:${company.phoneHref}`} dir="ltr" className="inline-flex items-center gap-3 transition-colors hover:text-gold">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`tel:${company.landlineHref}`} dir="ltr" className="inline-flex items-center gap-3 transition-colors hover:text-gold">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                {company.landline}
              </a>
            </li>
            <li className="break-all">
              <a href={`mailto:${company.email}`} className="inline-flex items-center gap-3 transition-colors hover:text-gold">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </span>
                {company.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              {company.location[lang]}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-hayya mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
        <p className="text-xs text-on-navy/50">{t.footer.rights}</p>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs text-on-navy/40">{t.footer.language}:</span>
            <LanguageSwitcher tone="light" />
          </div>
          <div className="h-4 w-px bg-white/10" />
          <Link to="/admin" className="text-xs font-medium tracking-wide text-on-navy/40 transition-colors hover:text-gold">
            {catalogCopy[lang].manage}
          </Link>
        </div>
      </div>
    </footer>
  );
}
