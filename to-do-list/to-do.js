var myForm = document.getElementById('myForm');
var myList = document.getElementById('myList');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var input = event.target.task;

    if (input.value === '') {
        return false;
    }

    var li = document.createElement('li');
    li.innerText = input.value;
    myList.appendChild(li);
    input.value = '';

    var button = document.createElement('button');
    button.innerText = 'Supprimer';
    li.appendChild(button);

    button.addEventListener('click', function(event){
        myList.removeChild(li);
    });

    var input = document.createElement('input');
    input.type = 'checkbox';
    li.appendChild(input);

    input.addEventListener('change', function(event){
        if(event.target.checked) {
            li.style.backgroundColor = 'green';
        } else {
            li.style.backgroundColor = 'red';
        }

    });
});