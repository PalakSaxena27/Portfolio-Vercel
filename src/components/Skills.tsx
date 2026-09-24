import { skillGroups } from "@/data/resume";
import { skillIcons } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 surface-muted py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Technical Skills"
          title="The stack behind the service desk"
          description="From ITIL 4 process work in ServiceNow down to the directory services, servers and networks that the tickets are actually about."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = skillIcons[group.icon];
            return (
              <Reveal key={group.category} delay={(i % 4) * 70}>
                <article className="card card-hover h-full p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-600/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[0.95rem] font-semibold leading-snug">
                    {group.category}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
