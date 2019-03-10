function formatDate(date) {
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let year = date.getFullYear() + '';
    year = year[2] + year[3];

    return day + '.' + month + '.' + (year)
}

let d = new Date(2014, 0, 30);
console.log(formatDate(d));
