document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
  
    // Enhanced typing animation with fixed width
    const phrases = ["Freelance Developer","Virtual Companion", "UI/UX Designer", "Forex | Crypto Trader", "Software Engineer", "Fullstack Developer", "Screenwriter", "Graphic Designer",  "Love-Match Maker", "Digital creator"];
    const typingEffect = document.getElementById("typed-text");
    
    // Pre-calculate max width to prevent layout shift
    let maxWidth = 0;
    const tempSpan = document.createElement('span');
    tempSpan.style.position = 'absolute';
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.style.fontSize = '2rem';
    tempSpan.style.fontWeight = '600';
    document.body.appendChild(tempSpan);
    
    phrases.forEach(phrase => {
      tempSpan.textContent = phrase;
      maxWidth = Math.max(maxWidth, tempSpan.offsetWidth);
    });
    
    document.body.removeChild(tempSpan);
    document.querySelector('.typing-container').style.minWidth = `${maxWidth}px`;
    
    // Typing animation
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
  
    function type() {
      const currentPhrase = phrases[index];
      
      if (isDeleting) {
        typingEffect.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 100;
      } else {
        typingEffect.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
      }
  
      if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % phrases.length;
        typingSpeed = 500;
      }
  
      setTimeout(type, typingSpeed);
    }
  
    // Start typing animation
    setTimeout(type, 1000);
  
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
  
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      menu.classList.toggle('active');
      this.setAttribute('aria-expanded', this.classList.contains('active'));
      
      // Toggle body scroll when menu is open
      document.body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
      
      // Animate menu items
      if (menu.classList.contains('active')) {
        const links = menu.querySelectorAll('li');
        links.forEach((link, index) => {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index * 0.1 + 0.3}s`;
        });
      }
    });
  
    // Close menu when clicking on a link
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Fade in animation
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  });