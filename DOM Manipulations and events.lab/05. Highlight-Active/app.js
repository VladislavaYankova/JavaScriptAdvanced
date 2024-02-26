function focused() {

    let typeArea = Array.from(document.querySelectorAll('[type="text"]'));

    for (let input of typeArea) {
        input.addEventListener('focus', () => {
            let parent = input.parentElement;
            parent.classList.add('focused');

        });

        input.addEventListener('blur', () => {
            let parent = input.parentElement;
            parent.classList.remove('focused');

        })
    }
}