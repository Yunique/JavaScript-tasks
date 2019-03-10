function pow(x, n) {
    let counter = x;
    for (let i = 1; i < n; i++) {
        counter *= x;
    }
    return counter;
}


console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
console.log(pow(2, 7));