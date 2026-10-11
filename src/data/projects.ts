import type { Category, Project } from "@/types";
import { categoryLabels, categoryOrder } from "@/data/categories";

export const projects: Project[] = [
  {
    id: "1",
    slug: "eleanor",
    title: "Eleanor",
    category: "portraits",
    coverImage:
      "https://images.unsplash.com/photo-1534528741775-53994d69b4bb?w=800&q=80",
    description: "A quiet study in light and expression.",
    year: 2025,
    featured: true,
    photos: [
      {
        id: "1-1",
        src: "https://images.unsplash.com/photo-1534528741775-53994d69b4bb?w=1200&q=80",
        alt: "Eleanor portrait close-up",
        width: 1200,
        height: 1500,
      },
      {
        id: "1-2",
        src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80",
        alt: "Eleanor looking away",
        width: 1200,
        height: 1500,
      },
      {
        id: "1-3",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80",
        alt: "Eleanor soft light",
        width: 1200,
        height: 1500,
      },
    ],
  },
  {
    id: "2",
    slug: "james-claire",
    title: "James & Claire",
    category: "weddings",
    coverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    description: "An intimate celebration in the countryside.",
    year: 2025,
    featured: true,
    photos: [
      {
        id: "2-1",
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
        alt: "James and Claire first look",
        width: 1200,
        height: 800,
      },
      {
        id: "2-2",
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
        alt: "Wedding ceremony",
        width: 1200,
        height: 800,
      },
      {
        id: "2-3",
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
        alt: "Couple portrait",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    id: "3",
    slug: "northern-horizons",
    title: "Northern Horizons",
    category: "landscapes",
    coverImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Mountains, lakes and endless sky.",
    year: 2024,
    featured: true,
    photos: [
      {
        id: "3-1",
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        alt: "Mountain lake vista",
        width: 1200,
        height: 800,
      },
      {
        id: "3-2",
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
        alt: "Alpine peaks",
        width: 1200,
        height: 800,
      },
      {
        id: "3-3",
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
        alt: "Snowy mountains at dusk",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    id: "4",
    slug: "tokyo-streets",
    title: "Tokyo Streets",
    category: "street",
    coverImage:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    description: "Quiet moments in a restless city.",
    year: 2025,
    photos: [
      {
        id: "4-1",
        src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
        alt: "Tokyo street at night",
        width: 1200,
        height: 800,
      },
      {
        id: "4-2",
        src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=80",
        alt: "Shibuya crossing",
        width: 1200,
        height: 800,
      },
      {
        id: "4-3",
        src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
        alt: "Alley in Kyoto",
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    id: "5",
    slug: "lucas",
    title: "Lucas",
    category: "portraits",
    coverImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    description: "Studio session with natural light.",
    year: 2025,
    photos: [
      {
        id: "5-1",
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
        alt: "Lucas portrait",
        width: 1200,
        height: 1500,
      },
      {
        id: "5-2",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80",
        alt: "Lucas profile",
        width: 1200,
        height: 1500,
      },
    ],
  },
  {
    id: "6",
    slug: "iceland",
    title: "Iceland",
    category: "landscapes",
    coverImage:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&q=80",
    description: "Waterfalls, cliffs and endless horizons.",
    year: 2024,
    photos: [
      {
        id: "6-1",
        src: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=1200&q=80",
        alt: "Iceland waterfall",
        width: 1200,
        height: 800,
      },
      {
        id: "6-2",
        src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80",
        alt: "Black sand beach",
        width: 1200,
        height: 800,
      },
    ],
  },
];

/*
 * HOW TO ADD YOUR OWN WORK
 * 1. Put your images in /public/portfolio/<project-slug>/ (e.g. /portfolio/eleanor/01.jpg)
 * 2. Add a project above and point `src` / `coverImage` at "/portfolio/eleanor/01.jpg"
 * 3. Set width/height to each image's real pixel size so proportions stay correct.
 */

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 3): Project[] {
  const featured = projects.filter((p) => p.featured);
  return (featured.length > 0 ? featured : projects).slice(0, limit);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}

export interface CategorySummary {
  id: Category;
  label: string;
  count: number;
  cover: string;
}

/** Only categories that actually have projects, in display order. */
export function getUsedCategories(): CategorySummary[] {
  return categoryOrder.flatMap((id) => {
    const inCategory = projects.filter((p) => p.category === id);
    if (inCategory.length === 0) return [];
    return [
      {
        id,
        label: categoryLabels[id],
        count: inCategory.length,
        cover: inCategory[0].coverImage,
      },
    ];
  });
}

/** Previous / next project (wraps around) for the project page footer. */
export function getAdjacentProjects(slug: string): {
  prev: Project | undefined;
  next: Project | undefined;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1 || projects.length < 2) return { prev: undefined, next: undefined };
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
