# SynapseAgriTech — SaaS Marketing Site

Marketing site for the poultry inventory/dispatch/farm-ops **software
product itself** — not the Bagachima gavran chicken consumer brand
(`bagachima-landing/`), a separate project with its own identity. This
site's audience is other poultry/agri businesses evaluating the software
as a purchase.

Plain static HTML/CSS/JS, no build step, no framework — open any `.html`
file directly or serve the folder with any static file server.

## Design direction

Blends four influences rather than picking one:
- **AgriTech Modern** base — warm greens/earth tones, not corporate blue
- **Data-Dashboard-First** hero/feature visuals — styled dashboard
  mockups (browser-chrome and phone-frame), not generic illustrations
- **Trust & Scale** structure — grid-based layout, specific capability
  claims rather than vague marketing language
- **Approachable, jargon-light copy** — written for a farm/outlet owner,
  not a developer, even though the layout is SaaS-grade

## Structure

```
index.html          Home — hero, condensed feature overview, social proof, CTA
features.html        Features — full breakdown, rendered from js/product-data.js
product-tour.html    Product Tour — dashboard mockups + Play Store / demo CTAs
pricing.html          Pricing — tier cards + comparison table, also rendered
                       from js/product-data.js
contact.html          Contact / demo request form (placeholder submission)

css/style.css          Full design system — colors, type, components
js/product-data.js     SHARED data source for Features + Pricing (see below)
js/features.js         Renders features.html from product-data.js
js/pricing.js          Renders pricing.html's cards + comparison table
js/main.js             Nav toggle + active-link marking (all pages)
js/contact.js          Placeholder contact-form submit handler
```

### Shared data source

`js/product-data.js` is the single place tier composition and capability
descriptions live. `features.html` and `pricing.html` both render from
it at load time — edit the data once, both pages stay in sync. Don't
duplicate feature/tier copy directly into either page's HTML.

## Local preview

```bash
python -m http.server 8086 --directory poultry-saas-marketing
```
Or via this repo's `.claude/launch.json` entry (`poultry-saas-marketing`).

## Placeholder content — needs your input before launch

Everything below was deliberately left as a clearly-marked placeholder
rather than guessed at:

- **Domain registration** — brand name is decided: SynapseAgriTech.
  Primary domain is `SynapseAgriTech.com`; confirm it's actually
  registered, and secure the alternates called out in the footer
  (`SynapseAgri.tech`, `SynapseAgriTech.ai`, `SynapseAgriTech.io`) before
  someone else does.
- **Dashboard screenshots** — every visual on Home, Features, and
  Product Tour is a styled HTML/CSS mockup resembling the real dashboards
  (inventory, live shipment map, farm-ops bird count), not an actual
  screenshot. Each one is labeled "Mockup preview" in the UI. Swapping in
  real screenshots (or Flutter web captures) would be the single biggest
  upgrade to this site's credibility.
- **Google Play button** (`product-tour.html`) — `href="#"`, since Play
  Store review isn't done. Swap in the real listing URL once approved.
- **"See It In Action" video CTA** (`product-tour.html`) — disabled/
  styled as coming-soon; wire it up once a walkthrough video exists.
- **Contact email/phone** (`contact.html`) — marked with a visible
  "placeholder" badge; replace with real values.
- **Contact form submission** — `js/contact.js` only shows a fake success
  message; it doesn't send anywhere. Wire it to a real backend endpoint
  or a form service (Formspree, etc.) before launch.
- **Social proof** (`index.html`) — dashed placeholder logo slots, no
  real customer logos or testimonials yet.
- **Stat strip** (`index.html`) — deliberately phrased as capability
  claims ("Unlimited SKUs tracked," "Multi-site by design") rather than
  fabricated customer usage numbers, since no real figures exist yet —
  explicitly noted as illustrative in the UI. Swap for real numbers
  ("Tracks X SKUs across Y locations for Z customers") once you have them.
- **Exact feature/tier copy** — drafted in `js/product-data.js` from what
  the product actually does; worth a pass to match your preferred
  terminology, especially tier names and the exact capability wording.
- **Pricing** — every tier shows "Contact us" per instruction; no numbers
  were guessed at.
