document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '6fbafd9fb50a800ecf40ce3f926f8976';
    
const searchButton = document.getElementById("searchButton")
            const cityInput = document.getElementById("cityInput")
     searchButton.addEventListener('click',() =>{
                const city = cityInput.value.trim();
           

            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
            
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.querySelector('.weather-info');
            const temperature = data.main.temp;
            const wind = data.wind.speed;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;

          
            weatherInfo.innerHTML = `
                <h2>${city}</h2>
                <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather-icon">
                <p>${description}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Wind Speed: ${wind}°C</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = '<p>Ate qe po kerkoni nuk gjendet</p>';
        });
     });
});
