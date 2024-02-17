function addAndRemove(array) {

    let result = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
    
       if (command == 'add') {
        if (result.length == 0) {
            result.push(1);
        } else {
            let lastNumber = result.slice(-1);
            let sum = lastNumber + 1;
            result.push(sum);
        }
       } else if (command == 'remove') {
        if (result.length == 0) {
            break;
        } else {
            let lastNumber = result.slice(-1);
            let sum = lastNumber + 1;

        }
       }
    }

    console.log(result);

}
addAndRemove(['add', 'add', 'add', 'add']);
// addAndRemove(['add', 'add', 'remove', 'add', 'add']);
// addAndRemove(['remove', 'remove', 'remove']);
