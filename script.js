// Animated Code Background
function createCodeBackground() {
    const codeBackground = document.getElementById('codeBackground');
    
    const codeSnippets = [
        'function createWebsite() {',
        '  return "success";',
        '}',
        'const design = () => {',
        '  style.theme = "modern";',
        '};',
        '<div className="container">',
        '  <header>JAM Web</header>',
        '</div>',
        'body { background: #000; }',
        '.responsive { flex: 1; }',
        'npm install website-builder',
        'git commit -m "Deploy"',
        'SELECT * FROM projects',
        'WHERE status = "success"',
        'let innovation = true;',
        'const creativity = 100;',
        'if (business.needs.website)',
        '{ contact("JAM Web"); }',
        'import React from "react";',
        'export default Website;',
        '<!DOCTYPE html>',
        '<meta charset="UTF-8">',
        'padding: 2rem;',
        'margin: 0 auto;',
        'transition: all 0.3s;',
        ':hover { transform: scale(1.1); }',
        'async function deploy() {',
        '  await build();',
        '}',
        'console.log("Website Ready");',
        'border-radius: 10px;',
        'box-shadow: 0 5px 15px;',
        'const responsive = true;',
        'database.connect();',
        'server.listen(3000);',
        'router.get("/home");',
        'app.use(middleware);',
        '{ success: true }',
        'height: 100vh;',
        'display: grid;'
    ];

    let html = '';
    const lines = 50;
    
    for (let i = 0; i < lines; i++) {
        const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        const randomDelay = Math.random() * 5;
        const randomDuration = 10 + Math.random() * 20;
        
        html += `<div class="code-line" style="animation-delay: ${randomDelay}s; animation-duration: ${randomDuration}s;">${randomSnippet}</div>`;
    }
    
    codeBackground.innerHTML = html;
}

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    createCodeBackground();
    
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#contact') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact Form Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Add scroll animation for cards and service rows
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe service rows, package cards, and feature items
    const animatedElements = document.querySelectorAll('.service-row, .package-card, .feature-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(74, 123, 167, 0.2)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
});

// Add CSS for code line animation
const style = document.createElement('style');
style.textContent = `
    .code-line {
        opacity: 0;
        animation: float 15s ease-in-out infinite;
        margin: 10px 0;
        white-space: nowrap;
        position: relative;
    }

    @keyframes float {
        0%, 100% {
            opacity: 0;
            transform: translateY(0) translateX(-50px);
        }
        10%, 90% {
            opacity: 0.3;
        }
        50% {
            opacity: 0.2;
            transform: translateY(-100vh) translateX(50px);
        }
    }
`;
document.head.appendChild(style);
