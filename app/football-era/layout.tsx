import "@/styles/football-era-marketing.css";

export default function FootballEraLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="fe-page-root">{children}</div>;
}
