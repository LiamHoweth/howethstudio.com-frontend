import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "@/styles/carenote-marketing.css";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://howethstudio.com"
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Howeth Studio",
    template: "%s | Howeth Studio",
  },
  description:
    "Howeth Studio builds focused iPhone apps including CareNote CNA and Football Era.",
  icons: {
    icon: "/carenote-cna/assets/brand.png",
  },
  openGraph: {
    type: "website",
    siteName: "Howeth Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
