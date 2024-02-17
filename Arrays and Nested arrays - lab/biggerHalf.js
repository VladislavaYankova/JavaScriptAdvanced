function biggerHalf(array) {

    let sorted = array.sort((a, b) => a - b);
    let mid =  Math.floor(array.length / 2);
    let result = sorted.splice(mid);
    return result;
}
biggerHalf([4, 7, 2, 5]);
// biggerHalf([3, 19, 14, 7, 2, 19, 6]);
