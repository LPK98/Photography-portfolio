export type Category =
  | "portraits"
  | "weddings"
  | "landscapes"
  | "street"
  | "travel"
  | "commercial";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  /** Real pixel dimensions of the image: used to keep the correct proportions. */
  width: number;
  height: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Category;
  coverImage: string;
  description?: string;
  year: number;
  /** Featured projects appear on the home page. */
  featured?: boolean;
  photos: Photo[];
}

export interface Service {
  id: string;
  /** Matches an id in `inquiryTypes` so "Enquire" pre-selects the right option. */
  inquiryType: string;
  title: string;
  description: string;
  includes: string[];
  priceNote: string;
}
