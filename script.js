document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', () => {
          navMenu.classList.toggle('active');
          const icon = mobileMenuBtn.querySelector('i');
          if (navMenu.classList.contains('active')) {
              icon.classList.remove('ph-list');
              icon.classList.add('ph-x');
          } else {
              icon.classList.remove('ph-x');
              icon.classList.add('ph-list');
          }
      });
  }

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (navMenu.classList.contains('active')) {
              navMenu.classList.remove('active');
              const icon = mobileMenuBtn.querySelector('i');
              icon.classList.remove('ph-x');
              icon.classList.add('ph-list');
          }
      });
  });

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          
          if (target) {
              const headerOffset = 85; 
              const elementPosition = target.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
              window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
              });
          }
      });
  });

  // Active Link Highlighting on Scroll
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= (sectionTop - 150)) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current) && current !== '') {
              link.classList.add('active');
          }
      });
  });
});
