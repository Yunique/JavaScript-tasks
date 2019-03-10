let arr = [5, 2, 1, -10, 8];
// Sorting method
// let arr2 = [], maxInd = 0;
// while (arr.join(',')) {
//     let maxEl= -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxEl) {
//             maxEl = arr[i];
//             maxInd = i;
//         }
//     }
//     arr2.push(maxEl);
//     arr.splice(maxInd, 1);
// }
// arr = arr2;
// console.log(arr); // 8, 5, 2, 1, -10

function compareReversed(a, b) {
    return b - a
}

console.log(arr.sort(compareReversed));
