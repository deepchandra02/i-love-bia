document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.getElementById('heart-container');
    const addHeartsButton = document.getElementById('add-hearts');
    
    // Create initial hearts
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
    
    // Event listener for add hearts button
    addHeartsButton.addEventListener('click', () => {
        // Create a burst of hearts
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                createHeart();
            }, i * 100);
        }
    });
    
    // Function to create floating hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        
        // Random heart color
        const colors = ['❤️', '💖', '💗', '💓', '💕', '💝'];
        heart.innerHTML = colors[Math.floor(Math.random() * colors.length)];
        
        // Random position
        const startPositionX = Math.random() * window.innerWidth;
        heart.style.left = `${startPositionX}px`;
        heart.style.bottom = '-50px';
        
        // Random duration
        const animationDuration = 5 + Math.random() * 5;
        heart.style.animationDuration = `${animationDuration}s`;
        
        heartContainer.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, animationDuration * 1000);
    }
    
    // Create hearts periodically
    setInterval(createHeart, 1000);
});