import { company, roles } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Client engagements at Cognizant"
          description="Progressed from Analyst Trainee through infrastructure support into an ITSM Lead role, across three client-facing engagements."
        />

        <Reveal className="mt-10">
          <div className="card flex flex-wrap items-center justify-between gap-3 p-5">
            <div>
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <p className="muted mt-0.5 text-[0.88rem]">{company.track}</p>
            </div>
            <span className="chip border-brand-500/30 text-brand-700 dark:text-brand-300">
              {company.period}
            </span>
          </div>
        </Reveal>

        <div className="relative mt-8 pl-8 sm:pl-10">
          {/* Timeline rail */}
          <div
            className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/60 via-brand-500/25 to-transparent sm:left-[13px]"
            aria-hidden="true"
          />

          <div className="space-y-5">
            {roles.map((role, i) => (
              <Reveal key={`${role.client}-${role.period}`} delay={i * 90}>
                <div className="relative">
                  {/* Node */}
                  <span
                    className={`absolute -left-8 top-6 grid h-[19px] w-[19px] place-items-center rounded-full border-2 border-[var(--surface)] sm:-left-10 ${
                      role.current ? "bg-brand-600" : "bg-slate-400 dark:bg-slate-600"
                    }`}
                    aria-hidden="true"
                  >
                    {role.current ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    ) : null}
                  </span>

                  <article className="card card-hover p-6">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <div>
                        <h3 className="text-[1.05rem] font-semibold">
                          {role.role}
                          <span className="muted font-normal"> — {role.client}</span>
                        </h3>
                        <p className="muted mt-1 text-[0.84rem]">{role.location}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {role.current ? (
                          <span className="rounded-full bg-emerald-500/12 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                            Current
                          </span>
                        ) : null}
                        <span className="chip">{role.period}</span>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {role.highlights.map((point) => (
                        <li
                          key={point}
                          className="muted relative pl-5 text-[0.92rem] leading-relaxed"
                        >
                          <span
                            className="absolute left-0 top-[0.62rem] h-1.5 w-1.5 rounded-full bg-brand-500/70"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {role.tags.map((tag) => (
                        <li key={tag} className="chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
