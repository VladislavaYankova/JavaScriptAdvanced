
let section = document.createElement('section');
section.id = 'notifications';

document.body.appendChild(section);

export function notify(message) {
    let element = document.createElement('span');
    element.className = 'msg'
    element.textContent = message;

    section.appendChild(element);
    
    setTimeout(remove, 3000);

    function remove() {
        element.remove();
    }
}