// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
});

// Button Ripple Effect
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .program-card, .big-stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add animation keyframes via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .navbar.scrolled {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    .nav-links.active {
        display: flex;
        position: absolute;
        top: 72px;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 24px;
        gap: 16px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid var(--gray-200);
    }
`;
document.head.appendChild(style);

// Stats Counter Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number, .big-number');
            statNumbers.forEach(stat => {
                const finalText = stat.textContent;
                const numericMatch = finalText.match(/[\d,]+/);
                
                if (numericMatch) {
                    const targetNum = parseInt(numericMatch[0].replace(/,/g, ''));
                    const suffix = finalText.replace(numericMatch[0], '');
                    let current = 0;
                    const increment = targetNum / 50;
                    
                    const updateCounter = () => {
                        current += increment;
                        if (current < targetNum) {
                            stat.textContent = Math.floor(current).toLocaleString() + suffix;
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.textContent = finalText;
                        }
                    };
                    
                    updateCounter();
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
const statsBanner = document.querySelector('.stats-banner');

if (heroStats) statsObserver.observe(heroStats);
if (statsBanner) statsObserver.observe(statsBanner);

// Add CSS for navbar shadow when scrolled
const navbarStyle = document.createElement('style');
navbarStyle.textContent = `
    .navbar {
        transition: box-shadow 0.3s ease;
    }
`;
document.head.appendChild(navbarStyle);
