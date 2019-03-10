function countFactorial(n) {
    return  n ? n * countFactorial(n-1) : 1;
}

console.log(countFactorial(0));