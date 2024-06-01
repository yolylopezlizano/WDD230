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
    const city = 'Tulsa'; // o cualquier otra ciudad
    const forecastData = await fetchWeatherForecast(city);
    
    // Extraer pronóstico para los próximos tres días
    const nextThreeDaysForecast = forecastData.list.slice(0, 3); // Suponiendo que cada elemento representa datos para intervalos de 3 horas

    // Mostrar datos del pronóstico
    const weatherForecastContainer = document.getElementById('weather-forecast-container');
    weatherForecastContainer.innerHTML = ''; // Limpiar datos del pronóstico anterior

    nextThreeDaysForecast.forEach(item => {
        const date = new Date(item.dt * 1000); // Convertir la marca de tiempo UNIX a milisegundos
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temperatureCelsius = item.main.temp;
        const temperatureFahrenheit = (temperatureCelsius * 9 / 5) + 32; // Convertir a Fahrenheit
        const description = item.weather[0].description;
        const iconCode = item.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

        const forecastElement = document.createElement('div');
        forecastElement.classList.add('weather-forecast-item'); // Agregar clase para estilos CSS
        forecastElement.innerHTML = `
            <p>${day}: ${description}, ${temperatureFahrenheit.toFixed(1)}°F</p>
            <img src="${iconUrl}" alt="Weather Icon">
        `;
        weatherForecastContainer.appendChild(forecastElement);
    });
}

window.addEventListener('load', () => {
    updateWeatherInCard(); // Llamada a la función para obtener el clima actual
    updateWeatherForecast(); // Llamada a la función para obtener el pronóstico del clima
});


