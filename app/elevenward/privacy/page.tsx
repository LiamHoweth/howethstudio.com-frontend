import { ElevenwardInfoPage } from "../ElevenwardInfoPage";
import { createElevenwardMetadata } from "../metadata";
export const metadata = createElevenwardMetadata("en", "privacy");
export default function Page() { return <ElevenwardInfoPage locale="en" kind="privacy" />; }
