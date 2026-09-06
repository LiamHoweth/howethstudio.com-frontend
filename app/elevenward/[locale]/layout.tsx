import { notFound } from "next/navigation";
import {
  elevenwardLanguageTag,
  elevenwardLocales,
  isElevenwardLocale,
} from "../content";

export function generateStaticParams() {
  return elevenwardLocales
    .filter((locale) => locale !== "en")
    .map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isElevenwardLocale(locale) || locale === "en") notFound();
  return <div lang={elevenwardLanguageTag(locale)}>{children}</div>;
}
