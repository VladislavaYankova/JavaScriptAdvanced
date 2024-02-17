function nthElement(array, step) {

    let result = [];

    for (let i = 0; i < array.length; i = i + step) {
        result.push(array[i]);
    }

    return result;

}
// nthElement(['5', '20', '31', '4', '20'], 2);
// nthElement(['dsa', 'asd', 'test', 'tset'], 2);
nthElement(['1', '2', '3', '4', '5'], 6);
