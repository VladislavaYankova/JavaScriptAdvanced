function biggestElement(array) {

    let maxNumber = array[0][0];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let currentNumber = array[i][j];

            if (currentNumber > maxNumber) {
                maxNumber = currentNumber;
            }
        }
    }

    console.log(maxNumber);

}
// biggestElement([
//     [20, 50, 10],
//     [8, 33, 145]]);


biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);
