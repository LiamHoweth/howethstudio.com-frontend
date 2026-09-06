import { notFound } from "next/navigation";
import { ElevenwardLanding } from "../ElevenwardLanding";
import { isElevenwardLocale } from "../content";
import { createElevenwardMetadata } from "../metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isElevenwardLocale(locale) ? createElevenwardMetadata(locale) : {};
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isElevenwardLocale(locale)) notFound();
  return <ElevenwardLanding locale={locale} />;
}
