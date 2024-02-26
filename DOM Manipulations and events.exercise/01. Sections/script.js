function create(words) {

   let content = document.getElementById('content');

   for (let word of words) {
      let divEl = document.createElement('div');
      content.appendChild(divEl);
      let pEl = document.createElement('p');
      pEl.textContent = word;
      divEl.appendChild(pEl);
      pEl.style.display = 'none';

      divEl.addEventListener('click', () => {
         if (pEl.style.display == 'none') {
            pEl.style.display = 'block';
         } else {
            pEl.style.display = 'none';
         }
      })

      content.appendChild(divEl);
   }
}