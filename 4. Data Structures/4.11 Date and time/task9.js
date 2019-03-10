function formatDate(date) {
    const now = new Date(), diff = now - date;
    if (diff < 1000) {
        return 'только что'
    } else if (diff > 1000 && diff < 60000) {
        return `${diff / 1000} сек. назад`
    } else if (diff > 60000 && diff < 60 * 60000) {
        return `${ diff/ 60000} мин. назад`
    } else return purefize(date);
}

function purefize(date) {
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let month = date.getMonth() + 1, year = date.getFullYear() + '', yearPure;
    month = month < 10 ? '0' + month : month;
    year = year[2] + year[3];
    yearPure = day + '.' + month + '.' + (year);

    return yearPure + ' ' + date.getHours() + ':' + date.getMinutes()
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));