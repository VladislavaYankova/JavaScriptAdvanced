function colorize() {
    
    let rows = Array.from(document.getElementsByTagName('tr'));

    for (let i = 1; i < rows.length; i+=2) {
        let row = rows[i];
        row.style.backgroundColor = 'teal';
    }
}