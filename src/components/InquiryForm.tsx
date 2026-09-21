import { useState } from "react";
import { z } from "zod";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";
import { brandButton } from "@/components/BrandButton";
import { sendInquiry } from "@/lib/inquiry.server";

type FieldKey =
  "name" | "companyName" | "email" | "country" | "phone" | "product" | "quantity" | "message";

const empty: Record<FieldKey, string> = {
  name: "",
  companyName: "",
  email: "",
  country: "",
  phone: "",
  product: "",
  quantity: "",
  message: "",
};

export function InquiryForm() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const schema = z.object({
    name: z.string().trim().min(2, f.errors.name).max(100),
    companyName: z.string().trim().min(2, f.errors.company).max(120),
    email: z.string().trim().email(f.errors.email).max(255),
    country: z.string().trim().min(2, f.errors.country).max(80),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    product: z.string().trim().max(120).optional().or(z.literal("")),
    quantity: z.string().trim().max(80).optional().or(z.literal("")),
    message: z.string().trim().min(10, f.errors.message).max(1500),
  });

  const set = (key: FieldKey) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<FieldKey, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as FieldKey;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await sendInquiry({ data: parsed.data });
      setStatus("sent");
      setValues(empty);
    } catch (e: any) {
      console.error("Form error:", e);
      setErrors({ 
        message: e?.message || "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى." 
      } as any);
      setStatus("error");
    }
  };

  const fields: { key: FieldKey; label: string; type?: string; required?: boolean }[] = [
    { key: "name", label: f.name, required: true },
    { key: "companyName", label: f.companyName, required: true },
    { key: "email", label: f.email, type: "email", required: true },
    { key: "country", label: f.country, required: true },
    { key: "phone", label: f.phone, type: "tel" },
    { key: "product", label: f.product },
    { key: "quantity", label: f.quantity },
  ];

  return (
    <form onSubmit={onSubmit} noValidate className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/60 p-6 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.1)] md:p-10">
      
      {/* Decorative gradient inside the form */}
      <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-gold/5 blur-[80px]" />
      
      <div className="relative z-10 grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.key} className={field.key === "quantity" ? "sm:col-span-1" : undefined}>
            <label
              htmlFor={field.key}
              className="block text-[0.7rem] font-bold tracking-[0.14em] text-navy/70 uppercase ms-1"
            >
              {field.label}
              {!field.required && (
                <span className="ms-2 font-medium tracking-normal text-navy/40 normal-case">
                  ({f.optional})
                </span>
              )}
            </label>
            <input
              id={field.key}
              name={field.key}
              type={field.type ?? "text"}
              value={values[field.key]}
              onChange={set(field.key)}
              aria-invalid={Boolean(errors[field.key])}
              aria-describedby={errors[field.key] ? `${field.key}-error` : undefined}
              className={cn(
                "mt-2.5 h-14 w-full rounded-xl border bg-navy/5 px-4 py-3.5 text-sm text-navy transition-all duration-300 outline-none placeholder:text-navy/40 hover:border-gold/40 hover:bg-white focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/20",
                errors[field.key] ? "border-destructive focus:border-destructive focus:ring-destructive/20" : "border-navy/10",
              )}
            />
            {errors[field.key] && (
              <p id={`${field.key}-error`} className="mt-1.5 ms-1 text-xs font-medium text-destructive">
                {errors[field.key]}
              </p>
            )}
          </div>
        ))}

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-[0.7rem] font-bold tracking-[0.14em] text-navy/70 uppercase ms-1"
          >
            {f.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={set("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(
              "mt-2.5 w-full rounded-xl border bg-navy/5 p-4 text-sm text-navy transition-all duration-300 outline-none placeholder:text-navy/40 hover:border-gold/40 hover:bg-white focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/20",
              errors.message ? "border-destructive focus:border-destructive focus:ring-destructive/20" : "border-navy/10",
            )}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 ms-1 text-xs font-medium text-destructive">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="relative z-10 mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(
            brandButton({ variant: "gold", size: "lg" }),
            "w-full sm:w-auto shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] transition-all duration-300 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.6)]"
          )}
        >
          {status === "sending" && <Loader2 className="h-4 w-4 animate-spin me-2" />}
          {f.submit}
        </button>
        <p className="text-xs leading-relaxed text-navy-muted/60 text-center sm:text-start max-w-xs">
          {f.notice}
        </p>
      </div>

      <div aria-live="polite" className="relative z-10 mt-6">
        {status === "sent" && (
          <div className="flex animate-in fade-in slide-in-from-bottom-2 items-start gap-3 rounded-xl border border-leaf/30 bg-leaf/10 p-4 shadow-sm">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
            <p className="text-sm font-medium text-navy">{f.success}</p>
          </div>
        )}
        {status === "error" && Object.keys(errors).length > 0 && (
          <div className="flex animate-in fade-in slide-in-from-bottom-2 items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 shadow-sm">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <p className="text-sm font-medium text-navy">{Object.values(errors)[0]}</p>
          </div>
        )}
      </div>
    </form>
  );
}
