document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.application-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const title = document.getElementById('title').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const businessName = document.getElementById('businessName').value;
        const membershipLevel = document.getElementById('membershipLevel').value;
        const description = document.getElementById('description').value;
        const timestamp = document.getElementById('timestamp').value;

        window.location.href = 'thankyou.html';
    });
});
