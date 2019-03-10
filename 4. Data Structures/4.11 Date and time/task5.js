function getLastDayOfMonth(year, month) {
    let f = new Date(year, month + 1, 0);
    return (f.getDate())
}

console.log(getLastDayOfMonth(2012, 1)); //29