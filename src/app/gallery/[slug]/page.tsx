import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabels } from "@/data/categories";
import { getAdjacentProjects, getProjectBySlug, projects } from "@/data/projects";
import ProjectGallery from "@/components/gallery/ProjectGallery";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const description =
    project.description ?? `${categoryLabels[project.category]} photography, ${project.year}.`;

  return {
    title: project.title,
    description,
    alternates: { canonical: `/gallery/${project.slug}` },
    openGraph: {
      title: project.title,
      description,
      images: [{ url: project.coverImage, alt: project.title }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { next } = getAdjacentProjects(slug);

  return (
    <article>
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10 md:py-20">
        <Link
          href="/gallery"
          className="mb-10 inline-block text-[11px] uppercase tracking-[0.18em] text-foreground/55 transition-colors hover:text-accent"
        >
          ← All work
        </Link>

        <header className="mb-14 text-center">
          <p className="eyebrow">
            {categoryLabels[project.category]} · {project.year}
          </p>
          <h1 className="mt-3 font-serif text-5xl font-normal leading-tight md:text-7xl">
            {project.title}
          </h1>
          {project.description && (
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-foreground/65">
              {project.description}
            </p>
          )}
        </header>

        <ProjectGallery project={project} />
      </div>

      {next && next.slug !== project.slug && (
        <Link
          href={`/gallery/${next.slug}`}
          className="group relative block border-t border-line bg-surface"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-10 lg:px-10">
            <div>
              <p className="eyebrow">Next project</p>
              <p className="mt-2 font-serif text-3xl transition-colors group-hover:text-accent md:text-5xl">
                {next.title} →
              </p>
            </div>
            <div className="relative hidden aspect-[4/3] w-40 shrink-0 overflow-hidden bg-background sm:block">
              <Image
                src={next.coverImage}
                alt=""
                fill
                sizes="160px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </Link>
      )}
    </article>
  );
}
