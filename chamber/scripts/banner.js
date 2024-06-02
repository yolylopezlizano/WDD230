document.addEventListener('DOMContentLoaded', function() {
    var today = new Date().getDay();
    var banner = document.getElementById('banner');

    if (today === 1 || today === 2 || today === 3 ) {
        banner.style.display = 'flex';
    }
});

function closeBanner() {
    var banner = document.getElementById('banner');
    banner.style.display = 'none';
}


