/* ==========================================================================
   ANIMATION.JS - Intersection Observer Scroll Reveals
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal-el');
  
  if ('IntersectionObserver' in window) {
    const revealObserverOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Trigger when 10% of the element is visible
      threshold: 0.05
    };

    const revealObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          // Once animated, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealObserverCallback, revealObserverOptions);
    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('reveal-active'));
  }
});
