import Link from "next/link";
import { careNoteConfig } from "@/lib/siteConfig";

const footerLinks = [
  { href: "/carenote-cna", label: "Home" },
  { href: "/carenote-cna/features", label: "Features" },
  { href: "/carenote-cna/how-it-works", label: "How It Works" },
  { href: "/carenote-cna/support", label: "Support" },
  { href: "/carenote-cna/download", label: "Download" },
  { href: "/carenote-cna/privacy", label: "Privacy" },
  { href: "/carenote-cna/contact", label: "Contact" },
] as const;

export function CareNoteSiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <h2>CareNote CNA</h2>
          <p className="footer-copy">
            CareNote CNA helps caregivers document shifts faster with clear,
            structured notes that stay editable before save.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            {footerLinks.map((page) => (
              <Link key={page.href} href={page.href}>
                {page.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3>Support</h3>
          <p>
            <a href={`mailto:${careNoteConfig.supportEmail}`}>
              {careNoteConfig.supportEmail}
            </a>
          </p>
          <p className="footer-copy">
            Questions about the app, downloads, or privacy? Send us a message
            and we will help.
          </p>
        </div>
      </div>
      <div className="site-shell footer-meta">
        <span>
          &copy;{" "}
          <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
          {careNoteConfig.siteName}
        </span>
        <span>Available for iPhone.</span>
      </div>
    </footer>
  );
}
