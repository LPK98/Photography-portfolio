import ButtonLink from "@/components/ui/ButtonLink";

export default function CallToAction({
  title = "Have a project in mind?",
  body = "Tell me about your wedding, session or commission. I'd love to hear about it.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="font-serif text-4xl leading-tight md:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed opacity-70">
          {body}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink
            href="/contact"
            className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Get in touch
          </ButtonLink>
          <ButtonLink
            href="/services"
            className="border border-background/40 text-background hover:bg-background hover:text-foreground"
          >
            See services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
