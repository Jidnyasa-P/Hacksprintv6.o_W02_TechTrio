// main.js - Core interactivity for PetCareConnect

document.addEventListener('DOMContentLoaded', () => {
  const userDisplay = document.getElementById('userWelcome');
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const name = localStorage.getItem('userName');

  if (isLoggedIn === 'true' && userDisplay) {
    userDisplay.textContent = `Welcome, ${name}!`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
    // Navigation toggle for mobile (if needed in future)
    const navToggle = document.querySelector("#nav-toggle");
    const navMenu = document.querySelector("#nav-menu");
  
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
      });
    }
  
    // Scroll to top button (optional feature)
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
      window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          scrollTopBtn.style.display = "block";
        } else {
          scrollTopBtn.style.display = "none";
        }
      };
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    // Contact form submission (basic client-side validation)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = contactForm.querySelector("#name").value.trim();
        const email = contactForm.querySelector("#email").value.trim();
        const message = contactForm.querySelector("#message").value.trim();
  
        if (name && email && message) {
          alert("Thank you for reaching out! We'll get back to you soon.");
          contactForm.reset();
        } else {
          alert("Please fill out all fields before submitting.");
        }
      });
    }
  });
  