
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Handle dark/light mode toggle
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', function() {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  
  // Handle navbar scroll effect
  const navbar = document.querySelector('.navbar');
  function handleScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial scroll position
  
  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      // Create mobile menu if it doesn't exist
      if (!document.querySelector('.mobile-menu')) {
        createMobileMenu();
      }
      document.querySelector('.mobile-menu').classList.add('active');
    });
  }
  
  function createMobileMenu() {
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
      <div class="mobile-menu-header">
        <a href="#" class="logo">
          <span>LitPages</span>
        </a>
        <button class="mobile-menu-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <nav class="mobile-nav">
        <a href="#templates">Templates</a>
        <a href="#features">Features</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="mobile-cta">
        <a href="#login" class="button-secondary">Login</a>
        <a href="#register" class="button-primary">Get Started</a>
      </div>
    `;
    
    document.body.appendChild(mobileMenu);
    
    // Close mobile menu
    const closeButton = mobileMenu.querySelector('.mobile-menu-close');
    closeButton.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
      });
    });
  }
  
  // Template tabs functionality
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  const templateCards = document.querySelectorAll('.template-card');
  
  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      // Remove active class from all triggers
      tabTriggers.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked trigger
      this.classList.add('active');
      
      // Filter templates
      const category = this.getAttribute('data-category');
      
      templateCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  // Accordion functionality
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const content = this.nextElementSibling;
      
      // Update ARIA attributes
      this.setAttribute('aria-expanded', !expanded);
      content.setAttribute('aria-hidden', expanded);
      
      // Toggle content visibility
      if (expanded) {
        content.style.height = '0';
      } else {
        content.style.height = content.scrollHeight + 'px';
      }
    });
    
    // Set initial state
    trigger.setAttribute('aria-expanded', 'false');
    const content = trigger.nextElementSibling;
    content.setAttribute('aria-hidden', 'true');
    content.style.height = '0';
  });
  
  // Smooth scrolling for hash links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
        
        // Update URL without scrolling
        history.pushState(null, '', targetId);
      }
    });
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      setTimeout(() => {
        // Show success message
        alert('Message sent successfully! We\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 1500);
    });
  }
  
  // Add animation classes to elements as they scroll into view
  function animateOnScroll() {
    const elements = document.querySelectorAll('.section-header, .feature-card, .service-card, .step-card, .pricing-card');
    
    elements.forEach((element, index) => {
      if (isElementInViewport(element) && !element.classList.contains('animated')) {
        // Add animation with delay based on index
        setTimeout(() => {
          element.classList.add('animate-slide-up', 'animated');
        }, index * 100);
      }
    });
  }
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
      rect.bottom >= 0
    );
  }
  
  window.addEventListener('scroll', animateOnScroll);
  // Initial check
  animateOnScroll();
});
