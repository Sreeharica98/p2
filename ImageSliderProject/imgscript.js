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
function updateImage() {
    sliderImage.src = images[currentIndex];
}
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
updateImage();
