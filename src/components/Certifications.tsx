import { certifications } from "@/data/resume";
import { AwardIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 surface-muted py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & continuous learning"
          description="Formal ITIL 4 certification alongside hands-on credentials in Generative AI tooling and software fundamentals."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 3) * 70}>
              <article className="card card-hover flex h-full items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                  <AwardIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[0.95rem] font-semibold leading-snug">
                    {cert.name}
                  </h3>
                  <p className="muted mt-1 text-[0.84rem]">{cert.issuer}</p>
                  {cert.date ? (
                    <p className="muted mt-2 text-[0.75rem] uppercase tracking-wide">
                      {cert.date}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
