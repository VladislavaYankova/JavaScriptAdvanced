function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let typeArea = document.getElementById('searchField');
   let tableRows = Array.from(document.querySelectorAll('tbody tr'));

   function onClick() {
      let searchText = typeArea.value;
      for (let tableRow of tableRows) {
         let tableData = Array.from(tableRow.querySelectorAll('td'));
         for (let data of tableData) {
            if (data.textContent.includes(searchText)) {
               tableRow.classList.add('select');
               break;
            } else {
               tableRow.classList.remove('select');
            }
         }
      }
      typeArea.value = '';
   }
}