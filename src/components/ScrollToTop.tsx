import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisible(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Trigger once on mount to handle initial state if page is refreshed down
    onScroll(); 
    
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "group fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        "bg-gradient-to-tr from-gold to-gold-soft text-navy-deep",
        "shadow-[0_4px_20px_oklch(0.755_0.13_76/0.4),inset_0_-2px_4px_oklch(0_0_0/0.1)]",
        "hover:shadow-[0_8px_28px_oklch(0.755_0.13_76/0.55),inset_0_-2px_4px_oklch(0_0_0/0.1)]",
        "hover:-translate-y-1.5 hover:scale-105 active:scale-95 active:translate-y-0",
        visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-75 pointer-events-none"
      )}
    >
      <ArrowUp className="relative z-10 h-5 w-5 stroke-[2.5]" />
      
      {/* Shine effect that triggers on hover */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 -translate-x-[150%] skew-x-12 bg-white/40 transition-transform duration-700 ease-out group-hover:translate-x-[150%]" />
      </span>
      
      {/* Ping ring for subtle attention when it appears */}
      <span 
        className={cn(
          "absolute inset-0 -z-10 rounded-full bg-gold opacity-0",
          visible ? "animate-[pulse-ring_2.5s_ease-out_infinite]" : ""
        )}
      />
    </button>
  );
}
