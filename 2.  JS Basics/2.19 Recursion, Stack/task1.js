function sumTo(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i
    }
    return result;
}

console.log(sumTo(100));

function sumToR(n) {
    let result = 1;
    if (n !== 1) {
      result =  n + sumToR(n - 1)
    }
    return result;
}

console.log(sumToR(100));


function sumToByProgression(n) {
    return (n*n+n)/2
}

console.log(sumToByProgression(100));
