export default function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="mt-3 font-serif text-4xl font-normal leading-tight md:text-5xl">
        {title}
      </Tag>
      <div
        className={`mt-5 h-px w-12 bg-accent ${centered ? "mx-auto" : ""}`}
        aria-hidden
      />
      {description && (
        <p
          className={`mt-5 max-w-md text-sm leading-relaxed text-foreground/65 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
