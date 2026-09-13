import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { copy } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function PromoVideo() {
  const { lang, dir } = useLanguage();
  const c = copy[lang].promo;
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    let pos = (e.clientX - rect.left) / rect.width;
    
    if (dir === "rtl") {
      pos = 1 - pos;
    }
    
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="bg-navy-deep py-20 md:py-28 lg:py-32 border-t border-navy-deep">
      <div className="container-hayya">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <p className="eyebrow">{c.label}</p>
          <h2 className="mt-5 text-[2.5rem] leading-[1.14] text-on-navy sm:text-5xl lg:text-[4.5rem]">
            {c.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-on-navy-muted">{c.sub}</p>
        </Reveal>

        <Reveal className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border group bg-black" delay={200}>
          <div 
            ref={containerRef}
            className="relative aspect-video w-full flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* The Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-contain md:object-cover"
              preload="metadata"
              playsInline
              muted={isMuted}
              src="/promo.mp4"
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Center Play/Pause Glassmorphism Button */}
            <div className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-500",
              isPlaying && !isHovering ? "opacity-0" : "opacity-100",
              !isPlaying && "bg-black/40"
            )}>
              <div className={cn(
                "w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-transform hover:scale-110",
                isPlaying ? "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100" : "scale-100"
              )}>
                {isPlaying ? (
                  <Pause className="w-10 h-10 md:w-14 md:h-14 fill-current" />
                ) : (
                  <Play className={cn("w-10 h-10 md:w-14 md:h-14 fill-current", dir === "ltr" ? "ml-2" : "mr-2")} />
                )}
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div 
              className={cn(
                "absolute bottom-0 left-0 right-0 p-4 pt-12 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500",
                isPlaying && !isHovering ? "opacity-0" : "opacity-100"
              )}
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="flex flex-col gap-3">
                {/* Progress Bar */}
                <div 
                  className="w-full h-1.5 md:h-2 bg-white/30 rounded-full overflow-hidden cursor-pointer group/progress relative"
                  onClick={handleProgressBarClick}
                >
                   <div 
                     className="absolute top-0 bottom-0 bg-gold transition-all duration-75 ease-linear"
                     style={{ 
                       width: `${progress}%`,
                       [dir === "rtl" ? "right" : "left"]: 0 
                     }}
                   />
                </div>
                
                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={togglePlay}
                      className="text-white hover:text-gold transition-colors p-2 rounded-full hover:bg-white/10"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 md:w-6 md:h-6 fill-current" /> : <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />}
                    </button>
                    <button 
                      onClick={toggleMute}
                      className="text-white hover:text-gold transition-colors p-2 rounded-full hover:bg-white/10"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5 md:w-6 md:h-6" /> : <Volume2 className="w-5 h-5 md:w-6 md:h-6" />}
                    </button>
                  </div>
                  
                  <button 
                    onClick={toggleFullscreen}
                    className="text-white hover:text-gold transition-colors p-2 rounded-full hover:bg-white/10"
                  >
                    <Maximize className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
