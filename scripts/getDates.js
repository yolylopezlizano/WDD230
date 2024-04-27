const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModifiedElement = document.getElementById("lastModified");
const lastModified = new Date(document.lastModified);
lastModifiedElement.textContent = `Last modified: ${lastModified.toLocaleString()}`;
