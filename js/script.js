// MEMBER 3: all JavaScript interactivity

document.addEventListener("DOMContentLoaded", () => {
  // 1. Theme toggle (Light / Dark mode)
  const themeToggle = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = "☀️";
  } else {
    if (themeToggle) themeToggle.textContent = "☾";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      themeToggle.textContent = isDark ? "☀️" : "☾";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  // 2. Meet the Team button scroll
  const meetBtn = document.getElementById("meet-btn");
  if (meetBtn) {
    meetBtn.addEventListener("click", () => {
      const teamSection = document.getElementById("team-section");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // 3. Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("name");
      const senderName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "BBC_Adaption";
      formFeedback.textContent = `Thanks ${senderName}! Your message was sent.`;
      formFeedback.style.display = "block";
      contactForm.reset();
    });
  }

  // 4. Smooth scrolling & active nav item indicator
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
