function negativePositive(array) {

    let result = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];


        if (currentNumber >= 0) {
            result.push(currentNumber);
        } else {
            result.unshift(currentNumber);
        }
    }

    console.log(result.join('\n'));


}
negativePositive([7, -2, 8, 9]);
// negativePositive([3, -2, 0, -1]);
