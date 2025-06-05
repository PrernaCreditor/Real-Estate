document.addEventListener('DOMContentLoaded', function() {
    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');
    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuBtn.classList.toggle('fa-times');
    });

    // Login Form Toggle
    const loginBtn = document.querySelector('#login-btn');
    const loginForm = document.querySelector('.login-form-container');
    const closeLoginForm = document.querySelector('#close-login-form');
    
    loginBtn.addEventListener('click', function() {
        loginForm.classList.add('active');
    });
    
    closeLoginForm.addEventListener('click', function() {
        loginForm.classList.remove('active');
    });

    // Search Form Toggle
    const searchBtn = document.querySelector('#search-btn');
    const searchForm = document.querySelector('.search-form-container');
    const closeSearchForm = document.querySelector('#close-search-form');
    
    searchBtn.addEventListener('click', function() {
        searchForm.classList.add('active');
    });
    
    closeSearchForm.addEventListener('click', function() {
        searchForm.classList.remove('active');
    });

    // Home Slider
    const homeSlider = new Swiper('.hero-slider', {
        loop: true,
        grabCursor: true,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Testimonials Slider
    const testimonialsSlider = new Swiper('.testimonials-slider', {
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
        },
    });

    // Quick Search Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Price Range Slider
    const priceSlider = document.getElementById('price-slider');
    const priceValue = document.getElementById('price-value');
    
    priceSlider.addEventListener('input', function() {
        const value = parseInt(this.value).toLocaleString();
        priceValue.textContent = `$${value}`;
    });

    // Stats Counter Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats');
    
    function animateStats() {
        const statsPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (statsPosition < screenPosition) {
            statNumbers.forEach(stat => {
                const target = +stat.getAttribute('data-count');
                const count = +stat.innerText;
                const increment = target / 100;
                
                if (count < target) {
                    stat.innerText = Math.ceil(count + increment);
                    setTimeout(animateStats, 10);
                } else {
                    stat.innerText = target;
                }
            });
        }
    }
    
    window.addEventListener('scroll', animateStats);

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navbar.classList.remove('active');
                menuBtn.classList.remove('fa-times');
            }
        });
    });

    // Property Card Hover Effect
    const propertyCards = document.querySelectorAll('.property-card');
    propertyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.property-image img').style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.property-image img').style.transform = 'scale(1)';
        });
    });

    // Agent Card Hover Effect
    const agentCards = document.querySelectorAll('.agent-card');
    agentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.agent-image img').style.transform = 'scale(1.1)';
            this.querySelector('.social-links').style.transform = 'translateY(0)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.agent-image img').style.transform = 'scale(1)';
            this.querySelector('.social-links').style.transform = 'translateY(100%)';
        });
    });

    // Initialize AOS (Animate On Scroll) if you want to add more animations
    // AOS.init();
});