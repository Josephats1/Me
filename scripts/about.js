
        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
            
            // Update aria-expanded attribute
            const isExpanded = hamburger.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking on a link
        const menuLinks = document.querySelectorAll('#menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Array of quotes with authors and images
        const quotes = [
            { 
                text: "The inscrutability of the universe necessitates the adoption of a paradigmatic approach, wherein one embodies a proactive disposition, anticipating and preparing for unanticipated consequences and low-probability, high-impact events.", 
                author: "Baluku Josephat", 
                image: "https://josephats1.github.io/particle/static/image.png" 
            },
            { 
                text: "It's our Responsibility to Love but a Blessing to be loved.", 
                author: "President Mbaraga Mathieu", 
                image: "https://josephats1.github.io/Media/images/Mathieu.png" 
            },
            { 
                text: "Spirituality without ability to Control your Reality is Vanity.", 
                author: "Nero Knowledge", 
                image: "https://josephats1.github.io/Media/images/Nero.png" 
            }
        ];
        
        // Function to display a random quote
        function displayRandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];
            document.getElementById("quote-text").textContent = `"${quote.text}"`;
            document.getElementById("quote-author").textContent = `- ${quote.author}`;
            document.getElementById("speaker-img").src = quote.image;
        }
        
        // Display the first random quote immediately
        displayRandomQuote();
        
        // Change the quote every 5 seconds
        setInterval(displayRandomQuote, 5000); 

        // Music player functionality
        const audioPlayer = document.getElementById("audioPlayer");
        const albumArt = document.getElementById("albumArt");

        const playlist = [
            { 
                src: "images/2pac-dontutrustme.mp3", 
                image: "images/music.png" 
            },
            { 
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", 
                image: "https://via.placeholder.com/200" 
            },
            { 
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", 
                image: "https://via.placeholder.com/200" 
            },
            { 
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", 
                image: "https://via.placeholder.com/200" 
            }
        ];

        function playGenre(index) {
            const track = playlist[index];
            document.getElementById("audioSource").src = track.src;
            audioPlayer.load();
            albumArt.style.backgroundImage = `url(${track.image})`;
            albumArt.style.transform = "rotate(360deg)";
            audioPlayer.play();
            
            // Reset rotation after animation completes
            setTimeout(() => {
                albumArt.style.transform = "rotate(0deg)";
            }, 1000);
        }

        // Play first track by default
        playGenre(0);
    