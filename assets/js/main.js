/**
 * Minimalist Portfolio Script
 * Pure Vanilla JavaScript — High performance, Zero external dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Data Store: Project Case Studies
  // --------------------------------------------------------------------------
  const projectDatabase = {
    "1": {
      id: "project-1",
      number: "01",
      category: "Design System & Web App",
      year: "2025",
      title: "Monolith Architecture",
      tagline: "Headless design system and accessible component framework for high-throughput enterprise applications.",
      overview: "Monolith was engineered to replace a fragmented design ecosystem across 14 decoupled product teams. Built with strict performance budgets, comprehensive WCAG 2.1 AAA compliance, and zero-runtime CSS tokens.",
      challenge: "Legacy systems struggled with styling drift, oversized CSS bundles exceeding 420kb, and inconsistent keyboard navigation across complex data tables.",
      solution: "Engineered a composable, headless component foundation powered by TypeScript, Tailwind tokens, and atomic primitives. Bundle size was slashed to under 38kb gzipped.",
      metrics: [
        { label: "Performance Score", value: "100 / 100" },
        { label: "Bundle Reduction", value: "-68%" },
        { label: "Component Count", value: "48 Primitives" },
        { label: "Accessibility", value: "WCAG AAA" }
      ],
      technologies: ["TypeScript", "React", "Tailwind CSS", "Storybook", "Radix Primitives"],
      githubUrl: "https://github.com",
      liveUrl: "#"
    },
    "2": {
      id: "project-2",
      number: "02",
      category: "Productivity Engine",
      year: "2025",
      title: "Chronos Time Tracker",
      tagline: "Keyboard-first sprint focus tool with offline sync, millisecond analytics, and local-first encryption.",
      overview: "Chronos provides high-precision time tracking and cognitive flow monitoring for solo engineers and boutique studios. Designed with an intentional monochrome palette to reduce eye fatigue during extended sprint sessions.",
      challenge: "Most time-tracking software requires repetitive mouse clicks, relies heavily on persistent cloud connectivity, and disrupts deep work states.",
      solution: "Built a keyboard-driven command palette (Cmd+K) with IndexedDB client-side caching and background Web Worker synchronization that operates flawlessly offline.",
      metrics: [
        { label: "Sync Latency", value: "<12ms" },
        { label: "Offline Uptime", value: "100%" },
        { label: "Daily Active Retention", value: "78%" },
        { label: "Memory Footprint", value: "18MB" }
      ],
      technologies: ["Next.js", "Web Workers", "IndexedDB", "Chart.js", "Zustand"],
      githubUrl: "https://github.com",
      liveUrl: "#"
    },
    "3": {
      id: "project-3",
      number: "03",
      category: "Editorial & Creative Web",
      year: "2024",
      title: "Aura Studio Platform",
      tagline: "Digital exhibition and archive space designed for a contemporary architectural studio.",
      overview: "A bespoke editorial publication platform and spatial exhibition showcasing architectural monographs, materiality studies, and curated floorplans.",
      challenge: "Capturing the tactile physical elegance of high-grade architectural paper in a web browser without compromising mobile load times or scroll smoothness.",
      solution: "Combined kinetic typography, smooth inertial scrolling via Lenis, and WebGL image warping that reacts subtly to cursor velocity.",
      metrics: [
        { label: "Awwwards SOTD", value: "Won" },
        { label: "Session Duration", value: "+145%" },
        { label: "First Contentful Paint", value: "0.6s" },
        { label: "Interaction Frame Rate", value: "60 FPS" }
      ],
      technologies: ["WebGL", "Three.js", "Lenis Scroll", "CSS Grid", "GLSL Shaders"],
      githubUrl: "https://github.com",
      liveUrl: "#"
    },
    "4": {
      id: "project-4",
      number: "04",
      category: "Cloud Metrics & Distributed API",
      year: "2024",
      title: "Nexus Telemetry",
      tagline: "Low-overhead real-time stream monitor handling high-frequency telemetry across distributed edge workers.",
      overview: "A lightweight observability client and edge gateway that ingests millions of operational log lines, tracks server health, and triggers automated failover notifications.",
      challenge: "Handling burst spikes of up to 45,000 telemetry payloads per second without saturating client browser threads or rendering buffers.",
      solution: "Engineered binary WebSocket streams coupled with a zero-copy virtualized buffer on the frontend, keeping UI CPU usage below 3%.",
      metrics: [
        { label: "Throughput", value: "45,000 req/s" },
        { label: "Edge Latency", value: "14ms" },
        { label: "Client CPU Usage", value: "<3%" },
        { label: "Uptime Record", value: "99.999%" }
      ],
      technologies: ["Go", "Node.js", "WebSockets", "Redis", "Docker", "TimescaleDB"],
      githubUrl: "https://github.com",
      liveUrl: "#"
    },
    "5": {
      id: "project-5",
      number: "05",
      category: "Desktop Client & Typography",
      year: "2024",
      title: "Kanso Editor",
      tagline: "A zen-mode plain-text and Markdown environment for focused writers and technical thinkers.",
      overview: "Inspired by the Japanese aesthetic philosophy of Kanso (simplicity). A local-first Markdown client that removes toolbars, floating widgets, and distraction vectors.",
      challenge: "Traditional document editors suffer from cognitive overload, proprietary lock-in formats, and sluggish load times on large text libraries.",
      solution: "Built a native lightweight client using Tauri and Rust, featuring customizable typographic scale ratios, instant AST syntax parsing, and pure plain-text fidelity.",
      metrics: [
        { label: "Binary Size", value: "6.2MB" },
        { label: "Startup Time", value: "180ms" },
        { label: "GitHub Stars", value: "1.4k+" },
        { label: "File Format", value: "Plain .md" }
      ],
      technologies: ["Tauri", "Rust", "Svelte", "Tailwind CSS", "Unified.js"],
      githubUrl: "https://github.com",
      liveUrl: "#"
    },
    "6": {
      id: "project-6",
      number: "06",
      category: "Creative Engineering",
      year: "2023",
      title: "Procedural Isometric Voxel",
      tagline: "Interactive real-time canvas experiment exploring mathematical patterns and monochrome depth shading.",
      overview: "An algorithmic exploration into 3D isometric projection, spatial hash grids, and light diffusion rendered purely through grayscale values.",
      challenge: "Rendering thousands of dynamic voxel prisms in an interactive canvas environment while sustaining buttery 60 FPS across mobile and low-power hardware.",
      solution: "Leveraged hardware-accelerated OffscreenCanvas, Perlin vector noise fields, and custom depth sorting algorithms.",
      metrics: [
        { label: "FPS Stability", value: "60 FPS Flat" },
        { label: "Interactive Voxels", value: "4,096 Units" },
        { label: "Draw Call Time", value: "4.2ms" },
        { label: "Shader Code", value: "Pure GLSL" }
      ],
      technologies: ["HTML5 Canvas", "WebGL", "GLSL Shaders", "Perlin Noise", "Vector Math"],
      githubUrl: "https://github.com",
      liveUrl: "#"
    }
  };

  // --------------------------------------------------------------------------
  // 2. Theme Toggle (Dark / Light Monochrome)
  // --------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('robi-portfolio-theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlRoot.setAttribute('data-theme', targetTheme);
      localStorage.setItem('robi-portfolio-theme', targetTheme);
      showToast(`Switched to ${targetTheme} monochrome mode`);
    });
  }

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Menu Toggle
  // --------------------------------------------------------------------------
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-open');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. Project Category Filtering
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetFilter = btn.getAttribute('data-filter');

      // Update button state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter cards
      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (targetFilter === 'all' || categories.includes(targetFilter)) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 5. Project Modal / Case Study Lightbox
  // --------------------------------------------------------------------------
  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const previewWrappers = document.querySelectorAll('.project-preview-wrap');

  let lastActiveElement = null;

  function openProjectModal(projectId) {
    const data = projectDatabase[projectId];
    if (!data) return;

    lastActiveElement = document.activeElement;

    // Render modal content
    modalBody.innerHTML = `
      <div class="modal-meta-top">
        <span>PROJECT ${data.number} / CASE STUDY</span>
        <span>${data.year}</span>
      </div>
      <h2 class="modal-title">${data.title}</h2>
      <p class="modal-tagline">${data.tagline}</p>

      <div class="modal-section">
        <h3 class="modal-heading">Executive Overview</h3>
        <p class="modal-text">${data.overview}</p>
      </div>

      <div class="modal-section">
        <h3 class="modal-heading">The Challenge</h3>
        <p class="modal-text">${data.challenge}</p>
      </div>

      <div class="modal-section">
        <h3 class="modal-heading">Architectural Solution</h3>
        <p class="modal-text">${data.solution}</p>
      </div>

      <div class="modal-section">
        <h3 class="modal-heading">Key Metrics &amp; Benchmarks</h3>
        <div class="modal-specs-grid">
          ${data.metrics.map(m => `
            <div class="modal-spec-card">
              <span class="spec-title">${m.label}</span>
              <div class="spec-value">${m.value}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="modal-section">
        <h3 class="modal-heading">Applied Technologies</h3>
        <ul class="project-tags">
          ${data.technologies.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-footer-actions">
        <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <span>Inspect Repository</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
        <button class="btn btn-secondary" onclick="document.getElementById('projectModal').classList.remove('is-active');">
          <span>Close Window</span>
        </button>
      </div>
    `;

    modalOverlay.classList.add('is-active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  }

  function closeProjectModal() {
    modalOverlay.classList.remove('is-active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement) lastActiveElement.focus();
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-project');
      openProjectModal(id);
    });
  });

  previewWrappers.forEach(wrap => {
    wrap.addEventListener('click', () => {
      const card = wrap.closest('.project-card');
      const btn = card.querySelector('.open-modal-btn');
      if (btn) {
        const id = btn.getAttribute('data-project');
        openProjectModal(id);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  // Keyboard accessibility: ESC closes modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('is-active')) {
      closeProjectModal();
    }
  });

  // --------------------------------------------------------------------------
  // 6. Copy-to-Clipboard Email Action & Toast Notification
  // --------------------------------------------------------------------------
  const copyButtons = [
    document.getElementById('quickCopyEmailBtn'),
    document.getElementById('copyDirectEmailBtn')
  ];

  copyButtons.forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      const email = btn.getAttribute('data-email') || 'hello@robi.design';
      copyToClipboard(email);
    });
  });

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied to clipboard: ${text}`);
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`Copied to clipboard: ${text}`);
    } catch (err) {
      showToast(`Email: ${text}`);
    }
    document.body.removeChild(textArea);
  }

  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 2800);
  }

  // --------------------------------------------------------------------------
  // 7. Interactive Contact Form with Validation
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');

      let isValid = true;

      // Reset errors
      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';

      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please provide your name';
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Please provide your email address';
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please provide a valid email format';
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        messageError.textContent = 'Please provide project details';
        isValid = false;
      }

      if (!isValid) return;

      // Loading state
      const defaultText = submitBtn.querySelector('.btn-text-default');
      const loadingText = submitBtn.querySelector('.btn-text-loading');
      
      defaultText.style.display = 'none';
      loadingText.style.display = 'inline';
      submitBtn.disabled = true;

      setTimeout(() => {
        defaultText.style.display = 'inline';
        loadingText.style.display = 'none';
        submitBtn.disabled = false;

        contactForm.reset();
        formSuccess.style.display = 'flex';
        showToast('Message sent successfully.');

        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 6000);
      }, 1200);
    });
  }

  // --------------------------------------------------------------------------
  // 8. Real-time Digital Clock (Footer)
  // --------------------------------------------------------------------------
  const liveClock = document.getElementById('liveClock');
  function updateLiveClock() {
    if (!liveClock) return;
    const now = new Date();
    // UTC+8 representation (or local system time)
    const options = {
      timeZone: 'Asia/Singapore',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    try {
      const timeStr = new Intl.DateTimeFormat('en-GB', options).format(now);
      liveClock.textContent = `${timeStr} UTC+8`;
    } catch (e) {
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      liveClock.textContent = `${hours}:${mins}:${secs} LOCAL`;
    }
  }
  updateLiveClock();
  setInterval(updateLiveClock, 1000);

  // --------------------------------------------------------------------------
  // 9. Active Navigation Spy via IntersectionObserver
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));

  // --------------------------------------------------------------------------
  // 10. Subtle Cursor Glow Tracker
  // --------------------------------------------------------------------------
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.opacity = '1';
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
    });
  }
});
