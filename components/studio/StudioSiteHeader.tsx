import Link from "next/link";

export function StudioSiteHeader() {
  return (
    <header className="studio-header">
      <div className="studio-header-inner">
        <Link href="/" className="studio-brand">
          <strong>Howeth Studio</strong>
          <span>iPhone apps</span>
        </Link>
        <nav className="studio-nav" aria-label="Studio">
          <Link href="/">Apps</Link>
          <Link href="/carenote-cna">CareNote CNA</Link>
          <Link href="/football-era">Football Era</Link>
        </nav>
      </div>
    </header>
  );
}
