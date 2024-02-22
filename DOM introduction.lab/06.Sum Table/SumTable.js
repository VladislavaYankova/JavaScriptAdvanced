function sumTable() {

    let total = 0;

    let rows = Array.from(document.getElementsByTagName('tr'));

    for (let i = 1; i < rows.length - 1; i++) {
        let cols = rows[i].children;
        let cost = cols[cols.length - 1].textContent;
        total += Number(cost);
    }

    document.getElementById('sum').textContent = total;
}