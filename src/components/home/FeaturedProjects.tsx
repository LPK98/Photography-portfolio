import ProjectCard from "@/components/gallery/ProjectCard";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects(3);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Selected work"
          title="Recent projects"
          description="A small selection from recent weddings, portraits and travels."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <ButtonLink href="/gallery" variant="outline">
            View all work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
