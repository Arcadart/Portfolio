document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = 0;
    let isScrolling = false;

    window.addEventListener('wheel', function(event) {
        if (isScrolling) return;
        isScrolling = true;

        if (event.deltaY > 0) {
            // Scroll down
            currentSection = Math.min(currentSection + 1, sections.length - 1);
        } else {
            // Scroll up
            currentSection = Math.max(currentSection - 1, 0);
        }

        sections[currentSection].scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
            isScrolling = false;
        }, 1000); // Adjust the timeout duration as needed
    });
});