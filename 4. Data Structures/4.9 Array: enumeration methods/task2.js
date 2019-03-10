let arr = [1, 2, 3, 4, 5];

function getSums(arr) {
    let result = [];
    arr.reduce(function (sum, current) {
        result.push(sum+current);
        return sum + current
    }, 0);
    return result
}

console.log(getSums(arr));
console.log(getSums([-2, -1, 0, 1]));