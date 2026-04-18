import "@/styles/carenote-product-chrome.css";
import { CareNoteSiteFooter } from "@/components/carenote/CareNoteSiteFooter";
import { CareNoteSiteHeader } from "@/components/carenote/CareNoteSiteHeader";

export default function CareNoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="carenote-product">
      <CareNoteSiteHeader />
      {children}
      <CareNoteSiteFooter />
    </div>
  );
}
