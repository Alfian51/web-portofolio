/* ==========================================================================
   NAVBAR.JS - Scroll Blur & Active Link Highlight
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.custom-navbar');
  const navLinks = document.querySelectorAll('.nav-link-custom');
  const sections = document.querySelectorAll('section[id]');
  
  // 1. Shrink navbar and add border on scroll
  const handleNavbarScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll(); // Initial check

  // 2. Active Link tracking on Scroll (ScrollSpy)
  const scrollSpyOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the center third of the screen
    threshold: 0
  };

  const scrollSpyCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(scrollSpyCallback, scrollSpyOptions);
  sections.forEach(section => observer.observe(section));

  // 3. Smooth Close Mobile Menu after click
  const navCollapse = document.querySelector('.navbar-collapse');
  const navToggler = document.querySelector('.navbar-toggler-custom');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse.classList.contains('show')) {
        navToggler.click(); // Close collapse
      }
    });
  });
});
