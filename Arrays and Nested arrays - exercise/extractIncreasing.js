function extractIncreasing(array) {

    let biggestNumber = array[0];
    let result = [biggestNumber];

    for (let i = 1; i < array.length; i++) {
        let currentNumber = array[i];

        if (currentNumber >= biggestNumber) {
            result.push(currentNumber);
            biggestNumber = currentNumber;
        }
    }

    return result;

}
// extractIncreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// extractIncreasing([1, 2, 3, 4]);
extractIncreasing([20, 3, 2, 15, 6, 1]);
