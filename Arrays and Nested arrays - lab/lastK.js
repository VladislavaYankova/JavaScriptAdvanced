function lastK (n, k) {

    let array = [1];

    while (array.length < n) {
        if (k <= array.length) {
            let elements = array.slice(-k);
            let sum = 0;

            for (let i = 0; i < elements.length; i++) {
                sum += elements[i];
            }

            array.push(sum);
        } else {
            let elements = array.slice();
            let sum = 0;

            for (let i = 0; i < elements.length; i++) {
                sum += elements[i];
            }

            array.push(sum);
        }
    }
    
    return array;
}
lastK(6, 3);
lastK(8, 2);
