// Card Tilt Effect - Simple mouse-based card rotation
// Cards rotate smoothly based on mouse cursor position

class CardTiltEffect {
  constructor() {
    this.cards = [];
    this.init();
  }

  init() {
    const cardElements = document.querySelectorAll('.card-3d');
    
    cardElements.forEach(card => {
      this.setupCard(card);
    });
  }

  setupCard(cardElement) {
    const cardData = {
      element: cardElement,
      maxTilt: 20, // Maximum tilt in degrees
    };

    this.cards.push(cardData);

    // Add event listeners
    cardElement.addEventListener('mousemove', (e) => this.onMouseMove(e, cardData));
    cardElement.addEventListener('mouseleave', (e) => this.onMouseLeave(e, cardData));
  }

  onMouseMove(event, cardData) {
    const card = cardData.element;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card (0 to 1)
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    
    // Convert to rotation values (-1 to 1, then to degrees)
    const rotateY = (x - 0.5) * 2 * cardData.maxTilt;
    const rotateX = (y - 0.5) * -2 * cardData.maxTilt;
    
    // Apply smooth rotation
    card.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale3d(1.05, 1.05, 1.05)
    `;
  }

  onMouseLeave(event, cardData) {
    // Return to original position
    cardData.element.style.transform = `
      perspective(1000px) 
      rotateX(0deg) 
      rotateY(0deg) 
      scale3d(1, 1, 1)
    `;
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CardTiltEffect();
});

// Re-initialize if content changes
if (typeof window !== 'undefined') {
  window.CardTiltEffect = CardTiltEffect;
}