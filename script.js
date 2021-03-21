window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  const temperatureDegree = document.querySelector(".temperature-degree");
  const feelsLikeDegree = document.querySelector(".feels-like-degree");
  const locationTimezone = document.querySelector(".location-timezone");
  const image = document.createElement("img");
  const temperatureSection = document.querySelector(".temperature");
  const temperatureSpan = document.querySelector(".temperature span");
  const feelsLikeSpan = document.querySelector(".temperature-feels-like span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.weatherapi.com/v1/current.json?key=cbda6a830c834129982214349212003&q=${lat},${long}`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const { temp_f, temp_c, feelslike_c, feelslike_f } = data.current;
          const { text, icon } = data.current.condition;
          const { name, region } = data.location;

          // Set DOM Elements from the API
          temperatureDegree.textContent = temp_f;
          temperatureDescription.textContent = text;
          feelsLikeDegree.textContent = feelslike_f;
          locationTimezone.textContent = `${name}, ${region}`;

          // Set Icon
          image.src = icon;
          document.getElementById("icon").appendChild(image);

          // Change temperature to Celsius/Farenheit
          temperatureSection.addEventListener("click", () => {
            if (temperatureSpan.textContent === "F") {
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = temp_c;
              feelsLikeSpan.textContent = "C";
              feelsLikeDegree.textContent = feelslike_c;
            } else {
              temperatureSpan.textContent = "F";
              temperatureDegree.textContent = temp_f;
              feelsLikeSpan.textContent = "F";
              feelsLikeDegree.textContent = feelslike_f;
            }
          });
        });
    });
  }
});
