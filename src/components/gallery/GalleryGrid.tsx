"use client";

import { useSearchParams } from "next/navigation";
import { getProjectsByCategory, getUsedCategories, projects } from "@/data/projects";
import CategoryFilter from "./CategoryFilter";
import ProjectCard from "./ProjectCard";

export default function GalleryGrid() {
  const searchParams = useSearchParams();
  const categories = getUsedCategories();

  // The active filter lives in the URL (?category=weddings) so views can be shared.
  const requested = searchParams.get("category") ?? "all";
  const active = categories.some((c) => c.id === requested) ? requested : "all";
  const filtered = getProjectsByCategory(active);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 md:py-20">
      <CategoryFilter active={active} categories={categories} total={projects.length} />

      <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-sm text-foreground/50">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
