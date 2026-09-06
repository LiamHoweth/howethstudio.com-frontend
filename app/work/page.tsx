import type { Metadata } from "next";
import Link from "next/link";
import {
  StudioPageIntro,
  StudioSiteFooter,
  StudioWorkSection,
} from "@/components/studio/StudioMarketing";
import { StudioSiteHeader } from "@/components/studio/StudioSiteHeader";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products from Howeth Studio — CareNote CNA, Football Era, and Elevenward, a football career and life RPG for iOS and Android.",
  alternates: {
    canonical: "/work/",
  },
};

export default function WorkPage() {
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
          <span>Work</span>
        </nav>
        <StudioPageIntro
          index="002"
          eyebrow="Selected work"
          title="Shipped software, built to last."
          description="Focused products shaped from first principles: useful on day one, considered at every edge, and structured to keep improving after launch."
        />
        <StudioWorkSection />
        <StudioSiteFooter year={year} />
      </main>
    </div>
  );
}
