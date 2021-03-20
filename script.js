window.addEventListener('load', () => {
  let long;
  let lat;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={ad646a4e53ad6b8ac989cc0f577d0025
}`;
    })
  }
});