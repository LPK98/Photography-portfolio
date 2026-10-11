import Link from "next/link";

type Variant = "solid" | "outline" | "light";

const variants: Record<Variant, string> = {
  solid: "bg-foreground text-background hover:bg-accent hover:text-accent-foreground",
  outline:
    "border border-foreground/30 text-foreground hover:bg-foreground hover:text-background",
  // For use on top of photos / dark backgrounds
  light: "border border-white/50 text-white hover:bg-white hover:text-black",
};

export default function ButtonLink({
  href,
  variant = "solid",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
