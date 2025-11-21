// Minimal scroll animation with page load effect
document.addEventListener('DOMContentLoaded', function() {
  // Find all elements that should animate on scroll
  const elements = document.querySelectorAll('.scroll-fade');
  
  // Add initial delay for page load animation
  elements.forEach((element, index) => {
    // Check if element is in viewport on page load
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
      // Animate elements that are visible on page load with staggered delay
      setTimeout(() => {
        element.classList.add('visible');
      }, 200 + (index * 100)); // 200ms base delay + 100ms per element
    }
  });
  
  // Create intersection observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe all elements
  elements.forEach(element => {
    observer.observe(element);
  });
});