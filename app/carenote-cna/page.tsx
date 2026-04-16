import type { Metadata } from "next";
import Link from "next/link";
import { careNoteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "CareNote CNA | Faster Shift Notes for CNAs",
  description:
    "CareNote CNA helps CNAs document shift notes faster on iPhone with structured charting, optional voice capture, and editable smart note suggestions.",
  alternates: {
    canonical: "/carenote-cna",
  },
};

export default function CareNoteHomePage() {
  const appStoreHref =
    careNoteConfig.appStoreUrl || "/carenote-cna/download";
  const storePrimaryClass =
    "button button-primary" + (careNoteConfig.appStoreUrl ? "" : " is-disabled");

  return (
    <main className="page-main">
      <div className="site-shell">
        <section className="hero-panel">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">CareNote CNA</span>
              <h1>Faster shift notes for busy caregivers.</h1>
              <p className="hero-copy">
                CareNote CNA helps certified nursing assistants capture
                observations, organize resident notes, and finish shift
                documentation faster on iPhone. Every note stays reviewable
                before save, so caregivers stay in control of the final chart.
              </p>
              <div className="hero-actions">
                <a className={storePrimaryClass} href={appStoreHref}>
                  Download on the App Store
                </a>
                <Link className="button button-secondary" href="/carenote-cna/features">
                  See Features
                </Link>
              </div>
              <div className="status-row">
                <div className="status-chip">
                  <strong>Built for CNAs</strong>
                  <span>Made for fast shift documentation</span>
                </div>
                <div className="status-chip">
                  <strong>Voice or typing</strong>
                  <span>Capture observations your way</span>
                </div>
                <div className="status-chip">
                  <strong>Review before save</strong>
                  <span>Every note stays editable</span>
                </div>
                <div className="status-chip">
                  <strong>Resident-focused</strong>
                  <span>Keep shifts organized by person</span>
                </div>
              </div>
            </div>

            <div className="phone-stack" aria-label="App preview mockups">
              <article className="phone-card is-primary">
                <span className="screen-label">Hall Board</span>
                <h3>Residents by hall</h3>
                <div className="screen-block">
                  <div className="screen-row">
                    <strong>Hall A</strong>
                    <span>4 residents</span>
                  </div>
                  <div className="screen-row">
                    <span>Ms. Jordan</span>
                    <span>Night shift</span>
                  </div>
                  <div className="screen-row">
                    <span>Mr. Hayes</span>
                    <span>New note</span>
                  </div>
                  <div className="screen-row">
                    <span>Ms. Perez</span>
                    <span>Saved</span>
                  </div>
                </div>
              </article>

              <article className="phone-card is-secondary">
                <span className="screen-label">Structured Charting</span>
                <h3>Fast field entry</h3>
                <div className="screen-block">
                  <div className="screen-row">
                    <span>Showered today</span>
                    <strong>No</strong>
                  </div>
                  <div className="screen-row">
                    <span>Reason</span>
                    <strong>Refused</strong>
                  </div>
                  <div className="screen-row">
                    <span>Bowel movement</span>
                    <strong>1 medium</strong>
                  </div>
                  <div className="screen-chip-row">
                    <span className="screen-chip">Calm</span>
                    <span className="screen-chip">Cooperative</span>
                    <span className="screen-chip">Night shift</span>
                  </div>
                </div>
              </article>

              <article className="phone-card is-tertiary">
                <span className="screen-label">Review Before Save</span>
                <h3>Note stays editable</h3>
                <div className="screen-block">
                  <p className="lede">
                    Resident calm during the shift. Refused shower after
                    education. One medium bowel movement documented.
                  </p>
                  <div className="screen-row">
                    <span>AI extraction</span>
                    <strong>Suggested</strong>
                  </div>
                  <div className="screen-row">
                    <span>Final save</span>
                    <strong>Manual review</strong>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section story-grid">
          <article className="section-card">
            <h2>Why caregivers choose CareNote CNA</h2>
            <p>
              Shift documentation gets harder when notes are scattered, repeated
              tasks take too many taps, or the final summary has to be rewritten
              from scratch. CareNote CNA is designed to help caregivers move
              faster while keeping notes clear and consistent.
            </p>
            <ul className="check-list">
              <li>
                Capture routine care details in structured sections instead of
                scattered free text.
              </li>
              <li>
                Use quick picks for common actions instead of repeating the same
                phrases every shift.
              </li>
              <li>Review and edit everything before the report is saved.</li>
            </ul>
          </article>

          <aside className="section-aside">
            <h2>Made for the pace of real shifts</h2>
            <p>
              CareNote CNA keeps documentation practical. Structured charting
              comes first, optional smart suggestions help with speed, and the
              caregiver makes the final decision on every saved note.
            </p>
            <div className="pill-row">
              <div className="pill">
                <strong>Clear</strong>
                <span>Structured notes stay organized</span>
              </div>
              <div className="pill">
                <strong>Flexible</strong>
                <span>Type or use optional voice capture</span>
              </div>
              <div className="pill">
                <strong>Private by design</strong>
                <span>You review before saving</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section section-card">
          <h2>Feature highlights</h2>
          <p className="lede">
            Everything on CareNote CNA is designed to help caregivers document
            faster without losing clarity.
          </p>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">01</div>
              <h3>Hall-based resident selection</h3>
              <p>
                Organize residents by halls A through D so CNAs can move between
                rooms and charting tasks with less friction.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">02</div>
              <h3>Quick structured charting</h3>
              <p>
                Use one-tap bowel counters, refusal quick picks, and behavior
                chips to reduce repetitive entry during a shift.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">03</div>
              <h3>Optional dictation</h3>
              <p>
                Capture observations with voice after leaving the room, then
                review the transcript before using it.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">04</div>
              <h3>Smart note assistance</h3>
              <p>
                Turn captured observations into organized suggestions faster,
                while keeping every field and final note editable.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">05</div>
              <h3>Simple review flow</h3>
              <p>
                Check the finished note, adjust anything you need, and save with
                confidence before the shift ends.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">06</div>
              <h3>Shift-ready organization</h3>
              <p>
                Keep resident details, observations, and saved reports easier to
                follow throughout the day or night shift.
              </p>
            </article>
          </div>
        </section>

        <section className="section section-card">
          <h2>The workflow in four moves</h2>
          <div className="workflow-grid">
            <article className="workflow-step">
              <span>1</span>
              <h3>Select the resident</h3>
              <p>
                Choose the resident from the hall board and open a new report for
                the current shift.
              </p>
            </article>
            <article className="workflow-step">
              <span>2</span>
              <h3>Capture observations</h3>
              <p>
                Type directly or dictate observations once you are outside the
                room and ready to document.
              </p>
            </article>
            <article className="workflow-step">
              <span>3</span>
              <h3>Review smart suggestions</h3>
              <p>
                Use optional note assistance to speed up charting while keeping
                every field editable.
              </p>
            </article>
            <article className="workflow-step">
              <span>4</span>
              <h3>Save locally</h3>
              <p>
                Review the final note, edit anything needed, then save the
                finished report on-device.
              </p>
            </article>
          </div>
        </section>

        <section className="section two-column">
          <article className="quote-card">
            <strong>Private by design</strong>
            <p>
              CareNote CNA is built to help caregivers move faster without losing
              review control. Notes stay editable before save, and the workflow
              is designed around clear documentation.
            </p>
          </article>
          <article className="section-card">
            <h2>Ready for your next shift</h2>
            <p>
              CareNote CNA is available for iPhone and built to keep shift notes
              cleaner, faster, and easier to review. Download the app to get
              started, or visit Support and Privacy for more details.
            </p>
            <div className="hero-actions">
              <a className={storePrimaryClass} href={appStoreHref}>
                Download App
              </a>
              <Link className="button button-ghost" href="/carenote-cna/support">
                Support
              </Link>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
