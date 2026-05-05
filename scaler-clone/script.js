// =========================================
// MOBILE MENU TOGGLE
// =========================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// =========================================
// HEADER SHADOW ON SCROLL
// =========================================
const siteHeader = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        siteHeader.classList.add('scrolled');
    } else {
        siteHeader.classList.remove('scrolled');
    }
});

// =========================================
// SECTION NAV HIGHLIGHTING
// =========================================
const sectionNavLinks = document.querySelectorAll('.section-nav-link');
const sections = document.querySelectorAll('section[id]');

function highlightSectionNav() {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightSectionNav);

// =========================================
// SMOOTH SCROLLING FOR INTERNAL LINKS
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = 70;
                const sectionNavHeight = 50;
                const targetPosition = target.offsetTop - headerHeight - sectionNavHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
        
        // Close mobile menu on link click
        if (mainNav && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// =========================================
// PROGRAM SIDEBAR SWITCHING
// =========================================
const sidebarItems = document.querySelectorAll('.sidebar-item');
const programTabs = document.querySelectorAll('.program-tab');
const programCategories = document.querySelectorAll('.program-category');

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

programTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        programTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

programCategories.forEach(cat => {
    cat.addEventListener('click', () => {
        programCategories.forEach(c => c.classList.remove('active'));
        cat.classList.add('active');
    });
});

// =========================================
// VIDEO CARD CLICK
// =========================================
const videoThumbnail = document.querySelector('.video-thumbnail');
if (videoThumbnail) {
    videoThumbnail.addEventListener('click', () => {
        // Could open a modal or redirect to video
        alert('Video player would open here');
    });
}

// =========================================
// INIT
// =========================================
highlightSectionNav();
