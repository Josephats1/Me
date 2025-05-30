     // Background image rotation for personal info section
     let images = [
        'images/ring1.jpg',
        
        'images/ring3.jpg',
        'images/ring4.jpg',
        
    ];
    let index = 0;
    
    function changeBackground() {
        document.getElementById('personal-container').style.backgroundImage = `url(${images[index]})`;
        index = (index + 1) % images.length;
    }
    
    setInterval(changeBackground, 6000);
    changeBackground(); // Call once to set initial background
    
    // Card selection functions
    function toggleSelection(card, group) {
        const hiddenInput = card.querySelector('input');
        const selectedCards = document.querySelectorAll(`.card.selected[data-group="${group}"]`);
        
        if (card.classList.contains('selected')) {
            card.classList.remove('selected');
            hiddenInput.checked = false;
        } else {
            // Limit selection based on group
            if (group === 'values' && selectedCards.length >= 2) {
                return; // Don't allow more than 2 selections for values
            }
            
            card.classList.add('selected');
            hiddenInput.checked = true;
            card.setAttribute('data-group', group);
        }
    }
    
    function selectEmotionCard(card) {
        // Remove selection from all emotion cards first
        document.querySelectorAll('.emotion-card').forEach(c => {
            c.classList.remove('selected');
            c.querySelector('input').checked = false;
        });
        
        // Add selection to clicked card
        card.classList.add('selected');
        card.querySelector('input').checked = true;
    }
    
    // Form submission handling
    document.getElementById('loveQuestionnaireForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to the server
        // For demonstration, we'll just show an alert
        alert('Thank you for submitting your love questionnaire!');
        
        // In a real application, you would uncomment the following line:
        // this.submit();
    });