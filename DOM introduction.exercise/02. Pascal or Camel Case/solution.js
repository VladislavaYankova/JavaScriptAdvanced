function solve() {

  let inputText = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let resultRef = document.getElementById('result');
  inputText = inputText.toLowerCase();
  let textArray = inputText.split(' ');
  let result = '';

  if (convention == 'Camel Case') {

    result = textArray.shift();
    textArray.forEach(word => {
      result += word[0].toUpperCase() + word.substring(1).toLowerCase();
    })

  } else if (convention == 'Pascal Case') {

    textArray.forEach(word => {
      result += word[0].toUpperCase() + word.substring(1);
    })

  } else {
    result = 'Error!';
  }
  
  resultRef.textContent = result;
}


