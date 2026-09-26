// Real submission — POSTs to AgriFlo's own independent backend
// (agriflo-backend, deployed separately on Render — see its repo's
// LeadController). Public, CORS-enabled for this site's domains.
const LEADS_API_URL = "https://agriflo-backend.onrender.com/api/leads";

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
