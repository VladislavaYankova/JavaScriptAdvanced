function cookingByNumbers(number, ...list) {

    number = Number(number);
    
    for (let i = 0; i < list.length; i++) {
        let operation = list[i];

        if (operation == 'chop') {
            number = number / 2;
            console.log(number);
        } else if (operation == 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (operation == 'spice') {
            number += 1;
            console.log(number);
        } else if (operation == 'bake') {
            number = number * 3;
            console.log(number);
        } else if (operation == 'fillet') {
            number = number - number * 0.2;
            console.log(number);
        }
    }
}
// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
