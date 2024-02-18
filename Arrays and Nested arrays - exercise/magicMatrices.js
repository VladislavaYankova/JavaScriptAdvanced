function magicMatrices(array) {

    let isMagical = false;
    let startSum = 0;
    let sumRow = 0;
    let sumCol = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let currentNumberRow = array[i][j];
            let currentNumberCol = array[j][i];

            if (i == 0) {
                startSum += currentNumberRow;
            } else {
                sumCol += currentNumberCol;
                sumRow += currentNumberRow;
            }

            if (sumCol == startSum && sumRow == startSum) {
                isMagical = true;
            }
        }
    }

    console.log(isMagical);
}
// magicMatrices([
//     [4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]
//    );

// magicMatrices([
// [11, 32, 45],
//  [21, 0, 1],
//  [21, 1, 1]]
// );

magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );
