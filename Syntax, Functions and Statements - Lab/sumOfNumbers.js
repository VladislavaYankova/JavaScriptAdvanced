function sumOfNumbers(first, second) {

    first = Number(first);
    second = Number(second);
    let sum = 0;

    for (let i = first; i <= second; i++) {
        sum += i;
    }

    console.log(sum);

}
sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');
