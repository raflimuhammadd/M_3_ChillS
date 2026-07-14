function initCardScroll() {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        const container = section.querySelector('.cards-scroll');
        const leftArrow = section.querySelector('.scroll-arrow-left');
        const rightArrow = section.querySelector('.scroll-arrow-right');
        
        if (!container || !leftArrow || !rightArrow) return;
        
        // Scroll by 85% of container width (responsive + overlap)
        function getScrollAmount() {
            return container.clientWidth * 0.85;
        }
        
        // Left arrow click
        leftArrow.addEventListener('click', () => {
            container.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });
        
        // Right arrow click
        rightArrow.addEventListener('click', () => {
            container.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });
        
        // Update arrow states based on scroll position
        function updateArrowStates() {
            const atStart = container.scrollLeft <= 10;
            const atEnd = container.scrollLeft >= (container.scrollWidth - container.clientWidth - 10);
            
            leftArrow.disabled = atStart;
            rightArrow.disabled = atEnd;
        }
        
        // Initial state
        updateArrowStates();
        
        // Update on scroll
        container.addEventListener('scroll', updateArrowStates);
        
        // Update on window resize
        window.addEventListener('resize', updateArrowStates);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initCardScroll();
});