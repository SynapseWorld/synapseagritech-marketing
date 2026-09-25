// Renders the Features page's per-area sections from the shared
// PRODUCT_DATA.featureAreas list (see product-data.js) — content lives in
// one place so this page can't drift out of sync with pricing.html.
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("feature-blocks");
  if (!root) return;

  PRODUCT_DATA.featureAreas.forEach((area, index) => {
    const block = document.createElement("div");
    block.className = "feature-block" + (index % 2 === 1 ? " reverse" : "");
    block.id = area.id;

    const bullets = area.bullets
      .map((b) => `<li><span class="tick">✓</span><span>${b}</span></li>`)
      .join("");

    block.innerHTML = `
      <div class="feature-copy">
        <span class="eyebrow">${area.icon} ${area.name}</span>
        <h2>${area.summary}</h2>
        <p>${area.description}</p>
        <ul>${bullets}</ul>
      </div>
      <div class="feature-visual">
        <div class="browser-frame">
          <div class="chrome">
            <span class="dot" style="background:#e1665a"></span>
            <span class="dot" style="background:#e0b64c"></span>
            <span class="dot" style="background:#63b56b"></span>
            <div class="bar"></div>
          </div>
          <div class="screen">${featureMock(area.id)}</div>
        </div>
        <p class="placeholder-flag">Mockup preview — swap in a real product screenshot once available</p>
      </div>
    `;
    root.appendChild(block);
  });
});

// Small illustrative mock UI per feature area, styled with the shared
// mock-* classes from style.css. Deliberately simple/generic — real
// screenshots should replace these (see placeholder-flag note).
function featureMock(areaId) {
  switch (areaId) {
    case "inventory-receiving":
      return `
        <div class="mock-topbar"><span class="mock-title">Receive Stock</span><span class="mock-pill">Scan mode</span></div>
        <div class="mock-row"><span>SKU-FEED-2201 · Layer Mash</span><span class="tag tag-live">500 kg</span></div>
        <div class="mock-row"><span>SKU-EGG-0110 · Grade A</span><span class="tag tag-live">1,200 units</span></div>
        <div class="mock-row"><span>Expiring in 3 days</span><span class="tag tag-transit">Review</span></div>`;
    case "multi-location":
      return `
        <div class="mock-topbar"><span class="mock-title">Stock by Location</span></div>
        <div class="mock-stats">
          <div class="mock-stat"><div class="n">3</div><div class="l">Warehouses</div></div>
          <div class="mock-stat"><div class="n">128</div><div class="l">SKUs</div></div>
          <div class="mock-stat"><div class="n">12t</div><div class="l">On hand</div></div>
        </div>
        <div class="mock-row"><span>Warehouse — Nashik</span><span>4.2t</span></div>
        <div class="mock-row"><span>Warehouse — Pune</span><span>3.8t</span></div>`;
    case "outlet-billing":
      return `
        <div class="mock-topbar"><span class="mock-title">Billing Summary</span><span class="mock-pill">This month</span></div>
        <div class="mock-row"><span>Outlet Andheri</span><span class="tag tag-live">Paid</span></div>
        <div class="mock-row"><span>Outlet Kalyan</span><span class="tag tag-transit">Sent</span></div>
        <div class="mock-stats">
          <div class="mock-stat"><div class="n">₹2.4L</div><div class="l">Invoiced</div></div>
          <div class="mock-stat"><div class="n">₹1.9L</div><div class="l">Paid</div></div>
          <div class="mock-stat"><div class="n">₹0.5L</div><div class="l">Outstanding</div></div>
        </div>`;
    case "shipment-tracking":
      return `
        <div class="mock-topbar"><span class="mock-title">Fleet — Live</span><span class="mock-pill">2 on road</span></div>
        <div class="mock-map"><span class="pin" style="top:38%;left:44%"></span><span class="pin" style="top:62%;left:68%"></span></div>
        <div class="mock-row" style="margin-top:8px"><span>MH-04-AB-1234</span><span class="tag tag-live">In transit</span></div>`;
    case "farm-operations":
      return `
        <div class="mock-topbar"><span class="mock-title">Flock — Shed 3</span><span class="mock-pill">Live</span></div>
        <div class="mock-count-hero"><div class="big">4,812</div><div class="cap">Current bird count</div></div>
        <div class="mock-row"><span>Eggs collected today</span><span>1,340</span></div>`;
    default:
      return `
        <div class="mock-topbar"><span class="mock-title">Notifications</span></div>
        <div class="mock-row"><span>Batch expiring in 2 days</span><span class="tag tag-transit">Alert</span></div>
        <div class="mock-row"><span>Dispatch #2291 delivered</span><span class="tag tag-live">Info</span></div>
        <div class="mock-row"><span>Invoice #884 overdue</span><span class="tag tag-transit">Alert</span></div>`;
  }
}
