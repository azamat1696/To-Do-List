let inputField = document.getElementById('inputField');
let addToDoButton= document.getElementById('addToDo');
let addToDoList = document.getElementById('addToDoList');


addToDoButton.addEventListener('click', function(){

    if (inputField.value.length > 0 ) {
        var paragraph = document.createElement('li');
    paragraph.innerText = inputField.value;
    paragraph.classList.add('paragraph-styling');
    addToDoList.appendChild(paragraph);
    inputField.value = "";
    addToDoList.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    addToDoList.addEventListener('dblclick', function(){
        addToDoList.removeChild(paragraph);
    })
    } else {
        alert('You have to add text:')
    }

});

