(function () {
  "use strict";

  const slides = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];
  let currentSlide = 0;

  const next =  document.getElementById("next")
  next.addEventListener("click", nextSlide)

  const previous = document.getElementById("previous")
  previous.addEventListener("click", previousSlide)

  function nextSlide() {
    currentSlide++;
    if (currentSlide > slides.length - 1) {
      currentSlide = 0;
    }
    document.getElementById("myImage").src = slides[currentSlide];
  }

  function previousSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    document.getElementById("myImage").src = slides[currentSlide];
  }
})();
