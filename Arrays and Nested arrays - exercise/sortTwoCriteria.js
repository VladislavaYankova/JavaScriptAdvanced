function sortTwoCriteria(array) {

    array.sort((a, b) => {
        // Compare lengths first
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            // If lengths are equal, compare alphabetically (case-insensitive)
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    });

    // Print each element on a new line
    array.forEach(element => {
        console.log(element);
    });

}
// sortTwoCriteria(['alpha', 'beta', 'gamma']);
// sortTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortTwoCriteria(['test', 'Deny', 'omen', 'Default']);
