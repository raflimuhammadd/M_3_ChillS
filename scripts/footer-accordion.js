function initFooterAccordion() {
    const headings = document.querySelectorAll('.footer-heading.mobile-only');
    
    headings.forEach(heading => {
        const nav = heading.nextElementSibling;

        if (nav && nav.classList.contains('footer-nav')) {
            heading.addEventListener('click', () => {
                const isActive = heading.classList.toggle('active');
                nav.classList.toggle('active');

                // close accordion
                headings.forEach(otherHeading => {
                    if (otherHeading != heading) {
                        otherHeading.classList.remove('active');
                        const otherNav = otherHeading.nextElementSibling;
                        if (otherNav) otherNav.classList.remove('active');
                    }
                })
            })
        }
    })
}


document.addEventListener('DOMContentLoaded', () => {
    initFooterAccordion();
})