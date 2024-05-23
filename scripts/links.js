async function fetchWeatherData() {
    const apiKey = 'e7cb0f81db01d92b979b56e2546da889';
    const city = 'Tulsa'; // or any other city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function updateWeatherInCard() {
    const weatherData = await fetchWeatherData();
    const temperatureCelsius = weatherData.main.temp;
    const temperatureFahrenheit = (temperatureCelsius * 9 / 5) + 32;
    const description = weatherData.weather[0].description;
    
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    
    document.getElementById('weather-temperature').textContent = `${temperatureFahrenheit.toFixed(2)}°F`;
    document.getElementById('weather-description').textContent = description;
    document.getElementById('weather-icon').src = iconUrl;
}

window.addEventListener('load', updateWeatherInCard);


