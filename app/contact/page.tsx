import type { Metadata } from "next";
import Link from "next/link";
import { StudioSiteHeader } from "@/components/studio/StudioSiteHeader";
import { howethStudioConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Howeth Studio for project inquiries, partnerships, or product support — email and CareNote CNA contact options.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  const year = new Date().getFullYear();

  return (
    <div className="studio-landing">
      <a className="studio-skip" href="#main">
        Skip to main content
      </a>
      <StudioSiteHeader />
      <main id="main" className="studio-landing__main">
        <nav className="studio-subcrumb studio-mono" aria-label="Breadcrumb">
          <Link href="/">Index</Link>
          <span aria-hidden="true"> · </span>
          <span>Contact</span>
        </nav>

        <section className="studio-contact-page" aria-labelledby="contact-heading">
          <h1 id="contact-heading" className="studio-contact-page__title">
            Contact
          </h1>
          <p className="studio-mono studio-contact-page__label">Direct</p>
          <p className="studio-contact-page__line">
            <a className="studio-cta" href={`mailto:${howethStudioConfig.contactEmail}`}>
              {howethStudioConfig.contactEmail}
            </a>
          </p>
          <p className="studio-mono studio-contact-page__label">Product support</p>
          <p className="studio-contact-page__copy">
            For CareNote CNA questions or feedback, you can use the in-product support flow
            or the marketing-site form.
          </p>
          <p className="studio-contact-page__line">
            <Link className="studio-cta studio-cta--quiet" href="/carenote-cna/contact/">
              CareNote CNA contact form
            </Link>
          </p>
        </section>

        <footer className="studio-footer studio-footer--simple">
          <div className="studio-footer__row studio-mono">
            <span>Howeth Studio</span>
            <span className="studio-footer__dot" aria-hidden="true">
              ·
            </span>
            <span>© {year}</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
