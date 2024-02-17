function aggregateElements(array) {

    let sum = 0;
    let sumInverse = 0;
    let concat = '';

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        let number = 1 / array[i];
        sumInverse += number;
        let numberAsString = (array[i]).toString();
        concat += numberAsString;
    }
    console.log(sum);
    console.log(sumInverse);
    console.log(concat);

}
// aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
