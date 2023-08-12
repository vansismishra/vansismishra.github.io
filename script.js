const apiKey = '235bab7cab9bdebaa75e491bf208080a';

function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Weather data retrieved from the API
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

const cityName = prompt('Enter a city:');
fetchWeather(cityName);