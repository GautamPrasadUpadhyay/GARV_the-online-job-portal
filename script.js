// Add mobile menu functionality if needed
document.addEventListener('DOMContentLoaded', function() {
    // Card click handlers
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Add click handling for cards
            console.log('Card clicked:', card.querySelector('.card-title').textContent);
        });
    });
});