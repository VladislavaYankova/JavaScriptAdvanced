function rotateArray(array, rotations) {

    for (let i = 1; i <= rotations; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(' '));

}
rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
