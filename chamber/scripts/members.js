async function fetchAndDisplayMembers() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/yolylopezlizano/wdd230/main/chamber/data/members.json');
        const data = await response.json();
        const membersContainer = document.getElementById('members-container');

        // Clear previous content
        membersContainer.innerHTML = '';

        // Loop through members and create HTML elements
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

// Initial call to fetch and display members
fetchAndDisplayMembers();

// Function to toggle between grid and list view
document.getElementById('grid-view-button').addEventListener('click', function() {
    document.getElementById('members-container').classList.remove('member-list-view');
    document.getElementById('members-container').classList.add('member-grid-view');
});

document.getElementById('list-view-button').addEventListener('click', function() {
    document.getElementById('members-container').classList.remove('member-grid-view');
    document.getElementById('members-container').classList.add('member-list-view');
});


// Initial call to fetch and display members
fetchAndDisplayMembers();

// Function to toggle between grid and list view
document.getElementById('grid-view-button').addEventListener('click', function() {
    document.getElementById('members-container').classList.remove('member-list-view');
    document.getElementById('members-container').classList.add('member-grid-view');
});

document.getElementById('list-view-button').addEventListener('click', function() {
    document.getElementById('members-container').classList.remove('member-grid-view');
    document.getElementById('members-container').classList.add('member-list-view');
});



