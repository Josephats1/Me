// Function to update the real-time clock with weekday
function updateRealTimeClock() {
    const now = new Date();
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Format the date with weekday (e.g., "Friday, May 3")
    const datePart = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        timeZone: userTimeZone
    });
    
    // Format the time with seconds (e.g., "10:30:45 AM EDT")
    const timePart = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: userTimeZone,
        timeZoneName: 'short'
    });
    
    document.getElementById('viewed-date').textContent = `${datePart}, ${timePart}`;
}

// Set initial dates and start the clock
function initDates() {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
  
    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize and update the clock every second
    updateRealTimeClock();
    setInterval(updateRealTimeClock, 1000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initDates);
// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateDates);

        // Generate table of contents
        const terms = document.querySelectorAll('.term');
        const tocList = document.getElementById('toc-list');
        
        terms.forEach(term => {
            const termId = term.id;
            const termNumber = term.querySelector('.term-number').textContent;
            const termTitle = term.querySelector('h3').textContent.replace(termNumber, '').trim();
            
            const tocItem = document.createElement('li');
            tocItem.innerHTML = `<a href="#${termId}">${termTitle}</a>`;
            tocList.appendChild(tocItem);
        });

        // Back to top button
        const backToTop = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Smooth scrolling for TOC links
        document.querySelectorAll('.toc-list a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            });
        });

        // Highlight current section in view
        window.addEventListener('scroll', () => {
            const fromTop = window.scrollY + 100;
            
            document.querySelectorAll('.toc-list a').forEach(link => {
                const section = document.querySelector(link.getAttribute('href'));
                
                if (
                    section.offsetTop <= fromTop &&
                    section.offsetTop + section.offsetHeight > fromTop
                ) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });