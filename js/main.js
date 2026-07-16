/* ==========================================================================
   MAIN.JS - Scroll Progress, Back to Top, and Contact Form Handling
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Progress Bar
  const scrollProgress = document.getElementById('scroll-progress');
  const btnToTop = document.getElementById('btn-to-top');

  window.addEventListener('scroll', () => {
    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Scroll progress percentage
    if (height > 0) {
      const scrolled = (windowScroll / height) * 100;
      scrollProgress.style.width = scrolled + '%';
    } else {
      scrollProgress.style.width = '0%';
    }

    // 2. Back to top button visibility
    if (windowScroll > 400) {
      btnToTop.classList.add('show');
    } else {
      btnToTop.classList.remove('show');
    }
  });

  // Scroll to Top action
  btnToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 3. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !message) {
        showToast('Mohon lengkapi semua field formulir.', 'danger');
        return;
      }

      // Simulation - disable buttons and show loading
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Mengirim...';

      setTimeout(() => {
        // Success notification
        showToast(`Terima kasih ${name}, pesan Anda telah terkirim!`, 'success');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1500);
    });
  }

  // Toast helper function
  function showToast(message, type = 'success') {
    // Create toast container if not exists
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      toastContainer.style.zIndex = '9999';
      document.body.appendChild(toastContainer);
    }

    const toastId = 'toast-' + Date.now();
    const bgClass = type === 'success' ? 'bg-primary' : 'bg-danger';
    const iconClass = type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill';

    const toastHTML = `
      <div id="${toastId}" class="toast align-items-center text-white ${bgClass} border-0 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="4000">
        <div class="d-flex">
          <div class="toast-body d-flex align-items-center gap-2">
            <i class="bi ${iconClass}"></i>
            <span>${message}</span>
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;

    toastContainer.insertAdjacentHTML('beforeend', toastHTML);
    const toastElement = document.getElementById(toastId);
    
    // Bootstrap Toast initialization
    if (typeof bootstrap !== 'undefined' && bootstrap.Toast) {
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
      
      toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
      });
    } else {
      // Fallback if bootstrap js isn't loaded yet
      setTimeout(() => {
        toastElement.style.opacity = '0';
        setTimeout(() => toastElement.remove(), 500);
      }, 4000);
    }
  }
});
