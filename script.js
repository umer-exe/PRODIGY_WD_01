// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Keep CSS var in sync with actual navbar height
const setNavVars = () => {
  const navH = navbar ? navbar.getBoundingClientRect().height : 80;
  document.documentElement.style.setProperty('--nav-h', `${navH}px`);
};
setNavVars();
window.addEventListener('resize', setNavVars);

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') body.classList.add('light-theme');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Scroll animation observer
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, observerOptions);

// Ensure anything already on-screen at load gets the visible class
const animatedEls = document.querySelectorAll('.fade-in, .project-card, .contact-form');
animatedEls.forEach(el => {
  observer.observe(el);
  if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    formMessage.textContent = "Message sent successfully! I'll get back to you soon.";
    formMessage.className = 'form-message success';
    formMessage.style.display = 'block';
    contactForm.reset();
    setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
  } else {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.className = 'form-message error';
    formMessage.style.display = 'block';
  }
});

// Parallax effect for hero (capped so it doesn't collide with Projects)
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const y = Math.min(window.pageYOffset * 0.3, 60); // cap at ~60px
  hero.style.transform = `translateY(${y}px)`;
});
