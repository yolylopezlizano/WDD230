async function fetchAndDisplayMembers() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/yolylopezlizano/wdd230/main/chamber/data/members.json');
        const data = await response.json();
        const membersContainer = document.getElementById('members-container');

        membersContainer.innerHTML = '';

        data.members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name} Image" class="member-image">
                <div class="member-details">
                    <h2 class="member-name">${member.name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                </div>
            `;
            membersContainer.appendChild(memberCard);
        });
    } catch (error) {
        console.error('Error fetching or displaying members:', error);
    }
}

document.getElementById('grid-view-button').addEventListener('click', function() {
    document.getElementById('members-container').classList.remove('member-list-view');
    document.getElementById('members-container').classList.add('member-grid-view');
});

document.getElementById('list-view-button').addEventListener('click', function() {
    document.getElementById('members-container').classList.remove('member-grid-view');
    document.getElementById('members-container').classList.add('member-list-view');
});

window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    const membersContainer = document.getElementById('members-container');

    if (screenWidth < 768) {
        membersContainer.classList.add('small-screen');
    } else {
        membersContainer.classList.remove('small-screen');
    }
});

// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fetch and display member spotlights
fetchAndDisplayMembers();

// Fetch JSON data for member spotlights
fetch('https://raw.githubusercontent.com/yolylopezlizano/wdd230/main/chamber/data/members.json')
    .then(response => response.json())
    .then(data => {
        // Filter members with silver or gold membership levels
        const qualifiedMembers = data.filter(member => member.membership === 'silver' || member.membership === 'gold');
        
        // Shuffle array to randomize spotlights
        const shuffledMembers = shuffleArray(qualifiedMembers);
        
        // Select up to two random members for spotlights
        const spotlightMembers = shuffledMembers.slice(0, 2);

        // Populate spotlight section with selected members
        const spotlightContainer = document.querySelector('.spotlight-container');
        spotlightMembers.forEach(member => {
            const image = document.createElement('img');
            image.src = member.image;
            image.alt = member.name;
            spotlightContainer.appendChild(image);
        });
    })
    .catch(error => console.error('Error fetching members data:', error));
