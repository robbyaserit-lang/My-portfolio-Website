# Minimalist Portfolio — Black, White & Gray

A high-performance, editorial-grade personal portfolio website crafted with pure **HTML5, CSS3, and modern Vanilla JavaScript**. Designed with a strict minimalist aesthetic and a monochrome palette (Obsidian Black, Crisp White, and Slate Gray).

---

## ✦ Key Features

- **Strict Monochrome Palette**: Carefully calibrated tones of pure black (`#09090b`), off-black, cool grays (`#71717a`, `#a1a1aa`, `#27272a`), and crisp white (`#ffffff`).
- **Minimalist Editorial Typography**: Paired typography featuring *Space Grotesk* for geometric headlines and *Inter* for legible body copy, with *JetBrains Mono* for technical accents.
- **Dark & Light Mode Switcher**: Seamless toggle between deep dark mode and high-contrast light mode with preference persistence via `localStorage`.
- **Zero Heavy Dependencies**: 100% framework-free. No `node_modules`, no build steps, no external runtime libraries. Blazingly fast load times (< 50ms) and 100/100 Lighthouse performance scores.
- **Interactive Project Case Studies & Lightbox**: Filter projects by category (Engineering, UI/UX & Systems, Experimental) and click to open deep-dive architectural breakdowns with problem statements, solutions, and benchmarks.
- **Functional Contact Form & Copy Email Pill**: Form validation with loading and success feedback states, plus one-click copy email buttons with animated toast alerts.
- **Live Local Clock**: Real-time digital clock in the footer with live ticking seconds.
- **Fully Responsive & Accessible**: Crafted with semantic HTML5 tags, ARIA attributes, keyboard navigation (`ESC` closes modals), and mobile menu drawer.

---

## ✦ File Structure

```
ROBI ANTIGRAVITY/
├── index.html              # Main HTML markup and semantic layout
├── assets/
│   ├── css/
│   │   └── style.css       # Monochrome design tokens, typography, grid, and dark/light themes
│   └── js/
│       └── main.js         # Interactive filtering, case study database, theme toggle, copy-to-clipboard, form validation
└── README.md               # Documentation & customization guide
```

---

## ✦ How to Run & Preview

1. **Directly in Browser**:
   - Double-click `index.html` in your file explorer, or right-click `index.html` and choose **Open with > Google Chrome** (or Edge / Firefox / Safari).
2. **Via Local Server (Optional)**:
   - If using VS Code, right-click `index.html` and select **Open with Live Server**.
   - Or run any static server:
     ```bash
     npx serve .
     # or
     python -m http.server 8000
     ```

---

## ✦ How to Customize

### 1. Change Name & Personal Info
Open `index.html`:
- Look for `ROBI` in the `<header>` (`.brand-logo`) and footer to change your moniker.
- Update the `<title>` tag and `<meta name="author">`.
- Update the hero section headline and bio under `<section class="hero-section">`.
- Update email addresses in `data-email="hello@robi.design"` and the `mailto:` links.

### 2. Update Projects & Case Studies
- In `index.html`: Edit the project cards inside `<div class="projects-grid">`.
- In `assets/js/main.js`: Edit the `projectDatabase` object to customize the detailed case study text, metrics, and repository links that appear when clicking "Read Breakdown".

### 3. Update Skills & Experience
- In `index.html`, navigate to `<section id="skills">` to add or remove tech pills.
- Navigate to `<section id="experience">` to add your career milestones, dates, company names, and achievements.

### 4. Deploying to the Web
This portfolio can be deployed in under 60 seconds to any free static host:
- **GitHub Pages**: Push this folder to a GitHub repository, go to `Settings > Pages`, and select `Deploy from a branch (main)`.
- **Vercel**: Drag and drop the folder into [vercel.com](https://vercel.com).
- **Netlify**: Drag and drop the folder into [netlify.com/drop](https://app.netlify.com/drop).
- **Cloudflare Pages**: Connect your Git repo or upload the directory directly.
