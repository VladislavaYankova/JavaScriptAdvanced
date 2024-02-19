function addAndRemove(array) {

    let n = 1;
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if (command == 'add') {
            result.push(n);
            n++
        } else if (command == 'remove') {
            result.pop();
            n++
        }
    }

    if (result.length == 0) {
        console.log('Empty');
    } else {
        return result.join('\n');
    }

}
addAndRemove(['add', 'add', 'add', 'add']);
// addAndRemove(['add', 'add', 'remove', 'add', 'add']);
// addAndRemove(['remove', 'remove', 'remove']);
