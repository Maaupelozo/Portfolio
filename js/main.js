/* ==========================================
   MAIN JAVASCRIPT - PORTFOLIO
   ========================================== */

// ==================== Utility Functions ====================

/**
 * Debounce function to optimize performance
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Throttle function to limit function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit in milliseconds
 */
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of target element
 */
function smoothScrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== Navbar ====================

class Navbar {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');

        this.init();
    }

    init() {
        // Mobile menu toggle
        if (this.mobileMenuBtn) {
            this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Add scroll listener for navbar style
        window.addEventListener('scroll', () => this.handleScroll());
        // Call on page load to set initial state
        this.handleScroll();
    }

    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        this.mobileMenuBtn.classList.toggle('active');
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
        this.mobileMenuBtn.classList.remove('active');
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }
}

// ==================== Scroll to Top ====================

class ScrollToTop {
    constructor() {
        this.button = document.getElementById('scrollToTop');
        this.init();
    }

    init() {
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    handleScroll() {
        if (window.scrollY > 300) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ==================== Contact Form ====================

class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.messageElement = document.getElementById('formMessage');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const name = this.form.querySelector('#name').value.trim();
        const email = this.form.querySelector('#email').value.trim();
        const message = this.form.querySelector('#message').value.trim();

        // Validation
        if (!this.validateForm(name, email, message)) {
            return;
        }

        // Here you would typically send data to a backend
        // For now, we'll just show a success message
        this.showMessage(
            '✓ Mensaje enviado correctamente. Te contactaré pronto.',
            'success'
        );

        // Reset form
        this.form.reset();

        // Optional: Clear message after 5 seconds
        setTimeout(() => {
            this.messageElement.style.display = 'none';
        }, 5000);
    }

    validateForm(name, email, message) {
        if (!name) {
            this.showMessage('Por favor, ingresa tu nombre.', 'error');
            return false;
        }

        if (!email || !this.isValidEmail(email)) {
            this.showMessage('Por favor, ingresa un email válido.', 'error');
            return false;
        }

        if (!message || message.length < 10) {
            this.showMessage('El mensaje debe tener al menos 10 caracteres.', 'error');
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showMessage(text, type) {
        this.messageElement.textContent = text;
        this.messageElement.className = `form-message ${type}`;
        this.messageElement.style.display = 'block';
    }
}

// ==================== Intersection Observer ====================

class LazyLoad {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observeElements();
        } else {
            // Fallback for older browsers
            this.loadAllImages();
        }
    }

    observeElements() {
        const images = document.querySelectorAll('img[loading="lazy"]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Image is already lazy loaded by browser
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });

        images.forEach(img => imageObserver.observe(img));
    }

    loadAllImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.loading = 'eager';
        });
    }
}

// ==================== Animations On Scroll ====================

class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observeElements();
        }
    }

    observeElements() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe all cards and content elements
        const cards = document.querySelectorAll(
            '.experience-card, .project-card, .contact-card, .skill-group'
        );
        cards.forEach(card => {
            card.classList.add('fade-in');
            observer.observe(card);
        });
    }
}

// ==================== Smooth Scroll Links ====================

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#' || href === '#top') {
                    return; // Let default behavior handle these
                }

                e.preventDefault();
                const targetId = href.substring(1);
                const target = document.getElementById(targetId);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ==================== Keyboard Navigation ====================

class KeyboardNavigation {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            // Skip to main content with Alt+1
            if (e.altKey && e.key === '1') {
                document.getElementById('top')?.focus();
            }

            // Open/Close mobile menu with Escape
            if (e.key === 'Escape') {
                const navMenu = document.getElementById('navMenu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    }
}

// ==================== Performance Monitoring ====================

class Performance {
    constructor() {
        this.init();
    }

    init() {
        // Log performance metrics in development
        if (process.env.NODE_ENV !== 'production') {
            window.addEventListener('load', () => {
                this.logMetrics();
            });
        }
    }

    logMetrics() {
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            const navigation = timing.navigationStart;

            const metrics = {
                'DOM Content Loaded': timing.domContentLoadedEventEnd - navigation,
                'Page Load Time': timing.loadEventEnd - navigation,
                'Time to First Paint': timing.responseStart - navigation
            };

            console.log('Performance Metrics:', metrics);
        }
    }
}

// ==================== Theme Toggle ====================

class ThemeToggle {
    constructor() {
        this.button = document.getElementById('themeToggle');
        this.isDark = true;

        if (this.button) {
            this.button.addEventListener('click', () => this.toggle());
        }
    }

    toggle() {
        this.isDark = !this.isDark;
        // Could be extended to add actual dark/light theme switching
        // For now, it's just a visual button with hover effect
    }
}

// ==================== Projects Manager ====================

class ProjectsManager {
    constructor() {
        this.container = document.getElementById('projects-container');
        this.projects = [
            {
                title: "Pichus Tandil",
                description: "Proyecto de e-commerce especializado en la venta de ropa femenina (Proyecto Freelancer).",
                tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
                image: "assets/images/project1.svg", // Placeholder, user might want to change
                demoLink: "#",
                codeLink: null // No code link for freelance/private projects usually
            },
            {
                title: "Coder Market",
                description: "Proyecto con generación de tickets de compra y un dashboard administrativo para gestionar productos.",
                tags: ["React", "Firebase", "Sass", "JavaScript"],
                image: "assets/images/project2.svg",
                demoLink: "#",
                codeLink: "#"
            },
            {
                title: "Nos casamos",
                description: "Página web para una pareja de Tandil, Argentina, creada especialmente para su boda.",
                tags: ["HTML", "CSS", "JavaScript"],
                image: "assets/images/project3.svg",
                demoLink: "#",
                codeLink: "#"
            }
        ];

        this.init();
    }

    init() {
        if (this.container) {
            this.renderProjects();
        }
    }

    renderProjects() {
        const projectsHTML = this.projects.map(project => {
            /* Code Button removed as per user request */
            const demoBtn = project.demoLink ? `
                <a href="${project.demoLink}" target="_blank" class="btn btn-outline-social">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    Preview
                </a>
            ` : '';

            // Generate Tags HTML
            const tagsHTML = project.tags.map(tag => `
                <span class="tech-badge">
                    ${this.getTechIcon(tag)}
                    ${tag}
                </span>
            `).join('');

            return `
                <article class="project-item fade-in">
                    <div class="project-preview">
                        <div class="browser-header">
                            <span class="dot red"></span>
                            <span class="dot yellow"></span>
                            <span class="dot green"></span>
                        </div>
                        <div class="preview-image-container">
                             <img src="${project.image}" alt="${project.title}" loading="lazy">
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-tags">
                            ${tagsHTML}
                        </div>
                        <p class="project-desc">
                            ${project.description}
                        </p>
                        <div class="project-actions">
                            ${demoBtn}
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        this.container.innerHTML = projectsHTML;
    }

    getTechIcon(tech) {
        // Simple mapping for icons, can be expanded
        const iconMap = {
            'Next.js': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v10h-2z"/></svg>', // Placeholder
            'default': '⚡'
        };
        // Return icon if exists, else return empty string or default
        // For now using simple emoji/text fallback to keep it simple without too many SVGs inline
        return '';
    }
}

// ==================== Initialize App ====================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    new Navbar();
    new ThemeToggle();
    new ProjectsManager();
    new ScrollToTop();
    new ContactForm();
    new LazyLoad();
    new ScrollAnimations();
    new SmoothScroll();
    new KeyboardNavigation();
    new Performance();

    console.log('Portfolio initialized successfully');
});

// Handle visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('User left the page');
    } else {
        console.log('User returned to the page');
    }
});

// ==================== CSS Animations Support ====================

// Add fade-in animation styles dynamically if needed
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
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

        .fade-in {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
        }

        .fade-in:nth-child(1) { animation-delay: 0.1s; }
        .fade-in:nth-child(2) { animation-delay: 0.2s; }
        .fade-in:nth-child(3) { animation-delay: 0.3s; }
        .fade-in:nth-child(4) { animation-delay: 0.4s; }
    `;
    document.head.appendChild(style);
}

// Add animation styles on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addAnimationStyles);
} else {
    addAnimationStyles();
}
