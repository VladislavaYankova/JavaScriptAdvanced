function listOfNames(array) {

    let sorted = array.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < array.length; i++) {
        let name = array[i];

        console.log(`${i+1}.${name}`);
    }

}
listOfNames(["John", "Bob", "Christina", "Ema"]);