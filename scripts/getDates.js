const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModifiedElement = document.getElementById("lastModified");
const lastModified = new Date(document.lastModified);
lastModifiedElement.textContent = `Last modified: ${lastModified.toLocaleString()}`;

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

// Archivo: visitCounter.js

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

