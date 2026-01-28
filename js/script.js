// ===================================
// Enhanced Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Initialize AOS (Animate On Scroll)
// ===================================
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    delay: 0,
    disable: false
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav links
    updateActiveNav();
    
    lastScroll = currentScroll;
});

// ===================================
// Active Navigation Link
// ===================================
function updateActiveNav() {
    const scrollY = window.pageYOffset;
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// Mobile Menu Toggle
// ===================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle) navToggle.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// ===================================
// Floating Particles Background
// ===================================
function createParticles() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    
    const particleCount = window.innerWidth > 768 ? 40 : 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(99, 102, 241, ${Math.random() * 0.4 + 0.2});
            border-radius: 50%;
            left: ${startX}px;
            top: ${startY}px;
            pointer-events: none;
            animation: float-particle ${duration}s infinite ease-in-out;
            animation-delay: ${delay}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float-particle {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
        }
        25% {
            transform: translate(40px, -80px) scale(1.1);
            opacity: 0.6;
        }
        50% {
            transform: translate(-25px, -160px) scale(0.9);
            opacity: 0.4;
        }
        75% {
            transform: translate(60px, -120px) scale(1.05);
            opacity: 0.5;
        }
    }
`;
document.head.appendChild(particleStyle);

createParticles();

// ===================================
// 3D Card Tilt Effect
// ===================================
const card3d = document.querySelector('.card-3d');

if (card3d) {
    card3d.addEventListener('mousemove', (e) => {
        const rect = card3d.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        card3d.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card3d.addEventListener('mouseleave', () => {
        card3d.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
}

// ===================================
// Portfolio Filter
// ===================================
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        // Filter items with animation
        portfolioItems.forEach((item, index) => {
            const categories = item.getAttribute('data-category');
            
            if (filter === 'all' || (categories && categories.includes(filter))) {
                setTimeout(() => {
                    item.classList.remove('hide');
                    item.style.animation = 'fadeInScale 0.5s ease forwards';
                }, index * 50);
            } else {
                item.classList.add('hide');
            }
        });
    });
});

// Portfolio animation
const portfolioAnimStyle = document.createElement('style');
portfolioAnimStyle.textContent = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
`;
document.head.appendChild(portfolioAnimStyle);

// ===================================
// Skills Animation on Scroll
// ===================================
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    const progress = bar.style.getPropertyValue('--progress');
                    bar.style.width = progress;
                }, index * 100);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// ===================================
// Counter Animation
// ===================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate stat counters
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                const text = stat.textContent;
                const number = parseInt(text);
                if (!isNaN(number)) {
                    setTimeout(() => {
                        animateCounter(stat, number, 2000);
                    }, index * 200);
                }
            });
            heroObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

const hero = document.querySelector('.hero');
if (hero) {
    heroObserver.observe(hero);
}

// ===================================
// Intersection Observer for Cards
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.about-card, .timeline-item, .skill-category, .contact-card').forEach(el => {
    observer.observe(el);
});

// Card animation
const cardAnimStyle = document.createElement('style');
cardAnimStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(cardAnimStyle);

// ===================================
// Button Ripple Effect
// ===================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===================================
// Magnetic Button Effect
// ===================================
const magneticElements = document.querySelectorAll('.btn, .social-link');

magneticElements.forEach(el => {
    el.addEventListener('mousemove', function(e) {
        if (window.innerWidth <= 768) return;
        
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    el.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
    });
});

// ===================================
// Performance Optimizations
// ===================================
// Reduce animations for users who prefer reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animationDuration = '0.01ms !important';
        el.style.transitionDuration = '0.01ms !important';
    });
}

// ===================================
// Page Load Handler
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    AOS.refresh();
});

// ===================================
// Console Easter Egg
// ===================================
console.log(`
%c
╔═══════════════════════════════════════╗
║                                       ║
║    Portfolio by Digvijay Singh       ║
║    WordPress Developer & Innovator   ║
║                                       ║
║    Interested in working together?   ║
║    Let's connect!                    ║
║                                       ║
╚═══════════════════════════════════════╝
`,
'color: #6366f1; font-size: 14px; font-family: monospace;'
);

console.log(
    '%cLooking for a talented developer? 👋',
    'color: #ec4899; font-size: 16px; font-weight: bold;'
);