(function () {
  "use strict";

  let currentImage = 0;
  const myPhotos = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];
  //create document object variables
  const container = document.getElementById("content");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("previous");

  //add eventlistener to the nexttn element
  nextBtn.addEventListener("click", (event) => {
    //prevent default event
    event.preventDefault();
    //increase the index of the myImages array, and handle reset
    currentImage++;
    if (currentImage > myPhotos.length - 1) {
      currentImage = 0;
    }
    newSlide();
  });

  //add eventlistener to the nexttn element
  prevBtn.addEventListener("click", (event) => {
    //prevent default event
    event.preventDefault();

    //decrease the index of the myImages array, and handle reset
    currentImage--;
    if (currentImage < 0) {
      currentImage = myPhotos.length - 1;
    }
    newSlide();
  });

  function newSlide() {
    //create a new img elememt
    const newSlide = document.createElement("img");
    //set the src attribute of the img element
    newSlide.src = `slides/${myPhotos[currentImage]}`;
    //set the className attribute of the img element
    newSlide.className = "fadeinimg";
    //append the element to the container
    container.appendChild(newSlide);

    //remove the excess elements from the stack
    if (container.children.length > 2) {
      container.removeChild(container.children[0]);
    }
  }
})();
