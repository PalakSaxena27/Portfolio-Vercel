# Palak Saxena — Portfolio

Personal portfolio site for **Palak Saxena**, ITSM Lead at Cognizant (ServiceNow · ITIL 4 · Infrastructure Support).

Built with **Next.js 15** (App Router), **React 19**, **TypeScript** and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
public/
  palak.jpg                  portrait used in the hero
  Palak_Saxena_Resume.pdf    served by the "Download CV" buttons
src/
  app/
    layout.tsx               metadata, fonts, JSON-LD, no-flash theme script
    page.tsx                 section composition
    actions.ts               contact-form server action (email delivery)
    globals.css              design tokens, theme variables, reveal animation
  components/                Navbar, Hero, About, Skills, Experience,
                             Certifications, Education, Contact, Footer
  lib/contact.ts             contact-form types + validation (shared)
  data/resume.ts             all resume content — single source of truth
```

## Contact form

The Contact section has a real form (name, email, subject, message) posting to a
Next.js **server action** in [`src/app/actions.ts`](src/app/actions.ts), with server-side
validation, a honeypot field and per-IP rate limiting (3 messages/minute).

It has two delivery modes:

| `RESEND_API_KEY` | What happens on submit |
| --- | --- |
| **not set** (default) | The message is validated, then handed to the visitor's own email app via a prefilled `mailto:` link. Works with zero setup. |
| **set** | The message is emailed straight to the inbox. The visitor never leaves the page and sees an inline success message. |

### Enabling direct delivery

1. Create a free account at [resend.com](https://resend.com) (3,000 emails/month) and generate an API key.
2. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY`.
3. On Vercel, add the same variables under **Settings → Environment Variables**, then redeploy.

`CONTACT_FROM_EMAIL` defaults to Resend's shared `onboarding@resend.dev` sender, which works
immediately for testing. For production, verify a domain in Resend and use an address on it —
otherwise deliverability will suffer.

Replies go to whatever address the sender typed, so hitting "Reply" in Gmail just works.

## Editing content

Everything shown on the page comes from [`src/data/resume.ts`](src/data/resume.ts) — contact
details, skill groups, roles, certifications, education and achievements. Change it there and
every section updates.

To swap the photo or resume PDF, replace `public/palak.jpg` / `public/Palak_Saxena_Resume.pdf`
(keep the same filenames, or update `profile.photo` / `profile.resumeFile` in `resume.ts`).

## Notes

- **Theming** — light/dark toggle, persisted to `localStorage`, applied before first paint so
  there is no flash of the wrong theme. Falls back to the OS preference.
- **Animation** — sections fade in on scroll via `IntersectionObserver`
  ([`src/components/Reveal.tsx`](src/components/Reveal.tsx)); fully disabled under
  `prefers-reduced-motion`.
- **SEO** — Open Graph and Twitter cards, plus `Person` JSON-LD structured data. Update
  `metadataBase` in `src/app/layout.tsx` once the real domain is known.

## Deploying

Push to a Git host and import the repo on [Vercel](https://vercel.com/new). Every page is
prerendered; the only server-side piece is the contact form action, which Vercel runs as a
serverless function with no configuration.

Add `RESEND_API_KEY` as an environment variable if you want messages delivered to the inbox —
without it the form falls back to `mailto:` and still works.

> A purely static host (GitHub Pages, S3) cannot run the server action, so the contact form
> would not submit there. Use Vercel, Netlify or any Node host.
