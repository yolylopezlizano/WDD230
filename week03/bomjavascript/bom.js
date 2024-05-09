const chapterInput = document.getElementById('favchap');
const addChapterBtn = document.querySelector('button[type="submit"]');
const list = document.getElementById('list');

// Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList
let chaptersArray = getChapterList() || [];

// Populate the displayed list of chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Change the button click event listener
addChapterBtn.addEventListener('click', function() {
  const chapterValue = chapterInput.value.trim();
  if (chapterValue !== '') { // Check if the input is not empty
    displayList(chapterValue); // Call the function that outputs the submitted chapter
    chaptersArray.push(chapterValue); // Add the chapter to the array
    setChapterList(); // Update the localStorage with the new array
    chapterInput.value = ''; // Clear the input
    chapterInput.focus(); // Set the focus back to the input
  }
});

// Define the displayList function
function displayList(item) {
    let listItem = document.createElement('li');
    listItem.textContent = item;
  
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.dataset.chapter = item; // Asignar el capítulo como valor del atributo de datos
  
    deleteButton.addEventListener('click', function() {
      listItem.remove();
      deleteChapter(this.dataset.chapter); // Eliminar el capítulo específico
    });
  
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
  }
  
 

// Define the setChapterList function
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Define the getChapterList function
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

 // Define the deleteChapter function
 function deleteChapter(chapterToDelete) {
    chaptersArray = chaptersArray.filter(chapter => chapter !== chapterToDelete);
    setChapterList(); // Actualizar el localStorage
  }

