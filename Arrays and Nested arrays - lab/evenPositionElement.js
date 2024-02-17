function evenPositionElemen(array) {

    let even = [];

    for (let i = 0; i < array.length; i = i + 2) {
        let element = array[i];
        even.push(element);
    }

    console.log(even.join(' '));

}
evenPositionElemen(['20', '30', '40', '50', '60']);
// evenPositionElemen(['5', '10']);
