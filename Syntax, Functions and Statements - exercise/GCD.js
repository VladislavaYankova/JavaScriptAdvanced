function GCD(num1, num2) {

    let gcd = 0;

    let minNumber = Math.min(num1, num2);

    for (let i = 1; i <= minNumber; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
        }
    }

    console.log(gcd);

}
GCD(15, 5);
GCD(2154, 458);