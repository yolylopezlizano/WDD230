
const chapterInput = document.getElementById('favchap');
const addChapterBtn = document.querySelector('button[type="submit"]');
const list = document.getElementById('list');

addChapterBtn.addEventListener('click', function() {
    
    const chapterValue = chapterInput.value.trim();
    if (chapterValue === '') {
        chapterInput.focus();
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = chapterValue;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';


    deleteButton.addEventListener('click', function() {
        listItem.remove();
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    chapterInput.value = '';
    chapterInput.focus();
});

