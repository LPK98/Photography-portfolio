import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { getUsedCategories } from "@/data/projects";

export default function CategoryTiles() {
  const categories = getUsedCategories();
  if (categories.length < 2) return null;

  return (
    <section className="border-t border-line bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="Browse" title="What I photograph" />

        <div className="mt-14 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/gallery?category=${cat.id}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-background"
            >
              <Image
                src={cat.cover}
                alt=""
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="font-serif text-3xl leading-none">{cat.label}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/70">
                  {cat.count} {cat.count === 1 ? "project" : "projects"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
