function mathOperations(first, second, operator) {

    let result = 0;

    switch(operator) {
        case ('+'): result = first + second; break;
        case ('-'): result = first - second; break;
        case ('*'): result = first * second; break;
        case ('/'): result = first / second; break;
        case ('%'): result = first % second; break;
        case ('**'): result = first ** second; break;
    }

    console.log(result);
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
