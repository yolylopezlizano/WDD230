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

// Obtener el contador de visitas desde el localStorage
let visitCount = localStorage.getItem('visitCount');

// Verificar si el contador ya existe en el localStorage
if (visitCount === null) {
    // Si no existe, inicializar el contador a 0
    visitCount = 0;
} else {
    // Si existe, convertirlo a número
    visitCount = parseInt(visitCount);
}

// Incrementar el contador de visitas
visitCount++;

// Actualizar el contador en el localStorage
localStorage.setItem('visitCount', visitCount);

// Actualizar el texto del contador en el HTML
document.getElementById('visit-count').textContent = visitCount;

// Archivo: visitCounter.js

function initMap() {
    // Llamada a la función de geocodificación para obtener las coordenadas de la dirección
    geocodeAddress('Ruta Viva y Escalón Lumbisí, Esq. 170157, Cumbayá, Quito, Ecuador', function(coordinates) {
        // Opciones de configuración del mapa
        var mapOptions = {
            center: coordinates, // Centra el mapa en las coordenadas obtenidas
            zoom: 12 // Nivel de zoom del mapa
        };

        // Crear una nueva instancia del mapa y asociarla al elemento con id "map"
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        // Añadir un marcador en las coordenadas obtenidas
        var marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            title: 'Ruta Viva y Escalón Lumbisí, Esq. 170157, Cumbayá, Quito, Ecuador' // Título del marcador (opcional)
        });
    });
}

// Función de geocodificación para obtener las coordenadas de una dirección
function geocodeAddress(address, callback) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            // Obtener las coordenadas de la primera coincidencia de la dirección
            var coordinates = results[0].geometry.location;
            // Llamar a la función de callback con las coordenadas obtenidas
            callback(coordinates);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

