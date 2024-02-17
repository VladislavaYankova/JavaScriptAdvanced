function smallestTwoNumber(array) {

    let sorted = array.sort((a, b) => a - b);
    let first = array.shift();
    let second = array.shift();

    console.log(first, second);
    
}
smallestTwoNumber([30, 15, 50, 5]);
smallestTwoNumber([3, 0, 10, 4, 7, 3]);
