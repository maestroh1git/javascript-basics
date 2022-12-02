(function () {
  "use strict";

  document.getElementById("convert").addEventListener("submit", (event) => {
    event.preventDefault();

    const distanceInMiles = document.getElementById("distance").value;
    const answer = document.getElementById("answer")
    if (distanceInMiles) {
      // convert
      const distanceInKilometers = (distanceInMiles * 1.60934).toFixed(3);
      // display
      answer.innerHTML = `<h2>${distanceInMiles} Miles converts to ${distanceInKilometers} Kilometres</h2>`

    } else {
      //display error
      answer.innerHTML = `<h2>Please Provide a valid distance in miles!!</h2>`
    }
  });
})();
