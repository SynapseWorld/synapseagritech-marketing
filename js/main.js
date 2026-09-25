// Shared behavior across every page: mobile nav toggle + active-link marking.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      const isOpen = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const current = document.body.dataset.page;
  if (current) {
    document.querySelectorAll(`.nav-links a[data-page="${current}"]`).forEach((a) => {
      a.classList.add("active");
    });
  }
});
