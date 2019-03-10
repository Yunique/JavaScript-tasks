function randomInteger(min, max) {
    return ~~(Math.random() * (max-min+1) + min);
}

for (let i = 0; i<10; i++) {
    console.log(randomInteger(1, 3))
}

