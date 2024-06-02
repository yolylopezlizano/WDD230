function fetchMembers(callback) {
    fetch('https://raw.githubusercontent.com/yolylopezlizano/wdd230/main/chamber/data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched members data:', data); // Verificar los datos obtenidos
            callback(data.members); // Acceder a la propiedad 'members'
        })
        .catch(error => console.error('Error fetching members data:', error));
}

// Función para mostrar las imágenes de los miembros en los spotlights
function displaySpotlights(members) {
    // Verificar que members es un array
    if (!Array.isArray(members)) {
        console.error('Members data is not an array:', members);
        return;
    }

    // Filtrar los miembros con nivel golden o silver
    const goldenSilverMembers = members.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver');
    console.log('Filtered members:', goldenSilverMembers); // Verificar los miembros filtrados

    // Seleccionar aleatoriamente dos miembros
    const randomMembers = [];
    while (randomMembers.length < 2 && goldenSilverMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * goldenSilverMembers.length);
        const member = goldenSilverMembers[randomIndex];
        if (!randomMembers.includes(member)) {
            randomMembers.push(member);
        }
    }
    console.log('Randomly selected members:', randomMembers); // Verificar los miembros seleccionados

    // Mostrar las imágenes de los miembros en los spotlights
    const spotlightsContainer = document.querySelector('.spotlights-container');
    if (!spotlightsContainer) {
        console.error('Spotlights container not found');
        return;
    }
    randomMembers.forEach(member => {
        const spotlight = document.createElement('div');
        spotlight.classList.add('spotlight');
        const image = document.createElement('img');
        image.src = member.image;
        image.alt = member.name;
        spotlight.appendChild(image);
        spotlightsContainer.appendChild(spotlight);
    });
}

// Llamar a la función principal cuando se carga la página
document.addEventListener('DOMContentLoaded', function () {
    fetchMembers(displaySpotlights);
});


