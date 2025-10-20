// Smooth scroll for nav buttons
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Carousel auto-scroll (additional JS not needed since CSS animation handles it)
// Placeholder buttons can be wired like this:
const ctaButtons = document.querySelectorAll('.cta-btn, .card-btn');
ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('This button is functional! Replace with real links.');
    });
});
