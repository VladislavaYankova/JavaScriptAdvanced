function wordsUppercase(string) {

    // let newString = string.replaceAll(/[\?|!|,|;]/g, '').toUpperCase().split(' ').join(', ');
    // console.log(newString);

    let newString = '';

    for (let i = 0; i < string.length; i++) {
        let currentSymbol = string[i];

        if (currentSymbol.match(/[\?|!|,|;]/g)) {
            currentSymbol = '';
            newString += `${currentSymbol}`;
        } else {
            newString += `${currentSymbol}`;
        }
    }
    
    console.log(newString.toUpperCase().split(' ').join(', '));
}
wordsUppercase('Hi, how are you?');
// wordsUppercase('hello');
