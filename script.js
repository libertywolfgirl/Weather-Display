window.addEventListener("load", () => {
  let long;
  let lat;

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
          const { temp_f, temp_c, condition } = data.current;
          console.log(temp_f, temp_c, condition);
        });
    });
  }
});
