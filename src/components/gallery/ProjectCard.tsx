import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";
import { categoryLabels } from "@/data/categories";

export default function ProjectCard({
  project,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  project: Project;
  sizes?: string;
}) {
  return (
    <Link href={`/gallery/${project.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <Image
          src={project.coverImage}
          alt={`${project.title}: ${project.description ?? categoryLabels[project.category]}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl leading-tight">{project.title}</h3>
        <p className="eyebrow shrink-0">{categoryLabels[project.category]}</p>
      </div>
    </Link>
  );
}
