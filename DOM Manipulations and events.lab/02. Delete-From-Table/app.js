function deleteByEmail() {
    let result = document.getElementById('result');
    let input = document.querySelector('[name="email"]');
    let rows = Array.from(document.querySelectorAll('tbody tr'));

    for (let row of rows) {
        let email = row.children[1].textContent;

        if (email == input.value) {
            row.remove();
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.';
        }
    }

    input.value = '';
}