function stringLength(string1, string2, string3) {

    let totalLength = (string1 + string2 + string3).length;
    let avg = totalLength / 3;

    console.log(totalLength);
    console.log(Math.floor(avg));

}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
