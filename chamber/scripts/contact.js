document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const question = document.getElementById('question').value;

        // Check if required fields are filled
        if (name && email && question) {
            window.location.href = 'contactthanks.html';
        } else {
            alert('Please fill in all required fields.');
        }
    });

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const questionInput = document.getElementById('question');

    nameInput.addEventListener('input', validateRequired);
    emailInput.addEventListener('input', validateRequired);
    questionInput.addEventListener('input', validateRequired);

    function validateRequired() {
        if (this.value.trim() === '') {
            this.classList.remove('valid');
            this.classList.add('required');
        } else {
            this.classList.remove('required');
            this.classList.add('valid');
        }
    }
});
