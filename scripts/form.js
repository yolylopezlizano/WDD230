function updateRatingValue(value) {
    document.getElementById('ratingValue').innerText = value;
}

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
