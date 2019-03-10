function fib(n) {
    let result, a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}

function fibBinet(n) {
    let fi = (1 + Math.sqrt(5)) / 2;
    return Math.pow(fi, n) / Math.sqrt(5)
}

console.log(fibBinet(77));
console.log(fib(77));
