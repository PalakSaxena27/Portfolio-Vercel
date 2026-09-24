import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "text-center" : ""}>
      <span
        className={`inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-6 bg-brand-500/60" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p
          className={`muted mt-4 max-w-2xl text-[0.98rem] leading-relaxed ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
