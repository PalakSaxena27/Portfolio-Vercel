import { profile } from "@/data/resume";
import ContactForm from "./ContactForm";
import {
  DownloadIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    Icon: PhoneIcon,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "Location",
    value: profile.location,
    href: null,
    Icon: PinIcon,
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 surface-muted py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk service management"
          description="Open to ITSM, ServiceNow and infrastructure support roles. Send a message below, or reach me on any of these — I reply to everything."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Direct channels */}
          <div className="space-y-3">
            {channels.map((channel, i) => {
              const { Icon } = channel;
              const content = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white dark:text-brand-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="muted block text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
                      {channel.label}
                    </span>
                    <span className="mt-1 block truncate text-[0.92rem] font-medium">
                      {channel.value}
                    </span>
                  </span>
                </>
              );

              return (
                <Reveal key={channel.label} delay={i * 60}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="card card-hover group flex items-center gap-4 p-4"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="card group flex items-center gap-4 p-4">{content}</div>
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={240}>
              <a
                href={profile.resumeFile}
                download
                className="flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold transition hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-300"
              >
                <DownloadIcon className="h-4 w-4" />
                Download resume
              </a>
            </Reveal>
          </div>

          {/* Message form */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
