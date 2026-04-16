"use client";

import { useEffect } from "react";

export function FootballHtmlTheme({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    document.documentElement.classList.add("fe-active");
    return () => document.documentElement.classList.remove("fe-active");
  }, []);

  return <div className="fe-page-root">{children}</div>;
}
