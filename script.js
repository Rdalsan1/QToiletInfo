// Dark mode toggle
const toggleButton = document.getElementById("toggleMode");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Tab switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.getAttribute('data-tab');

    // Deactivate all buttons and content
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(section => section.classList.remove('active'));

    // Activate current tab
    btn.classList.add('active');
    document.getElementById(`tab-${tab}`).classList.add('active');
  });
});

// Opt-out form behavior
const optOutForm = document.getElementById('optOutForm');
const confirmation = document.getElementById('optout-confirmation');

optOutForm.addEventListener('submit', function (e) {
  e.preventDefault();
  confirmation.classList.remove('hidden');
  optOutForm.reset();
});

// Optional: Animate info sections as they scroll into view
const animatedSections = document.querySelectorAll('.section.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

animatedSections.forEach(section => observer.observe(section));
