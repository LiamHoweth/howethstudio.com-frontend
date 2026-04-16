import { CareNoteSiteFooter } from "@/components/carenote/CareNoteSiteFooter";
import { CareNoteSiteHeader } from "@/components/carenote/CareNoteSiteHeader";

export default function CareNoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CareNoteSiteHeader />
      {children}
      <CareNoteSiteFooter />
    </>
  );
}
