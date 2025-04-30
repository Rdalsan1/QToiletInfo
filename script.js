// Dark mode toggle
const toggleButton = document.getElementById("toggleMode");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll animation for sections
const hiddenSections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.2
});

hiddenSections.forEach(section => observer.observe(section));
