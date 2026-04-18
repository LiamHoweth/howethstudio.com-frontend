import Link from "next/link";
import { StudioSiteHeader } from "@/components/studio/StudioSiteHeader";

export default function NotFound() {
  return (
    <div className="studio-landing">
      <a className="studio-skip" href="#main">
        Skip to main content
      </a>
      <StudioSiteHeader />
      <main id="main" className="studio-landing__main studio-not-found">
        <p className="studio-mono studio-not-found__index" aria-hidden="true">
          404
        </p>
        <h1 className="studio-not-found__title">Page not found</h1>
        <p className="studio-not-found__copy">
          That URL does not match a published route on this static site. Check the path, or
          return to the studio index.
        </p>
        <div className="studio-not-found__actions">
          <Link className="studio-cta" href="/">
            Back to index
          </Link>
          <Link className="studio-cta studio-cta--quiet" href="/work/">
            Work
          </Link>
          <Link className="studio-cta studio-cta--quiet" href="/contact/">
            Contact
          </Link>
        </div>
      </main>
    </div>
  );
}
