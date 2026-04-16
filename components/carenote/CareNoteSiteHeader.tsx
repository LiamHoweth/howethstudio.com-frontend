"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { careNoteConfig } from "@/lib/siteConfig";

const navPages = [
  { href: "/carenote-cna", label: "Home" },
  { href: "/carenote-cna/features", label: "Features" },
  { href: "/carenote-cna/how-it-works", label: "How It Works" },
  { href: "/carenote-cna/support", label: "Support" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/carenote-cna") {
    return pathname === "/carenote-cna";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function CareNoteSiteHeader() {
  const pathname = usePathname() || "";
  const appStoreUrl = careNoteConfig.appStoreUrl;
  const downloadHref = appStoreUrl || "/carenote-cna/download";
  const ctaClass =
    "button button-primary header-cta" + (appStoreUrl ? "" : " is-disabled");

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            minWidth: 0,
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 800,
              fontSize: "0.88rem",
              color: "var(--ink-soft)",
              flex: "0 0 auto",
            }}
          >
            ← Howeth Studio
          </Link>
          <Link
            className="brand-lockup"
            href="/carenote-cna"
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
