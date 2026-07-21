// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Dr. Arti Parab · Portfolio loaded successfully.');

    // Optional: Add a subtle fade-in effect for the container
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transition = 'opacity 0.6s ease-in-out';
        setTimeout(() => {
            container.style.opacity = '1';
        }, 100);
    }

    // Optional: Make all external links open in a new tab
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // Optional: Add a click effect on contact items (just for demonstration)
    const contactItems = document.querySelectorAll('.contact-links a');
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Small haptic feedback: just a console log (you can remove this)
            console.log('Contact link clicked: ' + this.textContent.trim());
        });
    });
});
