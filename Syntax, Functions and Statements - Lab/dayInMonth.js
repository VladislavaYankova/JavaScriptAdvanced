function dayInMonth(month, year) {

    let newDate = new Date(year, month, 0);
    let lastDay = newDate.getDate();
    console.log(lastDay)




}
dayInMonth(1, 2012);
dayInMonth(2, 2021);
