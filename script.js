// Navbar scroll style
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 10);
});

// Theme toggle with persistence + proper ARIA state
const toggleBtn = document.getElementById("themeToggle");
const applyTheme = (t) => {
  const dark = t === "dark";
  document.body.classList.toggle("theme-dark", dark);
  toggleBtn.setAttribute("aria-pressed", String(dark));
  localStorage.setItem("theme", dark ? "dark" : "light");
};

// Load saved theme
applyTheme(localStorage.getItem("theme") || "light");

// Click to toggle
toggleBtn.addEventListener("click", () => {
  const next = document.body.classList.contains("theme-dark") ? "light" : "dark";
  applyTheme(next);
});
