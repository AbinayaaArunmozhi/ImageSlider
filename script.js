// Array of image URLs
const images = [
    "https://via.placeholder.com/400x250/ff5733/fff?text=Image+1",
    "https://via.placeholder.com/400x250/33ff57/fff?text=Image+2",
    "https://via.placeholder.com/400x250/3357ff/fff?text=Image+3",
    "https://via.placeholder.com/400x250/f3ff33/000?text=Image+4"
];

// Select elements
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0; // Track current image index

// Function to update the image
function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Event listener for "Next" button
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop to first image
    updateImage();
});

// Event listener for "Previous" button
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to last image
    updateImage();
});

// Initialize with first image
updateImage();
