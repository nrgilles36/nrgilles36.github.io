// Select all sections for animation
const sections = document.querySelectorAll("section");

// Add a class to sections when they are in view
const fadeInSection = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Check if section is in view
    if (sectionTop < windowHeight - 100) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
};

// Run on scroll
window.addEventListener("scroll", fadeInSection);

// Smooth scroll effect for navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth"
    });
  });
});