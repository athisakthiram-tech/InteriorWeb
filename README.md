# Interiors business website

Next.js (App Router) + TypeScript + Tailwind CSS. Static, no backend.

## Editing content

Everything the client will want to change is in **`src/data/site.ts`**:

- `site` — business name, owner, phone, WhatsApp number, email, address, stats
- `images` — every photo URL in one place (Unsplash placeholders for now)
- `services`, `projects`, `processSteps`, `reasons`, `testimonials`, `about`

To use real project photos, put them in `public/projects/` and change the URL in
`images` to e.g. `"/projects/whitefield-living.jpg"`.

`phoneDigits` must be digits only with the country code (e.g. `919845012345`);
it powers the WhatsApp button, the enquiry form and the call links.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## Deploy to Vercel

```bash
npx vercel login        # first time only
npx vercel              # preview deployment, accept the defaults
npx vercel --prod       # production URL
```

Sitemap, robots.txt and social previews pick up the Vercel production URL
automatically. With a custom domain, set `NEXT_PUBLIC_SITE_URL` in the
Vercel project settings (e.g. `https://www.example.in`).

## Fonts

Cormorant Garamond and Manrope are self-hosted from `src/fonts/` (no Google
Fonts request at runtime).
