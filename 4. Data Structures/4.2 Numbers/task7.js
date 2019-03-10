function randomFromMinToMax(min, max) {
    return ~~(Math.random() * (max - min) + min)
}

console.log(randomFromMinToMax(0, 100));
console.log(randomFromMinToMax(5, 10));
console.log(randomFromMinToMax(16, 20));
console.log(randomFromMinToMax(1, 2));