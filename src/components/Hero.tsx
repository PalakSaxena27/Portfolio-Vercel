import Image from "next/image";
import { profile, stats } from "@/data/resume";
import Reveal from "./Reveal";
import {
  ArrowRightIcon,
  DownloadIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="grid-backdrop absolute inset-0 opacity-70" />
        <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute -top-16 right-0 h-[24rem] w-[24rem] rounded-full bg-accent-500/12 blur-3xl" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-3.5 py-1.5 text-[0.78rem] font-medium text-brand-700 dark:text-brand-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Currently ITSM Lead @ Victory Capital Management
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                {profile.firstName}{" "}
                <span className="gradient-text">{profile.lastName}</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.95rem] font-medium sm:text-base">
                {profile.taglines.map((tag, i) => (
                  <span key={tag} className="flex items-center gap-3">
                    {i > 0 ? (
                      <span
                        className="h-1 w-1 rounded-full bg-brand-500/60"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="muted">{tag}</span>
                  </span>
                ))}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="muted mt-6 max-w-xl text-[1.02rem] leading-relaxed">
                {profile.shortPitch}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
                >
                  Get in touch
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.resumeFile}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] surface-muted px-5 py-3 text-sm font-semibold transition hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-300"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download CV
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] surface-muted transition hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-300"
                >
                  <LinkedInIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="muted mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.86rem]">
                <span className="inline-flex items-center gap-2">
                  <PinIcon className="h-4 w-4 text-brand-500" />
                  {profile.location}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-300"
                >
                  <MailIcon className="h-4 w-4 text-brand-500" />
                  {profile.email}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal delay={180} className="justify-self-center lg:justify-self-end">
            <div className="relative w-[17rem] sm:w-[20rem] lg:w-[21.5rem]">
              <div
                className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-600/25 via-accent-500/15 to-transparent blur-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-muted)] shadow-2xl shadow-brand-900/15">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width={900}
                  height={1600}
                  priority
                  sizes="(max-width: 640px) 17rem, (max-width: 1024px) 20rem, 21.5rem"
                  className="aspect-[4/5] w-full object-cover object-[center_88%]"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/15 px-4 py-2.5 backdrop-blur-md">
                  <div className="text-white">
                    <p className="text-[0.82rem] font-semibold leading-tight">
                      {profile.name}
                    </p>
                    <p className="text-[0.7rem] leading-tight text-white/80">
                      ITSM Lead · Cognizant
                    </p>
                  </div>
                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-brand-700">
                    ITIL 4
                  </span>
                </div>
              </div>

              {/* Floating accents */}
              <div className="animate-float absolute -left-6 top-10 hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2.5 shadow-xl sm:block">
                <p className="text-[0.68rem] font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">
                  ServiceNow
                </p>
                <p className="muted text-[0.68rem]">Incident · Change</p>
              </div>
              <div
                className="animate-float absolute -right-5 bottom-24 hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2.5 shadow-xl sm:block"
                style={{ animationDelay: "1.6s" }}
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
                  Infrastructure
                </p>
                <p className="muted text-[0.68rem]">AD DS · Windows Server</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={360}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[var(--surface)] px-5 py-6 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold tracking-tight sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="muted mt-1 block text-[0.78rem]">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
