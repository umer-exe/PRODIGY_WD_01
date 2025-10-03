# Basic Responsive Landing Page

**Live Demo:** https://umer-exe.github.io/PRODIGY_WD_01/  

A lightweight, responsive landing page built with HTML, CSS, and JavaScript. It features a glassy fixed navbar with dynamic offset handling, a polished Projects section, smooth anchor scrolling, a dark and light theme toggle with persistence, animated cards, and a modern Contact form.

## Features

- Fixed navbar with blur and subtle shadow on scroll, JS updates a CSS variable for real navbar height so anchors land correctly
- Smooth anchor navigation using scroll-margin-top, Projects and Contact never tuck under the navbar
- Refined section spacing, Projects moved down slightly, gap before Contact tightened, consistent rhythm on desktop and mobile
- Projects grid with glass cards, hover lift, intersection based fade in animation
- Contact form redesigned, wider card, consistent input heights, focus rings, success and error messaging
- Theme toggle with localStorage persistence, works across reloads
- Mobile menu drawer, closes on link click
- Animated background gradient, gentle hero parallax capped to prevent visual collision with Projects
- No external JS dependencies, pure HTML, CSS, JavaScript

## Tech Stack
- HTML5
- CSS3, custom properties, clamp, backdrop filter
- Vanilla JavaScript, IntersectionObserver, localStorage