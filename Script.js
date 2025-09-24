// Minimal JavaScript for HatCodes website
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Add hover effects for cards
    const cards = document.querySelectorAll('.feature-card, .social-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    console.log('HatCodes website loaded successfully!');
});

// Utility functions for future enhancements
window.HatCodes = {
    scrollToSection: function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
};