# howethstudio.com

Marketing site for Howeth Studio apps, built with Next.js and exported as static HTML for hosting on Render.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Static files are written to `out/`. Render should publish that directory (see `render.yaml`).

## Environment variables (optional)

Set these in the Render dashboard (or `.env.local` for local builds):

- `NEXT_PUBLIC_SITE_URL` — canonical site origin, for example `https://howethstudio.com`
- `NEXT_PUBLIC_CARENOTE_APP_STORE_URL` — App Store URL for CareNote CNA
- `NEXT_PUBLIC_CARENOTE_TESTFLIGHT_URL` — optional TestFlight URL
- `NEXT_PUBLIC_CARENOTE_SUPPORT_EMAIL` — support inbox shown on CareNote pages
- `NEXT_PUBLIC_CARENOTE_SUPPORT_FORM_ENDPOINT` — optional JSON endpoint for the contact form; if empty, the form falls back to `mailto:`
- `NEXT_PUBLIC_FOOTBALL_ERA_APP_STORE_URL` — App Store URL for Football Era when available
- `NEXT_PUBLIC_FOOTBALL_ERA_TESTFLIGHT_URL` — optional TestFlight URL for Football Era

## Render

1. Create a new **Static Site** and connect this repository.
2. Use build command `npm install && npm run build` and publish directory `out`, or connect the repo and let Render read `render.yaml`.
3. Attach the custom domain `howethstudio.com` in the Render dashboard and complete DNS verification.

## API repository

Optional contact-form and health API: [github.com/LiamHoweth/howethstudio.com-backend](https://github.com/LiamHoweth/howethstudio.com-backend). When deployed, point `NEXT_PUBLIC_CARENOTE_SUPPORT_FORM_ENDPOINT` at `https://<your-api-host>/api/contact`.

## DNS for howethstudio.com

At your DNS provider, add the records Render shows when you attach the domain (commonly a **CNAME** from `www` to the Render hostname, and either an **ALIAS/ANAME** apex record or Render’s documented apex setup depending on your provider). Prefer a single canonical hostname (apex or `www`) and redirect the other in Render so search engines see one primary URL.
