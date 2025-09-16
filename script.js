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

// --- Interactive hero hover (spotlight + gentle tilt) ---
const hero = document.querySelector(".hero");

if (hero) {
  const clamp = (n, min, max) => Math.max(min, Math.min(n, max));

  const handleMove = (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // move the spotlight
    hero.style.setProperty("--mx", x + "px");
    hero.style.setProperty("--my", y + "px");

    // subtle tilt based on cursor position
    const px = x / rect.width;   // 0..1
    const py = y / rect.height;  // 0..1
    const maxTilt = 3;           // degrees (kept tiny so it stays classy)
    const ry = clamp((0.5 - px) * maxTilt * 2, -maxTilt, maxTilt); // rotateY
    const rx = clamp((py - 0.5) * maxTilt * 2, -maxTilt, maxTilt); // rotateX

    hero.style.setProperty("--rx", rx.toFixed(3) + "deg");
    hero.style.setProperty("--ry", ry.toFixed(3) + "deg");
  };

  hero.addEventListener("mouseenter", () => {
    hero.classList.add("is-tilting");
  });

  hero.addEventListener("mousemove", handleMove);

  hero.addEventListener("mouseleave", () => {
    // reset to center/flat
    hero.style.setProperty("--mx", "50%");
    hero.style.setProperty("--my", "50%");
    hero.style.setProperty("--rx", "0deg");
    hero.style.setProperty("--ry", "0deg");
    hero.classList.remove("is-tilting");
  });
}
