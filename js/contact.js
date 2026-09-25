// Placeholder submission handling — no real backend wired up yet. Swap the
// body of this handler for a real fetch() to your form-handling endpoint
// (or a service like Formspree) when ready; the form itself already has
// the right field names/structure for that.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // TODO: replace with a real submission (fetch to a backend endpoint,
    // or a form service). For now this just confirms the form works.
    success.style.display = "block";
    success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    form.reset();
  });
});
