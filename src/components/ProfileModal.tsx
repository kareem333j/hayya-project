import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FileText, Download, X, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const { lang, dir } = useLanguage();
  const pdfUrl = "/Company profile Hayya engineering and development.pdf";
  const isRtl = dir === "rtl" || lang === "ar";

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isRtl ? "بروفايل شركة هيّا" : "HAYYA Company Profile"}
      className="fixed inset-0 z-[9999] flex flex-col"
      style={{
        background: "rgba(10,15,30,0.98)",
        backdropFilter: "blur(12px)",
        animation: "profileFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* ── Top bar ── */}
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 bg-white/5 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold/20">
            <FileText className="h-5 w-5 text-gold" />
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">HAYYA Company Profile</p>
            <p className="text-xs text-white/50">{isRtl ? "بروفايل شركة هيّا الرسمي" : "Official Company Profile"}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Open in new tab */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80 transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isRtl ? "فتح في نافذة جديدة" : "Open in new tab"}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{isRtl ? "فتح كامل" : "Open"}</span>
          </a>
          {/* Download */}
          <a
            href={pdfUrl}
            download="HAYYA-Company-Profile.pdf"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold transition-all hover:bg-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label={isRtl ? "تحميل البروفايل" : "Download profile"}
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{isRtl ? "تحميل PDF" : "Download"}</span>
          </a>
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isRtl ? "إغلاق" : "Close profile viewer"}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* ── PDF body ── */}
      <div className="relative flex-1 overflow-hidden bg-white">
        <object
          data={pdfUrl}
          type="application/pdf"
          className="h-full w-full"
          aria-label="HAYYA Company Profile PDF"
        >
          {/* Fallback inside object if browser can't render PDF inline */}
          <div className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center bg-navy-deep">
            <div className="grid h-24 w-24 place-items-center rounded-2xl bg-gold/15 ring-1 ring-gold/30">
              <FileText className="h-12 w-12 text-gold" />
            </div>
            <div className="max-w-sm">
              <p className="text-xl font-bold text-white">HAYYA Company Profile</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {isRtl
                  ? "عارض الـ PDF غير مدعوم مباشرة في هذا المتصفح. يمكنك فتح أو تحميل الملف كاملاً عبر الأزرار أدناه."
                  : "The PDF viewer isn't supported directly in this browser. Use the buttons below to open or download the profile."}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                <ExternalLink className="h-4 w-4" />
                {isRtl ? "فتح في نافذة جديدة" : "Open in New Tab"}
              </a>
              <a
                href={pdfUrl}
                download="HAYYA-Company-Profile.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all hover:bg-gold/90"
              >
                <Download className="h-4 w-4" />
                {isRtl ? "تحميل البروفايل PDF" : "Download PDF"}
              </a>
            </div>
          </div>
        </object>
      </div>

      <style>{`
        @keyframes profileFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>,
    document.body
  );
}
