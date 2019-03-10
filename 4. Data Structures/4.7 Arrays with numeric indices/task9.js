console.log(sumOfArray(eratostheneSieve(100)));


function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

function eratostheneSieve(n) {
    let arr = [];
    for (let i = 2; i <= n; i++) {
        arr.push(i);
    }

    for (let i = 2; i < n; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % i === 0 && arr[j] !== i) {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k] === arr[j]) {
                        arr[k] = null;
                    }
                }
            }

        }
    }
    return arr;
}