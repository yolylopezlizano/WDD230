const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = new Date(document.lastModified);
const formattedLastModified = lastModified.toLocaleString();

document.getElementById("lastModifiedFooter").textContent = formattedLastModified;
document.getElementById("lastModifiedSidebar").textContent = formattedLastModified;

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

let visitCount = localStorage.getItem('visitCount');

if (visitCount === null) {
    visitCount = 0;
} else {
    visitCount = parseInt(visitCount);
}

visitCount++;

localStorage.setItem('visitCount', visitCount);

document.getElementById('visit-count').textContent = visitCount;

const currentDate = new Date();

const lastVisitString = localStorage.getItem('lastVisit');
let lastVisit;
if (lastVisitString) {
    lastVisit = new Date(lastVisitString);
} else {
    lastVisit = currentDate;
}

const daysSinceLastVisit = dateDiffInDays(currentDate, lastVisit);

let message;
if (visitCount === 1) {
    message = "Welcome! Let us know if you have any questions.";
} else if (visitCount === 2) {
    message = "Welcome back! Enjoy your visit!";
} else {
    const plural = daysSinceLastVisit === 1 ? "" : "s";
    message = `You last visited ${daysSinceLastVisit} day${plural} ago.`;
}

const sidebarMessageContainer = document.getElementById('sidebar-message-container');

const messageBox = document.createElement('div');
messageBox.classList.add('sidebar-message-box');
messageBox.textContent = message;

sidebarMessageContainer.appendChild(messageBox);


function initMap() {

    geocodeAddress('Ruta Viva y Escalón Lumbisí, Esq. 170157, Cumbayá, Quito, Ecuador', function(coordinates) {
        var mapOptions = {
            center: coordinates, 
            zoom: 12 
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            title: 'Ruta Viva y Escalón Lumbisí, Esq. 170157, Cumbayá, Quito, Ecuador' 
        });
    });
}

function geocodeAddress(address, callback) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            var coordinates = results[0].geometry.location;
            callback(coordinates);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}


const apiKey = '589eb38416d3410ba6d212507240405';
fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Tulsa&aqi=no`)
    .then(response => response.json())
.then(data => {
    
    const temperature = data.current.temp_f;
    const weatherDescription = data.current.condition.text;
    const weatherIconUrl = data.current.condition.icon; 

    const temperatureElement = document.querySelector('.temperature');
    const descriptionElement = document.querySelector('.description');
    const weatherIconElement = document.querySelector('.weather-icon');
    
    temperatureElement.textContent = temperature;
    descriptionElement.textContent = weatherDescription;
    weatherIconElement.src = weatherIconUrl; 
})


document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll(".lazy-image");

    function fadeInImages() {
        lazyImages.forEach(function(img) {
            const rect = img.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const threshold = rect.height * 0.2; 
            if (rect.top <= windowHeight && rect.bottom >= threshold) {
                img.classList.remove("hidden");
            } else {
                img.classList.add("hidden");
            }
        });
    }

    fadeInImages();
    window.addEventListener("scroll", fadeInImages);
});









