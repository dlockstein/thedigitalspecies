/**
 * THE DIGITAL SPECIES - MAIN JAVASCRIPT
 * Interactive elements, form handling, smooth scroll
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // MOBILE NAVIGATION TOGGLE
    // ==========================================
    
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }
    
    
    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Get navbar height for offset
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });
    
    
    // ==========================================
    // FORM VALIDATION & HANDLING
    // ==========================================
    
    // Email newsletter forms
    const newsletterForms = document.querySelectorAll('.newsletter-form, .capture-form, .sidebar-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput) {
                const email = emailInput.value.trim();
                
                // Basic email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                if (!emailRegex.test(email)) {
                    e.preventDefault();
                    alert('Please enter a valid email address.');
                    emailInput.focus();
                    return false;
                }
            }
            
            // If form is using mailto: fallback, show message
            if (this.action.includes('mailto:')) {
                // Let the mailto: link work, but also show feedback
                setTimeout(() => {
                    showFormMessage(this, 'Thanks! Your email client should open. Send the email to complete signup.');
                }, 100);
            }
        });
    });
    
    // Helper function to show form messages
    function showFormMessage(form, message) {
        // Create or update message element
        let messageEl = form.querySelector('.form-message');
        
        if (!messageEl) {
            messageEl = document.createElement('div');
            messageEl.className = 'form-message';
            messageEl.style.cssText = 'margin-top: 1rem; padding: 0.75rem; background-color: #10B981; color: white; border-radius: 0.5rem; text-align: center; font-weight: 600;';
            form.appendChild(messageEl);
        }
        
        messageEl.textContent = message;
        messageEl.style.display = 'block';
        
        // Hide after 5 seconds
        setTimeout(() => {
            messageEl.style.display = 'none';
        }, 5000);
    }
    
    
    // ==========================================
    // SCROLL TO TOP BUTTON
    // ==========================================
    
    // Create scroll-to-top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color, #4F46E5);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 999;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    
    // ==========================================
    // LAZY LOADING IMAGES (if needed in future)
    // ==========================================
    
    // Native lazy loading is enabled via loading="lazy" attribute in HTML
    // This is a fallback for older browsers
    
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    
    // ==========================================
    // ANALYTICS EVENT TRACKING
    // ==========================================
    
    // Track Amazon link clicks
    const amazonLinks = document.querySelectorAll('a[href*="amazon.com"]');
    
    amazonLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Google Analytics 4 event (if GA is loaded)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Book Purchase',
                    'event_label': 'Amazon Link',
                    'value': this.href
                });
            }
            
            // Console log for debugging
            console.log('Amazon link clicked:', this.href);
        });
    });
    
    // Track resource download clicks
    const resourceLinks = document.querySelectorAll('.btn-resource');
    
    resourceLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Resource',
                    'event_label': 'Download Request',
                    'value': this.textContent
                });
            }
            
            console.log('Resource link clicked:', this.textContent);
        });
    });
    
    // Track newsletter signups
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'signup', {
                    'event_category': 'Newsletter',
                    'event_label': 'Email Signup'
                });
            }
            
            console.log('Newsletter signup submitted');
        });
    });
    
    
    // ==========================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // ==========================================
    
    // Highlight active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    
    // ==========================================
    // FADE-IN ANIMATION ON SCROLL (optional enhancement)
    // ==========================================
    
    // Add fade-in class to elements as they come into view
    const fadeElements = document.querySelectorAll('.feature, .who-card, .testimonial, .resource-card');
    
    if ('IntersectionObserver' in window && fadeElements.length > 0) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                    
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(el => fadeObserver.observe(el));
    }
    
    
    // ==========================================
    // CONSOLE MESSAGE (fun Easter egg for developers)
    // ==========================================
    
    console.log('%c👋 Hello, curious developer!', 'font-size: 20px; font-weight: bold; color: #4F46E5;');
    console.log('%cInterested in AI in education? Check out The Digital Species:', 'font-size: 14px; color: #6B7280;');
    console.log('%chttps://www.amazon.com/dp/B0GN38NDQW', 'font-size: 14px; color: #4F46E5; text-decoration: underline;');
    console.log('%c\nThis site built with pure HTML, CSS, and vanilla JS. No frameworks. No bloat. Just fast, accessible web design.', 'font-size: 12px; color: #6B7280; font-style: italic;');
    
});


// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Debounce function to limit rate of function execution
 * Useful for scroll and resize events
 */
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

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


// ==========================================
// PERFORMANCE MONITORING (optional)
// ==========================================

// Log page load time
window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
        
        // Send to analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                'name': 'page_load',
                'value': loadTime,
                'event_category': 'Performance'
            });
        }
    }
});
