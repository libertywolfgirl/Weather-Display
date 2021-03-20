window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      //Const proxy = "https://cors-anywhere.herokuapp.com/";
      //const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ad646a4e53ad6b8ac989cc0f577d0025`;
      const api = `http://api.weatherapi.com/v1/current.json?key=cbda6a830c834129982214349212003&q=${lat},${long}`;

        
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
        });
    });
  }
});
