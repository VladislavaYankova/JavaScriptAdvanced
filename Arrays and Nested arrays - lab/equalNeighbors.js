function equalNeighbors(array) {

    let equal = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            // let currentElement = array[i][j];
            // let nextElementRow = array[i][j+1]
            // let nextElementCol = array[i+1][j];

            if (j < array[i].length - 1 && array[i][j] === array[i][j + 1]) {
                equal++;
            }

            if (i < array.length - 1 && array[i][j] === array[i + 1][j]) {
                equal++;
            }
        }
    }

    console.log(equal)
    
}
// equalNeighbors(
// [['2', '3', '4', '7', '0'],
//  ['4', '0', '5', '3', '4'],
//  ['2', '3', '5', '4', '2'],
//  ['9', '8', '7', '5', '4']]
// );


equalNeighbors(
[['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);
