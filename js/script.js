// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Smooth scroll for buttons
document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.querySelector(btn.getAttribute('data-target'));
        target.scrollIntoView({behavior:'smooth'});
    });
});

// Auto-scroll tiles
const carousels = document.querySelectorAll('.tiles-carousel');
carousels.forEach(carousel => {
    let scrollAmount = 0;
    setInterval(() => {
        if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth){
            scrollAmount = 0;
            carousel.scrollTo({left:scrollAmount, behavior:'smooth'});
        } else {
            scrollAmount += 220; // tile width + gap
            carousel.scrollTo({left:scrollAmount, behavior:'smooth'});
        }
    }, 3000);
});
