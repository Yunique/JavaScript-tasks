outer:
    for (let i = 2; i <= 10; i++) {
        for (let n = 2; n <= Math.sqrt(i); n++) {
            if (i % n === 0) continue outer;
        }
        console.log(i)
    }