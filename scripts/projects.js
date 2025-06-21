   function updateHeadingVisibility() {
    const autoType = document.getElementById('auto-type');
    const fallback = document.getElementById('fallback-heading');
    
    if (window.innerWidth < 768) {
        autoType.style.display = 'none';
        fallback.style.display = 'block';
    } else {
        autoType.style.display = 'block';
        fallback.style.display = 'none';
    }
}

// Run on load and resize
window.addEventListener('load', updateHeadingVisibility);
window.addEventListener('resize', updateHeadingVisibility);
        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');
        
        hamburger.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            menu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('#menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    menu.classList.remove('active');
                    hamburger.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Enhanced 3D Carousel Interaction
        const carousel = document.querySelector('.carousel');
        const carouselItems = document.querySelectorAll('.carousel .item');
        let isPaused = false;

        // Pause on hover/focus
        carousel.addEventListener('mouseenter', () => {
            carousel.style.animationPlayState = 'paused';
            isPaused = true;
        });

        carousel.addEventListener('mouseleave', () => {
            if (isPaused) {
                carousel.style.animationPlayState = 'running';
                isPaused = false;
            }
        });

        // Click to focus on project
        carouselItems.forEach(item => {
            item.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                const projectElement = document.querySelector(`[data-target="${projectId}"]`);
                
                if (projectElement) {
                    projectElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Add visual highlight
                    projectElement.classList.add('highlight');
                    setTimeout(() => {
                        projectElement.classList.remove('highlight');
                    }, 2000);
                }
            });
        });

        // Touch support for mobile
        let touchStartX = 0;
        const carouselContainer = document.querySelector('.carousel-container');

        if (carouselContainer) {
            carouselContainer.addEventListener('touchstart', e => {
                touchStartX = e.touches[0].clientX;
                carousel.style.animationPlayState = 'paused';
            });

            carouselContainer.addEventListener('touchmove', e => {
                const moveX = e.touches[0].clientX - touchStartX;
                carousel.style.transform = `rotateY(${moveX / 2}deg)`;
            });

            carouselContainer.addEventListener('touchend', () => {
                carousel.style.animationPlayState = 'running';
            });
        }

        // Add highlight animation to CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes highlight {
                0% { box-shadow: 0 0 0 0 rgba(255, 0, 127, 0); }
                50% { box-shadow: 0 0 0 10px rgba(255, 0, 127, 0.3); }
                100% { box-shadow: 0 0 0 0 rgba(255, 0, 127, 0); }
            }
            .highlight {
                animation: highlight 2s ease;
            }
        `;
        document.head.appendChild(style);

        