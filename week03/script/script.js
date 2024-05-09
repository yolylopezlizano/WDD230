document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img[data-src]');

    const options = {
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                img.setAttribute('src', src);
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(image => {
        observer.observe(image);
    });

    // Display last modified date in the footer
    const lastModified = document.getElementById('last-modified');
    const lastModifiedDate = document.lastModified;
    lastModified.textContent = "Last modified: " + lastModifiedDate;
});
