"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { careNoteConfig } from "@/lib/siteConfig";

const navPages = [
  { href: "/carenote-cna/", label: "Home" },
  { href: "/carenote-cna/features/", label: "Features" },
  { href: "/carenote-cna/how-it-works/", label: "How It Works" },
  { href: "/carenote-cna/support/", label: "Support" },
] as const;

function stripTrailingSlash(path: string) {
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

function isActive(pathname: string, href: string) {
  const p = stripTrailingSlash(pathname);
  const h = stripTrailingSlash(href);
  if (h === "/carenote-cna") {
    return p === "/carenote-cna";
  }
  return p === h || p.startsWith(`${h}/`);
}

export function CareNoteSiteHeader() {
  const pathname = usePathname() || "";
  const appStoreUrl = careNoteConfig.appStoreUrl;
  const downloadHref = appStoreUrl || "/carenote-cna/download/";
  const ctaClass =
    "button button-primary header-cta" + (appStoreUrl ? "" : " is-disabled");

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <div className="carenote-header-brandrow">
          <Link href="/" className="carenote-backlink">
            ← Howeth Studio
          </Link>
          <Link
            className="brand-lockup"
            href="/carenote-cna/"
            aria-label={`${careNoteConfig.siteName} home`}
          >
            <Image
              src="/carenote-cna/assets/brand.png"
              alt={`${careNoteConfig.siteName} brand mark`}
              className="brand-mark"
              width={52}
              height={52}
              priority
            />
            <span className="brand-copy">
              <strong>{careNoteConfig.siteName}</strong>
              <span>Faster shift notes for CNAs on iPhone</span>
            </span>
          </Link>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {navPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={isActive(pathname, page.href) ? "is-active" : ""}
            >
              {page.label}
            </Link>
          ))}
        </nav>
        <a className={ctaClass} href={downloadHref}>
          Download App
        </a>
      </div>
    </header>
  );
}
