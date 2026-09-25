/**
 * Single shared data source for feature/tier content, consumed by both
 * features.html and pricing.html so the two stay in sync — edit here,
 * not in the page markup.
 *
 * PLACEHOLDER CONTENT — flagged for confirmation:
 *   - Exact capability names/wording are drafted from what the product
 *     actually does; worth a pass to match your preferred terminology.
 *   - Pricing is intentionally "Contact us" everywhere (not finalized).
 */
const PRODUCT_DATA = {
  // Capabilities are the atomic units both the pricing comparison table
  // and each tier's bullet list are built from. `tiers` lists which
  // tiers include it — introduced once, then carried into every tier above it.
  capabilities: [
    { id: "inventory", group: "Inventory", name: "Inventory management", tiers: ["starter", "growth", "enterprise"] },
    { id: "barcode", group: "Inventory", name: "Barcode scanning on receiving", tiers: ["starter", "growth", "enterprise"] },
    { id: "batch-expiry", group: "Inventory", name: "Manual batch & expiry tracking", tiers: ["starter", "growth", "enterprise"] },
    { id: "notifications", group: "Inventory", name: "Basic notifications", tiers: ["starter", "growth", "enterprise"] },
    { id: "multi-location", group: "Operations", name: "Multi-location tracking", tiers: ["growth", "enterprise"] },
    { id: "billing", group: "Operations", name: "Outlet billing & invoicing", tiers: ["growth", "enterprise"] },
    { id: "shipment", group: "Operations", name: "Shipment tracking (own-fleet, live location)", tiers: ["growth", "enterprise"] },
    { id: "farm-ops", group: "Farm", name: "Farm operations (batching, egg collection)", tiers: ["enterprise"] },
    { id: "bird-count", group: "Farm", name: "Live bird counting via IoT", tiers: ["enterprise"] },
    { id: "iot-devices", group: "Farm", name: "IoT device integration & management", tiers: ["enterprise"] },
    { id: "priority-support", group: "Support", name: "Priority support", tiers: ["enterprise"] },
  ],

  tiers: [
    {
      id: "starter",
      name: "Starter",
      for: "Single-location operations",
      price: "Contact us",
      priceNote: "Pricing tailored to your setup",
      featured: false,
      cta: "Talk to us",
    },
    {
      id: "growth",
      name: "Growth",
      for: "Multi-location & outlet networks",
      price: "Contact us",
      priceNote: "Pricing tailored to your setup",
      featured: true,
      badge: "Most popular",
      cta: "Talk to us",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      for: "Full farm-to-outlet operations",
      price: "Contact us",
      priceNote: "Custom pricing & onboarding",
      featured: false,
      cta: "Talk to us",
    },
  ],

  // Longer-form content for the Features page — one section per area.
  featureAreas: [
    {
      id: "inventory-receiving",
      icon: "📦",
      name: "Inventory & Receiving",
      summary: "Scan stock in the moment it arrives, not at end of day.",
      description:
        "Receive feed, eggs, and birds with a barcode scan straight from the delivery dock. Every batch carries its own expiry date and quantity, so nothing sits on a shelf past its date without someone knowing.",
      bullets: [
        "Barcode scan → form → submit receiving flow",
        "Feed, eggs, and birds tracked as distinct stock categories",
        "Per-batch expiry dates with an at-a-glance expiring-soon view",
        "Manual entry fallback for anything that won't scan",
      ],
    },
    {
      id: "multi-location",
      icon: "🗺️",
      name: "Multi-Location Tracking",
      summary: "One inventory picture across every warehouse and shed.",
      description:
        "Stock is tagged by location from the moment it's received, so you can see what's on hand at each site without calling around or reconciling spreadsheets.",
      bullets: [
        "Location-tagged stock across every warehouse or site",
        "Filter available stock by location for dispatch planning",
        "Same data model scales from one site to many",
      ],
    },
    {
      id: "outlet-billing",
      icon: "🧾",
      name: "Outlet & Billing",
      summary: "Invoices that create themselves when a dispatch goes out.",
      description:
        "The moment stock is dispatched to an outlet, a draft invoice is generated automatically. Your team reviews, sends, and marks it paid — no manual line-item entry.",
      bullets: [
        "Draft invoices auto-created from dispatch records",
        "Send gated on the dispatch actually being picked up",
        "Outlet-by-outlet billing summary with outstanding balances",
      ],
    },
    {
      id: "shipment-tracking",
      icon: "🚚",
      name: "Shipment Tracking",
      summary: "Know where your own fleet is, live.",
      description:
        "Track delivery vehicles with either the driver's phone or a dedicated GPS unit — your choice per vehicle. Office staff see a live map; drivers get a simple in-transit / delivered flow.",
      bullets: [
        "Live location map for every vehicle on the road",
        "Works with app-based GPS or a dedicated in-vehicle tracker",
        "Simple driver flow: mark in-transit, then delivered",
      ],
    },
    {
      id: "farm-operations",
      icon: "🐔",
      name: "Farm Operations",
      summary: "From flock to first egg, tracked automatically.",
      description:
        "Log flocks by breed and hatch date, track live bird counts, and record egg collection by grade — with IoT sensors feeding counts in automatically where you have them installed.",
      bullets: [
        "Flock batching with live current-count tracking",
        "Egg collection logged by grade, with manual fallback",
        "IoT egg-counter and gate-counter sensors feed data in automatically",
        "Works over MQTT or a plain HTTP webhook — whichever your sensors speak",
      ],
    },
    {
      id: "notifications",
      icon: "🔔",
      name: "Notifications",
      summary: "The right person hears about it the moment it happens.",
      description:
        "Stock received, a batch nearing expiry, a dispatch delivered, an invoice overdue — the people who need to know are notified automatically, without anyone having to check a dashboard.",
      bullets: [
        "Event-driven alerts for receiving, dispatch, billing, and farm events",
        "No manual polling — notifications fire the moment something happens",
      ],
    },
  ],
};
