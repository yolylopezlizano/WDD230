// Contenido JavaScript aquí
document.addEventListener("DOMContentLoaded", function() {
    // Actualizar la fecha de última modificación
    var lastModifiedSpan = document.getElementById("lastModified");
    var lastModified = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModified.toLocaleString();
});
