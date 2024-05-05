// Contenido JavaScript aquí
document.addEventListener("DOMContentLoaded", function() {
    // Actualizar la fecha de última modificación
    var lastModifiedSpan = document.getElementById("lastModified");
    var lastModified = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModified.toLocaleString();
});

const apiKey = '589eb38416d3410ba6d212507240405';

// Hace una solicitud a la API de clima
fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Tulsa&aqi=no`)
    .then(response => response.json())
// Dentro de tu código JavaScript
.then(data => {
    // Extrae la información relevante del clima
    const temperature = data.current.temp_f;
    const weatherDescription = data.current.condition.text;
    const weatherIconUrl = data.current.condition.icon; // Suponiendo que la API proporciona un enlace directo al icono del clima

    // Actualiza el contenido de la sección de clima en tu página web
    const temperatureElement = document.querySelector('.temperature');
    const descriptionElement = document.querySelector('.description');
    const weatherIconElement = document.querySelector('.weather-icon');
    
    temperatureElement.textContent = temperature;
    descriptionElement.textContent = weatherDescription;
    weatherIconElement.src = weatherIconUrl; // Establece el enlace directo al icono del clima como la fuente de la imagen
})

function toggleMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
}
  
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggleButton = document.getElementById('toggle-dark-mode');

    darkModeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});


