var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (isNumeric(obj[prop])) {
            obj[prop] *= 2;
        }
    }
    return obj
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

console.log(multiplyNumeric(menu));






