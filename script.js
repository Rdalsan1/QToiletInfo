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
// Tab switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.getAttribute('data-tab');

    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    tabContents.forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(`tab-${tab}`).classList.add('active');
  });
});

// Opt-out form submission simulation
const optOutForm = document.getElementById('optOutForm');
const confirmation = document.getElementById('optout-confirmation');

optOutForm.addEventListener('submit', function (e) {
  e.preventDefault();
  confirmation.classList.remove('hidden');
  optOutForm.reset();
});
