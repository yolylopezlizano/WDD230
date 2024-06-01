fetch('https://raw.githubusercontent.com/yolylopezlizano/wdd230/main/chamber/data/members.json')
  .then(response => response.json())
  .then(data => {
    const filteredMembers = data.members.filter(member => member.membership_level === 'gold' || member.membership_level === 'silver');
    displaySpotlights(filteredMembers);
  })
  .catch(error => console.error('Error fetching members data:', error));


function getRandomMembers(filteredMembers) {
   const randomMembers = [];
   while (randomMembers.length < 2) {
     const randomIndex = Math.floor(Math.random() * filteredMembers.length);
     const randomMember = filteredMembers[randomIndex];
     if (!randomMembers.includes(randomMember)) {
       randomMembers.push(randomMember);
      }
    }
   return randomMembers;
}
  
function displaySpotlights(filteredMembers) {
    const spotlightContainer = document.getElementById('members-container');
    const randomMembers = getRandomMembers(filteredMembers);
  
    spotlightContainer.innerHTML = '';
    randomMembers.forEach(member => {
      const spotlight = document.createElement('div');
      spotlight.classList.add('spotlight');
      spotlight.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <p>${member.name}</p>
      `;
      spotlightContainer.appendChild(spotlight);
    });
}
  
