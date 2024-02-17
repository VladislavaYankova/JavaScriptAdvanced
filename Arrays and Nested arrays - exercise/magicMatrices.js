function magicMatrices(array) {

    let isMagical = false;
    let length = array.length

    for (let i = 0; i < length; i++) {
        let sum = 0;
        let currentNumber = array[i][i];

        while (i <= array.length - 1) {
            sum += currentNumber;
        }
    }



}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );

// magicMatrices([
// [11, 32, 45],
//  [21, 0, 1],
//  [21, 1, 1]]
// );

// magicMatrices([
//     [1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
//    );
