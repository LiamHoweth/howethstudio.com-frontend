import { ElevenwardInfoPage } from "../ElevenwardInfoPage";
import { createElevenwardMetadata } from "../metadata";
export const metadata = createElevenwardMetadata("en", "account-deletion");
export default function Page() { return <ElevenwardInfoPage locale="en" kind="account-deletion" />; }
