import { useEffect, useState } from "react";
import logo from "@/assets/hayya-logo.png";
import { cn } from "@/lib/utils";

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Hide scrollbar while splash is showing
    document.body.style.overflow = "hidden";
    
    // Minimum display time for the splash screen
    const timer = setTimeout(() => {
      setAnimateOut(true);
      document.body.style.overflow = "";
      setTimeout(() => setShow(false), 800); 
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-navy-deep transition-all duration-[800ms] ease-in-out",
        animateOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      )}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[80px] animate-pulse" />
        
        <img
          src={logo}
          alt="HAYYA"
          className="h-28 md:h-40 w-auto brightness-0 invert drop-shadow-2xl float"
        />
        
        {/* Loading text with shimmer */}
        <div className="mt-14 text-gold-shimmer font-bold tracking-[0.3em] uppercase text-sm md:text-base">
          Loading
        </div>
      </div>
    </div>
  );
}
