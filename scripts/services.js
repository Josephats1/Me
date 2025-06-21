
        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // Popup functionality
        function openPopup(service) {
            const popup = document.getElementById('popup');
            const popupContent = document.getElementById('popup-content');
            const popupDescription = document.getElementById('popup-description');
            
            let description = '';
            switch (service) {
                case 'coding':
                    description = 'We offer a range of services from front-end design to back-end development, ensuring that your website is fully functional and user-friendly.';
                    break;
                case 'app':
                    description = 'Our mobile apps are designed with a focus on usability, performance, and cross-platform compatibility.';
                    break;
                case 'web':
                    description = 'You will learn modern technologies such as HTML, CSS, and JavaScript. Lets host, get a domain, and launch your first website online.';
                    break;
                case 'life':
                    description = 'Need guidance on personal growth, relationships, or handling life challenges? I will provide advice in a friendly, non-judgmental space, helping you make better decisions and overcome obstacles.';
                    break;
                case 'entertain':
                    description = 'Talk about the latest movies, your favorite music genres, or discuss other hobbies you are passionate about. Our goal is to keep the conversation exciting and fun, providing a sense of connection and entertainment.';
                    break;
                case 'go':
                    description = 'Whether you need a hotel, cozy café, a scenic park, a restaurant, movie-club, or a quiet spot to relax, Im your Guide. Date, Rest, food, or adventure? I will provide a curated list of locations that match what you are looking for, taking the guesswork out of where to go.';
                    break;
                case 'engagement':
                      description = 'Whether you want to chat about your daily experiences or share your thoughts on hobbies, we provide a space where you can talk freely with someone who listens and engages in meaningful conversations.';
                    break;
               
                case 'loveconnect':
                  description = 'This service is designed to connect you with potential partners who share similar values and life goals. We take the time to understand your preferences and help you find a compatible match for a lasting relationship.';
                    break;
                case 'gift':
                    description = 'This Gifting service provides personalized gift solutions for any occasion, taking the stress out of finding the perfect present. The expert team works closely with you to understand your needs and preferences, curating unique and thoughtful gift ideas tailored to your budget. From sourcing high-quality gifts to handling wrapping and delivery, we ensure a seamless and impressive gifting experience. Let us help you make a lasting impression with gifts that truly show you care.';
                    break;
    
                case 'content-creator':
                    description = 'Bring your ideas to life with expertly crafted screenplays, whether for a feature film, short film, or TV series. Our screenwriting service ensures that your vision is transformed into a compelling story with dynamic characters and engaging dialogue.';
                    break;
                case 'song-writer':
                    description = 'Work with our expert songwriters to craft heartfelt lyrics and melodies that resonate with your audience.';
                    break;
                case 'graphic-designer':
                    description = 'Our graphic design services bring your ideas to life with custom, visually striking designs tailored to your brand and vision.';
                    break;
                case'recruiter':
                    description = 'Our HR services connect top talent with leading organizations, providing expert recruitment, talent management, and HR consulting solutions to drive business success.';
                    break;
                case 'social-media':
                    description = 'Our social media management services help you build a stronger online presence, engage with your audience, and grow your business.';
                    break;
                case 'photographer':
                    description = 'Capture perfect moments with our professional photography services tailored to any occasion, from events to personal sessions.';
                    break;
                default:
                    description = 'No additional information available.';
            }

            popupDescription.textContent = description;
            popup.classList.add('show');
        }

        function closePopup() {
            const popup = document.getElementById('popup');
            popup.classList.remove('show');
        }
        
        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');
        
        hamburger.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            menu.classList.toggle('show');
        });
        const text = "Do you want anything  From  or To anywhere? I do global deliveries.";
        let i = 0;
        function typeText() {
          if (i < text.length) {
            document.getElementById("typing-text").textContent += text.charAt(i);
            i++;
            setTimeout(typeText, 40);
          }
        }
        window.onload = typeText;

        //  ANIMATITION
        document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card, .service-card1, .card2');
  const effects = [
    { name: 'quantum', duration: 1.2 },
    { name: 'neon', duration: 1.8 }, 
    { name: 'particle', duration: 1.5 },
    { name: 'hologram', duration: 1.2 },
    { name: 'flip', duration: 1 }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const randomEffect = effects[Math.floor(Math.random() * effects.length)];
        const card = entry.target;
        
        card.style.setProperty('--anim-duration', `${randomEffect.duration}s`);
        card.classList.add('card-animated', randomEffect.name);
        
        // Remove observer after animation completes
        setTimeout(() => {
          observer.unobserve(card);
        }, randomEffect.duration * 1000);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  cards.forEach(card => {
    card.style.setProperty('--delay', `${Math.random() * 0.3}s`);
    observer.observe(card);
  });
});

document.querySelectorAll('.shipping__button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const particles = button.querySelector('.particles');
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        particles.style.backgroundPosition = `${x/rect.width*100}% ${y/rect.height*100}%`;
    });
});