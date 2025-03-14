const images = [
   "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

// Function to update the displayed image
function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Next Button Logic
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Previous Button Logic
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Initial Image Display
updateImage();
