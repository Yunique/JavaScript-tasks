function fib(n) {
    let result, a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}


console.log(fib(3));
console.log(fib(7));
console.log(fib(77));
