function getMaxSubSum(arr) {
    var maxSum = 0,
        partialSum = 0;
    for (var i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9, 11]));  //11 (сумма выделенных)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); //6
console.log(getMaxSubSum([-1, 11, -9, 2, 3])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); //3
console.log(getMaxSubSum([100, -9, 2, -3, 5]));//100
console.log(getMaxSubSum([1, 2, 3])); //6 (неотрицательные - берем всех)
console.log(getMaxSubSum([-1, -2, -3])); //0)
console.log(getMaxSubSum([1, 2, -3, 0, -1, -4,])); //3
console.log(getMaxSubSum([-1, 11, -9, 2, 3])); // 11
