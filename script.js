// ============================
// PORTFOLIO MAIN SCRIPT
// ============================

// ===== Navbar Toggle (for mobile) =====
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });
}

// ===== Smooth Scrolling for Navbar Links =====
const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Close menu after clicking link (for mobile)
    navList.classList.remove('active');
    menuToggle.classList.remove('open');
  });
});

// ===== Scroll-to-Top Button =====
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
    setTimeout(() => (scrollBtn.style.display = "none"), 300);
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// ===== Fade-in Animation on Scroll =====
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeEls.forEach(el => observer.observe(el));
// ===== Contact Form Validation & Mailto =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields before sending!");
      return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert("📧 Please enter a valid email address!");
      return;
    }

    const mailtoLink = `mailto:yourmail@example.com?subject=Portfolio Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
  });
}
