import type { Metadata } from "next";
import Link from "next/link";
import { StudioSiteHeader } from "@/components/studio/StudioSiteHeader";

export const metadata: Metadata = {
  title: "Howeth Studio",
  description:
    "Independent iPhone apps from Howeth Studio, including CareNote CNA and Football Era.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="hub-skin">
      <StudioSiteHeader />
      <main className="hub-main">
        <section className="hub-hero">
          <span className="eyebrow hub-eyebrow">Howeth Studio</span>
          <h1>Focused apps for real workflows.</h1>
          <p>
            Howeth Studio ships practical iPhone software. The hub borrows CareNote
            CNA’s airy marketing rhythm and Football Era’s broadcast depth—shared
            typography and shells, with each app tile carrying its own palette.
          </p>
        </section>

        <section className="app-showcase" aria-label="Apps">
          <article className="app-tile app-tile--carenote">
            <span className="eyebrow">Caregiving</span>
            <h2>CareNote CNA</h2>
            <p>
              Faster shift notes for CNAs on iPhone with structured charting,
              optional voice capture, and review before save.
            </p>
            <ul className="hub-mini-list">
              <li>Structured charting first</li>
              <li>Optional voice capture</li>
              <li>Review before save</li>
            </ul>
            <div className="app-tile-actions">
              <Link className="button button-primary" href="/carenote-cna">
                View app site
              </Link>
              <Link className="button button-secondary" href="/carenote-cna/download">
                Download
              </Link>
            </div>
          </article>

          <article className="app-tile app-tile--football">
            <span className="eyebrow fe-eyebrow-hub">Football Era</span>
            <h2>Career sim on your phone</h2>
            <p>
              Become the greatest football player ever—career slots, season weeks,
              and broadcast-style beats inspired by the in-game welcome and tab
              rhythm.
            </p>
            <div className="hub-fe-strip" aria-hidden="true">
              <div className="hub-fe-strip__cell">
                <span className="hub-fe-strip__label">Slots</span>
                <span className="hub-fe-strip__value">3</span>
              </div>
              <div className="hub-fe-strip__cell">
                <span className="hub-fe-strip__label">Tone</span>
                <span className="hub-fe-strip__value">Dark</span>
              </div>
              <div className="hub-fe-strip__cell">
                <span className="hub-fe-strip__label">Accent</span>
                <span className="hub-fe-strip__value">Turf</span>
              </div>
            </div>
            <div className="app-tile-actions">
              <Link className="button hub-fe-primary" href="/football-era">
                View app page
              </Link>
              <Link className="button hub-fe-secondary" href="/football-era">
                Features
              </Link>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
