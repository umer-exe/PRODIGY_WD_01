// Navbar scroll style
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 10);
});

// Theme toggle with persistence
const checkbox = document.getElementById("themeCheckbox");

// Load saved theme
const saved = localStorage.getItem("theme");
if (saved === "alt") {
  document.body.classList.add("theme-alt");
  checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
  const alt = checkbox.checked;
  document.body.classList.toggle("theme-alt", alt);
  localStorage.setItem("theme", alt ? "alt" : "default");
});
