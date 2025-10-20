// DARK MODE TOGGLE
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// FUNCTIONAL BUTTONS
const tileButtons = document.querySelectorAll('.btn-tile');
tileButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('This will open lessons for this subject (placeholder)');
    });
});

const ctaButtons = document.querySelectorAll('.cta-buttons a');
ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(btn.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

