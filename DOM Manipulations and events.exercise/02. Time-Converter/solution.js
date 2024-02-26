function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('[type="button"]'));

    for (let button of buttons) {
       button.addEventListener('click', convert);
    }

    function convert(event) {
        let input = event.currentTarget.parentElement.children[1];
        let inputValue = Number(input.value);
        let elementId = input.id;

        switch(elementId) {
            case 'days' : result(inputValue); break;
            case 'hours': result(inputValue / 24); break;
            case 'minutes': result(inputValue / 24 / 60); break;
            case 'seconds': result(inputValue / 24 / 60 / 60); break;
        }
    }

    function result(days) {
        let inputs = document.querySelectorAll('[type = "text"]');
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }
}