import type { Metadata } from "next";
import { ElevenwardAdmin } from "./ElevenwardAdmin";

export const metadata: Metadata = {
  title: "Elevenward Content Operations",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ElevenwardAdmin />;
}
