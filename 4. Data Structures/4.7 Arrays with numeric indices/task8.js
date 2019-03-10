//Function takes subarray from a to b
// function filterRange(arr, a, b) {
//     let result =[];
//     for (let i = arr.indexOf(a); i <= arr.indexOf(b); i++) {
//         result.push(arr[i]);
//     }
//     return result;
// }

function filterRange(arr, a, b) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) result.push(arr[i])
    }
    return result;
}


var arr = [5, 4, 3, 8, 0];
var filtered = filterRange(arr, 3, 5);
console.log(filtered);