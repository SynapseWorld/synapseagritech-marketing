// Renders both the pricing cards and the comparison table from the shared
// PRODUCT_DATA (see product-data.js) — a capability's tier list is the
// single source both are built from, so they can't drift apart.
document.addEventListener("DOMContentLoaded", () => {
  renderPricingCards();
  renderComparisonTable();
});

function capabilitiesForTier(tierId) {
  return PRODUCT_DATA.capabilities.filter((c) => c.tiers.includes(tierId));
}

function renderPricingCards() {
  const root = document.getElementById("pricing-cards");
  if (!root) return;

  root.innerHTML = PRODUCT_DATA.tiers
    .map((tier) => {
      const caps = capabilitiesForTier(tier.id)
        .map((c) => `<li><span class="tick">✓</span><span>${c.name}</span></li>`)
        .join("");
      return `
        <div class="price-card ${tier.featured ? "featured" : ""}">
          ${tier.featured ? `<span class="badge">${tier.badge}</span>` : ""}
          <div class="tier-name">${tier.name}</div>
          <div class="tier-for">${tier.for}</div>
          <div class="tier-price">${tier.price}</div>
          <div class="tier-price-note">${tier.priceNote}</div>
          <ul>${caps}</ul>
          <a class="btn ${tier.featured ? "btn-primary" : "btn-secondary"} btn-block" href="contact.html">${tier.cta}</a>
        </div>
      `;
    })
    .join("");
}

function renderComparisonTable() {
  const root = document.getElementById("compare-table-body");
  if (!root) return;

  const groups = [...new Set(PRODUCT_DATA.capabilities.map((c) => c.group))];
  let rows = "";
  groups.forEach((group) => {
    rows += `<tr class="compare-group-row"><td colspan="4">${group}</td></tr>`;
    PRODUCT_DATA.capabilities
      .filter((c) => c.group === group)
      .forEach((cap) => {
        const cells = PRODUCT_DATA.tiers
          .map((tier) =>
            cap.tiers.includes(tier.id)
              ? `<td class="center"><span class="check-yes">✓</span></td>`
              : `<td class="center"><span class="check-no">—</span></td>`
          )
          .join("");
        rows += `<tr><td>${cap.name}</td>${cells}</tr>`;
      });
  });
  root.innerHTML = rows;
}
