document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.getElementById('heart-container');
    const artContainer = document.getElementById('art-container');
    const addHeartsButton = document.getElementById('add-hearts');
    
    // Add cute art elements
    addCuteArtElements();
    
    // Create initial hearts
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
    
    // Event listener for add hearts button
    addHeartsButton.addEventListener('click', (e) => {
        // Create a burst of hearts shooting from the button
        const buttonRect = addHeartsButton.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top;
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                createShootingHeart(buttonCenterX, buttonCenterY);
            }, i * 50);
        }
    });
    
    // Function to create floating hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        
        // Random heart color
        const colors = ['❤️', '💖', '💗', '💓', '💕', '💝', '🌸', '🐱', '🐾'];
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
    
    // Function to create hearts that shoot from the button
    function createShootingHeart(x, y) {
        const heart = document.createElement('div');
        heart.classList.add('shooting-heart');
        
        // Random heart color
        const colors = ['❤️', '💖', '💗', '💓', '💕', '💝', '🌸', '🐱', '🐾'];
        heart.innerHTML = colors[Math.floor(Math.random() * colors.length)];
        
        // Set starting position at button
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        
        // Random angle for shooting direction
        const angle = Math.random() * Math.PI; // Semicircle upward
        const distance = 100 + Math.random() * 200;
        const speedFactor = 0.5 + Math.random() * 1.5;
        
        // Apply custom animation
        heart.style.setProperty('--angle', angle + 'rad');
        heart.style.setProperty('--distance', distance + 'px');
        heart.style.setProperty('--speed', speedFactor);
        
        heartContainer.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
    
    // Create hearts periodically
    setInterval(createHeart, 1000);
    
    // Function to add cute art elements around the page
    function addCuteArtElements() {
        const artElements = [
            '🐱', '💕', '🎀', '🧸', '🍰', '☕', '🍪', '📚', '🎮', '💻', '😺', '🦊', '🌈', '⭐'
        ];
        
        // Create multiple scattered art elements
        for (let i = 0; i < 20; i++) {
            const element = document.createElement('div');
            element.classList.add('art-element');
            element.innerHTML = artElements[Math.floor(Math.random() * artElements.length)];
            
            // Random position
            element.style.left = `${Math.random() * 100}vw`;
            element.style.top = `${Math.random() * 100}vh`;
            
            // Random rotation
            element.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            artContainer.appendChild(element);
        }
    }
});