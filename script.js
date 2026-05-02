// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Form Handling
document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! We will contact you soon.");
});