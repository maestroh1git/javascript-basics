(function () {
  "use strict";

  let convertType = "miles";
  const heading = document.querySelector("h1");
  const intro = document.querySelector("p");
  const answerDiv = document.getElementById("answer");
  const form = document.getElementById("convert");

  document.addEventListener("keydown", (event) => {
    const key = event.code;

    if (key === "KeyK") {
      convertType = "kilometres";
      heading.innerHTML = "Kilometres to Miles Converter";
      intro.innerHTML =
        "Type in a number of Kilometres and click the button to convert the distance to Miles.";
    } else if (key === "KeyM") {
      convertType = "miles";
      heading.innerHTML = "Miles to Kilometer Converter";
      intro.innerHTML =
        "Type in a number of Miles and click the button to convert the distance to Kilometres.";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const distance = parseFloat(document.getElementById("distance").value);

    if (distance) {
      if (convertType == "miles") {
        const distanceInKilometers = (distance * 1.60934).toFixed(3);
        // display
        answer.innerHTML = `<h2>${distance} Miles converts to ${distanceInKilometers} Kilometres</h2>`;
      } else {
        const distanceInMiles = (distance * 0.62137).toFixed(3);
        // display
        answer.innerHTML = `<h2>${distance} Kilometres converts to ${distanceInMiles} Miles</h2>`;
      }
    } else {
      answerDiv.innerHTML = "<h2>Please provide a number!</h2>";
    }
  });
})();
