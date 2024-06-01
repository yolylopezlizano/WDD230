function fetchMembers(callback) {
    fetch('https://raw.githubusercontent.com/yolylopezlizano/wdd230/main/chamber/data/members.json')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error fetching members data:', error));
}

// Función para mostrar las imágenes de los miembros en los spotlights
function displaySpotlights(members) {
    // Filtrar los miembros con nivel golden o silver
    const goldenSilverMembers = members.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver');


    // Seleccionar aleatoriamente dos miembros
    const randomMembers = [];
    while (randomMembers.length < 2) {
        const randomIndex = Math.floor(Math.random() * goldenSilverMembers.length);
        const member = goldenSilverMembers[randomIndex];
        if (!randomMembers.includes(member)) {
            randomMembers.push(member);
        }
    }

    // Mostrar las imágenes de los miembros en los spotlights
    const spotlightsContainer = document.querySelector('.spotlights');
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