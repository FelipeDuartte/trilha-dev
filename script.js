document.addEventListener('DOMContentLoaded', function() {
    initTypeWriter();
    createParticles();
    setupScrollEffects();
    setupMobileMenu();
});

function initTypeWriter() {
    const title = document.getElementById('typing-title');
    if (!title) return;

    const fullText = title.textContent;
    title.dataset.fullText = fullText;
    
    
    if (window.innerWidth <= 768) {
        
        title.textContent = fullText;
        title.style.borderRight = 'none';
    } else {
     
        typeWriter(title, fullText);
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            title.textContent = fullText;
            title.style.borderRight = 'none';
        }
    });
}

function typeWriter(element, text) {
    element.textContent = '';
    element.style.display = 'inline-block';
    element.style.verticalAlign = 'bottom';
    element.style.borderRight = '3px solid var(--primary)';
    
    let i = 0;
    const speed = 100;
    
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            void element.offsetWidth;
            i++;
            setTimeout(typing, speed);
        } else {
            element.style.borderRight = 'none';
        }
    }
    
    setTimeout(typing, 500);
}

function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particleCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.width = `${Math.random() * 5 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        hero.appendChild(particle);
    }
}

function setupScrollEffects() {

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.track-card, .resource-card, .about-card').forEach(card => {
        observer.observe(card);
    });
}

function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    if (!menuBtn || !nav) return;
    
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
    
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('show');
            }
        });
    });
}