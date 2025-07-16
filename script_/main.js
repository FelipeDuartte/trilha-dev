document.addEventListener('DOMContentLoaded', () => {
    // Configurações iniciais
    initTypeWriter();
    setupScrollEffects();
    setupMobileMenu();
    setupSmoothScrolling();
    
    // Inicializa particles.js se estiver disponível
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'assets/particles.json');
    }
});

/**
 * Efeito de máquina de escrever no título principal
 */
function initTypeWriter() {
    const title = document.getElementById('typing-title');
    if (!title) return;

    const fullText = title.textContent;
    
    // Desativa o efeito em mobile
    if (window.innerWidth <= 768) {
        title.textContent = fullText;
        return;
    }
    
    // Configura o efeito de digitação
    title.textContent = '';
    title.style.borderRight = '3px solid var(--primary)';
    
    let i = 0;
    const type = () => {
        if (i < fullText.length) {
            title.textContent += fullText.charAt(i);
            i++;
            setTimeout(type, 50); // Velocidade fixa de 50ms
        } else {
            title.style.borderRight = 'none';
        }
    };
    
    // Inicia com delay
    setTimeout(type, 500);
    
    // Resize observer para mobile
    const resizeHandler = () => {
        if (window.innerWidth <= 768) {
            title.textContent = fullText;
            title.style.borderRight = 'none';
        }
    };
    
    window.addEventListener('resize', resizeHandler);
}

/**
 * Efeitos de scroll
 */
function setupScrollEffects() {
    // Header que muda no scroll
    const header = document.querySelector('header');
    if (header) {
        const scrollHandler = () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        };
        
        window.addEventListener('scroll', scrollHandler);
        scrollHandler(); // Estado inicial
    }

    // Intersection Observer para animações
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Delay progressivo para cards
                if (entry.target.matches('.track-card, .resource-card, .about-card')) {
                    const index = [...entry.target.parentElement.children].indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observa elementos animáveis
    document.querySelectorAll('.track-card, .resource-card, .about-card, .section-title, .section-subtitle')
        .forEach(el => observer.observe(el));
}

/**
 * Menu mobile responsivo
 */
function setupMobileMenu() {
    const menuBtn = document.querySelector('.navbar-toggler');
    if (!menuBtn) return;
    
    menuBtn.addEventListener('click', () => {
        document.body.style.overflow = 
            document.body.style.overflow === 'hidden' ? '' : 'hidden';
    });
    
    // Fecha o menu ao clicar em um link (usando delegação de eventos)
    document.addEventListener('click', (e) => {
        if (window.innerWidth > 768) return;
        
        if (e.target.closest('.nav-link')) {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                menuBtn.click(); // Fecha o menu
                document.body.style.overflow = '';
            }
        }
    });
}

/**
 * Scroll suave para âncoras
 */
function setupSmoothScrolling() {
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 80;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Atualiza a URL sem recarregar
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
        }
    });
}

/**
 * Polyfill para requestAnimationFrame (somente se necessário)
 */
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (callback) => {
        return setTimeout(() => {
            callback(Date.now());
        }, 16);
    };
    
    window.cancelAnimationFrame = (id) => {
        clearTimeout(id);
    };
}