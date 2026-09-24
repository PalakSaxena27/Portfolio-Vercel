import { navLinks, profile } from "@/data/resume";
import { LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="container-page flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-[0.8rem] font-bold text-white">
            PS
          </span>
          <div>
            <p className="text-sm font-semibold">{profile.name}</p>
            <p className="muted text-[0.78rem]">
              {profile.title} · ServiceNow · ITIL 4
            </p>
          </div>
        </div>

        <ul className="muted hidden items-center gap-5 text-[0.82rem] md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition hover:text-brand-600 dark:hover:text-brand-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] surface-muted transition hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-300"
          >
            <MailIcon className="h-[17px] w-[17px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] surface-muted transition hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-300"
          >
            <LinkedInIcon className="h-[17px] w-[17px]" />
          </a>
        </div>
      </div>

      <p className="muted container-page mt-8 text-center text-[0.75rem]">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}
