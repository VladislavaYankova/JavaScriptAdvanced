function processOddPositions(array) {

    let newArray = [];

    for (let i = 1; i < array.length; i = i + 2) {
        newArray.push(array[i]);
    }

    let doubled = [];
    newArray.forEach((Element) => doubled.push(Element * 2));

    let reversed = doubled.reverse();
    
    return reversed.join(' ');
    
}
// processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);

