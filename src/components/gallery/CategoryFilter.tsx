import Link from "next/link";
import type { CategorySummary } from "@/data/projects";

/** Plain links, so filters work without JS and every view has its own URL. */
export default function CategoryFilter({
  active,
  categories,
  total,
}: {
  active: string;
  categories: CategorySummary[];
  total: number;
}) {
  const items = [
    { id: "all", label: "All", count: total, href: "/gallery" },
    ...categories.map((c) => ({
      id: c.id as string,
      label: c.label,
      count: c.count,
      href: `/gallery?category=${c.id}`,
    })),
  ];

  return (
    <nav aria-label="Filter by category" className="flex flex-wrap justify-center gap-x-8 gap-y-3">
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            replace
            scroll={false}
            aria-current={isActive ? "true" : undefined}
            className={`border-b pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors ${
              isActive
                ? "border-accent text-foreground"
                : "border-transparent text-foreground/50 hover:text-foreground"
            }`}
          >
            {item.label}
            <span className="ml-1.5 text-foreground/35">{item.count}</span>
          </Link>
        );
      })}
    </nav>
  );
}
