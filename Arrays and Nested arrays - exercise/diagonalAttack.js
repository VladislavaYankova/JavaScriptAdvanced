function diagonalAttack(array) {

    let matrix = [];
    let leftToRigthDiagonalSum = 0;
    let rightToLeftDiagonalSum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        let currentArray = array[i].split(' ');
        matrix.push(currentArray);
    }

    for (let i = 0; i < matrix.length; i++) {
       let leftToRightNumber = Number(matrix[i][i]);
       leftToRigthDiagonalSum += leftToRightNumber;
       let rightToLeftNumber = Number(matrix[i][(matrix.length - 1) - i]);
       rightToLeftDiagonalSum += rightToLeftNumber;
    }

    if (leftToRigthDiagonalSum != rightToLeftDiagonalSum) {
        return printMatrix(matrix);
    } else {
        changeMatrix(matrix);
        printMatrix(matrix);
    }


    function printMatrix(matrix) {
        matrix.forEach(row => {
            console.log(row.join(' '));
        })
    }

    function changeMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let currentNumber = Number(matrix[i][j]);

                if (i != j && j != ((matrix.length - 1) - i)) {
                    matrix[i][j] = leftToRigthDiagonalSum;
                }
            }
        }
        return matrix;
    }
}
diagonalAttack(
['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);

// diagonalAttack(
// ['1 1 1',
// '1 1 1',
// '1 1 0']
// );
