import "@/styles/football-era-marketing.css";
import { FootballHtmlTheme } from "@/components/football-era/FootballHtmlTheme";

export default function FootballEraLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <FootballHtmlTheme>{children}</FootballHtmlTheme>;
}
