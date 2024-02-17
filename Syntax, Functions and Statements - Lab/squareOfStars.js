function squareOfStars(number) {

    for (let i = 0; i < number; i++) {
        let row = '';
        for (let j = 0; j < number; j++) {
            row += "* ";
        }
        console.log(row);
    }

}
// squareOfStars(1);
// squareOfStars(2);
// squareOfStars(5);
// squareOfStars(7);
