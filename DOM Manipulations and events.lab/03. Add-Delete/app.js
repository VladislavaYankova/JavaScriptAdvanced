function addItem() {
    let input = document.getElementById('newItemText');
    let list = document.getElementById('items');
    let li = document.createElement('li');

    if (input.value.length == 0) {
        return;
    }

    li.textContent = input.value;
    list.appendChild(li);

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onclick);

    function onclick(event) {
        li.remove();
    }

    input.value = '';
}