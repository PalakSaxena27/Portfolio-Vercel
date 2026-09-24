import { profile } from "@/data/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CheckIcon } from "./Icons";

const focusAreas = [
  {
    title: "Incident Management",
    detail:
      "Own tickets end to end in ServiceNow — logging, prioritisation, assignment, resolution and closure.",
  },
  {
    title: "Change Enablement",
    detail:
      "Shepherd change requests through review, approval and implementation with clean audit trails.",
  },
  {
    title: "Infrastructure Support",
    detail:
      "Active Directory, Windows Server, backup jobs and storage operations for enterprise environments.",
  },
  {
    title: "Service Operations",
    detail:
      "Keep records accurate, processes ITIL 4 aligned, and stakeholders informed on ticket status.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Service management, grounded in real infrastructure"
          description={profile.summary}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 70}>
              <article className="card card-hover h-full p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500/12 text-brand-600 dark:text-brand-300">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-[0.98rem] font-semibold">{area.title}</h3>
                    <p className="muted mt-1.5 text-[0.9rem] leading-relaxed">
                      {area.detail}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
