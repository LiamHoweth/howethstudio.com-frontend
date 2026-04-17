function cleanUrl(value: string | undefined): string {
  return typeof value === "string" && value.trim() ? value.trim() : "";
}

export const siteUrl =
  cleanUrl(process.env.NEXT_PUBLIC_SITE_URL) || "https://howethstudio.com";

export const careNoteConfig = {
  siteName: "CareNote CNA",
  supportEmail:
    cleanUrl(process.env.NEXT_PUBLIC_CARENOTE_SUPPORT_EMAIL) ||
    "carenotecna@gmail.com",
  supportFormEndpoint: cleanUrl(
    process.env.NEXT_PUBLIC_CARENOTE_SUPPORT_FORM_ENDPOINT
  ),
  appStoreUrl:
    cleanUrl(process.env.NEXT_PUBLIC_CARENOTE_APP_STORE_URL) ||
    "https://apps.apple.com/us/app/carenotecna/id6760431742",
  testFlightUrl: cleanUrl(process.env.NEXT_PUBLIC_CARENOTE_TESTFLIGHT_URL),
};

export const footballEraConfig = {
  siteName: "Football Era",
  supportEmail:
    cleanUrl(process.env.NEXT_PUBLIC_FOOTBALL_ERA_SUPPORT_EMAIL) ||
    cleanUrl(process.env.NEXT_PUBLIC_CARENOTE_SUPPORT_EMAIL) ||
    "carenotecna@gmail.com",
  appStoreUrl: cleanUrl(process.env.NEXT_PUBLIC_FOOTBALL_ERA_APP_STORE_URL),
  testFlightUrl: cleanUrl(process.env.NEXT_PUBLIC_FOOTBALL_ERA_TESTFLIGHT_URL),
};
