function validatePasswords() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
        document.getElementById('password').focus();
        return false;
    }
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;
    var emailPattern = /[a-zA-Z0-9._%+-]+@byui\.edu$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address ending with @byui.edu");
        return false; 
    }

    return true; 
}

function updateRatingValue(value) {
    document.getElementById('ratingValue').innerText = value;
}
