// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
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

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all scroll-animate elements
document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});

// Add interactive effects for feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add interactive effects for download cards
document.querySelectorAll('.download-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Loading animation for page
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body initially
    document.body.style.opacity = '0';
    
    // Fade in the page
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize any other components
    initializeComponents();
});

// Initialize components function
function initializeComponents() {
    // Add pulse animation to CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.6s ease';
        });
        
        button.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
    
    // Add typing effect to hero title (optional)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        // Store original text
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        // Type out the text
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
}

// Add CSS animation for pulse effect
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const background = document.querySelector('.background-effects');
    if (background) {
        background.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Add mobile menu functionality (if needed in the future)
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
initializeMobileMenu();

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Add escape key to close any open modals or menus
    if (e.key === 'Escape') {
        const activeElements = document.querySelectorAll('.active');
        activeElements.forEach(el => el.classList.remove('active'));
    }
    
    // Add enter key support for buttons
    if (e.key === 'Enter' && e.target.classList.contains('btn')) {
        e.target.click();
    }
});

// Performance optimization - debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
    // Your scroll handling logic here
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, 10);

// Replace the original scroll event listener
window.removeEventListener('scroll', () => {});
window.addEventListener('scroll', debouncedScrollHandler);

// Image loading and effects
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading for images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                // If image is already loaded
                if (img.complete) {
                    img.style.opacity = '1';
                }
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Enhanced screenshot hover effects
document.querySelectorAll('.screenshot').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.05) contrast(1.1) saturate(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(0.95) contrast(1.05)';
    });
});

// Logo animation on scroll
window.addEventListener('scroll', () => {
    const logo = document.querySelector('.main-logo');
    if (logo) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        logo.style.transform = `translateY(${rate}px)`;
    }
});

// Enhanced main logo interactions
document.querySelector('.main-logo').addEventListener('click', function() {
    // Add smooth click animation
    this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    this.style.transform = 'scale(1.25)';
    setTimeout(() => {
        this.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        this.style.transform = 'scale(1.15)';
    }, 200);
});

// Navigation logo hover effect
document.querySelector('.nav-logo').addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    this.style.transform = 'scale(1.1) rotate(5deg)';
});

document.querySelector('.nav-logo').addEventListener('mouseleave', function() {
    this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    this.style.transform = 'scale(1) rotate(0deg)';
});

// Image Modal Functions
function openImageModal(imageSrc, imageAlt) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modalCaption.textContent = imageAlt;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add keyboard support
    document.addEventListener('keydown', modalKeyHandler);
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
    
    // Remove keyboard support
    document.removeEventListener('keydown', modalKeyHandler);
}

function modalKeyHandler(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
}

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeImageModal();
    }
});

// Enhanced zoom button effects
document.querySelectorAll('.zoom-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add loading indicator for modal images
function addImageLoadingEffect() {
    const modalImage = document.getElementById('modalImage');
    
    modalImage.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    modalImage.addEventListener('loadstart', function() {
        this.style.opacity = '0.5';
    });
}

// Initialize image loading effects
document.addEventListener('DOMContentLoaded', addImageLoadingEffect);
