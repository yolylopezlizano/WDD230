document.addEventListener("DOMContentLoaded", function() {
    // LastModified
    var lastModifiedSpan = document.getElementById("lastModified");
    var lastModified = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModified.toLocaleString();
});

const apiKey = '589eb38416d3410ba6d212507240405';

//Weather
fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Tulsa&aqi=no`)
    .then(response => response.json())
    .then(data => {
        const temperature = data.current.temp_f;
        const weatherDescription = data.current.condition.text;
        const weatherIconUrl = data.current.condition.icon; 

        const temperatureElement = document.querySelector('.temperature');
        const descriptionElement = document.querySelector('.description');

    });

function toggleMenu() {
    var mobileMenu = document.querySelector(".mobile-menu .menu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
}


     
    
    
   