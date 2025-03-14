document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = 0;
    let isScrolling = false;

    const debounce = (func, wait) => {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    const handleScroll = debounce(function(event) {
        if (isScrolling) return;

        if (event.deltaY > 0) {
            // Scroll down
            currentSection = Math.min(currentSection + 1, sections.length - 1);
        } else {
            // Scroll up
            currentSection = Math.max(currentSection - 1, 0);
        }

        isScrolling = true;
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });

        sections[currentSection].addEventListener('scrollend', function() {
            isScrolling = false;
        }, { once: true });
    }, 100);

    window.addEventListener('wheel', handleScroll);
});