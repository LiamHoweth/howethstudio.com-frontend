import type { Metadata } from "next";
import Link from "next/link";
import { StudioAboutSection } from "@/components/studio/StudioMarketing";
import { StudioSiteHeader } from "@/components/studio/StudioSiteHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Howeth Studio builds software: small-team accountability, product-led engineering, and mobile-first delivery with serious attention to data and APIs.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
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
          <span>About</span>
        </nav>
        <StudioAboutSection />
      </main>
    </div>
  );
}
