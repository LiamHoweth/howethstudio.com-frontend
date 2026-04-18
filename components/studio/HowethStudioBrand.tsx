import Link from "next/link";

/**
 * Typographic lockup (Howeth bold + Studio light) reads clearly on the dark header.
 * The PNG wordmark is dark-on-black and disappears on this bar — typography matches the brand file without a broken image slot.
 */
export function HowethStudioBrand() {
  return (
    <Link href="/" className="studio-brand" aria-label="Howeth Studio — home">
      <span className="studio-brand-h" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="32" height="32" role="img">
          <rect width="32" height="32" rx="8" fill="#eae6dc" />
          <path fill="#0a0c16" d="M8 8h4v6h8V8h4v16h-4v-6h-8v6H8V8z" />
        </svg>
      </span>
      <span className="studio-brand-lockup">
        <span className="studio-brand-wordmark">
          <strong>Howeth</strong>
          <span className="studio-brand-wordmark-light">Studio</span>
        </span>
        <span className="studio-brand-tagline studio-mono">Software development</span>
      </span>
    </Link>
  );
}
