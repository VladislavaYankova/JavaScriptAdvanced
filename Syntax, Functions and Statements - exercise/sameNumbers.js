function sameNumbers(number) {

    let numberAsString = number.toString();
    let length = numberAsString.length;
    let firstDigit = numberAsString[0];
    let sum = 0;
    
    for (let i = 0; i < numberAsString.length; i++) {
        let digit = Number(numberAsString[i]);
        sum += digit;
    }

    if (Number(firstDigit) == (sum / length)) {
        console.log(true);
    } else {
        console.log(false);
    }

    console.log(sum);

}
// sameNumbers(2222222);
sameNumbers(1234);