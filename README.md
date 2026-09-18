# Glow N Go Beauty by Christina

Marketing website for Christina's botox practice in Los Alamitos, CA.
Built with Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Pages

| Route         | Page                                              |
| ------------- | ------------------------------------------------- |
| `/`           | Home — hero, trust strip, treatments preview, pricing highlight, about teaser, testimonials, location |
| `/treatments` | Full menu of all 10 botox treatments              |
| `/pricing`    | $10/unit pricing story, example totals, deposits  |
| `/booking`    | Calendly booking button + inline embed             |
| `/about`      | Christina's story (placeholder copy)              |
| `/contact`    | Address, hours, map, contact form (front-end only)|

## Updating site details

**Everything lives in `src/config/site.ts`.** Business name, phone,
address, hours, Instagram URL, disclaimers, and the Calendly link are
all defined there — no page hardcodes them. Change the value once and
it updates site-wide.

### Replace the Calendly link

The current value is a **placeholder** (`https://calendly.com/glowngobeautybychristina/consultation`).
Once Christina's real Calendly event is created:

1. Open `src/config/site.ts`
2. Set `calendlyUrl` to the real event URL
3. Rebuild / redeploy — every "Book" button and the booking-page embed update automatically

### Add Christina's real photo

The site uses `<PhotoPlaceholder>` (an elegant monogram panel) wherever
her portrait goes. To swap in a real photo:

1. Save the portrait as `public/christina.jpg` (portrait orientation works best)
2. Replace each `<PhotoPlaceholder ... />` in `src/app/page.tsx` (hero + about teaser) and `src/app/about/page.tsx` with a `next/image` component pointing at `/christina.jpg`

### Wire up the contact form

The form on `/contact` is front-end only for now. Pick a backend
(Formspree, Resend, etc.), wire it up in
`src/components/ContactForm.tsx`, and set the destination address as
`contactEmail` in `src/config/site.ts`.

### Add real testimonials

Replace the `testimonials` array in `src/app/page.tsx` with real client
quotes after launch.

## Design notes

- Warm neutrals (cream / sand / charcoal) with a muted-gold accent
- Solid colors only — no gradients
- No emojis in the UI; icons via `lucide-react`
- Serif display font (Cormorant Garamond) + Inter body via `next/font`
