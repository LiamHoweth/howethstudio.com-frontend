import Link from "next/link";
import { HowethStudioBrand } from "@/components/studio/HowethStudioBrand";

export function StudioSiteHeader() {
  return (
    <header className="studio-header">
      <div className="studio-header-inner">
        <HowethStudioBrand />
        <nav className="studio-nav" aria-label="Primary">
          <Link href="/work/">Work</Link>
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact</Link>
          <span className="studio-nav-divider" aria-hidden="true" />
          <Link href="/carenote-cna/">CareNote CNA</Link>
          <Link href="/football-era/">Football Era</Link>
        </nav>
      </div>
    </header>
  );
}
