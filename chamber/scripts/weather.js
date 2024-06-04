async function fetchWeatherData() {
    const apiKey = 'e7cb0f81db01d92b979b56e2546da889';
    const city = 'Tulsa';
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
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    
    document.getElementById('weather-temperature').textContent = `${temperatureFahrenheit.toFixed(2)}°F`;
    document.getElementById('weather-description').textContent = description;
    document.getElementById('weather-icon').src = iconUrl;
}

async function fetchWeatherForecast(city) {
    const apiKey = 'e7cb0f81db01d92b979b56e2546da889';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
    }
}

async function updateWeatherForecast() {
    const city = 'Tulsa'; 
    const forecastData = await fetchWeatherForecast(city);
    
    const nextThreeDaysForecast = forecastData.list.slice(0, 3); 

    const weatherForecastContainer = document.getElementById('weather-forecast-container');
    weatherForecastContainer.innerHTML = '';

    nextThreeDaysForecast.forEach(item => {
        const date = new Date(item.dt * 1000); 
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temperatureCelsius = item.main.temp;
        const temperatureFahrenheit = (temperatureCelsius * 9 / 5) + 32; 
        const description = item.weather[0].description;
        const iconCode = item.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

        const forecastElement = document.createElement('div');
        forecastElement.classList.add('weather-forecast-item'); 
        forecastElement.innerHTML = `
            <p>${day}: ${description}, ${temperatureFahrenheit.toFixed(1)}°F</p>
            <img src="${iconUrl}" alt="Weather Icon">
        `;
        weatherForecastContainer.appendChild(forecastElement);
    });
}

window.addEventListener('load', () => {
    updateWeatherInCard(); 
    updateWeatherForecast(); 
});


