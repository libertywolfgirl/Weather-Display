window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let image = document.createElement('img');

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
          const { temp_f, temp_c } = data.current;
          const { text, icon } = data.current.condition;
          const { name, region } = data.location;

          // Set DOM Elements from the API
          temperatureDegree.textContent = temp_f;
          temperatureDescription.textContent = text;
          locationTimezone.textContent = `${name}, ${region}`;
          image.src = icon;
          document.getElementById('icon').appendChild(image);
        });
    });
    
  }
});
