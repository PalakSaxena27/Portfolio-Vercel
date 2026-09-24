import { achievements, education } from "@/data/resume";
import { AwardIcon, GraduationIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education & Achievements"
          title="Academic background"
          description="Computer Science graduate with a consistent academic record and a competitive programming habit."
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {education.map((item, i) => (
              <Reveal key={item.degree} delay={i * 70}>
                <article className="card card-hover flex items-start gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                    <GraduationIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                      <h3 className="text-[0.95rem] font-semibold leading-snug">
                        {item.degree}
                      </h3>
                      {item.year ? <span className="chip">{item.year}</span> : null}
                    </div>
                    <p className="muted mt-1.5 text-[0.88rem]">{item.institute}</p>
                    <p className="mt-2 text-[0.85rem] font-semibold text-brand-600 dark:text-brand-300">
                      {item.score}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="lg:sticky lg:top-24">
            <div className="card overflow-hidden p-6">
              <div className="flex items-center gap-2.5">
                <AwardIcon className="h-5 w-5 text-accent-500" />
                <h3 className="text-[1.05rem] font-semibold">Achievements</h3>
              </div>
              <ul className="mt-5 space-y-5">
                {achievements.map((item) => (
                  <li key={item.title} className="relative pl-5">
                    <span
                      className="absolute left-0 top-[0.55rem] h-1.5 w-1.5 rounded-full bg-accent-500"
                      aria-hidden="true"
                    />
                    <p className="text-[0.92rem] font-semibold">{item.title}</p>
                    <p className="muted mt-1 text-[0.88rem] leading-relaxed">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
