function filter(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result;
}

function inBetween(a, b) {
    return function (x) {
        if (x >= a && x <= b)
            return true;
    };
}

function inArray(arr) {
    return function (x) {
        return !!(~arr.indexOf(x))
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(filter(arr, function (a) {
    return a % 2 === 0
}));

console.log(filter(arr, inBetween(3, 6)));
console.log(filter(arr, inArray([1, 2, 10])));
