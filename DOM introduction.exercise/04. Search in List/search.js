function search() {

   let searchText = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matchCount = 0;

    result.textContent = '';
    let list = Array.from(document.querySelectorAll('li'));

    for (let word of list) {
        word.style.textDecoration = 'none';
        word.style.fontWeight = 'normal';
    }

   
   for (let word of list) {
    let wordContent = word.textContent;
    let textSearchLength = searchText.length;

    if (!wordContent.includes(' ')) {
        if (wordContent.substring(0, textSearchLength) == searchText) {
            matchCount ++
            word.style.textDecoration = 'underline';
            word.style.fontWeight = 'bold';
        }
    } else {
      let wordTokens = wordContent.split(' ');

      for (let i = 0; i < wordTokens.length; i++) {
        let currentWord = wordTokens[i];

        if (currentWord.substring(0, textSearchLength) == searchText) {
            matchCount++
            word.style.textDecoration = 'underline';
            word.style.fontWeight = 'bold';
            break;
        }
      }
    }
  }
  result.textContent = `${matchCount} matches found`;
  document.getElementById('searchText').value = '';
}
