
const container = document.querySelector(".carousel-container");
const carouselImage = document.querySelector(".carousel-image-wrapper");
const images = document.querySelectorAll(".carousel-image-wrapper img");
const carouselDots = document.querySelector(".carousel-dots");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

// total number of images
let imageNumber = images.length;
// default image position declared for all
let position = 0;
// default index 1st image global
let currentIndex = 0;


// creating dots 
images.forEach((_, index) => {
  // Create a dot
  const dot = document.createElement("span");
  dot.classList.add("dot");
  carouselDots.appendChild(dot);

  // Add a click event listener to each dot
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});

// Set the first dot as selected
updateDots();


// find the current image position with index and position
function goToSlide(index) {
  position = -index * 900;
  carouselImage.style.left = position + "px";
  currentIndex = index;
  updateDots();
}

// highlight the current image dot using index
function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    index === currentIndex
      ? dot.classList.add("selected-dot")
      : dot.classList.remove("selected-dot");
  });
}

// left side
function prevSlide() {
  currentIndex = (currentIndex - 1 + imageNumber) % imageNumber;
  resetIntervalTime();
  goToSlide(currentIndex);
}

// right side
function nextSlide() {
  currentIndex = (currentIndex + 1) % imageNumber;
  resetIntervalTime();
  goToSlide(currentIndex);
}


// for slideshow effect
const slideshowCarousel= () =>{
    currentIndex = (currentIndex + 1) % imageNumber;
    position = -currentIndex * 900;
    carouselImage.style.left = position + 'px';
    updateDots();
};


//set time to change the image
intervalTime = setInterval(slideshowCarousel,8000);

// reset it when we goto new image
const resetIntervalTime =  () =>{
    clearInterval(intervalTime);
    intervalTime = setInterval(slideshowCarousel,8000);
}