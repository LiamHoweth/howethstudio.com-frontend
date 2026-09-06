import { ElevenwardLanding } from "./ElevenwardLanding";
import { createElevenwardMetadata } from "./metadata";

export const metadata = createElevenwardMetadata("en");

export default function Page() { return <ElevenwardLanding locale="en" />; }
