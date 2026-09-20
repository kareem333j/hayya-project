import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const brandButton = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60",
  {
    variants: {
      variant: {
        solid: "bg-navy text-on-navy hover:bg-navy-deep shadow-soft hover:shadow-lift",
        gold: "bg-gold text-navy-deep hover:brightness-105 shadow-soft hover:shadow-lift",
        outline: "border border-navy/25 text-navy hover:border-navy hover:bg-navy/5",
        ghostLight: "border border-on-navy/30 text-on-navy hover:bg-on-navy/10",
      },
      size: {
        md: "h-11 px-5",
        lg: "h-13 px-7 text-[0.95rem]",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type Props = React.ComponentProps<"a"> & VariantProps<typeof brandButton> & { href?: string };

export function BrandLink({ className, variant, size, href, ...props }: Props) {
  const isInternal = href && href.startsWith("/");
  const btnClass = cn(brandButton({ variant, size }), className);

  if (isInternal) {
    const [path, hash] = href.split("#");
    return (
      <Link 
        to={path || "/"} 
        {...(hash ? { hash } : {})}
        className={btnClass} 
        {...props as any} 
      />
    );
  }

  return <a href={href} className={btnClass} {...props} />;
}
