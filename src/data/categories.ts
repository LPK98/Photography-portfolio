import type { Category } from "@/types";

/**
 * Display names for every category you might use.
 * The gallery filter only shows categories that have at least one project,
 * so it's safe to leave unused ones in here.
 */
export const categoryLabels: Record<Category, string> = {
  portraits: "Portraits",
  weddings: "Weddings",
  landscapes: "Landscapes",
  street: "Street",
  travel: "Travel",
  commercial: "Commercial",
};

/** Order the categories appear in the filter and on the home page. */
export const categoryOrder: Category[] = [
  "weddings",
  "portraits",
  "landscapes",
  "street",
  "travel",
  "commercial",
];
