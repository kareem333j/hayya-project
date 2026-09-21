import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { cn } from "@/lib/utils";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Global SEO constants ──────────────────────────────────────── */
const SITE_URL = "https://hayya-eg.com";
const SITE_NAME = "HAYYA";
const DEFAULT_TITLE = "HAYYA | Egyptian Agricultural Exports & B2B Trade";
const DEFAULT_DESC =
  "HAYYA connects Egyptian producers with global B2B buyers — premium agricultural exports, industrial supplies, contracting, and real estate investment. ISO 9001:2015 certified. El Shorouk City, Cairo.";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const OG_IMAGE_ALT = "HAYYA — Egyptian Agricultural Exports | hayya-eg.com";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      /* ── Core SEO ──────────────────────────── */
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESC },
      { name: "author", content: SITE_NAME },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "keywords", content: "Egyptian agricultural export, fresh produce Egypt, B2B export Egypt, HAYYA, mangoes Egypt export, grapes Egypt, pomegranates Egypt, Egyptian exporter, import export Egypt, real estate Egypt, industrial supplies Egypt, ISO 9001 Egypt" },

      /* ── Open Graph (Facebook, WhatsApp, LinkedIn, Telegram) ── */
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESC },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_EG" },

      /* ── Twitter / X Card ──────────────────── */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@hayyaegypt" },
      { name: "twitter:creator", content: "@hayyaegypt" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESC },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },

      /* ── Geo / Business ────────────────────── */
      { name: "geo.region", content: "EG-C" },
      { name: "geo.placename", content: "El Shorouk City, Cairo, Egypt" },
      { name: "geo.position", content: "30.1181;31.6033" },
      { name: "ICBM", content: "30.1181, 31.6033" },

      /* ── PWA / Browser ─────────────────────── */
      { name: "theme-color", content: "#152a45" },
      { name: "msapplication-TileColor", content: "#152a45" },
      { name: "application-name", content: SITE_NAME },

      /* ── Verification placeholders (fill in after registering) ── */
      // { name: "google-site-verification", content: "YOUR_CODE_HERE" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,600&family=Outfit:wght@300;400;500;600;700;800&family=Tajawal:wght@300;400;500;700;800&display=swap",
      },
    ],
    scripts: [
      /* ── WebSite Schema (enables Google Sitelinks Search Box) ── */
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          description: DEFAULT_DESC,
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        {/* Start of Tawk.to Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6aa7bfcc2c15d634461470c8/1k2fkae0f';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`,
          }}
        />
        {/* End of Tawk.to Script */}
      </body>
    </html>
  );
}

function RouterProgressBar() {
  const isLoading = useRouterState({ select: (s) => s.status === 'pending' });
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setProgress(10);
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 5 : prev));
      }, 150);
      return () => clearInterval(interval);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => {
        setVisible(false);
        setTimeout(() => setProgress(0), 200); // reset after fade out
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (!visible && progress === 0) return null;

  return (
    <div
      className={cn(
        "fixed top-0 start-0 h-1 bg-gold z-[99999] pointer-events-none transition-all duration-300 ease-out shadow-[0_0_10px_oklch(0.755_0.13_76)]",
        visible ? "opacity-100" : "opacity-0"
      )}
      style={{ width: `${progress}%` }}
    />
  );
}

import { ScrollToTop } from "../components/ScrollToTop";
import { SplashScreen } from "../components/ui/SplashScreen";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SplashScreen />
      <RouterProgressBar />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <ScrollToTop />
    </QueryClientProvider>
  );
}

