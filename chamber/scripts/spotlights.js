function fetchMembers(callback) {
    fetch('https://raw.githubusercontent.com/yolylopezlizano/wdd230/main/chamber/data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched members data:', data); 
            callback(data.members); 
        })
        .catch(error => console.error('Error fetching members data:', error));
}

function displaySpotlights(members) {
    if (!Array.isArray(members)) {
        console.error('Members data is not an array:', members);
        return;
    }

    const goldenSilverMembers = members.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver');
    console.log('Filtered members:', goldenSilverMembers); 

    const randomMembers = [];
    while (randomMembers.length < 2 && goldenSilverMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * goldenSilverMembers.length);
        const member = goldenSilverMembers[randomIndex];
        if (!randomMembers.includes(member)) {
            randomMembers.push(member);
        }
    }
    console.log('Randomly selected members:', randomMembers); 

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

document.addEventListener('DOMContentLoaded', function () {
    fetchMembers(displaySpotlights);
});


