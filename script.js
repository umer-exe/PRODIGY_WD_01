// Navbar scroll style
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 10);
});

// Theme toggle (switch hero gradient + keep everything minimal)
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("theme-alt");
});
