function sortingNumbers(array) {

    let result = [];
    let sorted = array.sort((a,b) => a - b);
    
    while (sorted.length > 0) {
        let currentNumber = sorted.shift();
        let lastNumber = sorted.pop();
        result.push(currentNumber);
        result.push(lastNumber);
    }

    return result

}
// sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);
