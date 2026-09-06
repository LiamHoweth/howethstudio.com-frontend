import Link from "next/link";
import { ElevenwardFooter, ElevenwardNav, LanguageNav } from "./ElevenwardChrome";
import {
  elevenwardCopy,
  elevenwardLanguageTag,
  elevenwardUiCopy,
  type ElevenwardLocale,
} from "./content";

export function ElevenwardLanding({ locale }: { locale: ElevenwardLocale }) {
  const copy = elevenwardCopy[locale];
  const ui = elevenwardUiCopy[locale];
  const privacyRoute = locale === "en" ? "/elevenward/privacy/" : `/elevenward/${locale}/privacy/`;

  return (
    <div className="ew-root" lang={elevenwardLanguageTag(locale)}>
      <a className="ew-skip" href="#ew-main">{ui.skip}</a>
      <ElevenwardNav locale={locale} />
      <main id="ew-main">
        <section className="ew-hero">
          <div className="ew-hero__copy">
            <div className="ew-status" aria-label={`${ui.developmentStatus}. ${ui.platforms}.`}>
              <span><i aria-hidden="true" />{ui.developmentStatus}</span>
              <span>{ui.platforms}</span>
            </div>
            <p className="ew-kicker">{copy.subtitle}</p>
            <h1>{copy.title}</h1>
            <p className="ew-hero__intro">{copy.intro}</p>
            <div className="ew-actions">
              <a href="#career">{copy.primaryAction}<span aria-hidden="true">↓</span></a>
              <a className="ew-action--quiet" href="mailto:howethstudio@gmail.com?subject=Elevenward%20launch">{copy.secondaryAction}</a>
            </div>
            <LanguageNav active={locale} />
          </div>
          <div className="ew-preview-stage">
            <div className="ew-preview-orbit" aria-hidden="true"><span>17</span><span>36</span></div>
            <div className="ew-phone" role="img" aria-label={`${ui.preview.week}. ${ui.preview.prompt}`}>
              <div className="ew-phone__sensor" aria-hidden="true" />
              <div className="ew-phone__top"><strong>Elevenward</strong><span>{ui.preview.week}</span></div>
              <div className="ew-phone__match"><span>{ui.preview.minute}</span><strong>{ui.preview.prompt}</strong></div>
              <div className="ew-phone__choice"><span>{ui.preview.safe}</span><strong>{ui.preview.safeChoice}</strong><em>68–76%</em></div>
              <div className="ew-phone__choice is-active"><span>{ui.preview.balanced}</span><strong>{ui.preview.balancedChoice}</strong><em>55–63%</em></div>
              <div className="ew-phone__choice"><span>{ui.preview.bold}</span><strong>{ui.preview.boldChoice}</strong><em>35–43%</em></div>
              <div className="ew-phone__why">{ui.preview.factors.map((factor) => <span key={factor}>{factor}</span>)}</div>
              <div className="ew-phone__commit">{ui.preview.commit}</div>
            </div>
          </div>
        </section>

        <a className="ew-scroll-prompt" href="#career"><span>{ui.scrollPrompt}</span><i aria-hidden="true">↓</i></a>

        <section className="ew-stats" aria-label="Elevenward at a glance">
          {ui.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </section>

        <section className="ew-career" id="career">
          <div className="ew-section-heading">
            <p className="ew-kicker">{ui.careerEyebrow}</p>
            <h2>{ui.careerTitle}</h2>
          </div>
          <div className="ew-pillars">
            {copy.pillars.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="ew-loop">
          <div className="ew-section-heading ew-section-heading--sticky">
            <p className="ew-kicker">{ui.loopEyebrow}</p>
            <h2>{copy.loopTitle}</h2>
          </div>
          <ol>
            {copy.loop.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>
            ))}
          </ol>
        </section>

        <section className="ew-world" id="world">
          <div className="ew-section-heading">
            <p className="ew-kicker">{ui.worldEyebrow}</p>
            <h2>{copy.worldTitle}</h2>
            <p>{copy.worldBody}</p>
          </div>
          <div className="ew-world__map" aria-hidden="true">
            <div className="ew-world__pitch"><span /></div>
            {["ENG", "ESP", "FRA", "GER", "BRA", "USA"].map((nation, index) => (
              <span className={`ew-world__nation ew-world__nation--${index + 1}`} key={nation}>{nation}<i /></span>
            ))}
          </div>
        </section>

        <section className="ew-promise" id="fair-play">
          <div>
            <p className="ew-kicker">{ui.promiseEyebrow}</p>
            <h2>{copy.promiseTitle}</h2>
            <p>{copy.promiseBody}</p>
            <Link href={privacyRoute}>{ui.privacyAction}<span aria-hidden="true">→</span></Link>
          </div>
          <ul>{ui.fairPoints.map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>
        </section>
      </main>
      <ElevenwardFooter locale={locale} />
    </div>
  );
}
