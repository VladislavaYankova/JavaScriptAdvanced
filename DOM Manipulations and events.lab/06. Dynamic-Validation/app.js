function validate() {
   let input = document.getElementById('email');
   let regex = /[a-z]+@[a-z]+.[a-z]+/g;

   input.addEventListener('change', () => {
    if (!input.value.match(regex)) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
   });
}