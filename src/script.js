const mobileToggleEl = document.getElementById("mobile-toggle");
const mobileNavbarEl = document.getElementById("mobile-navbar");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

function closeMobileNavbar() {
  mobileNavbarEl.classList.add("max-h-0", "opacity-0", "-translate-y-2");
  mobileNavbarEl.classList.remove("max-h-96", "opacity-100", "translate-y-0");
}

function openMobileNavbar() {
  mobileNavbarEl.classList.remove("max-h-0", "opacity-0", "-translate-y-2");
  mobileNavbarEl.classList.add("max-h-96", "opacity-100", "translate-y-0");
}

mobileToggleEl.addEventListener("click", () => {
  const isOpen = mobileNavbarEl.classList.contains("max-h-96");

  isOpen ? closeMobileNavbar() : openMobileNavbar();
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNavbar);
});
