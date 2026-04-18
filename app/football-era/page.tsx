import type { Metadata } from "next";
import Link from "next/link";
import { StudioSiteHeader } from "@/components/studio/StudioSiteHeader";
import { footballEraConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Football Era",
  description:
    "Football Era by Howeth Studio — become the greatest football player ever. Career slots, seasons, and legacy on iPhone.",
  alternates: {
    canonical: "/football-era/",
  },
};

export default function FootballEraPage() {
  const appStoreUrl = footballEraConfig.appStoreUrl;
  const testFlightUrl = footballEraConfig.testFlightUrl;
  const storeClass =
    "button button-primary" + (appStoreUrl ? "" : " is-disabled");
  const tfClass =
    "button button-secondary" + (testFlightUrl ? "" : " is-disabled");
  const storeHref = appStoreUrl || "#";
  const tfHref = testFlightUrl || "#";

  return (
    <>
      <StudioSiteHeader />
      <main className="page-main">
        <div className="site-shell">
          <section className="hero-panel">
            <div className="hero-grid">
              <div>
                <span className="eyebrow">Football Era</span>
                <h1>Become the greatest football player ever.</h1>
                <p className="hero-copy">
                  Build a career one season at a time on iPhone. Spin up career
                  slots, chase overall growth, and live the rhythm of game weeks,
                  press moments, and long-term legacy—the same structure you feel
                  inside the app, translated for the web.
                </p>
                <div className="hero-actions">
                  <a className={storeClass} href={storeHref}>
                    Download on the App Store
                  </a>
                  <a className={tfClass} href={tfHref}>
                    Join TestFlight
                  </a>
                  <Link className="button button-ghost" href="/">
                    All apps
                  </Link>
                </div>

                <div className="fe-stat-strip" aria-hidden="true">
                  <div className="fe-stat-cell">
                    <span className="fe-stat-label">Career slots</span>
                    <span className="fe-stat-value">Up to 3</span>
                  </div>
                  <div className="fe-stat-cell">
                    <span className="fe-stat-label">Built for</span>
                    <span className="fe-stat-value">iPhone</span>
                  </div>
                  <div className="fe-stat-cell">
                    <span className="fe-stat-label">Pace</span>
                    <span className="fe-stat-value">Seasons</span>
                  </div>
                  <div className="fe-stat-cell">
                    <span className="fe-stat-label">Moments</span>
                    <span className="fe-stat-value">Broadcast</span>
                  </div>
                </div>
              </div>

              <div className="phone-stack" aria-label="Product preview mockups">
                <article className="phone-card is-primary">
                  <span className="screen-label">Career Hub</span>
                  <h3>Welcome back</h3>
                  <div className="screen-block">
                    <div className="screen-row">
                      <strong>Active slot</strong>{" "}
                      <span>Slot 1</span>
                    </div>
                    <div className="screen-row">
                      <span>Player</span>
                      <span>Jordan Hale</span>
                    </div>
                    <div className="screen-row">
                      <span>OVR</span>
                      <strong>84</strong>
                    </div>
                    <div className="screen-chip-row">
                      <span className="screen-chip">Home</span>
                      <span className="screen-chip">Career</span>
                      <span className="screen-chip">Shop</span>
                    </div>
                  </div>
                </article>

                <article className="phone-card is-secondary">
                  <span className="screen-label">Season</span>
                  <h3>Week 12</h3>
                  <div className="screen-block">
                    <div className="screen-row">
                      <span>Opponent</span>
                      <strong>RIVAL</strong>
                    </div>
                    <div className="screen-row">
                      <span>Primetime</span>
                      <span>Sun 8:20</span>
                    </div>
                    <div className="screen-row">
                      <span>Streak</span>
                      <span>W3</span>
                    </div>
                  </div>
                </article>

                <article className="phone-card is-tertiary">
                  <span className="screen-label">Legacy</span>
                  <h3>Championship arc</h3>
                  <div className="screen-block">
                    <p className="lede">
                      Rings, MVPs, and career milestones stay readable at a glance,
                      with gold accents for title moments—mirroring the in-game
                      celebration frames.
                    </p>
                    <div className="screen-row">
                      <span>Focus</span>
                      <strong>Your story</strong>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="section story-grid">
            <article className="section-card">
              <h2>Why the app feels different</h2>
              <p>
                Football Era is organized around career slots, clear season beats,
                and cards that read like a broadcast lower third—dense information
                without clutter, tuned for thumbs on a phone.
              </p>
              <ul className="check-list">
                <li>Pick up where you left off with slot-based saves.</li>
                <li>Navigate home, career, and shop from a docked tab rhythm.</li>
                <li>Spot stats quickly with strip layouts inspired by the sideline.</li>
              </ul>
            </article>
            <aside className="section-card">
              <h2>Broadcast polish</h2>
              <p>
                Championship moments borrow a gold frame and beam accent from the
                app’s theme system—small touches that make big wins feel earned.
              </p>
              <div className="fe-broadcast-bar">
                Lower-third style callouts in the product echo how the game
                surfaces breaking news, milestones, and post-game headlines.
              </div>
            </aside>
          </section>

          <section className="section section-card">
            <h2>Core pillars</h2>
            <p className="lede">
              The same pillars that shape the mobile UI—cards, chips, turf-forward
              actions—show up here as marketing scaffolding you can extend with
              screenshots and store copy.
            </p>
            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-icon">01</div>
                <h3>Career slots</h3>
                <p>
                  Multiple careers, each with its own arc—just like the welcome
                  screen’s slot cards in the app.
                </p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">02</div>
                <h3>Season simulation</h3>
                <p>
                  Week-to-week structure, primetime hooks, and momentum you can feel
                  between games.
                </p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">03</div>
                <h3>Player identity</h3>
                <p>
                  Avatars, team marks, and OVR callouts keep every career legible at
                  a glance.
                </p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">04</div>
                <h3>Turf-first actions</h3>
                <p>
                  Primary actions ride the same green gradient as the app’s primary
                  buttons for muscle-memory consistency.
                </p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">05</div>
                <h3>Slate secondary controls</h3>
                <p>
                  Secondary buttons use the slate treatment from the design system
                  so choices stay calm beside bold primaries.
                </p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">06</div>
                <h3>Gold title beats</h3>
                <p>
                  Championship accents echo the app’s gold frame for marquee
                  moments—ready for trailers and feature spotlights.
                </p>
              </article>
            </div>
          </section>

          <section className="section section-card">
            <h2>Career slots preview</h2>
            <p className="lede">
              The welcome experience in Football Era centers on slots—empty or
              occupied—mirrored here as static cards for the marketing page.
            </p>
            <div className="fe-slot-row">
              <article className="fe-slot-card">
                <div className="fe-slot-preview">
                  <div className="fe-slot-avatar" aria-hidden="true" />
                  <div>
                    <h3>Jordan Hale</h3>
                    <div className="fe-slot-meta">OVR 84 • ATL</div>
                  </div>
                </div>
                <p className="hero-copy fe-slot-blurb">
                  Continue a saved arc, jump back into the season, and keep progress
                  isolated per slot—same mental model as the app.
                </p>
              </article>
              <article className="fe-slot-card">
                <h3>Empty slot</h3>
                <p className="hero-copy fe-slot-blurb">
                  Start a fresh storyline with onboarding tuned for quick team picks
                  and first-game momentum.
                </p>
                <span className="fe-slot-meta">New Career →</span>
              </article>
            </div>
          </section>

          <section className="section two-column">
            <article className="quote-card">
              <strong>Built for iPhone nights</strong>
              <p>
                Dark chrome, high-contrast cards, and turf-lit CTAs are tuned for
                late kickoffs and quick check-ins between real-world commitments.
              </p>
            </article>
            <article className="section-card">
              <h2>Ship-ready when you are</h2>
              <p>
                Wire App Store and TestFlight URLs with environment variables on
                Render; add screenshots under public/football-era when you have
                final captures from the build you want to promote.
              </p>
              <div className="hero-actions">
                <a className={storeClass} href={storeHref}>
                  View on the App Store
                </a>
                <Link className="button button-ghost" href="/carenote-cna/">
                  See CareNote CNA
                </Link>
              </div>
              <p className="hero-copy fe-footnote-links">
                <Link href="/football-era/privacy/">Privacy</Link>
                <span aria-hidden="true"> · </span>
                <Link href="/football-era/support/">Support</Link>
                <span aria-hidden="true"> · </span>
                <Link href="/football-era/app-store/">App Store copy</Link>
              </p>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
