function pieceOfPie(array, string1, string2) {

    let indexOfString1 = array.indexOf(string1);
    let indexOfString2 = array.indexOf(string2);

    if (indexOfString1 !== -1 && indexOfString2 !== -1) {
        let result = array.slice(indexOfString1, indexOfString2 + 1);
        return result;
    }
}
// pieceOfPie(['Pumpkin Pie',
// 'Key Lime Pie',
// 'Cherry Pie',
// 'Lemon Meringue Pie',
// 'Sugar Cream Pie'],
// 'Key Lime Pie',
// 'Lemon Meringue Pie'
// );
pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);
