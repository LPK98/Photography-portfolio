import type { Service } from "@/types";

/** Placeholder copy: rewrite to match what you actually offer. */
export const services: Service[] = [
  {
    id: "weddings",
    inquiryType: "weddings",
    title: "Weddings & Events",
    description:
      "Relaxed, documentary coverage of the day as it unfolds, from the quiet moments of getting ready to the last dance.",
    includes: [
      "Half-day, full-day and multi-day coverage",
      "Private online gallery",
      "Edited, full-resolution downloads",
      "Personal print release",
    ],
    priceNote: "Enquire for rates",
  },
  {
    id: "portraits",
    inquiryType: "portraits",
    title: "Portraits & Families",
    description:
      "Natural-light sessions on location or in the studio. Unhurried, comfortable, and focused on how you actually look and feel.",
    includes: [
      "Session of around 60–90 minutes",
      "Location guidance and outfit advice",
      "Curated, retouched selection",
      "Private online gallery",
    ],
    priceNote: "Enquire for rates",
  },
  {
    id: "commercial",
    inquiryType: "commercial",
    title: "Commercial & Editorial",
    description:
      "Imagery for brands, publications and small businesses: considered, consistent and ready for the way you'll use it.",
    includes: [
      "Brief and shot-list planning",
      "Studio or on-location shoots",
      "Licensing tailored to your use",
      "Fast, colour-managed delivery",
    ],
    priceNote: "Quoted per project",
  },
];

export const processSteps = [
  {
    title: "Enquire",
    body: "Tell me about your project, your date and what you have in mind.",
  },
  {
    title: "Plan",
    body: "We talk through the details, locations and timeline until everything feels right.",
  },
  {
    title: "Shoot & deliver",
    body: "I photograph, edit with care and deliver your images in a private gallery.",
  },
];
