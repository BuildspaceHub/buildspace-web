const mobileToggleEl = document.getElementById("mobile-toggle");
const mobileNavbarEl = document.getElementById("mobile-navbar");
// Handle Mobile Toggle
mobileToggleEl.onclick = () => {
  mobileNavbarEl.classList.toggle("max-h-0");
  mobileNavbarEl.classList.toggle("max-h-96");
  mobileNavbarEl.classList.toggle("opacity-0");
  mobileNavbarEl.classList.toggle("opacity-100");
};
