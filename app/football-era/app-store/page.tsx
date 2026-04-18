import type { Metadata } from "next";
import Link from "next/link";
import { StudioSiteHeader } from "@/components/studio/StudioSiteHeader";

export const metadata: Metadata = {
  title: "Football Era — App Store Connect copy",
  description:
    "Promotional text, subtitle, description, and keyword ideas for Football Era in App Store Connect, maintained by Howeth Studio.",
  alternates: {
    canonical: "/football-era/app-store/",
  },
};

function CopyBlock({
  label,
  limit,
  children,
}: {
  label: string;
  limit?: string;
  children: string;
}) {
  return (
    <article className="section-card">
      <h2>
        {label}
        {limit ? <span className="fe-copy-limit"> ({limit})</span> : null}
      </h2>
      <pre className="fe-asc-block">{children.trim()}</pre>
      <p className="fe-copy-hint">
        Copy from the box above and paste into the matching field in App Store
        Connect. Adjust for your final build and any Apple character limits that
        change over time.
      </p>
    </article>
  );
}

export default function FootballEraAppStorePage() {
  return (
    <>
      <StudioSiteHeader />
      <main className="page-main">
        <div className="site-shell">
          <section className="hero-panel">
            <span className="eyebrow">App Store Connect</span>
            <h1>Marketing copy for Football Era.</h1>
            <p className="hero-copy">
              Ready-to-paste fields for App Store Connect, aligned with the public
              Football Era marketing page. Edit names, stats, and feature bullets to
              match your shipping build and store guidelines.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/football-era/privacy/">
                Privacy Policy URL
              </Link>
              <Link className="button button-secondary" href="/football-era/support/">
                Support URL
              </Link>
              <Link className="button button-ghost" href="/football-era/">
                Product page
              </Link>
            </div>
          </section>

          <section className="section">
            <CopyBlock label="Name" limit="30 characters">
{`Football Era`}
            </CopyBlock>

            <CopyBlock label="Subtitle" limit="30 characters">
{`Career football sim for iPhone`}
            </CopyBlock>

            <CopyBlock label="Promotional text" limit="170 characters">
{`Build multiple careers in slots, chase OVR growth, and feel every season week—primetime hooks, rival games, and legacy moments in a broadcast-style UI.`}
            </CopyBlock>

            <CopyBlock label="Description" limit="4,000 characters">
{`Football Era is a career-first football game built for iPhone nights—dark chrome, high-contrast cards, and a rhythm that mirrors real season weeks.

CAREER SLOTS
Run up to three separate careers. Each slot keeps its own storyline, team context, and progress so you can experiment with new arcs without overwriting a favorite save.

SEASON BEATS
Move through the calendar with clear week-to-week structure. Track opponents, primetime moments, and momentum between games so every season feels legible at a glance.

PLAYER IDENTITY
See your player, team marks, and overall rating callouts presented like a broadcast lower third—dense information without clutter, tuned for quick check-ins on the phone.

LEGACY AND MILESTONES
Championship moments and career highlights use gold accents and celebration framing so big wins feel earned, not buried in menus.

WHY HOWETH STUDIO
We build focused iPhone apps with opinionated UI. Football Era is designed for fans who want a personal career arc—not a spreadsheet simulator.

Questions or feedback? Use the support link on this site’s Football Era support page.`}
            </CopyBlock>

            <CopyBlock label="Keywords" limit="100 characters (comma-separated, no spaces after commas per Apple guidance)">
{`football,career,sim,season,sports,legacy,iphone,offline,slots,rpg`}
            </CopyBlock>
          </section>

          <section className="section two-column">
            <article className="section-card">
              <h2>What’s New (template)</h2>
              <pre className="fe-asc-block">{`• Season pacing and UI polish.
• Stability fixes and performance improvements.
• Thank you for playing Football Era—send feedback from the support page.`}</pre>
            </article>
            <article className="section-card">
              <h2>Review notes (template)</h2>
              <p>
                In App Store Connect → App Review Information, summarize test
                accounts (if any), regions, and how reviewers should reach a
                representative career state in one paragraph. Mention that gameplay
                is offline-first on device if that matches your build.
              </p>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
