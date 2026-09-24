import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/resume";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Resolved at build time. Vercel supplies VERCEL_PROJECT_PRODUCTION_URL, so the
 * deployed site gets the right absolute URLs for OG images with no manual edit.
 * Set NEXT_PUBLIC_SITE_URL to override (e.g. once a custom domain is attached).
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const description =
  "Portfolio of Palak Saxena — ITIL 4 certified ITSM Lead at Cognizant, specialising in ServiceNow Incident & Change Management, Active Directory, Windows Server and enterprise infrastructure support.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ITSM Lead | ServiceNow | ITIL 4`,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Palak Saxena",
    "ITSM Lead",
    "ServiceNow",
    "ITIL 4",
    "Incident Management",
    "Change Management",
    "Active Directory",
    "Windows Server",
    "Infrastructure Support",
    "Cognizant",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    locale: "en_IN",
    title: `${profile.name} — ITSM Lead | ServiceNow | ITIL 4`,
    description,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: profile.photo, width: 900, height: 1600, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ITSM Lead`,
    description,
    images: [profile.photo],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080b16" },
  ],
};

// Applied before paint so the stored theme never flashes the wrong colours.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch (e) {}
})();
`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: siteUrl,
  image: profile.photo,
  sameAs: [profile.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "Cognizant Technology Solutions" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Technocrats Institute of Technology, Bhopal",
  },
  knowsAbout: [
    "IT Service Management",
    "ServiceNow",
    "ITIL 4",
    "Active Directory",
    "Windows Server",
    "Infrastructure Support",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
