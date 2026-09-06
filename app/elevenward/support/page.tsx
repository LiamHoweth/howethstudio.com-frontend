import { ElevenwardInfoPage } from "../ElevenwardInfoPage";
import { createElevenwardMetadata } from "../metadata";
export const metadata = createElevenwardMetadata("en", "support");
export default function Page() { return <ElevenwardInfoPage locale="en" kind="support" />; }
