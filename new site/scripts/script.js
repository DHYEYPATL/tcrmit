// Select elements
let currentIndex = 0; // Current slide index
const carouselContainer = document.querySelector('.carousel-container');
const totalItems = document.querySelectorAll('.carousel-item').length;

// Function to go to the next slide
function goToNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems; // Loop back to the first slide after the last one
    const offset = currentIndex * -100; // Calculate the offset for the transform
    carouselContainer.style.transform = `translateX(${offset}%)`;
    updateDots(); // Update active dot
}

// Function to update dots
function updateDots() {
    const dots = document.querySelectorAll('.carousel-dots button');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Function to create dots
function createDots() {
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('carousel-dots');
    for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement('button');
        if (i === 0) dot.classList.add('active'); // First dot is active
        dot.addEventListener('click', () => {
            currentIndex = i;
            const offset = currentIndex * -100;
            carouselContainer.style.transform = `translateX(${offset}%)`;
            updateDots();
        });
        dotsContainer.appendChild(dot);
    }
    document.getElementById('competition-carousel').appendChild(dotsContainer);
}

// Auto-scroll every 5 seconds
setInterval(goToNextSlide, 5000);

// Initialize the carousel
createDots();

