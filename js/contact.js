// Real submission — POSTs to the SynapseAgriTech backend's public
// POST /api/leads endpoint (see poultry-inventory-backend's LeadController
// and SecurityConfig: that one route is unauthenticated + CORS-enabled
// specifically for this site, everything else on that API needs a login).
const LEADS_API_URL = "https://backend-production-531cc.up.railway.app/api/leads";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  const error = document.getElementById("form-error");
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const submitLabel = submitBtn.textContent;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    error.style.display = "none";
    success.style.display = "none";
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(LEADS_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      success.style.display = "block";
      success.scrollIntoView({ behavior: "smooth", block: "nearest" });
      form.reset();
    } catch (err) {
      error.style.display = "block";
      error.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = submitLabel;
    }
  });
});
