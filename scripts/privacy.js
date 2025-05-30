document.addEventListener('DOMContentLoaded', function() {
    // Set current date and year
    function updateDateTime() {
const now = new Date();

// Format the date
const date = now.toLocaleDateString(undefined, {
year: 'numeric',
month: 'long',
day: 'numeric'
});

// Format the time
const time = now.toLocaleTimeString(undefined, {
hour: '2-digit',
minute: '2-digit',
second: '2-digit'
});

// Update the HTML elements
document.getElementById("current-date").textContent = date;
document.getElementById("current-time").textContent = ` | ${time}`;
}

// Update once on page load
updateDateTime();

// Optional: Update every second
setInterval(updateDateTime, 1000);

    // Generate Table of Contents
    const tocList = document.getElementById('toc-list');
    const sections = document.querySelectorAll('.policy-section');
    const groups = document.querySelectorAll('.policy-group');
    
    groups.forEach(group => {
        const groupId = group.id;
        const groupTitle = group.querySelector('.policy-group-title').textContent;
        
        const groupItem = document.createElement('li');
        groupItem.className = 'toc-item group-item';
        
        const groupLink = document.createElement('a');
        groupLink.href = `#${groupId}`;
        groupLink.className = 'toc-link group-link';
        groupLink.textContent = groupTitle;
        
        groupItem.appendChild(groupLink);
        tocList.appendChild(groupItem);
        
        const groupSections = group.querySelectorAll('.policy-section');
        const subList = document.createElement('ul');
        subList.className = 'toc-sublist';
        
        groupSections.forEach(section => {
            const id = section.id;
            const title = section.querySelector('.section-title').textContent;
            const number = section.querySelector('.section-number').textContent;
            
            const listItem = document.createElement('li');
            listItem.className = 'toc-item';
            
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.className = 'toc-link';
            link.textContent = `${number}. ${title}`;
            
            listItem.appendChild(link);
            subList.appendChild(listItem);
        });
        
        groupItem.appendChild(subList);
    });

    // Back to Top Button
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Highlight current section in TOC
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const tocLink = document.querySelector(`.toc-link[href="#${id}"]`);
            
            if (entry.intersectionRatio > 0.1) {
                document.querySelectorAll('.toc-link.active').forEach(link => {
                    link.classList.remove('active');
                });
                tocLink.classList.add('active');
                
                // Expand parent group if collapsed
                const groupItem = tocLink.closest('.toc-sublist')?.parentElement;
                if (groupItem) {
                    groupItem.classList.add('active-group');
                }
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});