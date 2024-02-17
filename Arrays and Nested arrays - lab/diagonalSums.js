function diagonalSums(array) {

    let mainSum = 0;
    let secondarySum = 0;
    let length = array.length - 1;

    for (let i = 0; i < array.length; i++) {
        mainSum += array[i][i];
        secondarySum += array[i][length];
        length -= 1;
    }

    console.log(mainSum, secondarySum);

}
// diagonalSums([[
//     20, 40],
//     [10, 60]]);

diagonalSums([
[3, 5, 17],
 [-1, 7, 14],
 [1, -8, 89]]);
