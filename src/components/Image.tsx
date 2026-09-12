import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

export function Image({ className, fallbackClassName, alt, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If the image is already loaded from cache before React attaches onLoad, this will catch it
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [props.src]);

  return (
    <div className={cn("relative overflow-hidden bg-navy-deep/10", fallbackClassName, className)}>
      {/* Skeleton loader background that pulses while loading */}
      <div 
        className={cn(
          "absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",
          !isLoaded ? "animate-pulse" : "hidden"
        )} 
      />
      
      <img
        ref={imgRef}
        alt={alt || ""}
        {...props}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-700 ease-in-out z-10 relative",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
